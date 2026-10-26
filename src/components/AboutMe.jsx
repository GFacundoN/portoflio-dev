import { useTranslation } from "react-i18next";
import aboutMeImage from "../assets/pfp-aboutme.webp";
import PacmanIcon from "../assets/icons/pacman.svg?react";
import Reveal from "./Reveal";
import { skillsData } from "../data/skillsData";

const AboutMe = () => {
  const { t } = useTranslation();
  const languages = t("skills.languages", { returnObjects: true });

  return (
    <section id="sobremi" className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <Reveal className="space-y-5 md:space-y-6">
            <div className="flex items-center gap-3">
              <PacmanIcon className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" aria-hidden="true" />
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">{t("nav.about")}</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              <p>{t("aboutMe.paragraph1")}</p>
              <p>{t("aboutMe.paragraph2")}</p>
              <p>{t("aboutMe.paragraph3")}</p>
            </div>
          </Reveal>

          <img
            src={aboutMeImage}
            alt="Facundo Gandolfo"
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>

        {/* Stack e idiomas: tabla tipográfica, sin tarjetas */}
        <Reveal className="rule mt-16 md:mt-20 pt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] gap-10 lg:gap-16">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight mb-6">{t("skills.title")}</h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category}>
                  <dt className="meta mb-2.5">{t(`skills.categories.${category}`)}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <span key={skill} className="chip">{skill}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-xl font-extrabold tracking-tight mb-6">{t("skills.languagesTitle")}</h3>
            <ul className="rule">
              {languages.map((language) => (
                <li key={language.name} className="flex items-baseline justify-between gap-4 py-3 border-b border-gray-300 dark:border-white/10">
                  <span className="font-bold">{language.name}</span>
                  <span className="meta text-right">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
