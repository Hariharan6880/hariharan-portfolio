// ─────────────────────────────────────────────────────────────────────────────
// Central content store for the portfolio. Edit copy here, not in components.
// ─────────────────────────────────────────────────────────────────────────────

export const CONTACT = {
  email: 'hariharan2002.br@gmail.com',
  phone: '+91 90876 52203',
  github: 'https://github.com/Hariharan6880',
  linkedin: 'https://linkedin.com/in/hariharan-balaji',
}

// ─── Persona deck ────────────────────────────────────────────────────────────
// Each persona reskins the hero copy, stat tiles and contact pitch.
export const PERSONAS = {
  recruiter: {
    id: 'recruiter',
    tab: 'Recruiter',
    icon: 'badge',
    status: 'Actively seeking full-time ML Engineer & Data Scientist roles',
    headlineLead: 'I build',
    headlineAccent: 'production ML systems',
    headlineTail: 'from agentic LLM pipelines to real-time perception.',
    description:
      "ML Engineer & Data Scientist with an M.Tech in Big Data Analytics (VIT) and a B.Tech in Mechatronics. I ship end-to-end AI — agentic LLM pipelines (LangGraph, RAG), real-time ADAS perception, electricity-price forecasting deployed on GCP Cloud Run, and churn analytics.",
    primaryCta: { label: 'Hire Me Full-Time', icon: 'contract', href: '#contact' },
    headerCta: 'Hire Me',
    contactHeadline: 'Bring Me to Your Team',
    contactDescription:
      'Recruiter or engineering lead looking to add an ML Engineer & Data Scientist who ships models into production? Drop your role requirements below.',
    botMode: 'RECRUITER MODE',
    file: 'recruiter_mode.png',
    telemetry: 'REC_MODE: ACTIVE',
    stats: [
      { val: '8.70', unit: '/10', label: 'M.Tech CSE GPA · VIT', tone: 'accent' },
      { val: '8.40', unit: '/10', label: 'B.Tech Mechatronics GPA', tone: 'violet' },
      { val: '100%', unit: '', label: 'Production deployments', tone: 'emerald' },
    ],
  },
  creator: {
    id: 'creator',
    tab: 'Creative Engine',
    icon: 'cubes',
    status: 'Building agentic LLM systems & applied AI platforms',
    headlineLead: 'I engineer',
    headlineAccent: 'agentic LLM systems',
    headlineTail: 'that reason, search and ship into production apps.',
    description:
      'I design multi-agent LLM systems end-to-end — a dual-LangGraph supervisor-agent gift recommender for DelightLoop, and on-premise (Ollama) test-generation pipelines at Magna that lifted pass rates from 33% to 86% with a ChromaDB RAG layer. Ask the chatbot below about the agents I build.',
    primaryCta: { label: 'Explore Case Studies', icon: 'gamepad', href: '#projects' },
    headerCta: 'View My Work',
    contactHeadline: "Let's Build Something Ambitious",
    contactDescription:
      'Working on agentic AI, RAG systems or applied ML? I love hard systems problems — tell me what you are building.',
    botMode: 'CREATOR MODE',
    file: 'creator_mode.png',
    telemetry: 'CREATOR_MODE: ACTIVE',
    stats: [
      { val: '40%', unit: '', label: 'Manual QA cycles saved', tone: 'accent' },
      { val: '19,230', unit: 'hrs', label: 'ERCOT forecast hold-out', tone: 'violet' },
      { val: '2.89%', unit: '', label: 'ADAS false-brake rate', tone: 'emerald' },
    ],
  },
}

export const PERSONA_ORDER = ['recruiter', 'creator']

