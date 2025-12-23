import { useTranslation } from "react-i18next";
import ProjectsIcon from "../assets/icons/projects.svg?react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";
import githubIcon from "../assets/icons/github.svg";

export default function Projects() {
  const { t } = useTranslation();

  const projectsTranslations = t("projects.items", { returnObjects: true });

  const translatedProjects = projectsData.map((project, index) => ({
    ...project,
    title: projectsTranslations[index]?.title || "",
    description: projectsTranslations[index]?.description || ""
  }));

  return (
    <section id="proyectos" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Título */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <ProjectsIcon className="w-10 h-10 text-gray-900 dark:text-white" />
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            {t("nav.projects")}
          </h2>
        </div>
        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
          {translatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Botón GitHub */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://github.com/GFacundoN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E8EAEC] text-[#2D3340] font-bold px-4 py-2 rounded-xl flex items-center gap-2 text-sm hover:bg-[#dce0e3] transition-colors"
          >
            <img src={githubIcon} alt="GitHub" className="w-5 h-5 brightness-0" /> {t("projects.viewMore")}
          </a>
        </div>
      </div>
    </section>
  );
}