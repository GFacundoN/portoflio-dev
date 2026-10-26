import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import ProjectFeature from "./ProjectFeature";
import SectionHeader from "./SectionHeader";
import ProjectsIcon from "../assets/icons/projects.svg?react";
import Reveal from "./Reveal";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  const { t } = useTranslation();

  const projectsTranslations = t("projects.items", { returnObjects: true });

  const translatedProjects = projectsData.map((project, index) => ({
    ...project,
    title: projectsTranslations[index]?.title || "",
    description: projectsTranslations[index]?.description || "",
    badge: projectsTranslations[index]?.badge,
    detail: projectsTranslations[index]?.detail,
    videoLabel: projectsTranslations[index]?.videoLabel
  }));

  return (
    <section id="proyectos" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader
          icon={ProjectsIcon}
          title={t("nav.projects")}
          description={t("projects.description")}
          aside={
            <a
              href="https://github.com/GFacundoN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900 dark:text-white underline decoration-gray-400/60 underline-offset-4 hover:decoration-current transition-colors"
            >
              {t("projects.viewMore")} ↗
            </a>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          {translatedProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 50} className={project.featured ? "rule lg:col-span-2 mt-4" : ""}>
              {project.featured ? <ProjectFeature project={project} /> : <ProjectCard project={project} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
