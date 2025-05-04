import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHackerrank
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";
import projectImage7 from "../assets/project7.png";
import projectImage8 from "../assets/project8.png";
import projectImage9 from "../assets/project9.png";
import projectImage10 from "../assets/project10.png";
import projectImage11 from "../assets/project11.png";
import projectImage12 from "../assets/project12.png";

import { RiReactjsLine, RiGithubFill, RiJavascriptFill } from "react-icons/ri";
import { TbBrandAws, TbBrandPython, TbBrandDocker, TbBrandTypescript, TbBrandTailwind } from "react-icons/tb";
import { SiMongodb,SiKubernetes, SiPostman, SiJenkins, SiSonarqube } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { href: "#bio", label: "Bio" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#certification", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const HERO = {
  name: "SANTIAGO GOMEZ DE LA TORRE ROMERO",
  greet: "Hello there! 👋🏻",
  description:
    "I am a computer engineer, actively seeking technology and web development projects where I can contribute proactively. My focus is on designing digital solutions that balance functionality and design. Currently, I am deepening my knowledge in web development to refine my skills and pursue new professional challenges.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Professional Homepage",
    description:
      "This professional page has been carefully designed to represent who I am as a developer. Visitors can explore my work, download my resume, and access my social media profiles.",
    image: projectImage1,
    githubLink: "https://github.com/sgomez-dev/profesional-homepage",
    demoLink: "https://santiagogomez-one.vercel.app/#/home",
  },
  {
    id: 2,
    name: "Budget App",
    description:
      "A financial management app to track expenses, set budgets, and monitor balances. Its minimalist interface provides charts and reports for efficient spending management.",
    image: projectImage2,
    githubLink: "https://github.com/sgomez-dev/Budget-app",
    demoLink: "https://budget-app.sgomez.dev",
  },
  {
    id: 3,
    name: "To-Do List",
    description:
      "A task management app to organize and prioritize daily activities. Its simple interface lets users add, edit, and complete tasks, boosting productivity and focus.",
    image: projectImage3,
    githubLink: "https://github.com/sgomez-dev/ToDo",
    demoLink: "https://todo-app.sgomez.dev",
  },
  {
    id: 4,
    name: "Packatrack",
    description:
      "A package tracking app to streamline delivery management. Users can log deliveries, track incidents, calculate earnings, and monitor stats with a user-friendly interface.",
    image: projectImage4,
    githubLink: "https://github.com/sgomez-dev/Packatrack",
    demoLink: "https://packatrack.vercel.app/#/inicio-sesion",
  },
  {
    id: 5,
    name: "Skyzen",
    description:
      "A modern weather application built with React and Vite that provides real-time weather information with a intuitive user interface. The application features automatic geolocation and weather forecast.",
    image: projectImage5,
    githubLink: "https://github.com/sgomez-dev/Skyzen.git",
    demoLink: "https://skyzen.sgomez.dev",
  },
  {
    id: 6,
    name: "Professional Portfolio",
    description:
      "A professional portfolio showcasing skills, projects, and experience with a modern design. Includes intro, projects, skills, and work, using React for interactivity.",
    image: projectImage6,
    githubLink: "https://github.com/sgomez-dev/sgomez-portfolio.git",
    demoLink: "https://sgomez.dev",
  },
  {
    id: 7,
    name: "CorvexTalk.AI",
    description:
      "A web-based text translation application enhanced with integrated artificial intelligence, utilizing the OpenAI API. The front is hosted with Vercel and the backend is hosted on AWS.",
    image: projectImage7,
    githubLink: "https://github.com/sgomez-dev/CorvexTalk.AI.git",
    demoLink: "https://corvextalk.sgomez.dev",
  },
  {
    id: 8,
    name: "Jenkins",
    description:
      "A Jenkins server managing a CI/CD pipeline for web app deployment, automating build, test, and deployment. Integrated with AWS for scalable cloud-based delivery.",
    image: projectImage8,
    githubLink: "https://jenkins.sgomez.dev",
    demoLink: "https://jenkins.sgomez.dev",
  },
  {
    id: 9,
    name: "EliteEstate - Manager",
    description:
      "Progressive Web App (PWA) for real estate professionals to efficiently manage properties, appointments, and areas. Modern, responsive interface for portfolio and schedule control.",
    image: projectImage9,
    githubLink: "https://github.com/sgomez-dev/EliteEstate-Manager.git",
    demoLink: "https://elite-estate-manager.vercel.app/",
  },
  {
    id: 10,
    name: "Docs - SGOMEZ",
    description:
      "Visual documentation hub showcasing personal tech stack, organized by category in a galaxy-themed interface with structured, easy-to-navigate content.",
    image: projectImage10,
    githubLink: "https://github.com/sgomez-dev/docs.git",
    demoLink: "https://docs.sgomez.dev/",
  },
  {
    id: 11,
    name: "Sortlab",
    description:
      "SortLab combines dynamic animations with structured explanations to dissect algorithmic logic, offering users a hands-on understanding of efficiency, implementation, and real-world applications of sorting techniques.",
    image: projectImage11,
    githubLink: "https://github.com/sgomez-dev/sortlab.git",
    demoLink: "https://sortlab.sgomez.dev",
  },
  {
    id: 12,
    name: "SonarQube",
    description:
      "SonarQube is a platform for managing code quality and security. It provides a comprehensive set of tools for analyzing code, identifying issues, and enforcing coding standards.",
    image: projectImage12,
    githubLink: "https://sonarqube.sgomez.dev",
    demoLink: "https://sonarqube.sgomez.dev",
  },
];

