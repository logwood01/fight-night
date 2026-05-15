/*
  server.js — Fighter Image API
  --------------------------------
  Fetches UFC fighter images via SerpApi Google Images.
  Run with: node server.js
  Requires: .env file with SERPAPI_KEY=your_key_here
*/

require('dotenv').config();
console.log(`[startup] SERPAPI_KEY ${process.env.SERPAPI_KEY ? 'FOUND ✅' : 'NOT FOUND ❌'}`);
const express = require('express');
const cors    = require('cors');
const fetch   = (...args) => import('node-fetch').then(({ default: f }) => f(...args));

const app  = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Serve your frontend files from the same folder
app.use(express.static(__dirname));

app.get('/test-key', (req, res) => {
  const key = process.env.SERPAPI_KEY;
  if (!key) {
    return res.json({ found: false, preview: null });
  }
  res.json({ found: true, preview: key.substring(0, 5) });
});

const PREFERRED_DOMAINS = [
  'ufc.com', 'espn.com', 'tapology.com', 'sherdog.com',
  'mmafighting.com', 'bloodyelbow.com', 'mmamania.com', 'mmajunkie.com', 'ufc.tv',
];

const PLACEHOLDER_KEYWORDS = [
  'silhouette', 'placeholder', 'default', 'blank', 'outline',
  'shadow', 'no-image', 'no_image', 'unknown', 'generic',
];

// In-memory cache: name (lowercase) -> imageUrl string or null
const imageCache = new Map();

// Per-fighter query overrides keyed by lowercase name
const FIGHTER_QUERIES = {
  'doo ho choi': [
    'Doo Ho Choi UFC Korean Superboy fighter',
    '최두호 UFC fighter',
    'Doo Ho Choi MMA sherdog',
    'Dooho Choi fighter photo',
  ],
  'juan diaz': [
    'Juan Diaz MMA fighter Peru UFC',
    'Juan Diaz MMA tapology fighter',
    'Juan Diaz MMA fighter photo',
    'Juan Diaz fighter MMA Peru',
  ],
  'nikolay veretennikov': [
    'Nikolay Veretennikov UFC welterweight fighter',
    'Veretennikov MMA fighter Kazakhstan',
    'Nikolay Veretennikov tapology MMA',
    'Veretennikov MMA fighter photo',
  ],
  'khaos williams': [
    'Khaos Williams UFC welterweight fighter',
    'Khaos Williams MMA fighter photo',
    'Khaos Williams UFC fighter official',
    'Khaos Williams tapology fighter',
  ],
};

function isPlaceholder(url) {
  if (!url) return true;
  const lower = url.toLowerCase();
  return PLACEHOLDER_KEYWORDS.some(kw => lower.includes(kw));
}

function isTooSmall(img) {
  // original_width / original_height come back from SerpApi when available
  if (img.original_width && img.original_height) {
    return img.original_width < 50 || img.original_height < 50;
  }
  return false;
}

function isUsable(url, img) {
  return url && !isPlaceholder(url) && !isTooSmall(img);
}

function domainRank(url) {
  for (let i = 0; i < PREFERRED_DOMAINS.length; i++) {
    if (url.includes(PREFERRED_DOMAINS[i])) return i;
  }
  return PREFERRED_DOMAINS.length; // fallback rank — lower is better
}

function pickBestImage(images) {
  // Build a filtered list: prefer original, accept thumbnail, reject placeholders/tiny
  const candidates = [];
  for (const img of images) {
    const url = img.original || img.thumbnail;
    if (isUsable(url, img)) {
      candidates.push({ url, size: img.original ? 'original' : 'thumbnail', img });
    }
  }
  if (candidates.length === 0) return null;

  // Sort by domain preference, then by full-size over thumbnail
  candidates.sort((a, b) => {
    const rankA = domainRank(a.url);
    const rankB = domainRank(b.url);
    if (rankA !== rankB) return rankA - rankB;
    if (a.size === 'original' && b.size !== 'original') return -1;
    if (b.size === 'original' && a.size !== 'original') return 1;
    return 0;
  });

  const best = candidates[0];
  const domain = PREFERRED_DOMAINS.find(d => best.url.includes(d)) ||
    (() => { try { return new URL(best.url).hostname; } catch { return 'unknown'; } })();
  return { url: best.url, source: domain, size: best.size };
}

