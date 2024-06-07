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
  java,
  sql,
  cpp,
  burp,
  website,
  chat,
  docker,
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
  [`<p> Hi my name is Emre <br>`],
  [" I am a passionate software developer <p>"],
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
    id: "react",
  },
  {
    name: "Java",
    icon: java,
    id: "jdk",
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
    name: "git",
    icon: git,
    id: "hub",
  },
  {
    name: "sql",
    icon: sql,
    id: "database",
  },
  {
    name: "docker",
    icon: docker,
    id: "docker",
  },
  {
    name: "cpp",
    icon: cpp,
    id: "cplusplus",
  },
  {
    name: "Burpsuite",
    icon: burp,
    id: "burpsuite",
  },
];

const experiences = [
  {
    title: "Project Support / Junior Engineer",
    company_name: "Department of National Defence Canada",
    icon: goc,
    iconBg: "#383E56",
    date: "September 2023 - Present",
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
    name: "Client-Server_TCP_Chat",
    description:
      "Basic client-server TCP chat application created using C++ language. It allows users to communicate with each other using TCP sockets.",
    tags: [
      {
        name: "C++",
        color: "text-fuchsia-400",
      } 
    ],
    image: chat,
    link: "https://github.com/emrebengue/Client-Server_TCP_Chat",
  },
 ];

export { technologies, experiences, heroText, projects };
