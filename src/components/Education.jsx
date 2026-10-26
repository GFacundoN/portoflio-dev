import { useTranslation } from "react-i18next";
import EducationIcon from "../assets/icons/education.svg?react";
import LinkedInIcon from "../assets/icons/linkedinDark.svg?react";
import metaCertificate from "../assets/certificates/meta.webp";
import aiEssentialsCertificate from "../assets/certificates/aiEssentials.webp";
import tecnicoCertificate from "../assets/certificates/tecnico.webp";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Education() {
  const { t } = useTranslation();

  // Mismo orden que education.items en i18n. El ITBA está en curso: no tiene certificado todavía.
  const certificateUrls = [
    'https://innovacion.itba.edu.ar/programas/talento-joven/full-stack-developer',
    'https://coursera.org/verify/professional-cert/C0MXHYFZZMCD',
    'https://coursera.org/verify/FW7GQLFFZ5HP',
    'https://www.linkedin.com/posts/gfacundon_programaciaejn-tech-tecnicatura-activity-7407404351197040641-Bg14'
  ];

  const certificateImages = [
    null,
    metaCertificate,
    aiEssentialsCertificate,
    tecnicoCertificate
  ];

  const educationData = t("education.items", { returnObjects: true }).map((item, index) => ({
    id: index + 1,
    ...item,
    inProgress: index === 0,
    certificateUrl: certificateUrls[index],
    image: certificateImages[index]
  }));

  return (
    <section id="educacion" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader icon={EducationIcon} title={t("nav.education")} description={t("education.description")} />

        {/* Grid de Certificaciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {educationData.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 60}
              className="h-full"
            >
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700/50 hover:border-[#00EC7A]/30 transition-colors duration-200 group h-full flex flex-col">
                {/* Imagen del certificado con hover overlay */}
                <div className="relative h-48 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#00013A] via-[#0B1B5A] to-[#003B2A]">
                      <span className="text-5xl font-extrabold tracking-tight text-white">ITBA</span>
                      <span className="text-sm font-semibold text-[#00EC7A]">{t("education.inProgress")}</span>
                    </div>
                  )}
                  {/* Overlay con hover effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 group-focus-within:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 bg-black/40 px-4 py-2 rounded-lg text-white font-semibold text-sm border border-white/30 hover:bg-white/30"
                    >
                      {item.inProgress ? t("education.viewProgram") : t("education.viewCertificate")}
                    </a>
                  </div>
                </div>

                {/* Contenido de la card */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 mb-6">{item.period}</p>

                  {item.badge && (
                    <p className="self-start text-xs font-bold px-2.5 py-1 rounded-full mb-4 bg-[#00EC7A]/10 text-[#00A85A] dark:text-[#00EC7A] border border-[#00EC7A]/30">
                      {item.badge}
                    </p>
                  )}

                  {/* Descripción */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Botón LinkedIn */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://www.linkedin.com/in/gfacundon/details/certifications/"
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
