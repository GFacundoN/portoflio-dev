export const contactData = {
  email: "gandolfofacundonicolas@gmail.com",
  whatsappNumber: "5491176396326",
  linkedin: "https://www.linkedin.com/in/gfacundon/",
  github: "https://github.com/GFacundoN",
  fiverr: "https://es.fiverr.com/gfacundon",
  cv: {
    es: "/cv/Facundo-Gandolfo-CV-ES.pdf",
    en: "/cv/Facundo-Gandolfo-Resume-EN.pdf",
  },
};

export const whatsappUrl = (message) =>
  `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(message)}`;
