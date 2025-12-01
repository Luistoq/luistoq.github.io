// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'luistoq',
  },
  base: '/',

  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'manual',
      manual: {
        projects: [
          'luistoq/OCR-Quality-Evaluation-Framework-Python-LanguageTool',
          'luistoq/AI-PDF-Assistant-RAG-Chatbot-using-LlamaIndex-Ollama',
          'luistoq/Computer-Vision-Libraries-Benchmark-Streamlit-Python',
          'luistoq/Computer-Vision-for-the-Energy-Sector-Practical-Showcase',
          'luistoq/Wind-Power-Forecasting-App-Streamlit-PCA-LSTM',
        ],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'RAHD AI – Decommissioning Intelligence Platform',
          description:
            'AI-powered document and data intelligence system for large-scale infrastructure decommissioning. Built to extract, structure, and analyse complex technical information, accelerating planning workflows and significantly reducing manual review effort.',
          imageUrl: 'public/images/projects/rahd.png',
          link: 'https://rahd.ai/',
        },
        {
          title: 'HPR ROV – Visual Digital Twin Platform',
          description:
            'Contributed to subsea inspection platform development using Visual Digital Twins. Built video ingestion and AI-assisted reporting tools with Azure Functions, Blob Storage, and Python microservices, integrating LLM-based summarisation for inspection insights.',
          imageUrl: 'public/images/projects/hpr.png',
          link: 'https://www.linkedin.com/posts/jan-stander-3ba0aa91_digitaltwin-energy-subsea-activity-7369674392114528257-2vgb?utm_source=share&utm_medium=member_desktop',
        },
        {
          title: 'AISUS Machine Learning – Anomaly Detection',
          description:
            '£250k Innovate UK project developing deep learning models for remote visual inspection of offshore assets. Multi-label defect classification (pitting, cracks, corrosion) achieving 94%+ accuracy using PyTorch.',
          imageUrl: 'public/images/projects/aisus.png',
          link: 'https://www.youtube.com/watch?v=vMQuRHQAhNc',
        },
        {
          title: 'TRAC – Industrial Data Platform',
          description:
            'Micro-SaaS processing millions of ultrasonic readings with automated validation and visualisation. Reduced engineering report cycles from 5 days to 1 day.',
          imageUrl: 'public/images/projects/trac.png',
          link: 'https://www.linkedin.com/posts/trac-energy-ltd_datavisualisation-3dplot-tracenergy-ugcPost-7321117211912265729-7-CV?utm_source=social_share_send&utm_medium=member_desktop_web',
        },
        {
          title: 'Innosport AI – Performance Coaching',
          description:
            'Sports performance platform with pose analysis and real-time feedback. Built with React, Azure Functions, and Python microservices for video processing.',
          imageUrl: 'public/images/projects/innosport.png',
          link: 'https://www.innosport.ai/',
        },
      ],
    },
  },

  seo: {
    title: 'Luis Toral | Lead AI Engineer',
    description:
      'Lead AI Engineer specialising in RAG systems, LLMs, and production AI. Building intelligent systems across regulatory, industrial, and consumer domains.',
    imageURL: '',
  },

  social: {
    linkedin: 'luis-toral-251007',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'luistoq@outlook.com',
  },

  resume: {
    fileUrl: '',
  },

  skills: [
    'Python',
    'FastAPI',
    'PyTorch',
    'TensorFlow',
    'LangChain',
    'LlamaIndex',
    'RagFlow',
    'Weaviate',
    'PostgreSQL',
    'React',
    'Docker',
    'Azure',
    'Git',
    'CI/CD',
    'RAG Systems',
    'LLMs',
    'Computer Vision',
  ],

  experiences: [
    {
      company: 'Ventex Studio',
      position: 'Lead AI Engineer',
      from: 'October 2024',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Pixel View Consulting',
      position: 'Machine Learning Engineer',
      from: 'December 2023',
      to: 'October 2024',
      companyLink: '',
    },
    {
      company: 'AISUS (Innovate UK KTP)',
      position: 'Machine Learning Engineer',
      from: 'July 2021',
      to: 'December 2023',
      companyLink: '',
    },
    {
      company: 'Robert Gordon University',
      position: 'Machine Learning Research Assistant',
      from: 'January 2020',
      to: 'December 2021',
      companyLink: 'https://www.rgu.ac.uk',
    },
  ],

  certifications: [
    {
      name: 'Innovate UK Knowledge Transfer Partnership',
      body: 'Two-year industry-academic collaboration developing deep learning models for remote visual inspection',
      year: '2021–2023',
      link: '',
    },
    {
      name: 'ICDAR Conference Presentation',
      body: 'Presented research on automated corrosion circuit identification in engineering diagrams',
      year: '2021',
      link: '',
    },
  ],

  educations: [
    {
      institution: 'Robert Gordon University',
      degree: 'MRes Data Science',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Robert Gordon University',
      degree: 'MSc Oil & Gas Finance and Accounting',
      from: '2020',
      to: '2020',
    },
    {
      institution: 'ITESM (Tecnológico de Monterrey)',
      degree: 'BSc Mechanical Engineering (Honours)',
      from: '2012',
      to: '2018',
    },
  ],

  publications: [
    {
      title: 'A Deep Learning Digitisation Framework to Mark up Corrosion Circuits in Piping and Instrumentation Diagrams',
      conferenceName: 'ICDAR 2021 Workshops',
      journalName: 'Lecture Notes in Computer Science',
      authors: 'Luis Toral, Carlos Francisco Moreno-García, Eyad Elyan, Shahram Memon',
      link: 'https://doi.org/10.1007/978-3-030-86159-9_18',
      description:
        'Semi-automated framework using deep learning to localise pipe specifications and connection points in undigitised P&ID drawings. Enables engineers to mark up corrosion sections with minimal error rates. September 2021.',
    },
    {
      title: 'Digital Transformation for Offshore Assets: A Deep Learning Framework for Weld Classification in Remote Visual Inspections',
      conferenceName: '',
      journalName: 'Lecture Notes in Computer Science',
      authors: 'Luis Toral, et al.',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-34204-2_19',
      description:
        'Deep learning framework for automating classification of circumferential welds in subsea environments. Achieved 86.75% accuracy using EfficientNet CNN architecture on 4,000 images, demonstrating significant reduction in inspection time.',
    },
  ],

  blog: {
    source: '',
    username: '',
    limit: 3,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'corporate',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'corporate',
      'light',
      'dark',
    ],
  },

  footer: ``,

  enablePWA: true,
};

export default CONFIG;
