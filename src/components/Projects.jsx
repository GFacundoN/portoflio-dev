import { useTranslation } from "react-i18next";
import ProjectsIcon from "../assets/icons/projects.svg?react";
import ProjectEscapadas from "../assets/projects/projectEscapadas.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import LinkIcon from "../assets/icons/link.svg?react";
import AngularIcon from "../assets/icons/angularIcon.svg?react";
import TailwindIcon from "../assets/icons/tailwindIcon.svg?react";
import SpringIcon from "../assets/icons/springIcon.svg?react";
import SqlIcon from "../assets/icons/sqlIcon.svg?react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="flex gap-2 items-center hover:scale-105 transition-all duration-300 ease-in-out">
              <ProjectEscapadas className="w-5/12 h-1/2 object-cover"/>
              <div className="flex flex-col gap-2 w-7/12">
                <h2 className="text-2xl font-bold">"E-Scapadas" - Olimpiadas ETP</h2>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#912123] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <AngularIcon className="w-4 h-4" />
                    Angular
                  </span>
                  <span className="bg-[#003159] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <TailwindIcon className="w-4 h-4" />
                    TailwindCSS
                  </span>
                  <span className="bg-[#256E00] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <SpringIcon className="w-4 h-4" />
                    Java+SpringBoot
                  </span>
                  <span className="bg-[#3E3A5C] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <SqlIcon className="w-4 h-4" />
                    MySQL
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste eum tempora enim placeat nihil!</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/gfacundon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white transition-colors rounded-2xl text-sm border border-[#2E3845] py-2 px-3 bg-[#1F2937] hover:bg-[#2E3845]"
                  >
                    <GithubIcon className="w-5 h-5" />Código
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gfacundon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white transition-colors rounded-2xl text-sm border border-[#2E3845] py-2 px-3 bg-[#1F2937] hover:bg-[#2E3845]"
                  >
                    <LinkIcon className="w-5 h-5" />Preview
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 items-center hover:scale-105 transition-all duration-300 ease-in-out">
              <ProjectEscapadas className="w-5/12 h-1/2 object-cover"/>
              <div className="flex flex-col gap-2 w-7/12">
                <h2 className="text-2xl font-bold">"E-Scapadas" - Olimpiadas ETP</h2>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#912123] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <AngularIcon className="w-4 h-4" />
                    Angular
                  </span>
                  <span className="bg-[#003159] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <TailwindIcon className="w-4 h-4" />
                    TailwindCSS
                  </span>
                  <span className="bg-[#256E00] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <SpringIcon className="w-4 h-4" />
                    Java+SpringBoot
                  </span>
                  <span className="bg-[#3E3A5C] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <SqlIcon className="w-4 h-4" />
                    MySQL
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste eum tempora enim placerat nihil!</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/gfacundon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white transition-colors rounded-2xl text-sm border border-[#2E3845] py-2 px-3 bg-[#1F2937] hover:bg-[#2E3845]"
                  >
                    <GithubIcon className="w-5 h-5" />Código
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gfacundon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white transition-colors rounded-2xl text-sm border border-[#2E3845] py-2 px-3 bg-[#1F2937] hover:bg-[#2E3845]"
                  >
                    <LinkIcon className="w-5 h-5" />Preview
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-center hover:scale-105 transition-all duration-300 ease-in-out">
              <ProjectEscapadas className="w-5/12 h-1/2 object-cover"/>
              <div className="flex flex-col gap-2 w-7/12">
                <h2 className="text-2xl font-bold">"E-Scapadas" - Olimpiadas ETP</h2>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#912123] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <AngularIcon className="w-4 h-4" />
                    Angular
                  </span>
                  <span className="bg-[#003159] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <TailwindIcon className="w-4 h-4" />
                    TailwindCSS
                  </span>
                  <span className="bg-[#256E00] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <SpringIcon className="w-4 h-4" />
                    Java+SpringBoot
                  </span>
                  <span className="bg-[#3E3A5C] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <SqlIcon className="w-4 h-4" />
                    MySQL
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste eum tempora enim placeat nihil!</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/gfacundon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white transition-colors rounded-2xl text-sm border border-[#2E3845] py-2 px-3 bg-[#1F2937] hover:bg-[#2E3845]"
                  >
                    <GithubIcon className="w-5 h-5" />Código
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gfacundon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white transition-colors rounded-2xl text-sm border border-[#2E3845] py-2 px-3 bg-[#1F2937] hover:bg-[#2E3845]"
                  >
                    <LinkIcon className="w-5 h-5" />Preview
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-center hover:scale-105 transition-all duration-300 ease-in-out">
              <ProjectEscapadas className="w-5/12 h-1/2 object-cover"/>
              <div className="flex flex-col gap-2 w-7/12">
                <h2 className="text-2xl font-bold">"E-Scapadas" - Olimpiadas ETP</h2>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#912123] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <AngularIcon className="w-4 h-4" />
                    Angular
                  </span>
                  <span className="bg-[#003159] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <TailwindIcon className="w-4 h-4" />
                    TailwindCSS
                  </span>
                  <span className="bg-[#256E00] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <SpringIcon className="w-4 h-4" />
                    Java+SpringBoot
                  </span>
                  <span className="bg-[#3E3A5C] text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <SqlIcon className="w-4 h-4" />
                    MySQL
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste eum tempora enim placeat nihil!</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/gfacundon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white transition-colors rounded-2xl text-sm border border-[#2E3845] py-2 px-3 bg-[#1F2937] hover:bg-[#2E3845]"
                  >
                    <GithubIcon className="w-5 h-5" />Código
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gfacundon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white transition-colors rounded-2xl text-sm border border-[#2E3845] py-2 px-3 bg-[#1F2937] hover:bg-[#2E3845]"
                  >
                    <LinkIcon className="w-5 h-5" />Preview
                  </a>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}