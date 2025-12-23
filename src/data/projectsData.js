import ProjectEscapadas from "../assets/projects/escapadas.webp";
import ProjectVerduleria from "../assets/projects/verduleria.webp";
import ProjectKeyhub from "../assets/projects/keyhub.webp";
import ProjectMario from "../assets/projects/mario.webp"

import AngularIcon from "../assets/icons/angularIcon.svg?react";
import TailwindIcon from "../assets/icons/tailwindIcon.svg?react";
import SpringIcon from "../assets/icons/springIcon.svg?react";
import SqlIcon from "../assets/icons/sqlIcon.svg?react";
import ReactIcon from "../assets/icons/reactIcon.svg?react"
import EJSIcon from "../assets/icons/ejsIcon.svg?react"
import ExpressIcon from "../assets/icons/expressIcon.svg?react"
import JavaIcon from "../assets/icons/javaIcon.svg?react"

export const projectsData = [
  {
    id: 1,
    image: ProjectVerduleria,
    technologies: [
      { name: "React + JavaScript", icon: ReactIcon, color: "#004A86" },
      { name: "TailwindCSS", icon: TailwindIcon, color: "#003159" },
      { name: "Java+SpringBoot", icon: SpringIcon, color: "#256E00" },
      { name: "MySQL", icon: SqlIcon, color: "#3E3A5C" }
    ],
    githubUrl: "https://github.com/GFacundoN/Verduleria",
    liveUrl: "https://www.linkedin.com/posts/gfacundon_softwaredevelopment-fullstack-react-activity-7405641592180674560--ZpV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-HXC0BQGjCUTK036VbuOaBM4qu4eXxvpc"
  },
  {
    id: 2,
    image: ProjectEscapadas,
    technologies: [
      { name: "Angular", icon: AngularIcon, color: "#912123" },
      { name: "TailwindCSS", icon: TailwindIcon, color: "#003159" },
      { name: "Java+SpringBoot", icon: SpringIcon, color: "#256E00" },
      { name: "MySQL", icon: SqlIcon, color: "#3E3A5C" }
    ],
    githubUrl: "https://github.com/GFacundoN/Olimpiadas",
    liveUrl: "https://www.linkedin.com/in/gfacundon/"
  },
  {
    id: 3,
    image: ProjectKeyhub,
    technologies: [
      { name: "Express", icon: ExpressIcon, color: "#535353" },
      { name: "TailwindCSS", icon: TailwindIcon, color: "#003159" },
      { name: "EJS", icon: EJSIcon, color: "#194B00" },
      { name: "MySQL", icon: SqlIcon, color: "#3E3A5C" }
    ],
    githubUrl: "https://github.com/GFacundoN/Keyhub",
    liveUrl: "https://www.linkedin.com/in/gfacundon/"
  },
  {
    id: 4,
    image: ProjectMario,
    technologies: [
      { name: "Java", icon:JavaIcon, color: "#143D56" },
      { name: "POO", icon:JavaIcon, color: "#143D56" },
      { name: "2D Graphics", icon:JavaIcon, color: "#143D56" },
      { name: "Sprite Animation", icon:JavaIcon, color: "#143D56" },
      { name: "Collision Detection", icon:JavaIcon, color: "#143D56" },
    ],
    githubUrl: "https://github.com/GFacundoN/Super-Mario-Java",
    liveUrl: "https://www.linkedin.com/in/gfacundon/"
  }
];
