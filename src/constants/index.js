import {
  goc,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  python,
  cpp,
  burp,
  website,
  docker,
  monitor,
  c,
  rust,
  event_scraper,
  fastapi,
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
  ["^Rust^ enjoyer and &bug& architect"],
  ["I write code that compiles *eventually*"]
];


const technologies = [
  {
    name: "Rust",
    icon: rust,
    id: "rust",
  },
  {
    name: "docker",
    icon: docker,
    id: "docker",
  },
  {
    name: "JavaScript",
    icon: javascript,
    id: "js",
  },
  {
    name: "Python",
    icon: python,
    id: "py",
  },
  {
    name: "FastAPI",
    icon: fastapi,
    id: "fastapi",
  },
  {
    name: "React JS",
    icon: reactjs,
    id: "react",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    id: "tailcss",
  },
  {
    name: "Node JS",
    icon: nodejs,
    id: "node",
  },
  {
    name: "C",
    icon: c,
    id: "c",
  },
  {
    name: "CPP",
    icon: cpp,
    id: "cplusplus",
  },
  {
    name: "git",
    icon: git,
    id: "hub",
  },
  {
    name: "Burpsuite",
    icon: burp,
    id: "burpsuite",
  },
  {
    name: "HTML 5",
    icon: html,
    id: "html5",
  },
  {
    name: "CSS 3",
    icon: css,
    id: "css3",
  },
];

const experiences = [
  {
    title: "Project Support / Junior Engineer",
    company_name: "Department of National Defence Canada",
    icon: goc,
    iconBg: "#383E56",
    date: "September 2023 - August 2024",
    points: [
      "Led the migration of a map initially created in Microsoft Visio to Qualiware, leveraging the DNDAF Framework to enhance eﬃciency and accuracy.",
      "Worked on developing a survey website using JavaScript, designed to retrieve data from multiple Excel spreadsheets; implemented features for storing respondent data in an SQLite database.",
    ],
  },
  {
    title: "Enterprise Architecture",
    company_name: "Statistics Canada",
    icon: goc,
    iconBg: "#383E56",
    date: "September 2022 - April 2023",
    points: [
      "Utilized Sparx Enterprise Architect to create various intricate models, diagrams, and reports, eﬀectively conveying architectural principles and facilitating informed decision-making processes.",
      "Performed regular maintenance tasks on Sparx Enterprise Architect software, assuming an administrative role to manage user accounts, both past and present. Ensured smooth operation and user management for optimal utilization of the software platform.",
      "Streamlined product analysis process by designing a comprehensive PowerBI report and creating a PowerApps application. Facilitated detailed drill-down view for enhanced examination of data on Excel sheets.",
      "Attended daily team meetings and weekly divisional meetings to give updates on my work.",
    ],
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Website created using React JS, Tailwind CSS, and Vite. It is a personal portfolio website that showcases my skills and projects.",
    tags: [{
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
      }
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
        color: "text-sky-600"
      }
    ],
    image: event_scraper,
    link: "https://github.com/emrebengue/Event_Scraper",
  },
  {
    name: "System Monitoring",
    description:
      "Encrypted System Monitor is a comprehensive tool designed to track and log CPU and memory usage in real-time, featuring an integrated web server for secure data access and visualization. The project utilizes the Poco library for efficient and robust implementation.",
    tags: [
      {
        name: "C++",
        color: "text-fuchsia-400",
      },
      {
        name: "Bash",
        color: "text-green-600",
      },
      {
        name: "Makefile",
        color: "text-orange-400",
      }
    ],
    image: monitor,
    link: "https://github.com/emrebengue/System-Monitoring",
  },
 ];

export { technologies, experiences, heroText, projects };
