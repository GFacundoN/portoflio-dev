import { useTranslation } from "react-i18next";
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
    <section id="educacion" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader
          title={t("nav.education")}
          description={t("education.description")}
          aside={
            <a
              href="https://www.linkedin.com/in/gfacundon/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900 dark:text-white underline decoration-gray-400/60 underline-offset-4 hover:decoration-current transition-colors"
            >
              {t("education.moreCertifications")} ↗
            </a>
          }
        />

        {/* Grid de Certificaciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {educationData.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 60}
              className="h-full"
            >
              <div className="glass-card overflow-hidden group h-full flex flex-col">
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
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#070B24] dark:bg-white/[0.03]">
                      <span className="text-5xl font-extrabold tracking-tight text-white">ITBA</span>
                      <span className="font-mono text-xs text-gray-300 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00EC7A]" aria-hidden="true" />{t("education.inProgress")}</span>
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
                  <p className="meta mt-1.5 mb-6">{item.period}</p>

                  {item.badge && (
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                      {item.badge}
                    </p>
                  )}

                  {/* Descripción */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {item.skills.map((skill) => (
                      <span key={skill} className="chip">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
