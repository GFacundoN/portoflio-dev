import ProjectVerduleria from "../assets/projects/verduleria-la-jungla.webp";
import ShotAndestex from "../assets/projects/andestex-landing-page.webp";
import ShotYpf from "../assets/projects/ypf-uniformes-tienda-online.webp";
import AvatarSara from "../assets/avatars/saracalonso.webp";
import AvatarSameDay from "../assets/avatars/same_day_design.webp";

// Los textos (necesidad, solución, resultado) viven en i18n: clients.items, en el mismo orden.
export const clientsData = [
  {
    id: "andestex-landing",
    shot: ShotAndestex,
    alt: "andestex",
    technologies: ["WordPress", "Elementor", "Figma"],
    liveUrl: "https://andestex.com.ar",
  },
  {
    id: "andestex-store",
    shot: ShotYpf,
    alt: "ypf",
    technologies: ["Astro", "E-commerce", "Figma"],
    liveUrl: "https://tienda.ypfuniformes.com.ar",
  },
  {
    id: "la-jungla",
    image: ProjectVerduleria,
    alt: "laJungla",
    technologies: ["React", "TailwindCSS", "Spring Boot", "MySQL"],
    liveUrl: "https://www.linkedin.com/posts/gfacundon_softwaredevelopment-fullstack-react-activity-7405641592180674560--ZpV",
    githubUrl: "https://github.com/GFacundoN/Verduleria",
  },
];

// Reseñas de Fiverr: `lang` es el idioma original y `text` trae la reseña en ambos idiomas.
// El país se traduce con i18n (countries.<código>).
// Avatar: foto de perfil de Fiverr, o la inicial con los colores que usa Fiverr cuando no hay foto.
export const testimonialsData = [
  {
    author: "adominguez1969",
    country: "AR",
    initial: { letter: "A", bg: "#D1F5E4", fg: "#0A6B3D" },
    project: "AndesTex",
    rating: 4.7,
    lang: "en",
    text: {
      en: "Excellent delivery in time and quality, will work with him again without a doubt.",
      es: "Excelente entrega en tiempo y calidad, sin dudas volvería a trabajar con él.",
    },
  },
  {
    author: "saracalonso",
    country: "ES",
    avatar: AvatarSara,
    featured: true,
    rating: 5,
    lang: "es",
    text: {
      es: "Muy buen trabajo en Figma. Ha quedado todo súper limpio y organizado, justo lo que buscaba. Da gusto trabajar con gente así de profesional, mil gracias :)",
      en: "Great work in Figma. Everything turned out super clean and organized, just what I was looking for. It's a pleasure to work with someone this professional, thanks a lot :)",
    },
  },
  {
    author: "pnaa78",
    country: "PT",
    initial: { letter: "P", bg: "#6E2410", fg: "#FFFFFF" },
    rating: 5,
    lang: "en",
    text: {
      en: "Facundo delivered as expected, we will definitely work together again.",
      es: "Facundo entregó lo que esperábamos, sin dudas vamos a volver a trabajar juntos.",
    },
  },
  {
    author: "same_day_design",
    country: "US",
    avatar: AvatarSameDay,
    rating: 5,
    lang: "en",
    text: {
      en: "Has a great attitude and willing to take feedback.",
      es: "Tiene muy buena actitud y está abierto a recibir feedback.",
    },
  },
];
