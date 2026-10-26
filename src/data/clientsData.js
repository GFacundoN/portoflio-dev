import ProjectVerduleria from "../assets/projects/verduleria.webp";
import ShotAndestex from "../assets/projects/andestex.webp";
import ShotYpf from "../assets/projects/ypf-uniformes.webp";
import AvatarSara from "../assets/avatars/saracalonso.webp";
import AvatarSameDay from "../assets/avatars/same_day_design.webp";

// Los textos (necesidad, solución, resultado) viven en i18n: clients.items, en el mismo orden.
export const clientsData = [
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

// Reseñas de Fiverr, en su idioma original. El país se traduce con i18n (countries.<código>).
// Avatar: foto de perfil de Fiverr, o la inicial con los colores que usa Fiverr cuando no hay foto.
export const testimonialsData = [
  {
    author: "adominguez1969",
    country: "AR",
    initial: { letter: "A", bg: "#D1F5E4", fg: "#0A6B3D" },
    project: "AndesTex",
    rating: 4.7,
    text: "Excellent delivery in time and quality, will work with him again without a doubt.",
    lang: "en",
  },
  {
    author: "saracalonso",
    country: "ES",
    avatar: AvatarSara,
    rating: 5,
    recurring: true,
    text: "Muy buen trabajo en Figma. Ha quedado todo súper limpio y organizado, justo lo que buscaba. Da gusto trabajar con gente así de profesional, mil gracias :)",
    lang: "es",
  },
  {
    author: "pnaa78",
    country: "PT",
    initial: { letter: "P", bg: "#6E2410", fg: "#FFFFFF" },
    rating: 5,
    text: "Facundo delivered as expected, we will definitely work together again.",
    lang: "en",
  },
  {
    author: "same_day_design",
    country: "US",
    avatar: AvatarSameDay,
    rating: 5,
    text: "Has a great attitude and willing to take feedback.",
    lang: "en",
  },
];
