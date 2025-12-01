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
            'AI-powered document and data intelligence system for large-scale infrastructure decommissioning. Built to extract, structure, and analyze complex technical information, accelerating planning workflows and significantly reducing manual review effort.',
          imageUrl:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
          link: 'https://rahd.ai/',
        },

        {
          title: 'ROHM – Building Regulations Assistant',
          description:
            'Full-stack RAG system with semantic search for UK building regulations. Built with FastAPI, Weaviate, LlamaIndex, React, and Tailwind CSS. Achieves 85% faster regulatory information access.',
          imageUrl:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
          link: 'https://github.com/luistoq',
        },
        {
          title: 'AISUS Computer Vision – Anomaly Detection',
          description:
            '£250k Innovate UK project developing deep learning models for remote visual inspection of offshore assets. Multi-label defect classification (pitting, cracks, corrosion) achieving 94%+ accuracy using PyTorch.',
          imageUrl:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop',
          link: 'https://www.youtube.com/watch?v=vMQuRHQAhNc',
        },
        {
          title: 'TRAC – Industrial Data Platform',
          description:
            'Micro-SaaS processing millions of ultrasonic readings with automated validation and visualisation. Reduced engineering report cycles from 5 days to 1 day.',
          imageUrl:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
          link: 'https://github.com/luistoq',
        },
        {
          title: 'Innosport AI – Performance Coaching',
          description:
            'Sports performance platform with pose analysis and real-time feedback. Built with React, Azure Functions, and Python microservices for video processing.',
          imageUrl:
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop',
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
      position: 'Computer Vision Engineer',
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
    defaultTheme: 'nord',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
    ],
  },

  footer: ``, // Empty footer - removed "Made with GitProfile"

  enablePWA: true,
};

export default CONFIG;
