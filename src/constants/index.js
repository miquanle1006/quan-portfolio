import {
  meta,
  shopify,
  starbucks,
  tesla,
  apple,
  windev,
  hip,
  talengen,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  goverment,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Test Techincian",
    company_name: "Apple Inc",
    icon: apple,
    iconBg: "#FAF9F6",
    date: "September 2023 - Present",
    points: [
      "Develop and maintain Python test scripts to validate hardware reliability across multiple product lines, especially MacOS, and ensure compliance with key Apple requirements.",
      "Improve hardware test cycle efficiency by 15% by executing automated Python scripts, performing root cause analysis on system logs, and implementing process improvements with the engineering team.",
      "Accelerate issue resolution by managing defect tracking and documentation within an Agile framework, serving as the key point of contact between QA and engineering teams.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "TalenGen",
    icon: talengen,
    iconBg: "#A02334",
    date: "March 2024 - June 2024",
    points: [
      "Enhanced the user experience by building three major interactive features with the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Streamlined the front-end development workflow by creating a design system in Figma and building a corresponding set of pixel-perfect, responsive React UI components.",
      "Improved average page load time by 25% across devices by implementing front-end code-splitting in React and optimizing backend NodeJS API queries.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Windeliv",
    icon: windev,
    iconBg: "#65B741",
    date: "Nov 2015 - Nov 2016",
    points: [
      "Monitored the delivery application on the Android platform.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Modified and optimized map based on Google Map API to get an exact location in real time",
      "Customized notifications through the Firebase cloud to support users.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Hip Inc",
    icon: hip,
    iconBg: "#fbc3bc",
    date: "Dec 2016 - Apr 2017",
    points: [
      "Implemented and optimized a calendar with a new version, developed a feature allowing users to watch horoscopes and take a picture to customize the calendar background using Android Studio.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed  API endpoints using Java Gson and XMLpullparser. Managed a serverless database using SQLite.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Designed notifications push using OneSignal to get events from Google Calendar API",
      "Developed features that extracted permission through mobile devices allowing users automatically install and update applications to support people with disabilities",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-green",
    name: "FedBridge",
    description:
      "A full-stack application to help laid-off federal employees find private-sector careers.",
    link: "https:/github.com/QuanLew/Hackathon.git",
  },
  {
    iconUrl: estate,
    theme: "btn-back-blue",
    name: "Hackathon",
    description:
      "Developed a Flask application for an AI chatbot interface using the Ollama language model and Chroma vector store, focused on Macroeconomic Researcher Food Security Time Series.",
    link: "https:/github.com/QuanLew/Hackathon.git",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-yellow",
    name: "DecryptToID",
    description:
      "Developed a PHP application for text encryption/decryption from input boxes or files.",
    link: "https:/github.com/QuanLew/DecryptTOID.git",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "G-Talkie",
    description:
      "Developed a mobile application enabling users to transcribe their voice into composed emails in real time.",
    link: "https://github.com/QuanLew/GTalkie01.git",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Imprint Control",
    description:
      "Built a website empowering users to efficiently manage office printers and employees.",
    link: "https://github.com/QuanLew/cs157A.git",
  },
];
