import { useTranslation } from "react-i18next";
import TrophyIcon from "../assets/icons/trophy.svg?react";

const textLink =
  "text-sm font-semibold text-gray-900 dark:text-white underline decoration-gray-400/60 underline-offset-4 hover:decoration-current transition-colors";

export default function ProjectCard({ project }) {
  const { t } = useTranslation();
  const ImageComponent = project.image;
  const isReactComponent = typeof ImageComponent === 'function';

  return (
    <div className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start py-6">
      <div className="w-full sm:w-[40%] h-40 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-white/[0.08]">
        {isReactComponent ? (
          <ImageComponent className="w-full h-full min-w-full min-h-full object-cover object-center" />
        ) : (
          <img src={ImageComponent} alt={project.title} loading="lazy" decoding="async" className="w-full h-full min-w-full min-h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
        )}
      </div>
      <div className="flex flex-col gap-2 w-full sm:w-[60%]">
        <h3 className="text-xl font-bold leading-snug">{project.title}</h3>
        {project.badge && (
          <p className="meta flex items-center gap-1.5">
            <TrophyIcon className="w-3.5 h-3.5" aria-hidden="true" />
            {project.badge}
          </p>
        )}
        <div className="flex gap-1.5 flex-wrap">
          {project.technologies.map((tech) => (
            <span key={tech.name} className="chip">{tech.name}</span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-0.5">{project.description}</p>
        <div className="flex gap-4 flex-wrap mt-1">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
            {t("projects.code")} ↗
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
              {t("projects.preview")} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
