import { useTranslation } from "react-i18next";
import PacmanIcon from "../assets/icons/pacman.svg?react";
import StackIcon from "../assets/icons/stack.svg?react";
import LanguagesIcon from "../assets/icons/languages.svg?react";
import aboutMeImage from "../assets/pfp-aboutme.png";
import Reveal from "./Reveal";
import { skillsData } from "../data/skillsData";

const AboutMe = () => {
  const { t } = useTranslation();
  const languages = t("skills.languages", { returnObjects: true });

  return (
    <section id="sobremi" className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <Reveal className="space-y-4 md:space-y-6">
            {/* Title with Pacman Icon */}
            <div className="flex items-center gap-3 md:gap-4">
              <PacmanIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 dark:text-white" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {t("nav.about")}
              </h2>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-3 md:space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>{t("aboutMe.paragraph1")}</p>
              <p>{t("aboutMe.paragraph2")}</p>
              <p>{t("aboutMe.paragraph3")}</p>
            </div>
          </Reveal>

          {/* Image Container */}
          <div className="relative">
            <img
              src={aboutMeImage}
              alt="Facundo Gandolfo"
              loading="lazy"
              className="w-full h-auto max-w-m mx-auto"
            />
          </div>
        </div>

        {/* Stack por categorías + idiomas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-4 md:gap-5 mt-12 md:mt-16">
          <Reveal className="glass-card p-6">
            <div className="flex items-center gap-2 mb-5">
              <StackIcon className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" />
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">{t("skills.title")}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category}>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00C266] dark:text-[#00EC7A] mb-2">
                    {t(`skills.categories.${category}`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="chip">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="glass-card p-6">
            <div className="flex items-center gap-2 mb-5">
              <LanguagesIcon className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" />
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">{t("skills.languagesTitle")}</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {languages.map((language) => (
                <li key={language.name} className="flex items-baseline justify-between gap-4">
                  <span className="font-bold text-gray-900 dark:text-white">{language.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 text-right">{language.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
