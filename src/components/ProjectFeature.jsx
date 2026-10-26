import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const textLink =
  "text-sm font-semibold text-gray-900 dark:text-white underline decoration-gray-400/60 underline-offset-4 hover:decoration-current transition-colors";

// Proyecto destacado con video: solo se reproduce mientras está en pantalla,
// y si la persona pidió reducir el movimiento queda el póster con controles.
export default function ProjectFeature({ project }) {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-6 lg:gap-12 items-center py-8">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
        preload="none"
        poster={project.video.poster}
        aria-label={project.videoLabel}
        width="768"
        height="480"
        className="w-full h-auto rounded-lg border border-gray-200 dark:border-white/[0.08] bg-[#5C94FC] [image-rendering:pixelated]"
      >
        <source src={project.video.webm} type="video/webm" />
        <source src={project.video.mp4} type="video/mp4" />
      </video>

      <div className="flex flex-col gap-3">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{project.title}</h3>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{project.detail}</p>
        <div className="flex gap-1.5 flex-wrap mt-1">
          {project.technologies.map((tech) => {
            const TechIcon = tech.icon;
            return (
              <span
                key={tech.name}
                style={{ backgroundColor: tech.color }}
                className="text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1"
              >
                <TechIcon className="w-4 h-4" aria-hidden="true" />
                {tech.name}
              </span>
            );
          })}
        </div>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${textLink} self-start mt-2`}>
          {t("projects.code")} ↗
        </a>
      </div>
    </div>
  );
}
