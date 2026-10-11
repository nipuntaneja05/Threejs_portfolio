export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 5,
    name: 'Research & Honors',
    href: '#research',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 7,
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1wf7-bdfODg9busC7QduwMbC7663WG5D1/view?usp=sharing',
  },
];

export const myProjects = [
  {
    title: 'Evermemos - AI Agent Long-Term Memory System',
    desc: 'Evermemos is a state-of-the-art long-term memory system for AI agents that segments ongoing conversations via LLM topic-shift detection and distills them into structured units (episodes, atomic facts, and time-bounded foresights). It clusters memories into thematic profiles and dynamically resolves conflicting facts based on temporal recency.',
    subdesc:
      'Engineered hybrid retrieval fusing dense embeddings with BM25 via Reciprocal Rank Fusion (RRF), filters expired foresights, and incorporates an LLM context-sufficiency loop that iteratively rewrites queries until complete context is retrieved. Benchmarked across 500 conversations: achieved 84.8% fact deduplication (2,277 to 347) with a 4.1s average retrieval latency. Built with Python, Llama 3.3 70B (Groq), Qdrant, BM25, and Sentence Transformers.',
    href: 'https://github.com/nipuntaneja05/Evermemos',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#1E1B4B',
      border: '0.2px solid #312E81',
      boxShadow: '0px 0px 60px 0px rgba(99, 102, 241, 0.35)',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Groq API',
        path: '/assets/groq.png',
      },
      {
        id: 2,
        name: 'NLP',
        path: '/assets/nlp.png',
      },
      {
        id: 3,
        name: 'Pinecone / Vector DB',
        path: '/assets/pinecone.png',
      },
      {
        id: 4,
        name: 'FastAPI',
        path: '/assets/fastapi.png',
      },
    ],
  },
  {
    title: 'Visualizer.ai - Full-Stack Data & Analytics Platform',
    desc: 'Visualizer.ai is an intelligent analytics platform that turns unstructured CSV or relational database data into rich, interactive Plotly dashboards with zero manual charting effort. Features automated data cleaning, statistical preprocessing, and ARIMA time-series forecasting.',
    subdesc:
      'Equipped with natural-language chart editing: users modify complex visualizations using conversational prompts. Includes a production-grade text-to-SQL module (powered by Gemini & MongoDB RAG) that translates natural-language inquiries into validated queries plotted instantaneously. Built with React, Vite, FastAPI, Pandas, Plotly, Llama 3 70B, and Gemini.',
    href: 'https://github.com/nipuntaneja05/visualizer.ai',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.ico',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'FastAPI',
        path: '/assets/fastapi.png',
      },
      {
        id: 3,
        name: 'Groq API',
        path: '/assets/groq.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongoDB.png',
      },
    ],
  },
  {
    title: 'PRISM - Predictive Risk Intelligence via Social Mobility',
    desc: 'PRISM revolutionizes traditional credit underwriting and risk assessment by introducing "Life Entropy Scoring" — a proprietary formulation that evaluates the stability and trajectory of personal mobility patterns to infer creditworthiness without relying exclusively on credit bureaus.',
    subdesc:
      'Engineered for Bank of India and selected as Winner of the Finshield Hackathon (IIT Hyderabad × Bank of India) with ~$4,000 in cash awards. Leverages Graph Neural Networks (GNNs), PyTorch, React.js, and MongoDB to assess non-linear financial patterns with industry-grade precision.',
    href: 'https://github.com/nipuntaneja05/PRISM-IITH',
    texture: '/textures/project/PRISMDEMO.mp4',
    logo: '/assets/PRISMLOGO.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'PyTorch',
        path: '/assets/pytorchlogo.png',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongoDB.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/nodeJS.png',
      },
    ],
  },
  {
    title: 'MediGyaan AI - Medical Knowledge Chatbot',
    desc: 'MediGyaan AI is an advanced AI-powered clinical assistance chatbot engineered to deliver hallucination-free answers to healthcare and pharmaceutical inquiries by grounding responses in verified medical textbooks and research literature.',
    subdesc:
      'Built with FastAPI, Groq API, Pinecone vector embeddings, and React.js. Utilizes reciprocal semantic search and hybrid NLP context ranking to extract and synthesize clinical guidelines accurately in real time.',
    href: 'https://github.com/nipuntaneja05/MedBot',
    texture: '/textures/project/MediGyaanAI.mp4',
    logo: '/assets/medigyaan-logo.png',
    logoStyle: {
      backgroundColor: '#16213E',
      border: '0.2px solid #1A2A52',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'FastAPI',
        path: '/assets/fastapi.png',
      },
      {
        id: 2,
        name: 'Pinecone',
        path: '/assets/pinecone.png',
      },
      {
        id: 3,
        name: 'Groq API',
        path: '/assets/groq.png',
      },
      {
        id: 4,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 5,
        name: 'NLP',
        path: '/assets/nlp.png',
      },
    ],
  },
  {
    title: 'Discord AI Community Role Manager',
    desc: 'A smart community moderation and role orchestration agent that empowers online community managers to manage permissions and automated roles using natural-language instructions (e.g. "Grant Member role to active contributors with >20 messages").',
    subdesc:
      'Eliminates cumbersome slash commands and complex server bot dashboards. Built with Discord.js, Groq API (Llama 3 70B), TailwindCSS, and React.js to provide real-time rule execution and activity-triggered role synchronization.',
    href: 'https://github.com/nipuntaneja05/Discord-role-bot',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/discord-logo.jpeg',
    logoStyle: {
      backgroundColor: '#1E293B',
      border: '0.2px solid #334155',
      boxShadow: '0px 0px 60px 0px rgba(56, 189, 248, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Discord.js',
        path: '/assets/discord-logo.jpeg',
      },
      {
        id: 2,
        name: 'Groq API',
        path: '/assets/groq.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Amazon',
    pos: 'Applied Scientist Intern — Central Machine Learning Team',
    duration: 'Jul 2026 – Present',
    title:
      'Working on an AI abuse-investigation platform where Bedrock LLM agents debate each flagged order before a judge agent rules; engineered a high-throughput DynamoDB result cache and audit log so repeat investigations require zero LLM calls. Built an SOP evaluation tool translating natural language into Athena SQL with deterministic rule validation, scored with an automated F1 threshold cutoff optimizer. Developed a per-order investigator chatbot with prompt caching and tool use. Co-authored 2 EACL 2027 Industry Track research submissions on Multi-Agent Debate and LLM-Compiled Decision Rules.',
    icon: '/assets/Amazon-logo-.jpg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Grovio.ai',
    pos: 'AI and Full-Stack Developer',
    duration: 'Mar 2025 – Jun 2025',
    title:
      'Built and deployed LLM-powered moderation agents for Discord and Telegram communities that automated ~85% of repetitive operational tasks (spam filtering, toxicity detection, rule enforcement) and decreased member churn by 25%. Engineered full-stack data systems with a Python (Flask) backend and React.js frontend, powering real-time dashboards and analytics used for high-impact community growth decisions. Designed NLP pipelines for policy enforcement, sentiment analysis, and chat summarization, enabling groups to scale to 1,000+ members seamlessly.',
    icon: '/assets/grovio-logo.jpeg',
    animation: 'clapping',
  },
];

