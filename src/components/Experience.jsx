import { useTranslation } from "react-i18next";
import ExperienceIcon from "../assets/icons/experience.svg?react";
import LinkedInIcon from "../assets/icons/linkedinDark.svg?react";
import RightArrowIcon from "../assets/icons/rightArrow.svg?react";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experiencia" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        {/* Título */}
        <div className="flex items-center gap-3 mb-8 md:mb-10 justify-center">
          <ExperienceIcon className="w-10 h-10 text-gray-900 dark:text-white" />
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            {t("nav.experience")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-16 lg:gap-32 px-4 sm:px-6">
          {/* Desktop: Línea + puntos en columna izquierda */}
          <div className="hidden md:flex relative flex-col gap-12 md:gap-16 lg:gap-24">
            <div className="absolute left-1.5 top-0 h-full w-px bg-gray-300 dark:bg-white/20" />

            <div className="relative pl-5">
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#00EC7A]" />
              <h3 className="text-green-500 font-bold text-lg">
                {t("experience.freelancer.title")}
              </h3>
              <p className="text-gray-400 text-sm mt-0.5">
                {t("experience.freelancer.date")}
              </p>
            </div>

            <div className="relative pl-5">
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#00EC7A]" />
              <h3 className="text-green-500 font-bold text-lg">
                {t("experience.intern.title")}
              </h3>
              <h4 className="text-gray-900 dark:text-white font-bold -mt-1 leading-none">
                {t("experience.intern.company")}
              </h4>
              <p className="text-gray-400 text-sm mt-0.5">
                {t("experience.intern.date")}
              </p>
            </div>
          </div>

          {/* Desktop: Descripción en columna derecha */}
          <div className="hidden md:flex flex-col gap-8 md:gap-10 lg:gap-12">
            <div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                {t("experience.freelancer.description")}
              </p>
              <a
                href="https://es.fiverr.com/s/WExrzyE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00EC7A] font-semibold text-sm hover:underline inline-flex items-center gap-2"
              >
                {t("experience.freelancer.learnMore")} <RightArrowIcon className="w-4 h-4" />
              </a>
            </div>

            <div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("experience.intern.description")}
              </p>
            </div>
          </div>

          {/* Mobile: Timeline intercalada con descripciones */}
          <div className="md:hidden flex flex-col gap-8 relative">
            <div className="absolute left-1.5 top-0 h-full w-px bg-gray-300 dark:bg-white/20" />
            
            {/* Experiencia 1 */}
            <div>
              <div className="relative pl-5 mb-4">
                <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#00EC7A] ring-2 ring-white dark:ring-transparent" />
                <h3 className="text-green-500 font-bold text-lg">
                  {t("experience.freelancer.title")}
                </h3>
                <p className="text-gray-400 text-sm mt-0.5">
                  {t("experience.freelancer.date")}
                </p>
              </div>
              <div className="pl-5">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  {t("experience.freelancer.description")}
                </p>
                <a
                  href="https://es.fiverr.com/s/WExrzyE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00EC7A] font-semibold text-sm hover:underline inline-flex items-center gap-2"
                >
                  {t("experience.freelancer.learnMore")} <RightArrowIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Experiencia 2 */}
            <div>
              <div className="relative pl-5 mb-4">
                <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#00EC7A] ring-2 ring-white dark:ring-transparent" />
                <h3 className="text-green-500 font-bold text-lg">
                  {t("experience.intern.title")}
                </h3>
                <h4 className="text-gray-900 dark:text-white font-bold -mt-1 leading-none">
                  {t("experience.intern.company")}
                </h4>
                <p className="text-gray-400 text-sm mt-0.5">
                  {t("experience.intern.date")}
                </p>
              </div>
              <div className="pl-5">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t("experience.intern.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón LinkedIn */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://www.linkedin.com/in/gfacundon/"
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
