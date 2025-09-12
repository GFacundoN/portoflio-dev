import { useTranslation } from "react-i18next";
import ProjectsIcon from "../assets/icons/projects.svg?react";

export default function Projects() {
  const { t } = useTranslation();

  return(
    <section id="proyectos" className="py-20 px-4 md:px-20 text-white">
        <div className="max-w-[1400px] mx-auto">
            {/* Título */}
            <div className="flex items-center gap-3 mb-4">
                <ProjectsIcon className="w-10 h-10 text-white" />
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                    {t("nav.projects")}
                </h2>
            </div>
        </div>
    </section>
  )
}