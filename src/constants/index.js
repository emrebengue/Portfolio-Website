import {
  goc,
  // javascript,
  // html,
  // css,
  // reactjs,
  tailwind,
  // nodejs,
  git,
  python,
  // cpp,
  // burp,
  website,
  docker,
  // monitor,
  c,
  rust,
  event_scraper,
  fastapi,
  nextjs,
  aws,
  terraform,
  vercel,
  railway,
  supabase,
  pmi,
} from "../assets";

export const navLinks = [
  {
    id: "#",
    title: "Home",
  },
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#projects",
    title: "Projects",
  },
];

const heroText = [
  ["Hi, I'm Emre!"],
  ["I ^write^ -> %commit% -> &push...&"],
  ["Code that compiles *eventually*"],
];

const technologies = [
  {
    name: "Rust",
    icon: rust,
    id: "rust",
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  //   id: "js",
  // },
  {
    name: "Python",
    icon: python,
    id: "py",
  },
  {
    name: "C",
    icon: c,
    id: "c",
  },
  {
    name: "Next.js",
    icon: nextjs,
    id: "nextjs",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    id: "tailcss",
  },
  {
    name: "AWS",
    icon: aws,
    id: "aws",
  },
  {
    name: "Vercel",
    icon: vercel,
    id: "vercel",
  },
  {
    name: "Supabase",
    icon: supabase,
    id: "supabase",
  },
  {
    name: "Railway",
    icon: railway,
    id: "railway",
  },
  {
    name: "Terraform",
    icon: terraform,
    id: "terraform",
  },
  {
    name: "Docker",
    icon: docker,
    id: "docker",
  },

  {
    name: "FastAPI",
    icon: fastapi,
    id: "fastapi",
  },

  {
    name: "Git",
    icon: git,
    id: "git",
  },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  //   id: "react",
  // },

  // {
  //   name: "Node JS",
  //   icon: nodejs,
  //   id: "node",
  // },

  // {
  //   name: "CPP",
  //   icon: cpp,
  //   id: "cplusplus",
  // },

  // {
  //   name: "Burpsuite",
  //   icon: burp,
  //   id: "burpsuite",
  // },
  // {
  //   name: "HTML 5",
  //   icon: html,
  //   id: "html5",
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  //   id: "css3",
  // },
];

const experiences = [
  {
    title: "Salesforce Developer",
    company_name: "Rothmans, Benson & Hedges",
    icon: pmi,
    iconBg: "#FFFFFF",
    date: "December 2025 - Present",
    points: ["Frontend developement & Data analysis"],
  },
  {
    title: "Software Developer",
    company_name: "Department of National Defence Canada",
    icon: goc,
    iconBg: "#383E56",
    date: "September 2023 - August 2024",
    points: [
      "Led the migration of mapping systems from Microsoft Visio to Qualiware using DNDAF Framework standards, improving data accuracy and operational efficiency.",
      "Built a survey application with JavaScript frontend and database backend, integrating data from multiple Excel sources and storing respondent data.",
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Statistics Canada",
    icon: goc,
    iconBg: "#383E56",
    date: "May 2022 - April 2023",
    points: [
      "Developed business intelligence solutions using PowerBI and PowerApps to streamline product analysis workflows.",
      "Managed Sparx Enterprise Architect administration including user account management and system maintenance for business operations.",
      "Created interactive dashboards with drill-down capabilities for detailed data examination across multiple Excel data sources.",
      "Designed business process models and UML diagrams using Sparx Enterprise Architect.",
    ],
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Website created using React JS, Tailwind CSS, and Vite. It is a personal portfolio website that showcases my skills and projects.",
    tags: [
      {
        name: "React JS",
        color: "text-rose-600",
      },
      {
        name: "Tailwind CSS",
        color: "text-sky-600",
      },
      {
        name: "Vite",
        color: "text-green-100",
      },
    ],
    image: website,
    link: "https://github.com/emrebengue/Portfolio-Website",
  },
  {
    name: "Event Scraper",
    description:
      "Web-based event extractor using AWS Textract, S3, and Boto3 for document processing and storage; integrated Selenium for web scraping, Flask/FastAPI for backend APIs, and LLMs for structured data extraction.",
    tags: [
      {
        name: "Python",
        color: "text-yellow-300",
      },
      {
        name: "AWS",
        color: "text-orange-500",
      },
      {
        name: "FastAPI",
        color: "text-emerald-600",
      },
      {
        name: "Selenium",
        color: "text-sky-600",
      },
    ],
    image: event_scraper,
    link: "https://github.com/emrebengue/Event_Scraper",
  },
  // {
  //   name: "System Monitoring",
  //   description:
  //     "Encrypted System Monitor is a comprehensive tool designed to track and log CPU and memory usage in real-time, featuring an integrated web server for secure data access and visualization. The project utilizes the Poco library for efficient and robust implementation.",
  //   tags: [
  //     {
  //       name: "C++",
  //       color: "text-fuchsia-400",
  //     },
  //     {
  //       name: "Bash",
  //       color: "text-green-600",
  //     },
  //     {
  //       name: "Makefile",
  //       color: "text-orange-400",
  //     }
  //   ],
  //   image: monitor,
  //   link: "https://github.com/emrebengue/System-Monitoring",
  // },
];

export { technologies, experiences, heroText, projects };
