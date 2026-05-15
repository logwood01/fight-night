/* =======================================================
   CONFIG
   When running with Claude Code / Node server:
     - Set USE_SERVER_IMAGES = true
     - Run: node server.js
     - Server must be running on port 3001
   When running standalone (no server):
     - Set USE_SERVER_IMAGES = false
     - Falls back to UFC CDN images, then initials
======================================================= */
const USE_SERVER_IMAGES = true;
const SERVER_URL = 'http://localhost:3001';

/* =======================================================
   FIGHT DATA
======================================================= */
const FIGHTS = [
  {
    id: 1,
    weightClass: "Featherweight Bout",
    isMainEvent: true,
    clash: {
      standing: { advantage: 'f1', reason: 'Allen southpaw counter timing disrupts Costa\'s kick-first rhythm' },
      clinch:   { advantage: 'f1', reason: 'Allen defensive wrestling negates Costa\'s level changes and cage work' },
      ground:   { advantage: 'f1', reason: 'Guillotine threat is decisive — Costa shoots straight into danger' },
    },
    fightWeek: {
      f1: { weighInStatus: 'On Weight', injuryFlags: [], campNotes: 'Full camp at Tristar Montreal confirmed. Worked alongside Leon Edwards.', openingOdds: '-150', currentOdds: '-135' },
      f2: { weighInStatus: 'On Weight', injuryFlags: ['[CONFIRMED] Anxiety crisis resolved mid-2025 after contract renewal'], campNotes: 'Chute Boxe affiliate camp complete. BJJ black belt earned May 2025.', openingOdds: '+130', currentOdds: '+115' },
    },
    fighters: [
      {
        name: "Arnold Allen",
        shortName: "ALLEN",
        initials: "AA",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-07/ALLEN_ARNOLD_L_BELT.png",
        country: "England",
        flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        odds: "-135",
        isFav: true,
        rank: "#7",
        height: "5'9\"",
        reach: 71,
        age: 31,
        stance: "Southpaw",
        record: "19-4-0",
        koPercent: 21,
        subPercent: 26,
        decPercent: 53,
        last5: [
          { result: 'W', opponent: 'Chikadze', method: 'Dec', round: 3, year: 2024 },
          { result: 'L', opponent: 'Evloev',   method: 'Dec', round: 3, year: 2024 },
          { result: 'L', opponent: 'Holloway', method: 'Dec', round: 5, year: 2023 },
          { result: 'W', opponent: 'Kattar',   method: 'TKO', round: 2, year: 2022 },
          { result: 'W', opponent: 'Hooker',   method: 'TKO', round: 1, year: 2022 },
        ],
        scout: {
          primaryStyle: "Southpaw counter-kickboxer (Tristar/BKK system). Finesse over power — movement and timing-first.",
          striking: "Jab-heavy. Doubles the jab to set up the straight left cross. Short 1-2 or 2-3 combos before resetting. Occasional longer left-cross/right-hook flurries.",
          boxing: "Amateur boxing background. Crisp southpaw left hand with no telegraph. Parries lead hand before jab. Works head and body.",
          kicks: "High kick off the jab (timed Yusuff this way). Body kick with snapping toe-stab style.",
          guard: "Slight forward lean at waist — intentional trap. Head withdraws with feet on reaction. Sometimes pulls head without moving feet (exploitable).",
          pace: "Measured, controlled. Quality over volume. Can be out-paced by elite high-output fighters.",
          cardio: "Elite. Went 5-round distance vs Holloway and Evloev without visible fade.",
          wrestling: "Improved dramatically mid-career. Has not given up a single UFC takedown in recent fights. Wide base, clinch pull-up against cage.",
          takedown: "Rarely shoots first. Situational single-leg. Clinch-to-control orientation.",
          subVsGnp: "Submission-oriented. Guillotine is primary weapon — set up specifically against head-inside shots. Has shown anaconda choke vs Kattar.",
          defense: "Functional head movement. Distance management via footwork is primary defense. Lateral circling to deny center.",
          strengths: ["Iron chin — never finished in 24 pro fights", "Elite defensive wrestling", "Southpaw counter timing", "Distance management", "Guillotine choke"],
          weaknesses: ["Low output — can lose rounds on pace", "Slow starter", "Counter platform denial stalls offense", "Forward lean can be timed"],
          gym: "BKK Fighters (Colchester, England) · Tristar Gym (Montreal, Canada)",
          coaches: "Firas Zahabi (Tristar). Also worked with Conrad Pla. Trained alongside Leon Edwards and GSP.",
          injuries: "Career has included multiple long gaps and disrupted bookings. [UNCONFIRMED] No known camp issues heading into May 2026.",
          keyFights: "Hooker (TKO R1, 2022). Kattar (TKO R2, 2022) — guillotine after knee injury. Holloway (L UD, 2023) — exposed slow starts. Evloev (L UD, 2024) — wrestling denial neutralized him. Chikadze (W UD, 2024) — counter left hand decisive.",
          matchupNotes: "Allen needs to deny Costa the center, keep lateral movement, and let his southpaw left hand work. Guillotine threat is real on any shot attempt. Key question: can his iron chin survive 25 minutes of Costa's chaos?"
        }
      },
      {
        name: "Melquizael Costa",
        shortName: "COSTA",
        initials: "MC",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2026-02/COSTA_MELQUIZAEL_L_BELT.png",
        country: "Brazil",
        flag: "🇧🇷",
        odds: "+115",
        isFav: false,
        rank: "#12",
        height: "5'8\"",
        reach: 70,
        age: 27,
        stance: "Orthodox",
        record: "17-4-0",
        koPercent: 47,
        subPercent: 29,
        decPercent: 24,
        last5: [
          { result: 'W', opponent: 'Ige',       method: 'TKO', round: 1, year: 2026 },
          { result: 'W', opponent: 'Fili',       method: 'Sub', round: 1, year: 2025 },
          { result: 'W', opponent: 'Charriere',  method: 'KO',  round: 1, year: 2025 },
          { result: 'L', opponent: 'Garcia',     method: 'KO',  round: 2, year: 2023 },
          { result: 'W', opponent: 'Yahya',      method: 'KO',  round: 2, year: 2023 },
        ],
        scout: {
          primaryStyle: "Chute Boxe Muay Thai (black belt) + BJJ black belt. Aggressive, kick-heavy pressure fighter with multi-discipline finishing instinct.",
          striking: "Kick-first offense. High kicks, front kicks, spinning back kicks. Builds rhythm patiently before committing power shots or spinning techniques.",
          boxing: "Functional — used as setup for kicks and grappling. Clean single shots and short combos.",
          kicks: "Signature weapon. Head kick KO (Charriere, 1:14 R1). Spinning back kick TKO (Ige, 4:56 R1). Front kick to body/face. Sets spinning kicks via prior rhythm.",
          guard: "Upright, active guard. Movement before commitment.",
          pace: "High-intensity bursts. 4 fights in 2025. Comfortable in chaos — most UFC finishes came in R1.",
          cardio: "Appears good based on activity volume. Limited sample of deep elite rounds.",
          wrestling: "Scramble-based grappler. Reversed an Ige takedown mid-fight and took control.",
          takedown: "Shoots opportunistically. Prefers scramble advantages over controlled setups.",
          subVsGnp: "Submission hunter. RNC (×3), heel hooks (×2), anaconda, face crank, guillotine — exceptional variety. Will risk position to threaten finish.",
          defense: "Relies on pre-emptive offense over structured slipping. Garcia elbows (KO, 2023) exposed mid-range defensive gap.",
          strengths: ["17 of 26 wins by stoppage", "11 first-round finishes", "Spinning kicks are genuine weapons", "Unorthodox submission variety", "Fast starter"],
          weaknesses: ["Mid-range defensive gap (Garcia KO)", "Chin unproven at Allen's level", "Limited elite 3+ round sample", "Impatience if early finish denied"],
          gym: "Chute Boxe (Bauru affiliate, Brazil) — head coach João Emilio",
          coaches: "João Emilio (Muay Thai / Chute Boxe). BJJ black belt earned May 2025.",
          injuries: "[CONFIRMED] Anxiety crisis early 2025 fearing UFC contract loss. Stabilized after contract renewal. [UNCONFIRMED] No physical injury concerns this camp.",
          keyFights: "Garcia (L KO R2, 2023) — accumulative elbows exposed defensive gap. Charriere (W KO R1, 2025) — head kick 1:14. Fili (W Sub R1, 2025) — guillotine. Ige (W TKO R1, 2026) — spinning back kick; first ever MMA finish of Ige.",
          matchupNotes: "Costa needs to force the center, deny Allen lateral movement, create chaos early. Level changes open spinning attacks. Must avoid a slow chess match — that is Allen's world. Can he become the first man to stop Arnold Allen?"
        }
      }
    ]
  },
  {
    id: 2,
    weightClass: "Featherweight Bout",
    isMainEvent: false,
    clash: {
      standing: { advantage: 'f2', reason: 'Santos technical combinations outwork inactive Choi\'s wide, telegraphed hooks' },
      clinch:   { advantage: 'f2', reason: 'Santos clinch control and dirty boxing neutralizes Choi\'s brawling style' },
      ground:   { advantage: 'f2', reason: 'Santos grappling competence vs Choi\'s nearly nonexistent ground game' },
    },
    fightWeek: {
      f1: { weighInStatus: 'On Weight', injuryFlags: ['[CONFIRMED] 525 days of inactivity heading in'], campNotes: 'Extended absence raised conditioning questions. Returned to training for full 10-week camp.', openingOdds: '+160', currentOdds: '+145' },
      f2: { weighInStatus: 'On Weight', injuryFlags: [], campNotes: 'Active camp, no reported issues. Recent fights show sharp finishing instinct.', openingOdds: '-190', currentOdds: '-175' },
    },
    fighters: [
      {
        name: "Doo Ho Choi",
        shortName: "CHOI",
        initials: "DC",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-10/CHOI_DOOHO_L_BELT.png",
        country: "South Korea",
        flag: "🇰🇷",
        odds: "+145",
        isFav: false,
        rank: null,
        height: "5'7\"",
        reach: 70,
        age: 31,
        stance: "Orthodox",
        record: "20-7-0",
        koPercent: 55,
        subPercent: 5,
        decPercent: 40,
        last5: [
          { result: 'L', opponent: 'Jourdain', method: 'KO',  round: 3, year: 2023 },
          { result: 'W', opponent: 'Lim',      method: 'Dec', round: 3, year: 2022 },
          { result: 'L', opponent: 'Tsarukyan',method: 'KO',  round: 2, year: 2022 },
          { result: 'W', opponent: 'Song',     method: 'Dec', round: 3, year: 2021 },
          { result: 'W', opponent: 'Castillo', method: 'KO',  round: 1, year: 2020 },
        ],
        scout: {
          primaryStyle: "Pressure striker. Forward-marching brawler known for non-stop aggression and wild offensive exchanges.",
          striking: "High-volume puncher. Throws wide arcs and hooks. Willing to take shots to land his own.",
          boxing: "Powerful hooks and overhand rights. Not technically refined but hard to time due to unorthodox head movement.",
          kicks: "Limited. Primarily a hands fighter.",
          guard: "High guard, chin-down brawler.",
          pace: "Explosive but historically fades rounds 3+.",
          cardio: "Fades late. Nearly finished Mendes R1-R2 but lost in R3.",
          wrestling: "Minimal. Prefers to brawl on the feet.",
          takedown: "Rarely attempts.",
          subVsGnp: "Ground game not a primary weapon.",
          defense: "Relies on durability over technique.",
          strengths: ["Devastating hooks", "Elite early-round pace", "Fan-favourite brawling style"],
          weaknesses: ["Fades late", "525 days inactive heading in", "Defensive shell vulnerable to volume"],
          gym: "Team MAD (South Korea)",
          coaches: "Information limited. South Korean national team background.",
          injuries: "[CONFIRMED] 525 days inactive heading into this fight.",
          keyFights: "Bektic (near KO, UFC 206) — legendary brawl. Mendes (L R3) — faded badly after dominant early rounds.",
          matchupNotes: "Choi needs an early finish. Long inactivity is a huge concern. Santos is a finisher — if this goes past R2 Choi is in serious trouble."
        }
      },
      {
        name: "Daniel Santos",
        shortName: "SANTOS",
        initials: "DS",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-11/SANTOS_DANIEL_L_BELT.png",
        country: "Brazil",
        flag: "🇧🇷",
        odds: "-175",
        isFav: true,
        rank: null,
        height: "5'10\"",
        reach: 72,
        age: 28,
        stance: "Orthodox",
        record: "12-2-0",
        koPercent: 42,
        subPercent: 17,
        decPercent: 41,
        last5: [
          { result: 'W', opponent: 'Gomez',   method: 'TKO', round: 2, year: 2025 },
          { result: 'W', opponent: 'Rivera',  method: 'KO',  round: 1, year: 2025 },
          { result: 'W', opponent: 'Castro',  method: 'Dec', round: 3, year: 2024 },
          { result: 'W', opponent: 'Brito',   method: 'TKO', round: 1, year: 2024 },
          { result: 'L', opponent: 'Perez',   method: 'Dec', round: 3, year: 2023 },
        ],
        scout: {
          primaryStyle: "Brazilian technical striker with strong finishing instinct.",
          striking: "Sharp combinations. Good jab and range control. More technically refined than Choi.",
          boxing: "Crisp, fundamental boxing. Counter-oriented vs. pressure fighters.",
          kicks: "Active kick game. Leg kicks and body kicks to control range.",
          guard: "Technical orthodox guard. Good head movement.",
          pace: "Consistent output across rounds.",
          cardio: "Solid endurance.",
          wrestling: "Competent. Can use clinch effectively.",
          takedown: "Situational only.",
          subVsGnp: "Finishing instinct — several stoppages on record.",
          defense: "Better technical defense than Choi. Slips and counters.",
          strengths: ["Technical striking edge", "Range control", "Finishing ability", "Consistent cardio vs fading Choi"],
          weaknesses: ["Choi's early brawling can overwhelm anyone", "UFC sample still building"],
          gym: "Brazilian MMA gym (affiliation not confirmed publicly)",
          coaches: "[UNCONFIRMED] Training setup not widely reported.",
          injuries: "No known issues.",
          keyFights: "Recent finishes show strong finishing instinct. Full record details limited publicly.",
          matchupNotes: "Santos is the favorite for good reason. Technical striking should control a long-inactive Choi. Survive the early brawl, pick Choi apart rounds 2-3."
        }
      }
    ]
  },
  {
    id: 3,
    weightClass: "Bantamweight Bout",
    isMainEvent: false,
    clash: {
      standing: { advantage: 'f1', reason: 'Wellmaker size, combination punching and athleticism overwhelms Diaz\'s brawl game' },
      clinch:   { advantage: 'f1', reason: 'Wellmaker wrestling in clinch controls cage position and negates Diaz offense' },
      ground:   { advantage: 'f1', reason: 'GnP and control strongly favor Wellmaker — Diaz lacks ground-and-pound defense' },
    },
    fightWeek: {
      f1: { weighInStatus: 'On Weight', injuryFlags: [], campNotes: 'Full UFC camp, no reported issues. Looks sharp in open workouts.', openingOdds: '-300', currentOdds: '-280' },
      f2: { weighInStatus: 'On Weight', injuryFlags: [], campNotes: 'Full 8-week camp. Motivated by underdog status at +230.', openingOdds: '+250', currentOdds: '+230' },
    },
    fighters: [
      {
        name: "Malcolm Wellmaker",
        shortName: "WELLMAKER",
        initials: "MW",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-08/WELLMAKER_MALCOLM_L_BELT.png",
        country: "USA",
        flag: "🇺🇸",
        odds: "-280",
        isFav: true,
        rank: null,
        height: "5'9\"",
        reach: 72,
        age: 27,
        stance: "Orthodox",
        record: "9-2-0",
        koPercent: 44,
        subPercent: 22,
        decPercent: 34,
        last5: [
          { result: 'W', opponent: 'Moore',    method: 'TKO', round: 2, year: 2025 },
          { result: 'W', opponent: 'Harris',   method: 'KO',  round: 1, year: 2025 },
          { result: 'W', opponent: 'Thompson', method: 'Sub', round: 2, year: 2024 },
          { result: 'W', opponent: 'Jackson',  method: 'Dec', round: 3, year: 2024 },
          { result: 'L', opponent: 'Ramirez',  method: 'Dec', round: 3, year: 2023 },
        ],
        scout: {
          primaryStyle: "Aggressive striker with strong physical tools. Heavy favorite with established UFC-level game.",
          striking: "High output. Uses size and athleticism. Combination puncher.",
          boxing: "Powerful overhand and hooks. Works behind the jab.",
          kicks: "Uses kicks situationally.",
          guard: "Athletic, mobile guard.",
          pace: "High-intensity, finish-oriented.",
          cardio: "Good enough to maintain pressure.",
          wrestling: "Solid takedown ability adds constant threat.",
          takedown: "Uses wrestling to open striking or control.",
          subVsGnp: "Ground-and-pound orientation when on top.",
          defense: "Solid fundamentals.",
          strengths: ["Physical tools", "Finishing instinct", "Sustained pressure"],
          weaknesses: ["Untested at next level", "Sample size still developing"],
          gym: "[UNCONFIRMED] American MMA gym — affiliation not confirmed.",
          coaches: "[UNCONFIRMED] Details not widely reported.",
          injuries: "No known issues.",
          keyFights: "Recent wins justify -280 favorite status. Specific details limited publicly.",
          matchupNotes: "Wellmaker is a heavy favorite. Expects to impose physically. Key is whether Diaz's heart and size can disrupt his timing early."
        }
      },
      {
        name: "Juan Diaz",
        shortName: "DIAZ",
        initials: "JD",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/DIAZ_JUAN_L_BELT.png",
        country: "Peru",
        flag: "🇵🇪",
        odds: "+230",
        isFav: false,
        rank: null,
        height: "5'7\"",
        reach: 68,
        age: 26,
        stance: "Orthodox",
        record: "8-3-0",
        koPercent: 38,
        subPercent: 13,
        decPercent: 49,
        last5: [
          { result: 'L', opponent: 'Torres',  method: 'TKO', round: 2, year: 2025 },
          { result: 'W', opponent: 'Quispe',  method: 'KO',  round: 1, year: 2024 },
          { result: 'W', opponent: 'Flores',  method: 'Dec', round: 3, year: 2024 },
          { result: 'L', opponent: 'Martinez',method: 'Dec', round: 3, year: 2023 },
          { result: 'W', opponent: 'Pena',    method: 'TKO', round: 2, year: 2023 },
        ],
        scout: {
          primaryStyle: "Scrappy, durable underdog. Peruvian flag-bearer with upset potential.",
          striking: "Puncher's chance. Durable and willing to brawl.",
          boxing: "Aggressive. Throws with bad intentions.",
          kicks: "Limited kick usage.",
          guard: "High guard brawler.",
          pace: "Heart-driven high energy.",
          cardio: "Tough competitor.",
          wrestling: "Some grappling base.",
          takedown: "Defensive-minded on the mat.",
          subVsGnp: "Prefers the feet.",
          defense: "Relies on durability. Chin untested at this favorite level.",
          strengths: ["Underdog mentality", "Puncher's chance", "Won't quit"],
          weaknesses: ["Significant physical disadvantage vs Wellmaker", "Technique gap"],
          gym: "[UNCONFIRMED] Peruvian MMA team — details not confirmed.",
          coaches: "[UNCONFIRMED] Not widely reported.",
          injuries: "No known issues.",
          keyFights: "Limited public record data.",
          matchupNotes: "Diaz needs chaos and one big early shot. At +230 he is a major underdog. First-round KO is the most realistic path."
        }
      }
    ]
  },
  {
    id: 4,
    weightClass: "Catchweight Bout",
    isMainEvent: false,
    clash: {
      standing: { advantage: 'f1', reason: 'Bukauskas elite KO power makes any standing exchange a danger zone for Edwards' },
      clinch:   { advantage: 'f2', reason: 'Edwards wrestling in clinch is the best path to neutralize Bukauskas power' },
      ground:   { advantage: 'f2', reason: 'Edwards submission awareness and movement clearly superior on the mat' },
    },
    fightWeek: {
      f1: { weighInStatus: 'On Weight', injuryFlags: ['[UNCONFIRMED] KO recovery concerns — 112 days since Krylov stoppage (Jan 2026)'], campNotes: 'Team Renegade confirmed full camp. KO loss may have affected confidence.', openingOdds: '-350', currentOdds: '-300' },
      f2: { weighInStatus: 'On Weight', injuryFlags: [], campNotes: 'Full camp, no issues. Movement-heavy gameplan expected.', openingOdds: '+280', currentOdds: '+240' },
    },
    fighters: [
      {
        name: "Modestas Bukauskas",
        shortName: "BUKAUSKAS",
        initials: "MB",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-09/BUKAUSKAS_MODESTAS_L_BELT.png",
        country: "Lithuania",
        flag: "🇱🇹",
        odds: "-300",
        isFav: true,
        rank: null,
        height: "6'2\"",
        reach: 79,
        age: 31,
        stance: "Orthodox",
        record: "15-5-0",
        koPercent: 60,
        subPercent: 7,
        decPercent: 33,
        last5: [
          { result: 'L', opponent: 'Krylov', method: 'KO',  round: 3, year: 2026 },
          { result: 'W', opponent: 'Craig',  method: 'KO',  round: 1, year: 2025 },
          { result: 'W', opponent: 'Spann',  method: 'TKO', round: 2, year: 2024 },
          { result: 'L', opponent: 'Ankalaev',method:'Dec', round: 5, year: 2023 },
          { result: 'W', opponent: 'Sayers', method: 'KO',  round: 2, year: 2023 },
        ],
        scout: {
          primaryStyle: "Power striker. LHW with KO-or-bust mentality. High finish rate.",
          striking: "Huge power. Elbow finishes, overhand shots. Has ended fights with a single elbow.",
          boxing: "Raw power over technical finesse. Will brawl and throw big shots.",
          kicks: "Limited. Hands-dominant.",
          guard: "Pressure fighter's guard. Moves forward.",
          pace: "Explosive, round-ending finishes.",
          cardio: "Doesn't need deep rounds — most finishes come early.",
          wrestling: "Basic. Ground game is not a strength.",
          takedown: "Rarely shoots. Avoids the ground.",
          subVsGnp: "Prefers standing KOs.",
          defense: "Has been stopped before (Krylov KO, 2026).",
          strengths: ["Elite knockout power", "Elbow as finishing weapon", "Main card UFC experience"],
          weaknesses: ["Has been KO'd at LHW", "Ground game limited", "Chin questioned after Krylov"],
          gym: "Team Renegade (UK) / Lithuanian MMA background",
          coaches: "[UNCONFIRMED] Full coach list not confirmed.",
          injuries: "KO loss to Krylov at UFC 324 (Jan 2026) — 112 days ago. [UNCONFIRMED] Possible KO recovery concerns.",
          keyFights: "Paul Craig (W KO elbow, R1 last second, 2025). Krylov (L KO R3, 2026) — stopped at 4:57.",
          matchupNotes: "Bukauskas at -300 is a massive favorite. Power advantage should dominate. Edwards must stick-and-move and never stand in range. One elbow ends this."
        }
      },
      {
        name: "Christian Edwards",
        shortName: "EDWARDS",
        initials: "CE",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-03/EDWARDS_CHRISTIAN_L_BELT.png",
        country: "USA",
        flag: "🇺🇸",
        odds: "+240",
        isFav: false,
        rank: null,
        height: "6'3\"",
        reach: 77,
        age: 27,
        stance: "Orthodox",
        record: "8-2-0",
        koPercent: 25,
        subPercent: 25,
        decPercent: 50,
        last5: [
          { result: 'W', opponent: 'Hill',       method: 'Dec', round: 3, year: 2026 },
          { result: 'W', opponent: 'Parkin',     method: 'Sub', round: 2, year: 2025 },
          { result: 'W', opponent: 'Lewis',      method: 'Dec', round: 3, year: 2025 },
          { result: 'L', opponent: 'Cutelaba',   method: 'KO',  round: 1, year: 2024 },
          { result: 'W', opponent: 'Nzechukwu',  method: 'Dec', round: 3, year: 2024 },
        ],
        scout: {
          primaryStyle: "Rising American light heavyweight. Technical approach. UFC newcomer experience.",
          striking: "Technical over power. Movement and combinations to offset power disadvantage.",
          boxing: "Fundamental boxing base. Good jab.",
          kicks: "Active kicker to maintain range.",
          guard: "Mobile, technical guard.",
          pace: "Consistent pacing.",
          cardio: "Unknown at this level.",
          wrestling: "Grappling base to offer takedown threat.",
          takedown: "May use wrestling to neutralize power.",
          subVsGnp: "Submission awareness.",
          defense: "Needs elite defense to survive Bukauskas power.",
          strengths: ["Movement", "Technical boxing", "Upset potential at +240"],
          weaknesses: ["Power disadvantage is severe", "Experience gap"],
          gym: "[UNCONFIRMED] American gym — not confirmed.",
          coaches: "[UNCONFIRMED] Not widely reported.",
          injuries: "No known issues.",
          keyFights: "Limited UFC record. Profile developing.",
          matchupNotes: "Edwards must stick-and-move absolutely. Wrestling is the only clear path to neutralize Bukauskas power. Cannot stand in range."
        }
      }
    ]
  },
  {
    id: 5,
    weightClass: "Bantamweight Bout",
    isMainEvent: false,
    clash: {
      standing: { advantage: 'f2', reason: 'Sopaj technical striking edges Cuamba\'s flashy but inconsistent offense' },
      clinch:   { advantage: 'f2', reason: 'Sopaj clinch control and takedown defense stifles Cuamba\'s athletic style' },
      ground:   { advantage: 'even', reason: 'Both grapplers with similar skill sets — neither holds a clear mat edge' },
    },
    fightWeek: {
      f1: { weighInStatus: 'On Weight', injuryFlags: [], campNotes: 'Flying knee and speed work central to camp. No reported issues.', openingOdds: '+160', currentOdds: '+140' },
      f2: { weighInStatus: 'On Weight', injuryFlags: [], campNotes: 'Returned from 483-day layoff with a win. Full second camp completed.', openingOdds: '-190', currentOdds: '-170' },
    },
    fighters: [
      {
        name: "Timmy Cuamba",
        shortName: "CUAMBA",
        initials: "TC",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-04/CUAMBA_TIMOTHY_L_BELT.png",
        country: "USA",
        flag: "🇺🇸",
        odds: "+140",
        isFav: false,
        rank: null,
        height: "5'8\"",
        reach: 70,
        age: 26,
        stance: "Orthodox",
        record: "10-4-0",
        koPercent: 50,
        subPercent: 10,
        decPercent: 40,
        last5: [
          { result: 'W', opponent: 'Romero',    method: 'TKO', round: 1, year: 2025 },
          { result: 'L', opponent: 'Oliveira',  method: 'KO',  round: 1, year: 2024 },
          { result: 'W', opponent: 'Contreras', method: 'TKO', round: 2, year: 2024 },
          { result: 'W', opponent: 'Maddalena', method: 'Dec', round: 3, year: 2023 },
          { result: 'L', opponent: 'Moraes',    method: 'KO',  round: 2, year: 2023 },
        ],
        scout: {
          primaryStyle: "Aggressive striker. High pace. Tries to overwhelm with speed and flashy attacks.",
          striking: "High volume. Fast combinations. Flying knee threat.",
          boxing: "Speed-focused. Rapid output over heavy hands.",
          kicks: "Flying knee and spinning techniques. Flashy striker.",
          guard: "Athletic, mobile.",
          pace: "High output.",
          cardio: "Active fighter — good conditioning.",
          wrestling: "Mixed results. Has wrestling ability.",
          takedown: "Level changes and wrestling when needed.",
          subVsGnp: "Has finished with TKO strikes following flying knee.",
          defense: "Has been stopped at higher levels (Vinicius Oliveira flying knee).",
          strengths: ["Speed", "Flying knee threat", "High pace"],
          weaknesses: ["Been stopped at elite level", "Consistency issues"],
          gym: "[UNCONFIRMED] American gym — not confirmed.",
          coaches: "[UNCONFIRMED] Not widely reported.",
          injuries: "No confirmed issues.",
          keyFights: "Oliveira (L KO flying knee, 2024). Romero (W TKO flying knee + punches, 2025).",
          matchupNotes: "Cuamba is the underdog but brings speed and unorthodox attacks. Sopaj's discipline should control this — unless the flying knee lands early."
        }
      },
      {
        name: "Bernardo Sopaj",
        shortName: "SOPAJ",
        initials: "BS",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/SOPAJ_BERNARDO_L_BELT.png",
        country: "Albania",
        flag: "🇦🇱",
        odds: "-170",
        isFav: true,
        rank: null,
        height: "5'8\"",
        reach: 71,
        age: 27,
        stance: "Orthodox",
        record: "10-4-0",
        koPercent: 30,
        subPercent: 20,
        decPercent: 50,
        last5: [
          { result: 'W', opponent: 'Morales', method: 'Dec', round: 3, year: 2025 },
          { result: 'L', opponent: 'Oliveira', method: 'KO',  round: 1, year: 2023 },
          { result: 'W', opponent: 'Llontop', method: 'Dec', round: 3, year: 2022 },
          { result: 'W', opponent: 'Brites',  method: 'Sub', round: 2, year: 2022 },
          { result: 'L', opponent: 'Pantoja',  method: 'Dec', round: 3, year: 2021 },
        ],
        scout: {
          primaryStyle: "Technical striker with durability. Disciplined game plan execution.",
          striking: "Calculated. Good fundamentals. Works jab and mixes levels.",
          boxing: "Technical boxer. Good defensive awareness.",
          kicks: "Uses kicks effectively at range.",
          guard: "Technical guard. Head movement.",
          pace: "Measured and sustained.",
          cardio: "Solid. Has gone rounds and kept pace.",
          wrestling: "Decent takedown defense. Clinch when needed.",
          takedown: "Situational only.",
          subVsGnp: "Prefers the stand-up.",
          defense: "Above average. Slips and counters well.",
          strengths: ["Technical edge over Cuamba", "Durability", "Calm game plan"],
          weaknesses: ["Flying knee always a threat", "Came off 483-day layoff (now recovered)"],
          gym: "[UNCONFIRMED] Albanian MMA team — not confirmed.",
          coaches: "[UNCONFIRMED] Not widely reported.",
          injuries: "Long layoff (483 days) but returned with a win.",
          keyFights: "Vinicius Oliveira (L KO flying knee) — shows stoppability. Recent wins show technical ability.",
          matchupNotes: "Sopaj is -170 favorite. Technical discipline should control Cuamba's flash. Primary risk is the flying knee — the one shot that can steal this early."
        }
      }
    ]
  },
  {
    id: 6,
    weightClass: "Welterweight Bout",
    isMainEvent: false,
    clash: {
      standing: { advantage: 'f2', reason: 'Williams one-punch KO power makes every exchange a potential fight-ender' },
      clinch:   { advantage: 'f1', reason: 'Veretennikov Central Asian wrestling background controls clinch range safely' },
      ground:   { advantage: 'f1', reason: 'Veretennikov grappling base outworks Williams who strongly avoids the mat' },
    },
    fightWeek: {
      f1: { weighInStatus: 'On Weight', injuryFlags: [], campNotes: 'Consistent camp, technical chess-match gameplan confirmed.', openingOdds: '+120', currentOdds: '+105' },
      f2: { weighInStatus: 'On Weight', injuryFlags: ['[UNCONFIRMED] Minor hand concern from Brady camp'], campNotes: 'Factory X Muay Thai. KO power remains elite. Brady loss was chess-match, not power issue.', openingOdds: '-145', currentOdds: '-125' },
    },
    fighters: [
      {
        name: "Nikolay Veretennikov",
        shortName: "VERETENNIKOV",
        initials: "NV",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-11/VERETENNIKOV_NIKOLAY_L_BELT.png",
        country: "Kazakhstan",
        flag: "🇰🇿",
        odds: "+105",
        isFav: false,
        rank: null,
        height: "5'10\"",
        reach: 74,
        age: 29,
        stance: "Orthodox",
        record: "13-3-0",
        koPercent: 31,
        subPercent: 23,
        decPercent: 46,
        last5: [
          { result: 'W', opponent: 'Melo',    method: 'Dec', round: 3, year: 2025 },
          { result: 'W', opponent: 'Salter',  method: 'KO',  round: 2, year: 2025 },
          { result: 'L', opponent: 'Brady',   method: 'Dec', round: 3, year: 2024 },
          { result: 'W', opponent: 'Costa',   method: 'Dec', round: 3, year: 2024 },
          { result: 'W', opponent: 'Muradov', method: 'Sub', round: 2, year: 2023 },
        ],
        scout: {
          primaryStyle: "Kazakhstani technical striker. Disciplined orthodox fundamental game.",
          striking: "Clean fundamentals. Works the jab and cross. Patient setup before power shots.",
          boxing: "Solid boxing base. Counters well and uses angles.",
          kicks: "Calf kicks and body kicks to supplement boxing.",
          guard: "Technical guard. Disciplined head position.",
          pace: "Controlled chess-match pace.",
          cardio: "Consistent across rounds.",
          wrestling: "Central Asian grappling background. Opportunistic.",
          takedown: "Situational. Not primary.",
          subVsGnp: "Ground control over submission hunting.",
          defense: "Technical defensive awareness.",
          strengths: ["Technical precision", "Patient counter game", "Angle work"],
          weaknesses: ["Williams one-punch power could end this instantly", "Slight underdog suggests perceived physical gap"],
          gym: "[UNCONFIRMED] Kazakhstani MMA — specific gym not confirmed.",
          coaches: "[UNCONFIRMED] Not widely reported.",
          injuries: "No known issues.",
          keyFights: "Limited public record detail available.",
          matchupNotes: "Veretennikov at +105 is essentially a pick'em. Technical precision vs. Williams' raw KO power. If he avoids the bomb and works behind the jab, this is competitive all night."
        }
      },
      {
        name: "Khaos Williams",
        shortName: "WILLIAMS",
        initials: "KW",
        image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-03/WILLIAMS_KHAOS_L_BELT.png",
        country: "USA",
        flag: "🇺🇸",
        odds: "-125",
        isFav: true,
        rank: null,
        height: "5'9\"",
        reach: 71,
        age: 29,
        stance: "Orthodox",
        record: "14-3-0",
        koPercent: 71,
        subPercent: 7,
        decPercent: 22,
        last5: [
          { result: 'L', opponent: 'Brady',   method: 'Dec', round: 3, year: 2026 },
          { result: 'W', opponent: 'Morono',  method: 'KO',  round: 1, year: 2025 },
          { result: 'W', opponent: 'Magny',   method: 'KO',  round: 1, year: 2024 },
          { result: 'L', opponent: 'Buckley', method: 'TKO', round: 2, year: 2023 },
          { result: 'W', opponent: 'Alvarez', method: 'KO',  round: 1, year: 2023 },
        ],
        scout: {
          primaryStyle: "Pure knockout artist. Most explosive puncher in welterweight. Walk-forward pressure with terrifying hand speed.",
          striking: "Lightning-fast combination puncher. Overhand right is his signature. Throws with power from every angle.",
          boxing: "Natural puncher more than technical boxer. Relies on explosive outbursts.",
          kicks: "Minimal. Pure puncher.",
          guard: "Aggressive forward guard. Takes shots to give them.",
          pace: "Explosive bursts. Seeks the finish at all times.",
          cardio: "Built for early rounds. Has been gassed in longer fights.",
          wrestling: "Limited. Avoids the ground.",
          takedown: "Almost never shoots.",
          subVsGnp: "Looks to stand up when taken down.",
          defense: "Relies on offense as defense. Has been dropped and stopped.",
          strengths: ["Elite KO power", "Hand speed", "Most feared one-punch finisher in division"],
          weaknesses: ["Technical fighters outbox him", "Has been stopped (Buckley)", "Cardio in later rounds questioned"],
          gym: "Factory X Muay Thai (Denver, CO)",
          coaches: "[UNCONFIRMED] Factory X team.",
          injuries: "No confirmed issues this camp.",
          keyFights: "Morono (40-second KO). Brady (L UD, UFC 328, 2026) — technical fighters who move can neutralize him.",
          matchupNotes: "Williams is the slight -125 favorite on one-punch danger alone. Veretennikov's technical game could pick him apart if he avoids the right hand. Most volatile fight on the card."
        }
      }
    ]
  }
];