// ─── Theme engine presets ────────────────────────────────────────────────────
// Each theme drives: accent palette, a full-page `bg` gradient, and an animated
// `scene` rendered behind the (translucent) page. `bg` is kept light/mid-tone so
// slate text stays readable over it.
export const THEMES = {
  cobalt: {
    id: 'cobalt', name: 'Royal Cobalt', sub: 'Premium corporate',
    color: '#3b82f6', rgb: '59, 130, 246', rgb2: '99, 102, 241', swatch: '#3b82f6',
    scene: 'constellation', sceneLabel: 'Constellation field',
    bg: 'radial-gradient(125% 100% at 50% 0%, #eef4ff 0%, #f3f6fc 45%, #eaf0fa 100%)',
  },
  violet: {
    id: 'violet', name: 'Violet Luxury', sub: 'Creative design',
    color: '#8b5cf6', rgb: '139, 92, 246', rgb2: '168, 85, 247', swatch: '#8b5cf6',
    scene: 'solar', sceneLabel: 'Solar system',
    bg: 'radial-gradient(125% 110% at 50% 0%, #efeaff 0%, #f2eefc 45%, #ece6fb 100%)',
  },
  emerald: {
    id: 'emerald', name: 'Bio Matrix', sub: 'Data & analytics',
    color: '#10b981', rgb: '16, 185, 129', rgb2: '20, 184, 166', swatch: '#10b981',
    scene: 'aurora', sceneLabel: 'Aurora waves',
    bg: 'radial-gradient(125% 100% at 50% 0%, #e7fbf2 0%, #eefaf4 45%, #e3f6ee 100%)',
  },
}

export const FONTS = {
  sans: { id: 'sans', label: 'Plus Jakarta Sans', note: 'Sleek modern technology UI', stack: '"Plus Jakarta Sans", system-ui, sans-serif' },
  playfair: { id: 'playfair', label: 'Playfair Display', note: 'Luxury editorial brand vibe', stack: '"Playfair Display", serif' },
}

// ─── Capabilities ────────────────────────────────────────────────────────────
export const CAPABILITIES = [
  {
    icon: 'brain', tone: 'accent',
    title: 'Notebook → Production',
    body: 'I train robust ML pipelines (XGBoost, regression, random forest) and ship them as FastAPI services — Dockerized and deployed serverless on GCP Cloud Run.',
  },
  {
    icon: 'branch', tone: 'violet',
    title: 'Agentic LLM Systems',
    body: 'Multi-agent LangGraph/LangChain pipelines with RAG (FAISS, ChromaDB, BGE embeddings) — signal extraction, tool-use search, scoring and human-in-the-loop review.',
  },
  {
    icon: 'curve', tone: 'emerald',
    title: 'ML-Backed Web Apps',
    body: 'I wrap models in clean React frontends — live pipeline visualisations, review queues and analytics portals — so insights are usable, not stuck in a notebook.',
  },
  {
    icon: 'vr', tone: 'amber',
    title: 'Systems & Simulation',
    body: 'With mechatronics training I code physics models (Pyglet/Pymunk), robotic obstacle benchmarks, and map comms over MQTT and VDA5050.',
  },
]

