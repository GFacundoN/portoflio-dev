import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";
import TrophyIcon from "../assets/icons/trophy.svg?react";
import Reveal from "./Reveal";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import ExternalIcon from "../assets/icons/external.svg?react";
import profilePic from "../assets/pfp.webp";

const EKOPARTY_POST_URL =
  "https://www.linkedin.com/posts/gfacundon_ekoparty2024-futurohacker-activity-7263215348148027393-bfem";

export default function Achievements() {
  const { t } = useTranslation();
  const items = t("achievements.items", { returnObjects: true });

  return (
    <section id="logros" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader icon={TrophyIcon} title={t("achievements.title")} description={t("achievements.description")} />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-10 lg:gap-16 items-start">
          {/* La publicación de Ekoparty es un objeto (un post), por eso sí va en tarjeta */}
          <Reveal>
            <a
              href={EKOPARTY_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card h-full p-6 flex flex-col gap-4 group"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img src={profilePic} alt="" className="w-11 h-11 rounded-full object-cover shrink-0" />
                  <div className="min-w-0">
                    <p className="font-bold leading-tight truncate">Facundo Nicolás Gandolfo</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{t("achievements.post.role")}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 shrink-0">
                  <LinkedInIcon className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">{t("achievements.post.label")}</span>
                </span>
              </div>

              <div>
                <p className="meta">Ekoparty 2024 · Futuro Hacker</p>
                <p className="text-xl sm:text-2xl font-extrabold mt-1 leading-snug">“Tokengrabber, el terror de la Generación Z”</p>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{t("achievements.post.text")}</p>
              <p className="meta">{t("achievements.post.tags")}</p>

              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white group-hover:underline">
                {t("achievements.post.cta")} <ExternalIcon className="w-4 h-4" aria-hidden="true" />
              </span>
            </a>
          </Reveal>

          {/* Resto de logros */}
          <ul className="rule">
            {items.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 50}
                className="grid grid-cols-[3.5rem_1fr] gap-x-2 py-5 border-b border-gray-300 dark:border-white/10"
              >
                <span className="meta pt-1 tabular-nums">{item.year}</span>
                <div>
                  <p className="font-bold leading-snug">{item.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