/*
  GET /fighter-image?name=Arnold+Allen
  Returns: { imageUrl: "https://..." } or { imageUrl: null }
*/
app.get('/fighter-image', async (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({ error: 'name query param required' });
  }

  if (!process.env.SERPAPI_KEY) {
    return res.status(500).json({ error: 'SERPAPI_KEY not set in .env file' });
  }

  const cacheKey = name.toLowerCase();
  if (imageCache.has(cacheKey)) {
    const cached = imageCache.get(cacheKey);
    console.log(`[cache] "${name}" → ${cached ? cached.substring(0, 80) : 'null'}`);
    return res.json({ imageUrl: cached });
  }

  const queries = FIGHTER_QUERIES[cacheKey] || [
    `UFC ${name} fighter official`,
    `${name} UFC MMA fighter photo`,
    `${name} MMA fighter tapology`,
    `${name} sherdog MMA`,
    `${name} MMA fight`,
    `${name} fighter`,
  ];

  try {
    for (const q of queries) {
      const apiUrl   = `https://serpapi.com/search.json?engine=google_images&q=${encodeURIComponent(q)}&num=10&api_key=${process.env.SERPAPI_KEY}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`SerpApi returned ${response.status}`);
      }

      const images = (await response.json()).images_results || [];
      const best   = pickBestImage(images);

      if (best) {
        console.log(`✅ "${name}" | query: "${q}" | source: ${best.source} | size: ${best.size}`);
        console.log(`   URL: ${best.url.substring(0, 100)}`);
        imageCache.set(cacheKey, best.url);
        return res.json({ imageUrl: best.url });
      }

      console.log(`🔄 "${name}" | no usable image from: "${q}"`);
    }

    console.log(`❌ "${name}" | no image found after all ${queries.length} queries`);
    imageCache.set(cacheKey, null);
    res.json({ imageUrl: null });

  } catch (err) {
    console.error(`❌ Error fetching image for "${name}":`, err.message);
    res.status(500).json({ imageUrl: null, error: err.message });
  }
});

// UFC Stats proxy — scrapes ufcstats.com server-side to avoid CORS
app.get('/ufc-stats', async (req, res) => {
  const name = req.query.name;
  if (!name) return res.status(400).json({ error: 'name required' });

  const parts = name.trim().split(/\s+/);
  const first = parts[0] || '';
  const last  = parts.slice(1).join(' ') || '';

  try {
    const searchUrl = `http://www.ufcstats.com/statistics/fighters/search?action=search&SearchFirstName=${encodeURIComponent(first)}&SearchLastName=${encodeURIComponent(last)}`;
    const searchRes = await fetch(searchUrl, { signal: AbortSignal.timeout(6000) });
    if (!searchRes.ok) throw new Error(`search ${searchRes.status}`);
    const searchHtml = await searchRes.text();

    const linkMatch = searchHtml.match(/href="(http:\/\/www\.ufcstats\.com\/fighter-details\/[^"]+)"/);
    if (!linkMatch) return res.json(null);

    const detailRes = await fetch(linkMatch[1], { signal: AbortSignal.timeout(6000) });
    if (!detailRes.ok) throw new Error(`detail ${detailRes.status}`);
    const html = await detailRes.text();

    const extract = (label) => {
      const re = new RegExp(label + '[^<]*<\\/i>\\s*([\\d.]+)', 'i');
      return html.match(re)?.[1] ?? '--';
    };
    const extractPct = (label) => {
      const re = new RegExp(label + '[^<]*<\\/i>\\s*([\\d.]+%)', 'i');
      return html.match(re)?.[1] ?? '--';
    };

    res.json({
      slpm:   extract('SLpM:'),
      stracc: extractPct('Str\\. Acc\\.'),
      sapm:   extract('SApM:'),
      strdef: extractPct('Str\\. Def\\.'),
      tdavg:  extract('TD Avg\\.'),
      tdacc:  extractPct('TD Acc\\.'),
      tddef:  extractPct('TD Def\\.'),
      subavg: extract('Sub\\. Avg\\.'),
    });
  } catch (err) {
    console.error(`[ufc-stats] ${name}:`, err.message);
    res.json(null);
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'running',
    serpapi_key_set: !!process.env.SERPAPI_KEY,
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`\n🥊 Fighter Image Server running at http://localhost:${PORT}`);
  console.log(`   Frontend: http://localhost:${PORT}/index.html`);
  console.log(`   API test: http://localhost:${PORT}/fighter-image?name=Arnold+Allen`);
  console.log(`   Health:   http://localhost:${PORT}/health`);
  if (!process.env.SERPAPI_KEY) {
    console.warn('\n⚠️  WARNING: SERPAPI_KEY not found in .env file!');
    console.warn('   Create a .env file with: SERPAPI_KEY=your_key_here');
    console.warn('   Get a free key at: https://serpapi.com\n');
  }
});
