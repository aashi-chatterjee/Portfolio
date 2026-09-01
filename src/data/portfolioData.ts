import { ProfileData } from '../types';

export const initialProfileData: ProfileData = {
  name: "Aashi Chatterjee",
  title: "Product Designer & Engineer",
  tagline:
    "Designing thoughtful digital products where user needs, visual systems, and technology meet.",
  availability: "Open to Product Design & UI/UX opportunities",
  statusType: "available",

  bioSummary:
    "I'm a Product Designer with a B.Tech background and a strong interest in building digital products that are useful, intuitive, and enjoyable to use. My engineering background gives me a technical perspective on design, while my work in UI/UX has taught me to approach products from the user's perspective.",

  fullBiography: [
    "I'm a Product Designer with an engineering background who enjoys turning ideas and user problems into thoughtful digital experiences. I approach design with curiosity, combining user-centered thinking, visual design, and an understanding of how products are built.",
    "I enjoy working across the product design process—from understanding the problem and mapping user journeys to creating wireframes, high-fidelity interfaces, prototypes, and iterating based on feedback. I care about making products feel simple and intuitive without losing personality.",
    "Beyond product design, I've explored AI, machine learning, front-end development, and entrepreneurship through personal and academic projects. These experiences have helped me become a multidisciplinary problem solver who enjoys moving between research, design, technology, and product strategy."
  ],

  metrics: {
    yearsExperience: 1,
    projectsCompleted: 4,
    userCenteredFocus: "End-to-End",
    specialization: "Design + Tech",
    openSourceContributions: 0,
    codeCommits: "Interactive Projects"
  },

  socialLinks: {
    github: "https://github.com/aashi-chatterjee",
    linkedin: "https://www.linkedin.com/in/aashi-chatterjee-44613524a/",
    twitter: "https://x.com",
    email: "aashicofficial@yahoo.com",
    calendarUrl: "",
    location: "India (Open to Opportunities)"
  },

  skills: [
    // Product Design
    {
      id: "user-research",
      name: "User Research",
      category: "product_design",
      level: "Intermediate",
      proficiency: 75,
      years: 1,
      iconName: "Search",
      featured: true,
      description:
        "Identifying user needs, pain points, opportunities, and insights to inform product decisions"
    },
    {
      id: "user-flows",
      name: "User Flows & Journey Mapping",
      category: "product_design",
      level: "Intermediate",
      proficiency: 80,
      years: 1,
      iconName: "GitBranch",
      featured: true,
      description:
        "Mapping intuitive journeys, task flows, and information structures around user goals"
    },
    {
      id: "wireframing",
      name: "Wireframing & Prototyping",
      category: "product_design",
      level: "Intermediate",
      proficiency: 82,
      years: 1,
      iconName: "Layout",
      featured: true,
      description:
        "Creating low- and high-fidelity explorations, interactions, and clickable prototypes"
    },
    {
      id: "interaction-design",
      name: "Interaction Design",
      category: "product_design",
      level: "Intermediate",
      proficiency: 78,
      years: 1,
      iconName: "MousePointer2",
      featured: true,
      description:
        "Designing clear interactions, states, feedback, and frictionless task completion"
    },

    // UI Design
    {
      id: "visual-design",
      name: "Visual Design",
      category: "ui_design",
      level: "Intermediate",
      proficiency: 82,
      years: 1,
      iconName: "Palette",
      featured: true,
      description:
        "Typography, spacing, hierarchy, composition, responsive layouts, and visual consistency"
    },
    {
      id: "design-systems",
      name: "Design Systems",
      category: "ui_design",
      level: "Developing",
      proficiency: 70,
      years: 1,
      iconName: "Component",
      featured: true,
      description:
        "Creating reusable components, consistent patterns, and scalable interface structures"
    },
    {
      id: "responsive-design",
      name: "Responsive Design",
      category: "ui_design",
      level: "Intermediate",
      proficiency: 78,
      years: 1,
      iconName: "MonitorSmartphone",
      featured: false,
      description:
        "Designing adaptable experiences across desktop, tablet, and mobile breakpoints"
    },
    {
      id: "accessibility",
      name: "Accessibility",
      category: "ui_design",
      level: "Developing",
      proficiency: 60,
      years: 1,
      iconName: "Accessibility",
      featured: false,
      description:
        "Considering readable hierarchy, contrast, interaction clarity, and inclusive experiences"
    },

    // Design Tools
    {
      id: "figma",
      name: "Figma",
      category: "tools",
      level: "Intermediate",
      proficiency: 88,
      years: 1,
      iconName: "Figma",
      featured: true,
      description:
        "Interface design, components, auto layout, prototyping, wireframes, and design exploration"
    },
    {
      id: "figjam",
      name: "FigJam",
      category: "tools",
      level: "Intermediate",
      proficiency: 75,
      years: 1,
      iconName: "Workflow",
      featured: false,
      description:
        "Brainstorming, journey mapping, user flows, research synthesis, and collaborative ideation"
    },

    // Technology
    {
      id: "html-css",
      name: "HTML & CSS",
      category: "technology",
      level: "Intermediate",
      proficiency: 75,
      years: 1,
      iconName: "Code",
      featured: true,
      description:
        "Understanding front-end implementation and translating interface designs into responsive experiences"
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "technology",
      level: "Developing",
      proficiency: 60,
      years: 1,
      iconName: "Braces",
      featured: false,
      description:
        "Understanding core JavaScript concepts and their role in interactive web experiences"
    },
    {
      id: "react",
      name: "React",
      category: "technology",
      level: "Developing",
      proficiency: 60,
      years: 1,
      iconName: "Layers",
      featured: false,
      description:
        "Building component-based interfaces and understanding the relationship between design and implementation"
    },
    {
      id: "flutter",
      name: "Flutter",
      category: "technology",
      level: "Developing",
      proficiency: 55,
      years: 1,
      iconName: "Smartphone",
      featured: false,
      description:
        "Exploring cross-platform mobile interface development"
    },

    // AI & Data
    {
      id: "python",
      name: "Python",
      category: "ai_data",
      level: "Intermediate",
      proficiency: 70,
      years: 1,
      iconName: "Braces",
      featured: true,
      description:
        "Python for data analysis, machine learning projects, automation, and AI experimentation"
    },
    {
      id: "machine-learning",
      name: "Machine Learning",
      category: "ai_data",
      level: "Developing",
      proficiency: 62,
      years: 1,
      iconName: "BrainCircuit",
      featured: true,
      description:
        "Data preparation, model experimentation, evaluation, and applied machine learning projects"
    },
    {
      id: "generative-ai",
      name: "Generative AI",
      category: "ai_data",
      level: "Developing",
      proficiency: 65,
      years: 1,
      iconName: "Bot",
      featured: true,
      description:
        "AI-powered product concepts, prompt engineering, and integrating generative AI into user experiences"
    }
  ],

  projects: [
    {
      id: "old-money",
      title: "Old Money",
      shortDescription:
        "A luxury stylist booking platform connecting clients with professional stylists through a streamlined discovery and booking experience.",
      fullDescription:
        "Old Money is a product design concept for a premium styling platform. The experience covers stylist discovery, profiles, availability, booking, and role-based client and stylist journeys. The design focuses on reducing booking friction while maintaining a refined and cohesive visual identity.",
      category: "product_design",
      tags: [
        "Product Design",
        "UX Research",
        "User Flows",
        "Wireframing",
        "UI Design",
        "Figma"
      ],
      metrics: "End-to-end product design",
      accentColor: "from-amber-500/20 to-rose-500/20",
      githubUrl: "",
      liveUrl: "",
      featured: true,

      architecture: {
        frontend: ["Figma Prototype"],
        backend: [],
        database: [],
        infrastructure: []
      },

      keyFeatures: [
        "Stylist discovery and profile experience",
        "Availability-led appointment booking",
        "Separate client and stylist user journeys",
        "Premium visual system and responsive interface"
      ],

      challengesSolved:
        "Balanced a visually luxurious experience with a clear and low-friction booking flow while accounting for the different needs of clients and stylists."
    },

    {
      id: "chefgpt",
      title: "ChefGPT",
      shortDescription:
        "An AI-powered recipe generator that creates recipes from ingredients users already have at home.",
      fullDescription:
        "ChefGPT was designed around a simple everyday problem: users often have ingredients at home but don't know what to make with them. The product lets users enter their available ingredients and receive an AI-generated recipe without requiring sign-in or account creation. The experience intentionally removes unnecessary friction so users can reach the core value immediately.",
      category: "ai_product",
      tags: [
        "Product Design",
        "AI Product",
        "UX",
        "Interaction Design",
        "Figma"
      ],
      metrics: "Frictionless AI experience",
      accentColor: "from-orange-500/20 to-yellow-500/20",
      githubUrl: "",
      liveUrl: "",
      featured: true,

      architecture: {
        frontend: ["Web Interface"],
        backend: ["AI Recipe Generation"],
        database: [],
        infrastructure: []
      },

      keyFeatures: [
        "Ingredient-first input experience",
        "AI-generated recipes",
        "No login or sign-up required",
        "Simple interface focused on the primary task"
      ],

      challengesSolved:
        "Reduced unnecessary friction by removing account creation and keeping the primary experience focused on entering ingredients and receiving a useful result."
    },

    {
      id: "guided-journal",
      title: "Guided Journal",
      shortDescription:
        "A goal-oriented guided journaling product designed to encourage consistent habits and long-term engagement.",
      fullDescription:
        "I identified a gap between aesthetically appealing journals and journals that help people build lasting habits. Through user research, iterative design, and testing, I developed a guided journaling product focused on long-term engagement rather than one-time purchases. The product evolved from a simple journal concept into a broader experience with daily, weekly, and monthly planning, habit tracking, and reflection.",
      category: "product_design",
      tags: [
        "Product Strategy",
        "User Research",
        "UX Design",
        "Iteration",
        "Branding",
        "Figma"
      ],
      metrics: "Research-led product development",
      accentColor: "from-pink-500/20 to-purple-500/20",
      githubUrl: "",
      liveUrl: "",
      featured: true,

      architecture: {
        frontend: ["Digital Product"],
        backend: [],
        database: [],
        infrastructure: []
      },

      keyFeatures: [
        "Daily, weekly, and monthly planning",
        "Five-habit tracking system",
        "Reflection and guided prompts",
        "Vision board and goal-setting tools"
      ],

      challengesSolved:
        "Shifted the product from an aesthetic journal concept toward a guided experience designed around repeat engagement, habit formation, and user goals."
    },

    {
      id: "immedic-ai",
      title: "Immedic AI",
      shortDescription:
        "A machine-learning-based stroke risk prediction system using demographic, clinical, and lifestyle factors.",
      fullDescription:
        "Immedic AI is a stroke risk prediction concept that uses a machine learning model trained on demographic, clinical, and lifestyle factors to provide personalized risk assessment. The project gave me experience working with data, machine learning, and the challenge of translating a technically complex system into a more understandable user experience.",
      category: "ai_ml",
      tags: [
        "Python",
        "Machine Learning",
        "Scikit-learn",
        "Data Analysis",
        "Product Thinking"
      ],
      metrics: "Applied AI/ML project",
      accentColor: "from-blue-500/20 to-cyan-500/20",
      githubUrl: "",
      liveUrl: "",
      featured: false,

      architecture: {
        frontend: ["Web Interface"],
        backend: ["Machine Learning Module"],
        database: ["Healthcare Dataset"],
        infrastructure: []
      },

      keyFeatures: [
        "Stroke risk prediction",
        "Demographic and clinical feature inputs",
        "Machine learning model experimentation",
        "Personalized risk-oriented output"
      ],

      challengesSolved:
        "Worked on making a complex machine-learning prediction understandable and useful from a product and user perspective."
    }
  ],

  experience: [
    {
      id: "ml-intern-edunet",
      role: "Machine Learning Intern",
      company: "Edunet Foundation",
      location: "Remote",
      type: "Internship",
      period: "Oct 2025 — Nov 2025",

      description:
        "Worked on a deep learning project for predicting the Remaining Useful Life (RUL) of Lithium-ion batteries using NASA datasets.",

      achievements: [
        "Developed a BiLSTM pipeline to identify battery health patterns and predict Remaining Useful Life (RUL).",
        "Evaluated model performance on unseen data and conducted error analysis to identify degradation patterns and areas for improvement.",
        "Built an interactive Streamlit dashboard with an AI chatbot to translate battery metrics into accessible technical insights."
      ],

      technologies: [
        "Python",
        "TensorFlow",
        "BiLSTM",
        "Machine Learning",
        "Streamlit",
        "Generative AI"
      ]
    },
    {
      id: "independent-product-designer",
      role: "Independent Product Designer",
      company: "Personal & Academic Projects",
      location: "India",
      type: "Independent",
      period: "2024 — Present",

      description:
        "Designing and exploring digital products across AI, lifestyle, productivity, and service-booking experiences.",

      achievements: [
        "Designed end-to-end product experiences spanning problem definition, user flows, wireframes, visual design, prototyping, and iteration.",
        "Explored AI-powered product concepts including ChefGPT and Immedic AI while considering usability, clarity, and friction.",
        "Built a product-focused portfolio combining UX/UI design with front-end and AI/ML knowledge.",
        "Developed a guided journaling product and explored its branding, positioning, pricing, and customer experience."
      ],

      technologies: [
        "Figma",
        "FigJam",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python",
        "AI/ML"
      ]
    }
  ],

  achievements: [
    {
      id: "sih-2022",
      title: "Finalist in Smart India Hackathon 2022",
      subtitle: "National Hackathon • Ministry of Education & AICTE",
      description: "Contributed to the development of our project and represented the team during presentations, showcasing both technical input and team leadership.",
      year: "2022",
      category: "Hackathon & Leadership",
      highlightBadge: "National Finalist",
      iconName: "Trophy",
      tags: ["Technical Development", "Team Leadership", "Product Pitch", "Rapid Prototyping"]
    },
    {
      id: "immedic-ai-spokesperson",
      title: "Spokesperson & Researcher for Final-Year Project",
      subtitle: "ImmedicAI • Stroke Prediction & Healthcare Model",
      description: "Presented our final-year project ImmedicAI, a stroke prediction model, as the team spokesperson—demonstrating our innovation and technical insights to evaluators with clarity and confidence.",
      year: "2024 - 2025",
      category: "Research & Healthcare AI",
      highlightBadge: "Project Spokesperson",
      iconName: "BrainCircuit",
      tags: ["Stroke Prediction", "AI / ML Research", "Technical Spokesperson", "Presentation & Evaluation"]
    },
    {
      id: "startup-mahakumbh",
      title: "Content Creator & Manager for Startup Mahakumbh Team",
      subtitle: "Startup Mahakumbh • Marketing & Promotion",
      description: "Served as content creator and manager for our startup Mahakumbh team, leveraging animation and ad-style editing to effectively promote our ideas and boost engagement.",
      year: "2024",
      category: "Content & Strategy",
      highlightBadge: "Content Lead",
      iconName: "Clapperboard",
      tags: ["Content Creation", "Motion Animation", "Ad-Style Editing", "Engagement & Growth", "Brand Storytelling"]
    }
  ],

  education: [
    {
      id: "btech",
      degree: "Bachelor of Technology",
      field: "Engineering",
      institution: "Swami Vivekananda University, Barrackpore",
      period: "2025",
      honors: "",
      relevantCoursework: [
        "Programming",
        "Data Structures",
        "Database Systems",
        "User Interface Design",
        "Artificial Intelligence / Machine Learning"
      ]
    }
  ],

  philosophy: [
    {
      title: "Start With the Problem",
      description:
        "Good design begins with understanding what we're actually trying to solve instead of jumping straight into screens.",
      icon: "Search"
    },
    {
      title: "Less Friction, More Clarity",
      description:
        "I believe interfaces should help users accomplish their goals without making them think unnecessarily about how the product works.",
      icon: "Sparkles"
    },
    {
      title: "Design With Purpose",
      description:
        "I care about aesthetics, but visual decisions should support the experience, communicate hierarchy, and serve the user's goals.",
      icon: "Palette"
    },
    {
      title: "Build, Test, Iterate",
      description:
        "The first solution is rarely the best one. I prefer exploring, testing, learning, and refining rather than trying to get everything perfect on the first attempt.",
      icon: "RefreshCw"
    },
    {
      title: "Technology Is Part of the Design",
      description:
        "My engineering background helps me understand technical constraints and collaborate with developers, allowing me to design experiences that are both ambitious and realistic.",
      icon: "Code"
    }
  ]
};
