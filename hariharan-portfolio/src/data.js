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
    status: 'Actively seeking Data Science roles & analytical partnerships',
    headlineLead: 'I build',
    headlineAccent: 'production data pipelines',
    headlineTail: 'deployed straight into functional web platforms.',
    description:
      "I bridge the gap between heavy statistical modeling and modern frontend engineering. Armed with an M.Tech in Big Data Analytics (VIT) and a B.Tech in Mechatronics, I ship predictive algorithms, ML models and automated test pipelines.",
    primaryCta: { label: 'Hire Me Full-Time', icon: 'contract', href: '#contact' },
    headerCta: 'Hire Me',
    contactHeadline: 'Bring Me to Your Team',
    contactDescription:
      'Recruiter, engineering director or founder looking to add production-focused data science horsepower? Drop your role requirements below.',
    botMode: 'RECRUITER MODE',
    file: 'recruiter_mode.png',
    telemetry: 'REC_MODE: ACTIVE',
    stats: [
      { val: '8.70', unit: '/10', label: 'M.Tech CSE GPA · VIT', tone: 'accent' },
      { val: '8.40', unit: '/10', label: 'B.Tech Mechatronics GPA', tone: 'violet' },
      { val: '100%', unit: '', label: 'Production deployments', tone: 'emerald' },
    ],
  },
  freelancer: {
    id: 'freelancer',
    tab: 'Freelancer',
    icon: 'store',
    status: 'Now booking freelance projects & custom web builds',
    headlineLead: 'I build',
    headlineAccent: 'premium visual websites',
    headlineTail: 'that drive measurable business results.',
    description:
      'I design and launch lightning-fast landing pages, custom calculators and automated analytics portals — combining mechatronics precision with expert web code to save owners time and overhead.',
    primaryCta: { label: 'Start Your Project', icon: 'magic', href: '#contact' },
    headerCta: 'Start a Project',
    contactHeadline: 'Launch Your Next Project',
    contactDescription:
      "Need a professional portfolio, a fast landing page, a pricing tool or a smart automation flow? Describe your goals below and let's construct it.",
    botMode: 'FREELANCE MODE',
    file: 'freelancer_mode.png',
    telemetry: 'CLIENT_MODE: ACTIVE',
    stats: [
      { val: '24–48h', unit: '', label: 'Initial prototype delivery', tone: 'accent' },
      { val: '1,600+', unit: 'hrs', label: 'Avg manual hours saved / yr', tone: 'violet' },
      { val: '85%', unit: '', label: 'Pipeline error reduction', tone: 'emerald' },
    ],
  },
  creator: {
    id: 'creator',
    tab: 'Creative Engine',
    icon: 'cubes',
    status: 'Pushing applied simulation & agentic QA platforms',
    headlineLead: 'I engineer',
    headlineAccent: 'self-healing automated pipelines',
    headlineTail: 'wired into full mechatronic system structures.',
    description:
      'At Magna International I trained predictive analytics nodes and configured Appium + LangGraph self-healing test automation that cut manual QA cycles by 40%. Ask the chatbot below about the virtual factories I built.',
    primaryCta: { label: 'Explore Case Studies', icon: 'gamepad', href: '#projects' },
    headerCta: 'Start a Project',
    contactHeadline: "Let's Build Something Ambitious",
    contactDescription:
      'Working on simulation, robotics fleets or agentic automation? I love hard systems problems — tell me what you are building.',
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

export const PERSONA_ORDER = ['recruiter', 'freelancer', 'creator']

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
    body: 'I train robust ML pipelines (XGBoost, regression, random forest) and pack them cleanly into FastAPI services with solid security architecture.',
  },
  {
    icon: 'curve', tone: 'violet',
    title: 'Beautiful UX & Web Code',
    body: 'No more static, ugly dashboards. Lightning-fast interfaces, responsive grids, interactive calculators and smooth UI motion built on modern CSS.',
  },
  {
    icon: 'branch', tone: 'emerald',
    title: 'Agentic QA Testing',
    body: 'Self-healing multi-agent test pipelines (LangGraph, Appium, ChromaDB) that parse scenarios, generate code, check output and auto-debug on the fly.',
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
    title: 'Electricity Price Forecasting · Texas ERCOT',
    tag: 'ML & Forecasting', tone: 'accent', year: '2026', art: 'grid',
    desc: 'Forecasting & decision-support system for electricity prices in a highly volatile market — built to capture extreme spikes while avoiding feature leakage.',
    bullets: [
      'Achieved a $7.58/MWh MAE on out-of-sample data, beating linear models by 53%.',
      'Detected extreme spikes ($300/MWh) at 0.98 ROC-AUC with 69% recall.',
    ],
    stack: ['Python', 'XGBoost', 'SHAP', 'FastAPI'],
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
    title: 'Agentic Self-Healing QA Testing',
    tag: 'Agentic AI Workflows', tone: 'violet', year: '2026', art: 'graph',
    desc: 'End-to-end multi-agent orchestration that generates, executes and auto-debugs Appium mobile scripts from plain-text requests.',
    bullets: [
      'Cut manual testing developer workload by 40% across 50+ scenarios.',
      'Secured a 64% first-run script compilation pass rate.',
    ],
    stack: ['LangGraph', 'ChromaDB', 'Appium', 'FastAPI'],
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
      'Programmed a 5-robot virtual factory in Pyglet (3D) & Pymunk (2D) to log obstacle paths and testing diagnostics.',
      'Benchmarked robotic fleet navigation inside NVIDIA Isaac Sim to evaluate obstacle-avoidance behaviour.',
      'Built microservices in Flask (Python) and Gin (Go) to VDA5050 and MQTT standards.',
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
  'YOLOv8', 'OpenCV', 'FastAPI', 'Power BI', 'Pandas', 'SHAP', 'ChromaDB',
  'Docker', 'Git', 'Pyglet', 'Pymunk', 'MQTT', 'Go (Gin)', 'Flask',
]

