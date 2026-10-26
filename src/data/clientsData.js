import ProjectVerduleria from "../assets/projects/verduleria.webp";
import ShotAndestex from "../assets/projects/andestex.webp";
import ShotYpf from "../assets/projects/ypf-uniformes.webp";

// Los textos (necesidad, solución, resultado) viven en i18n: clients.items, en el mismo orden.
export const clientsData = [
  {
    id: "modica",
    featured: true,
    technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "SheetJS", "Apache POI"],
  },
  {
    id: "andestex-landing",
    shot: ShotAndestex,
    technologies: ["WordPress", "Elementor", "Figma"],
    liveUrl: "https://andestex.com.ar",
  },
  {
    id: "andestex-store",
    shot: ShotYpf,
    technologies: ["Astro", "E-commerce", "Figma"],
    liveUrl: "https://tienda.ypfuniformes.com.ar",
  },
  {
    id: "la-jungla",
    image: ProjectVerduleria,
    technologies: ["React", "TailwindCSS", "Spring Boot", "MySQL"],
    liveUrl: "https://www.linkedin.com/posts/gfacundon_softwaredevelopment-fullstack-react-activity-7405641592180674560--ZpV",
    githubUrl: "https://github.com/GFacundoN/Verduleria",
  },
];

// Reseñas de Fiverr, en su idioma original.
export const testimonialsData = [
  {
    author: "adominguez1969",
    country: "Argentina",
    project: "AndesTex",
    rating: 4.7,
    text: "Excellent delivery in time and quality, will work with him again without a doubt.",
    lang: "en",
  },
  {
    author: "saracalonso",
    country: "España",
    rating: 5,
    recurring: true,
    text: "Muy buen trabajo en Figma. Ha quedado todo súper limpio y organizado, justo lo que buscaba. Da gusto trabajar con gente así de profesional, mil gracias :)",
    lang: "es",
  },
  {
    author: "pnaa78",
    country: "Portugal",
    rating: 5,
    text: "Facundo delivered as expected, we will definitely work together again.",
    lang: "en",
  },
  {
    author: "same_day_design",
    country: "United States",
    rating: 5,
    text: "Has a great attitude and willing to take feedback.",
    lang: "en",
  },
];