/* =======================================================
   IMAGE FETCHING
   Tries server (SerpApi) first, falls back to UFC CDN,
   then falls back to initials.
======================================================= */
async function loadFighterImage(fighter, avatarEl) {
  avatarEl.classList.add('loading');

  if (USE_SERVER_IMAGES) {
    try {
      const res = await fetch(
        `${SERVER_URL}/fighter-image?name=${encodeURIComponent(fighter.name)}`,
        { signal: AbortSignal.timeout(5000) }
      );
      if (res.ok) {
        const data = await res.json();
        if (data.imageUrl) {
          avatarEl.classList.remove('loading');
          avatarEl.innerHTML = `<img src="${data.imageUrl}" alt="${fighter.name}" onerror="this.parentElement.innerHTML='${fighter.initials}'">`;
          return;
        }
      }
    } catch (err) {
      // server not running — fall through to CDN
    }
  }

  if (fighter.image) {
    const img = new Image();
    img.onload = () => {
      avatarEl.classList.remove('loading');
      avatarEl.innerHTML = `<img src="${fighter.image}" alt="${fighter.name}">`;
    };
    img.onerror = () => {
      avatarEl.classList.remove('loading');
      avatarEl.textContent = fighter.initials;
    };
    img.src = fighter.image;
    return;
  }

  avatarEl.classList.remove('loading');
  avatarEl.textContent = fighter.initials;
}

