import * as utils from "/utils.js";

// Create a back button to the index page
const backButtonContainer = document.querySelector(".cjs-back-button");
utils.createBackButton(backButtonContainer, "/nav/projects/projects.html");

// Example projects, will be replaced by own projects from data base
const projectData = [
  {
    name: "BudgetBuddy",
    text: [
      "A simple, privacy-first personal finance tracker that helps users categorize transactions automatically and visualize cash flow with clean charts.",
      "I built a rules engine that learns from user edits to improve category suggestions over time and added importers for CSV/OFX from major banks.",
      "This project taught me a lot about data modeling for recurring expenses and building responsive dashboards that stay fast on large datasets."
    ],
    exp: [
      "󰕒 Finance logic",
      " Node.js",
      " TypeScript",
      "󰌛 React",
      " PostgreSQL",
      "󰔶 Charting",
      " Docker",
      " Team collaboration"
    ],
    links: [
      { href: "https://github.com/user/budgetbuddy", text: "GitHub: user/budgetbuddy", sc: "q" },
      { href: "https://budgetbuddy.example.com", text: "Website: budgetbuddy.example.com", sc: "w" },
      { href: "https://example.com/img/budgetbuddy.png", text: "Screenshot", sc: "e" }
    ]
  },
  {
    name: "SkyCast",
    text: [
      "A lightweight weather forecast web app with hour-by-hour predictions and severe weather alerts for saved locations.",
      "I integrated multiple data sources and added fallback logic to keep forecasts available during provider outages.",
      "Optimized the app for low bandwidth by aggressively caching tiles and using server-side rendering for first paint."
    ],
    exp: [
      "󰖔 Weather APIs",
      " Next.js (SSR)",
      "󰌛 React",
      " Tailwind CSS",
      " Python (ETL)",
      " Redis caching",
      "󰞷 Service workers",
      " CI/CD"
    ],
    links: [
      { href: "https://github.com/user/skycast", text: "GitHub: user/skycast", sc: "r" },
      { href: "https://skycast.example.com", text: "Website: skycast.example.com", sc: "t" },
      { href: "https://example.com/img/skycast.gif", text: "Demo GIF", sc: "y" }
    ]
  },
  {
    name: "QuizArena",
    text: [
      "A real-time multiplayer quiz game with custom rooms, power-ups, and live leaderboards.",
      "I implemented WebSocket-powered gameplay and an authoring tool that lets creators design question packs with images and timers.",
      "Load testing and anti-cheat measures were key challenges; I shipped server-side validation and latency compensation."
    ],
    exp: [
      "󰈤 Realtime (WebSocket)",
      " Node.js",
      " TypeScript",
      "󰌛 React",
      " MongoDB",
      " Jest/Cypress",
      "󰙨 Socket.io",
      " K6 load tests"
    ],
    links: [
      { href: "https://github.com/user/quizarena", text: "GitHub: user/quizarena", sc: "u" },
      { href: "https://quizarena.example.com", text: "Website: quizarena.example.com", sc: "i" },
      { href: "https://example.com/img/quizarena.png", text: "Screenshots", sc: "o" }
    ]
  },
  {
    name: "RecipeGenie",
    text: [
      "An AI-powered recipe generator that turns pantry items into step-by-step recipes with dietary filters.",
      "I built prompt templates and a constraint system to ensure ingredient quantities add up and cooking times stay realistic.",
      "Users can save, rate, and auto-generate shopping lists that sync to their phones."
    ],
    exp: [
      "󰚩 AI prompts",
      " Python (FastAPI)",
      " TypeScript",
      " PostgreSQL + JSONB",
      "󰔳 Analytics",
      "󰄉 Accessibility",
      " Docker",
      "󱂥 OpenAPI"
    ],
    links: [
      { href: "https://github.com/user/recipegenie", text: "GitHub: user/recipegenie", sc: "p" },
      { href: "https://recipegenie.example.com", text: "Website: recipegenie.example.com", sc: "a" },
      { href: "https://example.com/img/recipegenie.jpg", text: "Gallery", sc: "s" }
    ]
  },
  {
    name: "HabitHero",
    text: [
      "A daily habit tracker that uses streaks, reminders, and tiny rewards to keep users motivated.",
      "I implemented an offline-first data layer so habits can be logged without connectivity and sync later.",
      "Experimented with notification timing and haptics; retention improved after batching gentle nudges."
    ],
    exp: [
      "󰄉 UX for behavior change",
      " React Native",
      "󰍛 SQLite",
      "󰞷 PWA/offline",
      " Expo",
      " E2E tests",
      "󰁪 Push notifications",
      " Iconography"
    ],
    links: [
      { href: "https://github.com/user/habithero", text: "GitHub: user/habithero", sc: "d" },
      { href: "https://habithero.example.com", text: "Website: habithero.example.com", sc: "f" },
      { href: "https://example.com/img/habithero.png", text: "Mockups", sc: "g" }
    ]
  },
  {
    name: "NoteLite",
    text: [
      "A minimal note-taking app with instant search, tags, and Markdown support.",
      "I focused on keyboard-first interactions and built a fuzzy search index that updates as you type.",
      "The sync engine uses CRDTs so edits merge cleanly across devices without conflicts."
    ],
    exp: [
      "󰈙 Markdown",
      " TypeScript",
      "󰌛 React",
      " IndexedDB",
      "󰘚 CRDT (Yjs)",
      " Tailwind CSS",
      "󰞷 Service worker",
      " Vite"
    ],
    links: [
      { href: "https://github.com/user/notelite", text: "GitHub: user/notelite", sc: "h" },
      { href: "https://notelite.example.com", text: "Website: notelite.example.com", sc: "j" },
      { href: "https://example.com/img/notelite.png", text: "Screenshots", sc: "k" }
    ]
  },
  {
    name: "FitPlanner",
    text: [
      "A workout routine planner with program templates, progressive overload tracking, and rest timers.",
      "I added a drag-and-drop routine builder and a form validator that suggests weight increments based on past sets.",
      "Export to CSV/PDF and Apple/Google Health sync were notable integrations."
    ],
    exp: [
      "󰖆 Fitness UX",
      " React Native",
      "󰈼 GraphQL",
      " SQLite / Prisma",
      " PDF export",
      " Detox tests",
      "󰁪 Local notifications",
      " Docker"
    ],
    links: [
      { href: "https://github.com/user/fitplanner", text: "GitHub: user/fitplanner", sc: "l" },
      { href: "https://fitplanner.example.com", text: "Website: fitplanner.example.com", sc: "z" },
      { href: "https://example.com/img/fitplanner.jpg", text: "Promo image", sc: "x" }
    ]
  },
  {
    name: "StockWatch",
    text: [
      "A stock market tracking tool with custom watchlists, price alerts, and simple portfolio analytics.",
      "I implemented streaming quotes and server-side aggregations for daily/weekly performance.",
      "Risk disclaimers and a paper trading sandbox make it friendly for beginners."
    ],
    exp: [
      "󰔳 Charts/indicators",
      " Node.js",
      " TypeScript",
      " Timeseries (TimescaleDB)",
      "󰙨 WebSockets",
      " K6 load tests",
      "󱂥 REST/Swagger",
      " Nginx"
    ],
    links: [
      { href: "https://github.com/user/stockwatch", text: "GitHub: user/stockwatch", sc: "c" },
      { href: "https://stockwatch.example.com", text: "Website: stockwatch.example.com", sc: "v" },
      { href: "https://example.com/img/stockwatch.png", text: "Dashboard shot", sc: "b" }
    ]
  },
  {
    name: "MelodyMix",
    text: [
      "A music playlist generator that blends tracks by mood, tempo, and era using audio feature analysis.",
      "I wrote a seed expansion algorithm that explores adjacent tracks without getting repetitive, then normalizes loudness.",
      "Users can export mixes directly to their streaming accounts."
    ],
    exp: [
      "󰎈 Audio features",
      " Python (analysis)",
      " Node.js (API)",
      " Redis queues",
      "󰌛 React",
      " Jest",
      "󰓇 OAuth flows",
      " CI/CD"
    ],
    links: [
      { href: "https://github.com/user/melodymix", text: "GitHub: user/melodymix", sc: "n" },
      { href: "https://melodymix.example.com", text: "Website: melodymix.example.com", sc: "m" },
      { href: "https://example.com/img/melodymix.jpg", text: "Album art collage", sc: "1" }
    ]
  },
  {
    name: "CalmClock",
    text: [
      "A mindfulness meditation timer with ambient soundscapes, interval bells, and gentle wake sequences.",
      "I added a session journal and heatmap to visualize practice streaks, plus a library of breathing exercises.",
      "Battery-friendly audio scheduling and precise haptics were fun technical challenges."
    ],
    exp: [
      "󰄛 Timers & alarms",
      " React Native",
      "󰕾 Audio mixing",
      "󰞷 Offline-first",
      " Expo EAS",
      " Detox tests",
      "󰁪 Notifications",
      " Mindfulness UX"
    ],
    links: [
      { href: "https://github.com/user/calmclock", text: "GitHub: user/calmclock", sc: "2" },
      { href: "https://calmclock.example.com", text: "Website: calmclock.example.com", sc: "3" },
      { href: "https://example.com/img/calmclock.png", text: "UI mockups", sc: "4" }
    ]
  }
];


// Query and find the data of project specified in the url params
function getSingleProjectData() {
    const params = new URLSearchParams(window.location.search);
    const projectName = params.get("name");
    return projectData.find(data => data.name === projectName);
}

const data = getSingleProjectData();
const container = document.querySelector(".flex-grow-container");
utils.displayData(container, data);

utils.addButtonKeyListeners();