export const publications = [
  {
    id: 1,
    venue: 'ICLR 2027 Submission',
    title: 'Beyond Single Positives: An Empirical Audit of Solution-Set Adaptation for Code Retrieval',
    authors: 'Nipun Taneja et al.',
    focus: 'Code Retrieval & Solution-Set Adaptation',
    desc: 'Empirical audit evaluating solution-set adaptation and representation learning across dense and sparse code retrieval benchmarks.',
  },
  {
    id: 2,
    venue: 'EACL 2027 Industry Track',
    title: 'Bounding the Cost of Grounded Multi-Agent Debate: An Adversarial System for Investigation Automation',
    authors: 'Amazon Central Machine Learning Team',
    focus: 'Multi-Agent Debate • Cost Optimization',
    desc: 'Co-authored at Amazon. Adversarial Bedrock LLM debate system between investigator agents with DynamoDB cost-bounded caching.',
  },
  {
    id: 3,
    venue: 'EACL 2027 Industry Track',
    title: 'Trust the Draft, Verify the Policy: A Deployed Loop for LLM-Compiled Decision Rules',
    authors: 'Amazon Central Machine Learning Team',
    focus: 'Policy Verification • Deterministic Decision Rules',
    desc: 'Co-authored at Amazon. Deployed industrial loop where LLMs compile operational policies into deterministic verification engines.',
  },
];

export const hackathonsAndHonors = [
  {
    id: 1,
    title: 'Finshield Hackathon',
    subtitle: 'IIT Hyderabad × Bank of India',
    badge: 'Winner ($3000)',
    desc: 'Built PRISM with Life Entropy Scoring via GNNs.',
  },
  {
    id: 2,
    title: 'Innov8 3.0',
    subtitle: 'IIT Delhi × Eightfold.ai (2025)',
    badge: 'Finalist',
    desc: 'National finalist for LLM automation systems.',
  },
  {
    id: 3,
    title: 'Shield 1.0',
    subtitle: 'BPRD — Law Enforcement (2025)',
    badge: 'Finalist',
    desc: 'National finalist for AI security & risk analysis tooling.',
  },
  {
    id: 4,
    title: 'Bharatiya Antariksh Hackathon',
    subtitle: 'ISRO (2025)',
    badge: 'Top 3',
    desc: 'Ranked Top 3 nationwide for geospatial ML models.',
  },
];