// ─── Projects ────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: 'B2B Gift Recommendation Agent',
    tag: 'Agentic AI · DelightLoop', tone: 'violet', year: '2026', art: 'graph',
    desc: 'DelightLoop technical assessment — a dual-LangGraph supervisor-agent system that turns recipient signals into explainable B2B gift recommendations, with a human-in-the-loop review queue.',
    bullets: [
      'Architected a 7-node pipeline (signal extraction → candidates → fusion → search → scoring → explanation → review) with a nested goal-driven search sub-agent.',
      'Built NLP signal extraction (parsing → chunking → 768-dim BGE embeddings) feeding 3-source candidate generation with semantic deduplication.',
      'Shipped full-stack: FastAPI background-job API + React frontend with animated live pipeline visualisation and HITL review queue.',
    ],
    stack: ['Python', 'LangGraph', 'FastAPI', 'React', 'FAISS', 'BGE Embeddings', 'SQLite', 'Tavily', 'Gemini', 'Groq', 'Ollama'],
    github: 'https://github.com/Hariharan6880/delightloop-gift-agent',
  },
  {
    title: 'Electricity Price Forecasting · Texas ERCOT',
    tag: 'ML & Forecasting', tone: 'accent', year: '2026', art: 'grid',
    desc: 'Forecasting & decision-support system for volatile ERCOT electricity prices — built to capture extreme spikes while avoiding feature leakage, then deployed serverless on GCP Cloud Run.',
    bullets: [
      'Deployed the FastAPI inference service to GCP Cloud Run (Docker → Cloud Build → Artifact Registry) — serverless, auto-scaling, live over HTTPS.',
      '$7.58/MWh MAE on 19,230-hour out-of-sample data — 53% better than Linear Regression.',
      'Spike detection at 0.98 ROC-AUC with 69% recall under 99.7% class imbalance.',
    ],
    stack: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'Docker', 'GCP Cloud Run'],
    github: 'https://github.com/Hariharan6880/ercot-price-forecasting',
    gallery: [
      { src: '/projects/ercot/overview.png', caption: 'Overview · headline metrics & model-vs-baseline lift' },
      { src: '/projects/ercot/architecture.png', caption: 'Architecture · pipeline, design decisions & SHAP features' },
      { src: '/projects/ercot/price-forecast.png', caption: 'Price forecast · actual vs predicted across 19,230 hours' },
      { src: '/projects/ercot/error-analysis.png', caption: 'Error analysis · distribution, residuals & temporal patterns' },
      { src: '/projects/ercot/regime-analysis.png', caption: 'Regime analysis · Normal / Stressed / Scarcity states' },
      { src: '/projects/ercot/spike-detection.png', caption: 'Spike detection · binary classifier for >$300/MWh events' },
      { src: '/projects/ercot/spike-events.png', caption: 'Spike events · ranked table with P(spike) & reserve margin' },
    ],
  },
  {
    title: 'AI-Driven Test Generation · Magna Logistics App',
    tag: 'Agentic AI · On-Prem LLMs', tone: 'rose', year: '2026', art: 'graph',
    desc: "Proposed and greenlit by the testing lead to auto-generate test cases for Magna's internal logistics app using local LLMs via Ollama — keeping proprietary data fully on-premise.",
    bullets: [
      'Generated 347 test cases from a single module; lifted pass rate 33% → 86% with a ChromaDB RAG layer that eliminated hallucinated UI accessibility IDs.',
      'Diagnosed residual failures as environmental cascade tab-lock issues rather than model errors.',
    ],
    stack: ['LangGraph', 'LangChain', 'Ollama', 'ChromaDB', 'Appium'],
    github: 'https://github.com/Hariharan6880',
  },
  {
    title: 'AI-Powered ADAS Collision Prediction',
    tag: 'Computer Vision', tone: 'rose', year: '2025', art: 'radar',
    desc: 'Real-time perception-to-decision pipeline on KITTI & BDD100K using TTC estimation with ego-lane prioritization.',
    bullets: [
      '2.89% false-brake rate with only 0.1% missed-risk rate.',
      'YOLOv8 + DeepSORT + MiDaS depth fused for time-to-collision.',
    ],
    stack: ['YOLOv8', 'DeepSORT', 'MiDaS', 'OpenCV'],
    github: 'https://github.com/Hariharan6880',
    gallery: [
      { src: '/projects/adas/output.mp4', type: 'video', caption: 'Live detection · YOLOv8 + DeepSORT tracking + MiDaS depth for time-to-collision on dashcam footage' },
    ],
  },
  {
    title: 'SaaS User Retention Early-Warning Hub',
    tag: 'Predictive Churn Analytics', tone: 'emerald', year: '2025', art: 'pulse',
    desc: 'End-to-end churn pipeline for Customer Success teams, catching behavioral and contract risks to protect renewal bookings.',
    bullets: [
      'Engineered 70+ customer features across accounts, subscriptions, logs and support.',
      'Wired interactive Power BI tooling on star schemas with complex DAX logic.',
    ],
    stack: ['Python', 'scikit-learn', 'Power BI', 'SQL'],
    github: 'https://github.com/Hariharan6880',
    gallery: [
      { src: '/projects/saas/power-bi-dashboard.png', caption: 'Power BI dashboard · executive overview, risk deep-dive & retention insights' },
      { src: '/projects/saas/eda.png', caption: 'EDA · churn analysis by industry, cohort, engagement & correlations' },
      { src: '/projects/saas/statistical-analysis.png', caption: 'Statistical analysis · hypothesis testing, survival curves & effect sizes' },
      { src: '/projects/saas/model-evaluation.png', caption: 'Model evaluation · ROC/PR curves, feature importance & ML risk tiers' },
      { src: '/projects/saas/risk-segmentation.png', caption: 'Risk segmentation · MRR at risk across Critical→Healthy segments' },
      { src: '/projects/saas/early-warning.png', caption: 'Early-warning signals · risk tiers, rules-by-lift & MRR at risk' },
      { src: '/projects/saas/business-insights.png', caption: 'Business insights · ROI scenarios & 90-day retention action plan' },
    ],
  },
  {
    title: 'Marketplace Seller Intelligence Platform',
    tag: 'Seller Risk Analytics', tone: 'amber', year: '2025', art: 'scatter',
    desc: 'End-to-end seller churn prediction for a Myntra-style marketplace — synthetic data generation, SQL analytics, explainable ML and a 5-tab Streamlit dashboard.',
    bullets: [
      'Caught and fixed target leakage (AUC 1.0 → realistic 0.93) via point-in-time feature redesign.',
      'Surfaced 62 at-risk active sellers with ₹2.1M GMV at stake, each assigned a specific retention action.',
    ],
    stack: ['Python', 'XGBoost', 'SHAP', 'SQLite', 'SMOTE', 'Streamlit'],
    github: 'https://github.com/Hariharan6880/Marketplace-Competitive-Pricing-Intelligence',
    gallery: [
      { src: '/projects/marketplace/overview.png', caption: 'Dashboard overview · KPI cards, seller risk map & risk-tier distribution' },
      { src: '/projects/marketplace/risk-tiers.png', caption: 'Risk tiers & churn probability · High / Medium / Low distribution with 0.4 / 0.7 thresholds' },
      { src: '/projects/marketplace/recommended-actions.png', caption: 'Recommended actions · per-seller retention strategy workload breakdown' },
    ],
  },
]

