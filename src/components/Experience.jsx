import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { contactData } from "../data/contactData";

const textLink =
  "inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white underline decoration-gray-400/60 underline-offset-4 hover:decoration-current transition-colors";

export default function Experience() {
  const { t } = useTranslation();
  const companies = t("experience.items", { returnObjects: true });

  return (
    <section id="experiencia" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader
          title={t("nav.experience")}
          aside={
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className={textLink}>
              LinkedIn ↗
            </a>
          }
        />

        {companies.map((company, companyIndex) => (
          <Reveal
            key={company.company}
            delay={companyIndex * 60}
            className="rule grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-6 lg:gap-16 py-10"
          >
            {/* Empresa */}
            <div className="lg:sticky lg:top-28 self-start">
              <h3 className="text-2xl font-extrabold tracking-tight">{company.company}</h3>
              <p className="meta mt-1.5">{company.location}</p>
              {company.company.includes("Fiverr") && (
                <a href={contactData.fiverr} target="_blank" rel="noopener noreferrer" className={`${textLink} mt-4`}>
                  {t("experience.freelanceLink")} ↗
                </a>
              )}
            </div>

            {/* Roles, del más reciente al más antiguo */}
            <ol className="flex flex-col gap-10">
              {company.roles.map((role) => {
                const isCurrent = role.date.includes(t("experience.current"));
                return (
                  <li key={role.title}>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="text-lg sm:text-xl font-bold leading-snug">{role.title}</h4>
                      {role.promoted && <span className="chip">{t("experience.promotion")}</span>}
                    </div>
                    <p className="meta mt-1.5 flex items-center gap-2">
                      {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[#00EC7A]" aria-hidden="true" />}
                      {role.date}
                    </p>
                    <ul className="mt-4 flex flex-col gap-2.5 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="grid grid-cols-[1rem_1fr]">
                          <span className="text-gray-400 dark:text-gray-600" aria-hidden="true">–</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
