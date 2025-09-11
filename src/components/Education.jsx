import { useTranslation } from "react-i18next";
import EducationIcon from "../assets/icons/education.svg?react";

export default function Education() {
  const { t } = useTranslation();

  const educationData = [
    {
      id: 1,
      title: "Meta Front-End Developer Professional Certificate",
      institution: "Meta",
      period: "2024",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.Lorem ipsum dolor sit amet consectetur adipiscing elit quisque.",
      skills: ["React.js", "UX/UI Design", "JavaScript", "Git", "+2"],
      certificateUrl: "#",
      image: "/src/assets/certificates/meta.svg"
    },
    {
      id: 2,
      title: "Google AI Essentials Course",
      institution: "Google",
      period: "2024",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.Lorem ipsum dolor sit amet consectetur adipiscing elit quisque.",
      skills: ["Prompt Engineering", "Problem Solving", "Critical Thinking", "+3"],
      certificateUrl: "#",
      image: "/src/assets/certificates/aiEssentials.svg"
    },
    {
      id: 3,
      title: "Técnico en Programación",
      institution: "EEST N°7 José Hernandez",
      period: "2023 - 2024",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.Lorem ipsum dolor sit amet consectetur adipiscing elit quisque.",
      skills: ["JavaScript", "MySQL", "Java", "Project Managment", "+5"],
      certificateUrl: "#",
      image: "/src/assets/certificates/tecnico.svg"
    }
  ];

  return (
    <section id="educacion" className="py-20 px-4 md:px-20 text-white">
      <div className="max-w-[1300px] mx-auto">
        {/* Título */}
        <div className="flex items-center gap-3 mb-4">
          <EducationIcon className="w-10 h-10 text-white" />
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            {t("nav.education")}
          </h2>
        </div>

        {/* Descripción */}
        <p className="text-gray-400 max-w-3xl mb-8 leading-relaxed">
          {t("education.description")}
        </p>

        {/* Grid de Certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-[#00EC7A]/30 transition-all duration-300 group cursor-pointer"
            >
              {/* Imagen del certificado con hover overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                {/* Overlay con hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={item.certificateUrl}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-semibold text-sm border border-white/30 hover:bg-white/30"
                  >
                    {t("education.viewCertificate")}
                  </a>
                </div>
              </div>

              {/* Contenido de la card */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {item.institution}
                </p>
                
                {/* Descripción */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}