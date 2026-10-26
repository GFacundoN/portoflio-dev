import { useTranslation } from "react-i18next";
import metaCertificate from "../assets/certificates/meta-front-end-developer-certificado.webp";
import aiEssentialsCertificate from "../assets/certificates/google-ai-essentials-certificado.webp";
import tecnicoCertificate from "../assets/certificates/eest-7-jose-hernandez-tecnico-programacion.webp";
import itbaLogo from "../assets/certificates/itba-instituto-tecnologico-buenos-aires-logo.webp";
import SectionHeader from "./SectionHeader";
import EducationIcon from "../assets/icons/education.svg?react";
import Reveal from "./Reveal";

// Mismo orden que education.items en i18n: ITBA, Meta, Google, Técnico.
const FEATURED_INDEX = 1;

const certificateUrls = [
  "https://innovacion.itba.edu.ar/programas/talento-joven/full-stack-developer",
  "https://coursera.org/verify/professional-cert/C0MXHYFZZMCD",
  "https://coursera.org/verify/FW7GQLFFZ5HP",
  "https://www.linkedin.com/posts/gfacundon_programaciaejn-tech-tecnicatura-activity-7407404351197040641-Bg14",
];

const certificateImages = [itbaLogo, metaCertificate, aiEssentialsCertificate, tecnicoCertificate];

const textLink =
  "text-sm font-semibold text-gray-900 dark:text-white underline decoration-gray-400/60 underline-offset-4 hover:decoration-current transition-colors";

function EducationCard({ item, index }) {
  const { t } = useTranslation();

  return (
    <Reveal delay={index * 60} className="h-full">
      <div className="glass-card overflow-hidden group h-full flex flex-col">
        {/* Imagen del certificado con hover overlay */}
        <div className="relative h-48 overflow-hidden">
          {item.inProgress ? (
            // El ITBA todavía no tiene certificado: se muestra su logo oficial sobre una placa oscura
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-[#0B0E2B]">
              <img src={item.image} alt={t("alts.itba")} loading="lazy" decoding="async" width="600" height="211" className="w-40 h-auto" />
              <span className="font-mono text-xs text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00EC7A]" aria-hidden="true" />
                {t("education.inProgress")}
              </span>
            </div>
          ) : (
            <img
              src={item.image}
              alt={item.alt ? t(`alts.${item.alt}`) : item.title}
              loading="lazy"
              decoding="async"
              className={`w-full h-full ${item.fit === "contain" ? "object-contain p-4 bg-white" : "object-cover"}`}
            />
          )}
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

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-bold text-lg leading-tight mb-2">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{item.institution}</p>
          <p className="meta mt-1.5 mb-6">{item.period}</p>
          {item.badge && <p className="text-sm font-semibold mb-4">{item.badge}</p>}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {item.skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// Certificación destacada: sin tarjeta ni banner, con el mismo lenguaje tipográfico que Experiencia.
function FeaturedCertificate({ item }) {
  const { t } = useTranslation();

  return (
    <Reveal className="rule grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-6 lg:gap-16 py-10 mb-10">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">{item.title}</h3>
        <p className="meta">{item.institution} · Coursera · {item.period}</p>
        <p className="text-sm sm:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
        <a href={item.certificateUrl} target="_blank" rel="noopener noreferrer" className={`${textLink} self-start mt-1`}>
          {t("education.viewCertificate")} ↗
        </a>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p className="meta mb-1">{t("education.coursesTitle")}</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 text-sm text-gray-800 dark:text-gray-200">
            {item.courses.map((course, index) => (
              <li key={course} className="grid grid-cols-[1.75rem_1fr] py-2.5 border-b border-gray-300/70 dark:border-white/[0.07]">
                <span className="font-mono text-xs text-gray-400 dark:text-gray-500 pt-0.5 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{course}</span>
              </li>
            ))}
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <span className="meta mr-2">{t("education.skillsTitle")}</span>
          {item.skills.join(" · ")}
        </p>
      </div>
    </Reveal>
  );
}

export default function Education() {
  const { t } = useTranslation();

  const educationData = t("education.items", { returnObjects: true }).map((item, index) => ({
    id: index + 1,
    ...item,
    inProgress: index === 0,
    certificateUrl: certificateUrls[index],
    image: certificateImages[index],
    // Los logos de Google y del Técnico se recortaban con "cover": se muestran completos
    fit: index >= 2 ? "contain" : "cover",
    alt: [null, null, "google", "tecnico"][index],
  }));

  const featured = educationData[FEATURED_INDEX];
  const rest = educationData.filter((_, index) => index !== FEATURED_INDEX);

  return (
    <section id="educacion" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader
          icon={EducationIcon}
          title={t("nav.education")}
          description={t("education.description")}
          aside={
            <a href="https://www.linkedin.com/in/gfacundon/details/certifications/" target="_blank" rel="noopener noreferrer" className={textLink}>
              {t("education.moreCertifications")} ↗
            </a>
          }
        />

        <FeaturedCertificate item={featured} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {rest.map((item, index) => (
            <EducationCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
