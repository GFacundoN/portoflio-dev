import GithubIcon from "../assets/icons/github.svg?react";
import LinkIcon from "../assets/icons/link.svg?react";

export default function ProjectCard({ project }) {
  const ImageComponent = project.image;
  const isReactComponent = typeof ImageComponent === 'function';

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center hover:scale-105 transition-all duration-300 ease-in-out p-5">
      <div className="w-full sm:w-[40%] h-40 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg">
        {isReactComponent ? (
          <ImageComponent className="w-full h-full min-w-full min-h-full object-cover object-center" />
        ) : (
          <img src={ImageComponent} alt={project.title} className="w-full h-full min-w-full min-h-full object-cover object-center" />
        )}
      </div>
      <div className="flex flex-col gap-2 w-full sm:w-[60%]">
        <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, index) => {
            const TechIcon = tech.icon;
            return (
              <span
                key={index}
                style={{ backgroundColor: tech.color }}
                className="text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1"
              >
                <TechIcon className="w-4 h-4" />
                {tech.name}
              </span>
            );
          })}
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-0.5">{project.description}</p>
        <div className="flex gap-2 sm:gap-4 flex-wrap">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors rounded-2xl text-sm border py-2 px-3 bg-white dark:bg-[#1F2937] hover:bg-gray-100 dark:hover:bg-[#2E3845] border-gray-300 dark:border-[#2E3845] text-gray-900 dark:text-white"
          >
            <GithubIcon className="w-5 h-5 text-gray-900 dark:text-white" />
            Código
          </a>
          {project.id === 1 && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors rounded-2xl text-sm border py-2 px-3 bg-white dark:bg-[#1F2937] hover:bg-gray-100 dark:hover:bg-[#2E3845] border-gray-300 dark:border-[#2E3845] text-gray-900 dark:text-white"
            >
              <LinkIcon className="w-5 h-5 text-gray-900 dark:text-white" />
              Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
