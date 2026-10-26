import { useTranslation } from "react-i18next";
import ExperienceIcon from "../assets/icons/experience.svg?react";
import LinkedInIcon from "../assets/icons/linkedinDark.svg?react";
import RightArrowIcon from "../assets/icons/rightArrow.svg?react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { contactData } from "../data/contactData";

export default function Experience() {
  const { t } = useTranslation();
  const companies = t("experience.items", { returnObjects: true });

  return (
    <section id="experiencia" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader icon={ExperienceIcon} title={t("nav.experience")} centered />

        <div className="flex flex-col gap-5 md:gap-6">
          {companies.map((company, companyIndex) => (
            <Reveal key={company.company} delay={companyIndex * 80} className="glass-card p-5 sm:p-6 md:p-8">
              {/* Empresa */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-6">
                <h3 className="text-2xl font-extrabold">{company.company}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{company.location}</p>
              </div>

              {/* Roles: timeline del más reciente al más antiguo */}
              <ol className="relative flex flex-col gap-8">
                {company.roles.length > 1 && (
                  <div className="absolute left-1.5 top-2 bottom-2 w-px bg-gray-300 dark:bg-white/20" aria-hidden="true" />
                )}
                {company.roles.map((role) => {
                  const isCurrent = role.date.includes(t("experience.current"));
                  const isFreelance = company.company.includes("Fiverr");
                  return (
                    <li key={role.title} className="relative pl-6 md:grid md:grid-cols-[280px_1fr] md:gap-12 lg:gap-20">
                      <div
                        className={`absolute left-0 top-1.5 w-3 h-3 rounded-full ${
                          isCurrent ? "bg-[#00EC7A]" : "bg-gray-400 dark:bg-gray-500"
                        } ring-4 ring-white/70 dark:ring-[#000015]/60`}
                        aria-hidden="true"
                      />
                      <div className="mb-3 md:mb-0">
                        <h4 className="text-green-600 dark:text-green-500 font-bold text-lg leading-snug">{role.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{role.date}</p>
                        {role.promoted && (
                          <span className="chip mt-2">{t("experience.promotion")}</span>
                        )}
                      </div>
                      <div>
                        <ul className="flex flex-col gap-2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                          {role.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2.5">
                              <span className="mt-2.5 w-1 h-1 rounded-full bg-gray-400 shrink-0" aria-hidden="true" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        {isFreelance && (
                          <a
                            href={contactData.fiverr}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00C266] dark:text-[#00EC7A] font-semibold text-sm hover:underline inline-flex items-center gap-2 mt-4"
                          >
                            {t("experience.freelanceLink")} <RightArrowIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          ))}
        </div>

        {/* Botón LinkedIn */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E8EAEC] text-[#2D3340] font-bold px-4 py-2 rounded-xl flex items-center gap-2 text-sm hover:bg-[#dce0e3] transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
