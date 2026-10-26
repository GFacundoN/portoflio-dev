import ProjectEscapadas from "../assets/projects/escapadas.webp";
import ProjectKeyhub from "../assets/projects/keyhub.webp";
import ProjectMario from "../assets/projects/mario.webp"

import AngularIcon from "../assets/icons/angularIcon.svg?react";
import TailwindIcon from "../assets/icons/tailwindIcon.svg?react";
import SpringIcon from "../assets/icons/springIcon.svg?react";
import SqlIcon from "../assets/icons/sqlIcon.svg?react";
import EJSIcon from "../assets/icons/ejsIcon.svg?react"
import ExpressIcon from "../assets/icons/expressIcon.svg?react"
import JavaIcon from "../assets/icons/javaIcon.svg?react"

// La Verdulería "La Jungla" pasó a la sección de clientes (clientsData.js).
export const projectsData = [
  {
    id: 1,
    image: ProjectEscapadas,
    highlighted: true,
    technologies: [
      { name: "Angular", icon: AngularIcon, color: "#912123" },
      { name: "TailwindCSS", icon: TailwindIcon, color: "#003159" },
      { name: "Java+SpringBoot", icon: SpringIcon, color: "#256E00" },
      { name: "MySQL", icon: SqlIcon, color: "#3E3A5C" }
    ],
    githubUrl: "https://github.com/GFacundoN/Olimpiadas"
  },
  {
    id: 2,
    image: ProjectKeyhub,
    technologies: [
      { name: "Express", icon: ExpressIcon, color: "#535353" },
      { name: "TailwindCSS", icon: TailwindIcon, color: "#003159" },
      { name: "EJS", icon: EJSIcon, color: "#194B00" },
      { name: "MySQL", icon: SqlIcon, color: "#3E3A5C" }
    ],
    githubUrl: "https://github.com/GFacundoN/Keyhub"
  },
  {
    id: 3,
    image: ProjectMario,
    technologies: [
      { name: "Java", icon:JavaIcon, color: "#143D56" },
      { name: "POO", icon:JavaIcon, color: "#143D56" },
      { name: "2D Graphics", icon:JavaIcon, color: "#143D56" },
      { name: "Sprite Animation", icon:JavaIcon, color: "#143D56" },
      { name: "Collision Detection", icon:JavaIcon, color: "#143D56" },
    ],
    githubUrl: "https://github.com/GFacundoN/Super-Mario-Java",
    // Grabado del juego real (ver public/media)
    featured: true,
    video: {
      webm: "/media/super-mario-java.webm",
      mp4: "/media/super-mario-java.mp4",
      poster: "/media/super-mario-java-poster.webp"
    }
  }
];
