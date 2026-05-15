# Fight Night — UFC Fight Card App

A UFC-style fight card website with live fighter images fetched via SerpApi.

## Local Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create your `.env` file** in the project root:
   ```
   SERPAPI_KEY=your_key_here
   ```
   Get a free key at [serpapi.com](https://serpapi.com).

3. **Start the server**
   ```bash
   node server.js
   ```

4. Open `http://localhost:3001` in your browser.

## ⚠️ Security — API Key Rules

- **NEVER commit `.env` to git.** It is listed in `.gitignore` for this reason.
- **NEVER hardcode your `SERPAPI_KEY`** in any `.js`, `.json`, or other file.
- The key is only read by `server.js` at runtime via `process.env.SERPAPI_KEY`.
- The frontend (`script.js`) never touches the key — it only calls your own server routes (`/fighter-image`, `/health`).

## Deploying to Render

1. Push this repo to GitHub (`.env` is gitignored and will not be included).
2. Create a new **Web Service** on [render.com](https://render.com) pointing to your repo.
3. Set the following environment variable in the Render dashboard under **Environment**:
   ```
   SERPAPI_KEY = your_key_here
   ```
   **Do not set it in any code file — Render injects it at runtime.**
4. Set the start command to: `node server.js`

## Routes

| Route | Description |
|-------|-------------|
| `GET /fighter-image?name=Arnold+Allen` | Returns a fighter photo URL via SerpApi |
| `GET /health` | Returns `{status, serpapi_key_set}` — never the key itself |
| `GET /test-key` | Returns `{found: true/false}` — never the key itself |
| `GET /ufc-stats?name=Arnold+Allen` | Proxies UFCStats.com fighter stats |