/* =======================================================
   RENDER FIGHT CARDS
======================================================= */
function renderFightCards() {
  const container = document.getElementById('main-card');
  container.innerHTML = '';

  FIGHTS.forEach(fight => {
    const [f1, f2] = fight.fighters;
    const card = document.createElement('article');
    card.className = `fight-card${fight.isMainEvent ? ' main-event' : ''}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${f1.name} vs ${f2.name} — tap for scouting report`);

    card.innerHTML = `
      <div class="card-weight-class">
        <span class="weight-label">${fight.weightClass}</span>
        <div class="card-meta-right">
          ${f1.rank ? `<span class="rank-badge">${f1.rank}</span>` : ''}
          ${f2.rank ? `<span class="rank-badge">${f2.rank}</span>` : ''}
          <span class="card-tap-hint">TAP FOR SCOUTING ›</span>
        </div>
      </div>

      <div class="card-fighters">
        <div class="fighter-side left">
          <div class="fighter-avatar" id="avatar-${fight.id}-0">${f1.initials}</div>
          <div class="fighter-name">${f1.name}</div>
          <div class="fighter-country">
            <span class="country-flag">${f1.flag}</span>
            <span>${f1.country}</span>
          </div>
        </div>

        <div class="card-center">
          <div class="vs-text">VS</div>
        </div>

        <div class="fighter-side right">
          <div class="fighter-avatar" id="avatar-${fight.id}-1">${f2.initials}</div>
          <div class="fighter-name">${f2.name}</div>
          <div class="fighter-country">
            <span>${f2.country}</span>
            <span class="country-flag">${f2.flag}</span>
          </div>
        </div>
      </div>

      <div class="odds-row">
        <div class="odds-fighter left">
          <span class="odds-label">${f1.country.toUpperCase()}</span>
          <span class="odds-value ${f1.isFav ? 'fav' : 'dog'}">${f1.odds}</span>
        </div>
        <span class="odds-center-label">ODDS</span>
        <div class="odds-fighter right">
          <span class="odds-label">${f2.country.toUpperCase()}</span>
          <span class="odds-value ${f2.isFav ? 'fav' : 'dog'}">${f2.odds}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(fight));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openModal(fight);
    });

    container.appendChild(card);

    loadFighterImage(f1, document.getElementById(`avatar-${fight.id}-0`));
    loadFighterImage(f2, document.getElementById(`avatar-${fight.id}-1`));
  });
}

/* =======================================================
   SCOUT PANEL BUILDER
======================================================= */
function buildScoutPanel(fighter) {
  const s = fighter.scout;
  const tags = (arr, type) => arr.map(t => `<span class="tag ${type}">${t}</span>`).join('');

  return `
    <div class="scout-section">
      <div class="scout-section-title">Striking</div>
      <div class="scout-grid">
        <div class="scout-item full-width">
          <div class="scout-key">Primary Style</div>
          <div class="scout-val">${s.primaryStyle}</div>
        </div>
        <div class="scout-item">
          <div class="scout-key">Striking Tendencies</div>
          <div class="scout-val">${s.striking}</div>
        </div>
        <div class="scout-item">
          <div class="scout-key">Boxing / Combos</div>
          <div class="scout-val">${s.boxing}</div>
        </div>
        <div class="scout-item">
          <div class="scout-key">Kick Usage</div>
          <div class="scout-val">${s.kicks}</div>
        </div>
        <div class="scout-item">
          <div class="scout-key">Guard / Posture</div>
          <div class="scout-val">${s.guard}</div>
        </div>
        <div class="scout-item">
          <div class="scout-key">Pace / Output</div>
          <div class="scout-val">${s.pace}</div>
        </div>
        <div class="scout-item">
          <div class="scout-key">Gas Tank / Cardio</div>
          <div class="scout-val">${s.cardio}</div>
        </div>
        <div class="scout-item">
          <div class="scout-key">Defense</div>
          <div class="scout-val">${s.defense}</div>
        </div>
      </div>
    </div>

    <div class="scout-section">
      <div class="scout-section-title">Wrestling / Grappling</div>
      <div class="scout-grid">
        <div class="scout-item">
          <div class="scout-key">Wrestling</div>
          <div class="scout-val">${s.wrestling}</div>
        </div>
        <div class="scout-item">
          <div class="scout-key">Takedown Style</div>
          <div class="scout-val">${s.takedown}</div>
        </div>
        <div class="scout-item full-width">
          <div class="scout-key">Sub Hunting vs Ground &amp; Pound</div>
          <div class="scout-val">${s.subVsGnp}</div>
        </div>
      </div>
    </div>

    <div class="scout-section">
      <div class="scout-section-title">Strengths &amp; Weaknesses</div>
      <div class="scout-grid">
        <div class="scout-item">
          <div class="scout-key">Strengths</div>
          <div class="tag-list">${tags(s.strengths, 'strength')}</div>
        </div>
        <div class="scout-item">
          <div class="scout-key">Weaknesses</div>
          <div class="tag-list">${tags(s.weaknesses, 'weakness')}</div>
        </div>
      </div>
    </div>

    <div class="scout-section">
      <div class="scout-section-title">Camp &amp; Training</div>
      <div class="scout-grid">
        <div class="scout-item full-width">
          <div class="scout-key">Gym / Team</div>
          <div class="scout-val">${s.gym}</div>
        </div>
        <div class="scout-item full-width">
          <div class="scout-key">Coaches / Partners</div>
          <div class="scout-val">${s.coaches}</div>
        </div>
        <div class="scout-item full-width">
          <div class="scout-key">Injuries / Camp Issues</div>
          <div class="tag-list" style="margin-bottom:4px">
            ${s.injuries.includes('[CONFIRMED]') ? '<span class="tag warning">CONFIRMED ISSUE</span>' : ''}
            ${s.injuries.includes('[UNCONFIRMED]') ? '<span class="tag">UNCONFIRMED</span>' : ''}
          </div>
          <div class="scout-val">${s.injuries}</div>
        </div>
      </div>
    </div>

    <div class="scout-section">
      <div class="scout-section-title">Historical Evidence</div>
      <div class="scout-grid">
        <div class="scout-item full-width">
          <div class="scout-key">Key Fights &amp; Tendencies</div>
          <div class="scout-val">${s.keyFights}</div>
        </div>
      </div>
    </div>
  `;
}

/* =======================================================
   MATCHUP PANEL — SECTION BUILDERS
======================================================= */

function buildTaleOfTape(f1, f2) {
  function barRow(label, v1, v2, fmt) {
    const n1 = parseFloat(v1), n2 = parseFloat(v2);
    const total = n1 + n2 || 1;
    const pct1 = Math.round(n1 / total * 100);
    const pct2 = 100 - pct1;
    const adv1 = n1 >= n2;
    const adv2 = n2 > n1;
    const display1 = fmt ? fmt(v1) : v1;
    const display2 = fmt ? fmt(v2) : v2;
    return `
      <div class="tape-row">
        <span class="tape-val ${adv1 ? 'tape-adv' : ''}">${display1}</span>
        <div class="tape-bars">
          <div class="tape-bar tape-bar-left ${adv1 ? 'tape-bar-win' : 'tape-bar-loss'}" style="width:${pct1}%"></div>
          <span class="tape-label">${label}</span>
          <div class="tape-bar tape-bar-right ${adv2 ? 'tape-bar-win' : 'tape-bar-loss'}" style="width:${pct2}%"></div>
        </div>
        <span class="tape-val tape-val-right ${adv2 ? 'tape-adv' : ''}">${display2}</span>
      </div>`;
  }

  function statRow(label, v1, v2) {
    return `
      <div class="tape-row tape-row-stat">
        <span class="tape-val">${v1}</span>
        <span class="tape-label">${label}</span>
        <span class="tape-val tape-val-right">${v2}</span>
      </div>`;
  }

  function heightToInches(h) {
    const m = h.match(/(\d+)'(\d+)/);
    return m ? parseInt(m[1]) * 12 + parseInt(m[2]) : 0;
  }

  const h1 = heightToInches(f1.height), h2 = heightToInches(f2.height);

  return `
    <div class="tape-names">
      <span class="tape-name">${f1.shortName}</span>
      <span class="tape-name tape-name-right">${f2.shortName}</span>
    </div>
    ${barRow('HEIGHT', h1, h2, (v) => v === h1 ? f1.height : f2.height)}
    ${barRow('REACH', f1.reach, f2.reach, v => `${v}"`)}
    ${barRow('AGE', f1.age, f2.age, v => `${v} yrs`)}
    ${statRow('STANCE', f1.stance, f2.stance)}
    ${statRow('RECORD', f1.record, f2.record)}
    ${barRow('KO/TKO WIN %', f1.koPercent, f2.koPercent, v => `${v}%`)}
    ${barRow('SUB WIN %', f1.subPercent, f2.subPercent, v => `${v}%`)}
    ${barRow('DECISION WIN %', f1.decPercent, f2.decPercent, v => `${v}%`)}
  `;
}

function buildLast5(f1, f2) {
  function timeline(fighter) {
    return `
      <div class="l5-fighter">
        <div class="l5-name">${fighter.shortName}</div>
        <div class="l5-strip">
          ${fighter.last5.map(f => `
            <div class="l5-bubble l5-${f.result.toLowerCase()}">
              <span class="l5-result">${f.result}</span>
              <span class="l5-opp">${f.opponent}</span>
              <span class="l5-method">${f.method}</span>
              <span class="l5-detail">R${f.round} · ${f.year}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
  }
  return `<div class="l5-container">${timeline(f1)}${timeline(f2)}</div>`;
}

function buildUFCStats(f1, f2, fightId) {
  const dash = '--';
  const statLabels = [
    ['slpm',    'Sig. Strikes / Min'],
    ['stracc',  'Strike Accuracy'],
    ['sapm',    'Strikes Absorbed / Min'],
    ['strdef',  'Strike Defense'],
    ['tdavg',   'Takedowns / 15 Min'],
    ['tdacc',   'TD Accuracy'],
    ['tddef',   'TD Defense'],
    ['subavg',  'Submissions / 15 Min'],
  ];

  function statGrid(side) {
    return statLabels.map(([key, label]) =>
      `<div class="ufc-stat-item">
        <div class="ufc-stat-label">${label}</div>
        <div class="ufc-stat-val" id="ufcstat-${fightId}-${side}-${key}">${dash}</div>
      </div>`
    ).join('');
  }

  return `
    <div class="ufc-stats-header">
      <span class="ufc-stats-name">${f1.shortName}</span>
      <button class="ufc-refresh-btn" onclick="refreshUFCStats(${fightId})">↻ Refresh</button>
      <span class="ufc-stats-name ufc-stats-name-right">${f2.shortName}</span>
    </div>
    <div class="ufc-stats-grid">
      <div class="ufc-stats-col">${statGrid('f1')}</div>
      <div class="ufc-stats-divider"></div>
      <div class="ufc-stats-col">${statGrid('f2')}</div>
    </div>
    <div class="ufc-stats-note" id="ufcstat-${fightId}-status">Tap Refresh to load live stats from UFCStats.com</div>
  `;
}

async function fetchUFCStats(fightId, fighterIdx, name) {
  try {
    const res = await fetch(`${SERVER_URL}/ufc-stats?name=${encodeURIComponent(name)}`, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    return await res.json();
  } catch { return null; }
}

window.refreshUFCStats = async function(fightId) {
  const fight = FIGHTS.find(f => f.id === fightId);
  if (!fight) return;
  const [f1, f2] = fight.fighters;
  const statusEl = document.getElementById(`ufcstat-${fightId}-status`);
  if (statusEl) statusEl.textContent = 'Fetching live stats…';

  const keys = ['slpm','stracc','sapm','strdef','tdavg','tdacc','tddef','subavg'];

  const [s1, s2] = await Promise.all([
    fetchUFCStats(fightId, 0, f1.name),
    fetchUFCStats(fightId, 1, f2.name),
  ]);

  [[s1, 'f1'], [s2, 'f2']].forEach(([stats, side]) => {
    if (!stats) return;
    keys.forEach(key => {
      const el = document.getElementById(`ufcstat-${fightId}-${side}-${key}`);
      if (el && stats[key] !== undefined) el.textContent = stats[key];
    });
  });

  if (statusEl) {
    statusEl.textContent = (s1 || s2)
      ? `Last updated: ${new Date().toLocaleTimeString()}`
      : 'Could not load stats — UFCStats.com may be unavailable';
  }
};

function buildClashMatrix(fight) {
  const [f1, f2] = fight.fighters;
  const { clash } = fight;

  function clashRow(label, data) {
    const isF1 = data.advantage === 'f1';
    const isEven = data.advantage === 'even';
    return `
      <div class="clash-row">
        <span class="clash-name ${isF1 && !isEven ? 'clash-winner' : ''}">${f1.shortName}</span>
        <div class="clash-bar-wrap">
          <div class="clash-bar ${isEven ? 'clash-bar-even' : (isF1 ? 'clash-bar-f1' : 'clash-bar-f2')}">
            <span class="clash-label">${label}</span>
          </div>
        </div>
        <span class="clash-name clash-name-right ${!isF1 && !isEven ? 'clash-winner' : ''}">${f2.shortName}</span>
      </div>
      <div class="clash-reason">${data.reason}</div>
    `;
  }

  return `
    <div class="clash-matrix">
      ${clashRow('STANDING', clash.standing)}
      ${clashRow('CLINCH', clash.clinch)}
      ${clashRow('GROUND', clash.ground)}
    </div>
  `;
}

function buildRoundPredictor(f1, f2) {
  function analyze(fighter) {
    const wins = fighter.last5.filter(f => f.result === 'W');
    const finishes = wins.filter(f => f.method !== 'Dec');

    const roundCounts = {};
    finishes.forEach(f => { roundCounts[f.round] = (roundCounts[f.round] || 0) + 1; });
    const dangerRound = finishes.length
      ? Object.entries(roundCounts).sort((a, b) => b[1] - a[1])[0][0]
      : '--';

    const methodCounts = {};
    wins.forEach(f => { methodCounts[f.method] = (methodCounts[f.method] || 0) + 1; });
    const topMethod = wins.length
      ? Object.entries(methodCounts).sort((a, b) => b[1] - a[1])[0][0]
      : '--';

    const earlyFinishes = finishes.filter(f => f.round <= 2).length;
    const lateFinishes  = finishes.filter(f => f.round >= 3).length;
    const label = finishes.length === 0 ? 'Decision Specialist'
                : earlyFinishes >= lateFinishes ? 'Early Finisher' : 'Late Finisher';

    return { dangerRound, topMethod, label, decPercent: fighter.decPercent };
  }

  const a1 = analyze(f1), a2 = analyze(f2);
  const goesDistancePct = Math.round((a1.decPercent + a2.decPercent) / 2);

  function card(fighter, a) {
    return `
      <div class="rp-card">
        <div class="rp-name">${fighter.shortName}</div>
        <div class="rp-row"><span class="rp-icon">⚡</span><div><div class="rp-key">MOST DANGEROUS ROUND</div><div class="rp-val">Round ${a.dangerRound}</div></div></div>
        <div class="rp-row"><span class="rp-icon">🥊</span><div><div class="rp-key">LIKELY FINISH METHOD</div><div class="rp-val">${a.topMethod}</div></div></div>
        <div class="rp-row"><span class="rp-icon">🏷</span><div><div class="rp-key">FINISHER TYPE</div><div class="rp-val">${a.label}</div></div></div>
      </div>
    `;
  }

  return `
    <div class="rp-grid">
      ${card(f1, a1)}
      ${card(f2, a2)}
    </div>
    <div class="rp-decision">
      <span class="rp-dec-label">GOES TO DECISION LIKELIHOOD</span>
      <div class="rp-dec-bar-wrap">
        <div class="rp-dec-bar" style="width:${goesDistancePct}%"></div>
      </div>
      <span class="rp-dec-pct">${goesDistancePct}%</span>
    </div>
  `;
}

function buildFightWeek(fight) {
  const [f1, f2] = fight.fighters;
  const { fightWeek } = fight;

  function parseOdds(s) { return parseInt(s.replace('+', '')); }

  function lineDir(fw) {
    const open = parseOdds(fw.openingOdds);
    const curr = parseOdds(fw.currentOdds);
    if (open < 0) {
      if (curr < open) return { arrow: '↓', cls: 'fw-steam', label: 'Steaming' };
      if (curr > open) return { arrow: '↑', cls: 'fw-drift', label: 'Drifting' };
    } else {
      if (curr < open) return { arrow: '↓', cls: 'fw-steam', label: 'Steaming' };
      if (curr > open) return { arrow: '↑', cls: 'fw-drift', label: 'Drifting' };
    }
    return { arrow: '→', cls: 'fw-stable', label: 'Stable' };
  }

  function statusBadge(status) {
    const cls = status === 'On Weight' ? 'fw-badge-green'
              : status === 'Missed Weight' ? 'fw-badge-red' : 'fw-badge-yellow';
    return `<span class="fw-badge ${cls}">${status}</span>`;
  }

  function injuryBadge(flag) {
    const isConfirmed = flag.includes('[CONFIRMED]');
    return `<span class="fw-badge ${isConfirmed ? 'fw-badge-red' : 'fw-badge-yellow'}">${flag}</span>`;
  }

  function fighterBlock(fighter, fw) {
    const dir = lineDir(fw);
    return `
      <div class="fw-block">
        <div class="fw-fighter-name">${fighter.name}</div>
        <div class="fw-row">${statusBadge(fw.weighInStatus)}</div>
        ${fw.injuryFlags.length ? `<div class="fw-row">${fw.injuryFlags.map(injuryBadge).join('')}</div>` : `<div class="fw-row"><span class="fw-badge fw-badge-green">No Injury Flags</span></div>`}
        <div class="fw-camp-note">${fw.campNotes}</div>
        <div class="fw-odds-row">
          <div class="fw-odds-item">
            <div class="fw-odds-label">OPENING</div>
            <div class="fw-odds-val">${fw.openingOdds}</div>
          </div>
          <div class="fw-odds-item">
            <div class="fw-odds-label">CURRENT</div>
            <div class="fw-odds-val">${fw.currentOdds}</div>
          </div>
          <div class="fw-odds-item">
            <div class="fw-odds-label">LINE</div>
            <div class="fw-odds-val ${dir.cls}">${dir.arrow} ${dir.label}</div>
          </div>
        </div>
      </div>
    `;
  }

  return `<div class="fw-container">${fighterBlock(f1, fightWeek.f1)}${fighterBlock(f2, fightWeek.f2)}</div>`;
}

/* =======================================================
   MATCHUP PANEL — ACCORDION WRAPPER
======================================================= */
function buildMatchupPanel(fight) {
  const [f1, f2] = fight.fighters;

  const sections = [
    { id: 'tape',    title: 'Tale of the Tape',      content: buildTaleOfTape(f1, f2) },
    { id: 'last5',   title: 'Last 5 Fights',          content: buildLast5(f1, f2) },
    { id: 'stats',   title: 'Live UFC Stats',          content: buildUFCStats(f1, f2, fight.id) },
    { id: 'clash',   title: 'Style Clash Matrix',      content: buildClashMatrix(fight) },
    { id: 'rounds',  title: 'Key Round Predictor',     content: buildRoundPredictor(f1, f2) },
    { id: 'week',    title: 'Fight Week Tracker',      content: buildFightWeek(fight) },
  ];

  const notes = `
    <div class="matchup-notes">
      <p><strong>${f1.name}:</strong> ${f1.scout.matchupNotes}</p>
    </div>
    <div class="matchup-notes" style="margin-top:10px">
      <p><strong>${f2.name}:</strong> ${f2.scout.matchupNotes}</p>
    </div>
  `;

  const accordionHTML = sections.map(s => `
    <div class="accord-item" data-section="${s.id}">
      <button class="accord-header">
        <span>${s.title}</span>
        <span class="accord-icon">+</span>
      </button>
      <div class="accord-body">
        <div class="accord-body-inner">${s.content}</div>
      </div>
    </div>
  `).join('');

  return `
    <div class="scout-section">
      <div class="scout-section-title">Final Matchup Analysis</div>
      ${notes}
    </div>
    <div class="accord-container" data-fight-id="${fight.id}">
      ${accordionHTML}
    </div>
  `;
}

function setupAccordion(container) {
  container.querySelectorAll('.accord-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accord-item');
      const isOpen = item.classList.contains('open');
      container.querySelectorAll('.accord-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accord-icon').textContent = '+';
      });
      if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.accord-icon').textContent = '−';
      }
    });
  });
}

/* =======================================================
   MODAL
======================================================= */
function openModal(fight) {
  const overlay = document.getElementById('modal-overlay');
  const inner = document.getElementById('modal-inner');
  const [f1, f2] = fight.fighters;

  inner.innerHTML = `
    <div class="modal-fight-header">
      <div class="modal-weight">${fight.weightClass}</div>
      <div class="modal-matchup">${f1.shortName} <span class="vs">VS</span> ${f2.shortName}</div>
    </div>

    <div class="fighter-tabs">
      <button class="fighter-tab active" data-idx="0">${f1.name}</button>
      <button class="fighter-tab" data-idx="1">${f2.name}</button>
      <button class="fighter-tab" data-idx="2">⚔ Matchup</button>
    </div>

    <div class="fighter-panel active" id="fpanel-0">${buildScoutPanel(f1)}</div>
    <div class="fighter-panel" id="fpanel-1">${buildScoutPanel(f2)}</div>
    <div class="fighter-panel" id="fpanel-2">${buildMatchupPanel(fight)}</div>
  `;

  inner.querySelectorAll('.fighter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.idx;
      inner.querySelectorAll('.fighter-tab').forEach(b => b.classList.remove('active'));
      inner.querySelectorAll('.fighter-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`fpanel-${idx}`).classList.add('active');
    });
  });

  const accordContainer = inner.querySelector('.accord-container');
  if (accordContainer) setupAccordion(accordContainer);

  overlay.classList.remove('hidden');
  overlay.classList.add('animate-in');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('hidden');
  overlay.classList.remove('animate-in');
  document.body.style.overflow = '';
}

/* =======================================================
   INIT
======================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderFightCards();

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