export const BIO = [
  "I’m Santiago Gómez de la Torre Romero, a passionate computer engineer with a strong foundation in IT and web development. My career has evolved through hands-on experience in Sysadmin, IT, and software development, fueled by a self-taught mindset and a drive to master tools like React, Node.js, and CI/CD. Since 2021, I’ve been part of the FUNIBER scholarship program and later transferred to the PROFER program at the European University of the Atlantic, where I deepened my expertise and strengthened my collaborative skills within development and IT-focused teams.",
  "Currently, I work as a multidisciplinary web developer creating innovative, user-centered applications. I’ve participated in events like Hack2Progress, which sharpened my ability to innovate and perform under pressure. As an Organizer for GDG Santander, I actively contribute to the local tech community. One of my most rewarding challenges has been building EliteEstate Manager, a real estate management app developed in collaboration with agent Irma Romero Morales. This real-world project allowed me to apply my technical skills to create a solution tailored to managing properties, appointments, and zones—an experience that deepened my understanding of both tech and the real estate industry.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "3+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "3+ years",
  },
  {
    icon: <TbBrandTypescript className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "TypeScript",
    experience: "2+ years",
  },
  {
    icon: <TbBrandTailwind className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "TailwindCSS",
    experience: "2+ years",
  },
  {
    icon: <TbBrandPython className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Python",
    experience: "2+ years",
  },
  {
    icon: <TbBrandAws className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "AWS",
    experience: "1+ year",
  },
  {
    icon: <SiJenkins className="text-4xl text-neutral-400 lg:text-5xl" />,
    name: "Jenkins",
    experience: "2+ year",
  },
  {
    icon: <TbBrandDocker className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Docker",
    experience: "2+ year",
  },
  {
    icon: <SiKubernetes className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Kubernetes",
    experience: "2+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "2+ years",
  },
  {
    icon: <DiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+ year",
  },
  {
    icon: <BiLogoFirebase className="text-4xl text-orange-700 lg:text-5xl" />,
    name: "Firebase",
    experience: "2+ year",
  },
  {
    icon: <SiPostman className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Postman",
    experience: "1+ year",
  },
  {
    icon: <RiGithubFill className="text-4xl text-white lg:text-5xl" />,
    name: "Github",
    experience: "4+ years",
  },
  {
    icon: <SiSonarqube className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "SonarQube",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Freelance Developer - EliteEstate Manager",
    company: "Irma Romero Morales",
    duration: "February 2025 - Current",
    description:
      "Developed a Progressive Web App (PWA) for a real estate company, managing properties, appointments, and areas. The app features a user-friendly interface for portfolio and schedule control.",
  },
  {
    title: "Organizer at Google Developer Group (GDG) Santander",
    company: "GDG Santander, Cantabria, Spain",
    duration: "November 2024 - Current",
    description:
      "Member of the Google Developers Group, responsible for organizing events to attract developers and tech enthusiasts, while fostering knowledge-sharing within the community.",
  },
  {
    title: "IT Support Technician",
    company: "Universidad Europea del Atlántico, Santander, Cantabria, Spain",
    duration: "July 2023 - July 2024",
    description:
      "Member of the IT team, responsible for implementing infrastructure solutions and providing specialized technical support to ensure operational efficiency and stability.",
  },
  {
    title: "Sysadmin & QA",
    company:
      "Fundación Universitaria Iberoamericana (FUNIBER), Santander, Cantabria, Spain",
    duration: "July 2022 - July 2023",
    description:
      "Led infrastructure solutions, ensuring seamless system integration. Managed software quality assurance (QA) to uphold product standards. Oversaw server maintenance and team project management to ensure reliability and alignment with organizational goals.",
  },
  {
    title: "Email Drafting and Guidelines Team",
    company:
      "Fundación Universitaria Iberoamericana (FUNIBER), Santander, Cantabria, Spain",
    duration: "September 2021 - July 2022",
    description:
      "As part of the FUNIBER Scholarship Program, I contributed to drafting and structuring guidelines for academic and international emails, focusing on writing and editing communications and ensuring compliance with corporate correspondence standards.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor’s Degree in Computer Engineering",
    institution:
      "Universidad Europea del Atlántico, Santander, Cantabria, Spain",
    duration: "September 2021 - June 2026",
    description:
      "The Bachelor’s Degree in Computer Engineering at Universidad Europea del Atlántico prepares professionals to solve problems analytically and strategically. In a constantly evolving technological landscape, this program equips students to play a key role in the business value chain, integrating computer science into the strategic vision of organizations and preparing them to adapt to global changes.",
  },
];
export const CERTIFICATION = [
  {
    title: "Frontend Developer (React)",
    institution: "HackerRank",
    date: "May 2025",
    url: "https://drive.google.com/file/d/1CQH076Ss81QmlBZJ9wSyvOx7HTk-gK-y/view?usp=sharing",
  },
  {
    title: "SCHNEIDER ELECTRIC Hackathon 2025 - IT Challenge",
    institution: "NUWE",
    date: "April 2025",
    url: "https://drive.google.com/file/d/15L_2k12CsYcxovvqJzgoC56p05Ypz-xC/view?usp=sharing",
  },
  {
    title: "Master en JavaScript 2025: Aprender JS, Angular, Node, Astro",
    institution: "Udemy",
    date: "March 2025",
    url: "https://drive.google.com/file/d/10FqgAblTBp76CKhc31ZnV0LW-D3kkXuB/view?usp=sharing",
  },
  {
    title: "The Web Developer Bootcamp 2025",
    institution: "Udemy",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1XQsTwo88A7isHT2pSBEuoNTFjYhzY81j/view?usp=sharing",
  },
  {
    title: "Azure DevOps: Flujos de CI/CD",
    institution: "Platzi",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1pcAssPwA5b3rep77kcW8azReUbFYXzC9/view?usp=sharing",
  },
  {
    title: "Certificado de Participación Hack2Progress",
    institution: "CIC Consulting Informático",
    date: "March 2025",
    url: "https://drive.google.com/file/d/14IbZJ8hqiM2lUPb1YBftxyfgWTB6jK-d/view?usp=sharing",
  },
  {
    title: "Machine Learning y Data Science",
    institution: "Udemy",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1isr8dB1w1pUFD4T704k2xI0R4rUrV_N4/view?usp=sharing",
  },
  {
    title: "Cómo incluir la sostenibilidad en tu estrategia de cloud computing",
    institution: "LinkedIn",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1JYMq9yOPD0qRMB4gB_Gy9SbZ3qo3ZVh8/view?usp=sharing",
  },
  {
    title: "Resolución de problemas con el pensamiento crítico",
    institution: "LinkedIn",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1G_RkQD-O23AEpnj_JKOEjJ2wYeFFFMXN/view?usp=sharing",
  },
  {
    title: "Prompt Engineering",
    institution: "LinkedIn",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1SegpNdQ74TAK6TrkJDaHNcjINyoXjXY1/view?usp=sharing",
  },
  {
    title: "Master en React",
    institution: "Udemy",
    date: "December 2024",
    url: "https://drive.google.com/file/d/1woMqIXOjTDeTFTQXy2kdL33zgIMe4WYJ/view?usp=sharing",
  },
  {
    title: "Legacy Front End",
    institution: "freecodecamp",
    date: "November 2024",
    url: "https://drive.google.com/file/d/1ohmcttf7Ca81d_JhHg9sdReB1zHwaWqO/view?usp=sharing",
  },
  {
    title: "JavaScript Algorithms and Data Structures (Beta)",
    institution: "freecodecamp",
    date: "November 2024",
    url: "https://drive.google.com/file/d/1DGM402G6EroGk3meZJnBRufImBAnMNVn/view?usp=sharing",
  },
  {
    title: "Responsive Web Design",
    institution: "freecodecamp",
    date: "November 2024",
    url: "https://drive.google.com/file/d/1YFgrFhli2ruL2XrMhXtfYfsnCuwpDQBe/view?usp=sharing",
  },
  {
    title: "Front End Development Libraries",
    institution: "freecodecamp",
    date: "November 2024",
    url: "https://drive.google.com/file/d/1kUM-BD4FoJUl70jTpp-5UVhrCgotXh2n/view?usp=sharing",
  },
  {
    title: "Certificado de Participación",
    institution: "Universidad Europea del Atlantico",
    date: "July 2024",
    url: "https://drive.google.com/file/d/1wfl_0Dlw17CMrVMIq51I7Sgf5UPhd5Kz/view?usp=sharing",
  },
];