// ─── Timeline ────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    kind: 'work', tone: 'accent',
    role: 'Product Engineer Intern', org: 'Magna International',
    period: 'Jul 2025 – May 2026 · Bengaluru, India',
    points: [
      'Proposed & shipped an on-premise LLM test-generation pipeline (LangGraph + Ollama + ChromaDB RAG) — 347 test cases from one module, lifting pass rate 33% → 86%.',
      'Programmed a 5-robot virtual factory in Pyglet (3D) & Pymunk (2D) to log obstacle paths and testing diagnostics.',
      'Benchmarked robotic fleet navigation inside NVIDIA Isaac Sim to evaluate obstacle-avoidance behaviour.',
      'Built microservices in Flask (Python) and Gin (Go) to VDA5050 and MQTT standards.',
      'Set up AWS CodePipeline & CodeDeploy for managed backend deployments; integrated factory-asset data end-to-end from simulation to cloud infrastructure.',
    ],
  },
  {
    kind: 'edu', tone: 'violet',
    role: 'M.Tech · Big Data Analytics (CSE)', org: 'Vellore Institute of Technology',
    period: '2024 – 2026 · Vellore, India',
    points: [
      'Focus on ML modeling, statistical analysis, database mapping and RAG vector structures. GPA 8.70 / 10.',
    ],
  },
  {
    kind: 'edu', tone: 'emerald',
    role: 'B.Tech · Mechatronics Engineering', org: 'Hindustan Institute of Technology & Science',
    period: '2020 – 2024 · Chennai, India',
    points: [
      'Hardware-software mapping, microcontrollers, control systems, sensors and automation physics. GPA 8.40 / 10.',
    ],
  },
]

// ─── Marquee skill ticker ────────────────────────────────────────────────────
export const TOOLS = [
  'Python', 'SQL', 'XGBoost', 'scikit-learn', 'LangGraph', 'LangChain',
  'NLP', 'Prompt Engineering', 'Text Processing', 'Hugging Face', 'Transformers',
  'BGE Embeddings', 'Sentence-Transformers', 'Tavily', 'FAISS', 'RAG',
  'Ollama / On-Prem LLMs', 'React.js', 'FastAPI', 'YOLOv8', 'OpenCV',
  'GCP (Cloud Run · Cloud Build · Artifact Registry)', 'AWS (CodePipeline · CodeDeploy)',
  'Docker', 'Power BI', 'Pandas', 'Matplotlib', 'SHAP', 'ChromaDB',
  'Git', 'Pyglet', 'Pymunk', 'MQTT', 'Go (Gin)', 'Flask',
]

