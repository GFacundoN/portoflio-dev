import { useTranslation } from "react-i18next";
import EducationIcon from "../assets/icons/education.svg?react";
import LinkedInIcon from "../assets/icons/linkedinDark.svg?react";

export default function Education() {
  const { t } = useTranslation();

  const certificateUrls = [
    'https://coursera.org/verify/professional-cert/C0MXHYFZZMCD',
    'https://coursera.org/verify/FW7GQLFFZ5HP',
    'https://www.linkedin.com/posts/gfacundon_programaciaejn-tech-tecnicatura-activity-7407404351197040641-Bg14?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-HXC0BQGjCUTK036VbuOaBM4qu4eXxvpc'
  ];

  const educationData = t("education.items", { returnObjects: true }).map((item, index) => ({
    id: index + 1,
    title: item.title,
    institution: item.institution,
    period: item.period,
    description: item.description,
    skills: item.skills,
    certificateUrl: certificateUrls[index],
    image: `/src/assets/certificates/${index === 0 ? 'meta' : index === 1 ? 'aiEssentials' : 'tecnico'}.svg`
  }));

  return (
    <section id="educacion" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        {/* Título */}
        <div className="flex items-center gap-3 mb-4">
          <EducationIcon className="w-10 h-10 text-gray-900 dark:text-white" />
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            {t("nav.education")}
          </h2>
        </div>

        {/* Descripción */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mb-6 md:mb-8 leading-relaxed">
          {t("education.description")}
        </p>

        {/* Grid de Certificaciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700/50 hover:border-[#00EC7A]/30 transition-all duration-100 group cursor-pointer h-full"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-semibold text-sm border border-white/30 hover:bg-white/30"
                  >
                    {t("education.viewCertificate")}
                  </a>
                </div>
              </div>

              {/* Contenido de la card */}
              <div className="p-6">
                <h3 className="text-gray-900 dark:text-white font-bold text-lg leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-8 md:mb-10">
                  {item.institution}
                </p>
                
                {/* Descripción */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón LinkedIn */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://www.linkedin.com/in/gfacundon/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E8EAEC] text-[#2D3340] font-bold px-4 py-2 rounded-xl flex items-center gap-2 text-sm hover:bg-[#dce0e3] transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" /> {t("education.moreCertifications")}
          </a>
        </div>

      </div>
    </section>
  );
}