// ─── Chatbot knowledge base ──────────────────────────────────────────────────
export const BOT_KB = [
  {
    keywords: ['freelance', 'services', 'offer', 'website', 'web creation', 'build a website', 'web'],
    answer: 'Hari offers three freelance tracks: 1) custom interactive dashboards wiring API feeds into gorgeous layouts, 2) full-stack web page creation (landing grids, performant SEO, tailored CSS), and 3) AI automation & scripting with self-healing systems.',
  },
  {
    keywords: ['ercot', 'electricity', 'energy', 'price', 'forecast'],
    answer: 'The ERCOT model forecasts volatile electricity prices and flags spike thresholds under heavy class imbalance. Built with XGBoost, SHAP and FastAPI, it hit a $7.58/MWh MAE — 53% better than linear baselines.',
  },
  {
    keywords: ['langgraph', 'agentic', 'automation', 'appium', 'testing', 'self-healing', 'qa'],
    answer: 'Hari built a multi-agent self-healing QA pipeline. Using LangGraph and ChromaDB embeddings it parses natural-language test descriptions, builds Appium scripts, classifies failures and auto-patches code — cutting manual effort ~40%.',
  },
  {
    keywords: ['magna', 'intern', 'robot', 'isaac', 'pyglet', 'mechatronics', 'simulation'],
    answer: 'At Magna International Hari engineered a 5-robot simulated factory in Pyglet/Pymunk, benchmarked obstacle behaviour in NVIDIA Isaac Sim, and wrote Flask + Gin (Go) microservices to VDA5050 and MQTT standards.',
  },
  {
    keywords: ['skill', 'toolkit', 'language', 'python', 'stack', 'sql'],
    answer: 'Core stack: Python, SQL, REST APIs (FastAPI, Flask, Gin), ML (XGBoost, regression, random forest), agents (LangGraph, ChromaDB), computer vision (YOLOv8, OpenCV) and frontend (React, Tailwind CSS).',
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
  "I couldn't map that one. Try asking about freelance web work, the ERCOT forecasting model, the LangGraph QA agents, mechatronics at Magna, or the skills stack — or email Hari directly at hariharan2002.br@gmail.com."

export const BOT_SUGGESTIONS = [
  { label: 'Freelance offerings', q: 'What freelance services do you offer?' },
  { label: 'ERCOT forecasting', q: 'Explain your electricity prediction project' },
  { label: 'Web engineering', q: 'How can you build highly custom websites?' },
  { label: 'Magna & mechatronics', q: 'Tell me about your mechatronics and Magna internship' },
]