export const RECOMMENDATIONS = [
  {
    image: "https://media.licdn.com/dms/image/v2/D4E03AQE7VZNHvDOVLQ/profile-displayphoto-shrink_100_100/B4EZSGwQ6uGwAU-/0/1737427588690?e=1750291200&v=beta&t=cgw1puK-o4wXeIBOvBFTMrAvD-b5u1r2qAmYh8tS-uk",
    name: "Irma Romero",
    date: "13 de abril de 2025",
    description:
      "Quiero recomendar ampliamente el trabajo de Santiago, quien desarrolló una aplicación a medida para mi empresa inmobiliaria. La app es muy amigable, fácil de usar y ha sido una herramienta clave para optimizar nuestros procesos internos, especialmente en la gestión de inventarios, citas y tareas administrativas. El servicio fue rápido, profesional y con una atención excelente en cada etapa del proceso.",
    url: "https://www.linkedin.com/in/sgomez-dev",
    profileRecommenderUrl: "https://www.linkedin.com/in/irma-romero-928a9b26/",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D4E03AQG2j3rsn_90-w/profile-displayphoto-shrink_100_100/B4EZVIOF0SHMAY-/0/1740673409279?e=1749686400&v=beta&t=LzMVRj_a85sYsfkXhsS7LtvPcfWo_3oojLD12t_1FVo",
    name: "Alejandro Rubio Cao",
    date: "10 de abril de 2025",
    description: [
      "Tuve la oportunidad de trabajar con Santiago en varios proyectos durante nuestra carrera en Ingeniería Informática y dentro del programa de becas de la Universidad Europea del Atlántico, y siempre ha demostrado un gran talento y compromiso. Su capacidad para resolver problemas complejos y su enfoque analítico lo distinguen como un profesional destacado en el campo de la tecnología. ",
      "No tengo dudas de que su talento y dedicación serán un gran aporte en cualquier desafío que emprenda. Recomiendo a Santiago sin reservas para cualquier oportunidad en el ámbito de la informática.",
    ],
    url: "https://www.linkedin.com/in/sgomez-dev",
    profileRecommenderUrl: "https://www.linkedin.com/in/alejandro-rubio-cao-82b0181b5/",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG9jnTClQ05Ag/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1731864248424?e=1749686400&v=beta&t=p6CN-7A2AZ5P3eE3InSw9jj4zsxsIsBGFJvBtaxemwc",
    name: "Manuel Rondon",
    date: "26 de Marzo de 2025",
    description:
      "Tuve la fortuna de trabajar junto a Santiago al inicio de nuestras carreras y desde entonces destacaba su habilidad para adaptarse rapidamente a nuevos conceptos y tecnologías. Mas adelante tambien tuve la oportunidad de participar junto a él en el hackathon Hack2Progress 2025, en el cual demostró cuanto habia crecido su capacidad tecnica y que conservaba esa gran habilidad de adaptarse a cualquier entorno técnico de manera casi inmediata ha sido una pieza vital en nuestra participación y considero que sería una gran adición a cualquier equipo en el que se encuentre",
    url: "https://www.linkedin.com/in/sgomez-dev",
    profileRecommenderUrl: "https://www.linkedin.com/in/manuel-rondon-1b2816218/",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFm1Wit0e7oLg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1673003659908?e=1749686400&v=beta&t=pENYbM81St9ace9zE6hZbZFWKWy0LsuST4JCPaWJh_E",
    name: "Edgar León Du Solier",
    date: "24 de Marzo de 2025",
    description:
      "Tuve el gusto de trabajar junto a Santiago en el área de administración de sistemas, acompañándolo en su proceso de formación. Desde el inicio demostró una gran capacidad para entender rápidamente conceptos técnicos complejos, destacándose especialmente por su velocidad de aprendizaje y la facilidad con la que adoptaba nuevos conocimientos. Su proactividad, acompañada de una notable habilidad para resolver problemas, hacen de él un excelente profesional en crecimiento. Sin duda, recomiendo a Santiago como una gran incorporación para cualquier equipo de trabajo",
    url: "https://www.linkedin.com/in/sgomez-dev",
    profileRecommenderUrl: "https://www.linkedin.com/in/edgarleond/",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/sgomez.dev/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/sgomez-dev",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sgomez-dev",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.hackerrank.com/profile/contacto185",
    icon: <FaHackerrank fontSize={25} className="hover:opacity-80" />,
  },
];