// ─── Chatbot knowledge base ──────────────────────────────────────────────────
export const BOT_KB = [
  {
    keywords: ['delightloop', 'gift', 'recommend', 'supervisor', 'embedding', 'bge', 'fusion', 'tavily'],
    answer: 'For DelightLoop, Hari built a dual-LangGraph supervisor-agent B2B gift recommender: a 7-node pipeline (signal extraction → candidates → fusion → search → scoring → explanation → human review) with a nested goal-driven search sub-agent. NLP signal extraction feeds 768-dim BGE embeddings into 3-source candidate generation with semantic dedup, served via a FastAPI background-job API and a React frontend with a live pipeline view and human-in-the-loop review queue.',
  },
  {
    keywords: ['ercot', 'electricity', 'energy', 'price', 'forecast', 'cloud run', 'gcp'],
    answer: 'The ERCOT model forecasts volatile electricity prices and flags spike thresholds under 99.7% class imbalance. Built with XGBoost, SHAP and FastAPI — Dockerized and deployed serverless on GCP Cloud Run (Cloud Build → Artifact Registry) — it hit a $7.58/MWh MAE (53% better than Linear Regression) and 0.98 ROC-AUC with 69% recall on spike detection.',
  },
  {
    keywords: ['langgraph', 'agentic', 'automation', 'appium', 'testing', 'self-healing', 'qa', 'test generation', 'ollama', 'on-prem'],
    answer: 'At Magna, Hari proposed and shipped an on-premise LLM test-generation pipeline using local models via Ollama (Gemma, Qwen, Mistral) with LangGraph and Appium — keeping proprietary data on-prem. It generated 347 test cases from one module and lifted pass rate from 33% to 86% after adding a ChromaDB RAG layer to eliminate hallucinated UI accessibility IDs.',
  },
  {
    keywords: ['magna', 'intern', 'robot', 'isaac', 'pyglet', 'mechatronics', 'simulation', 'aws'],
    answer: 'At Magna International Hari engineered a 5-robot simulated factory in Pyglet/Pymunk, benchmarked obstacle behaviour in NVIDIA Isaac Sim, and wrote Flask + Gin (Go) microservices to VDA5050 and MQTT standards. He also set up AWS CodePipeline & CodeDeploy for managed backend deployments and integrated factory-asset data end-to-end from simulation to cloud.',
  },
  {
    keywords: ['skill', 'toolkit', 'language', 'python', 'stack', 'sql'],
    answer: 'Core stack: Python, SQL, NLP & prompt engineering, ML (XGBoost, scikit-learn, SHAP), agents & RAG (LangGraph, LangChain, FAISS, ChromaDB, BGE / Sentence-Transformers, Hugging Face Transformers, Ollama, Tavily), computer vision (YOLOv8, OpenCV), cloud & deploy (GCP Cloud Run/Build/Artifact Registry, AWS CodePipeline/CodeDeploy, Docker) and frontend (React.js, Tailwind CSS).',
  },
  {
    keywords: ['education', 'gpa', 'vit', 'hits', 'master', 'college', 'degree'],
    answer: 'M.Tech in Big Data Analytics (CSE) from VIT with CGPA 8.70/10, and B.Tech in Mechatronics from Hindustan Institute of Technology & Science with CGPA 8.40/10.',
  },
  {
    keywords: ['adas', 'collision', 'vision', 'cv', 'kitti', 'yolo'],
    answer: 'The ADAS system uses YOLOv8 detection, DeepSORT tracking and MiDaS monocular depth to estimate time-to-collision — achieving a 2.89% false-brake rate on KITTI and BDD100K.',
  },
  {
    keywords: ['marketplace', 'seller', 'churn', 'gmv', 'leakage', 'streamlit', 'myntra'],
    answer: 'The Marketplace Seller Intelligence Platform predicts which third-party sellers are about to disengage — early enough to retain them. Built with XGBoost + SHAP + Streamlit, the interesting challenge was catching target leakage (AUC was a suspicious 1.0) and rebuilding with point-in-time features to get a realistic 0.93 AUC. The final model surfaces 62 at-risk active sellers representing ₹2.1M of monthly GMV, with a specific action for each one.',
  },
]

export const BOT_FALLBACK =
  "I couldn't map that one. Try asking about the DelightLoop gift agent, the ERCOT forecasting model, the Magna on-prem LLM test agents, the ADAS vision system, or the skills stack — or email Hari directly at hariharan2002.br@gmail.com."

export const BOT_SUGGESTIONS = [
  { label: 'DelightLoop agent', q: 'Tell me about the DelightLoop gift recommendation agent' },
  { label: 'ERCOT forecasting', q: 'Explain your electricity prediction project' },
  { label: 'Skills & stack', q: 'What is your skills stack?' },
  { label: 'Magna & on-prem LLMs', q: 'Tell me about your Magna internship and on-prem LLM work' },
]
