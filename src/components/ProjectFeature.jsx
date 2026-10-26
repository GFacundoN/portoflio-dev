import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const textLink =
  "text-sm font-semibold text-gray-900 dark:text-white underline decoration-gray-400/60 underline-offset-4 hover:decoration-current transition-colors";

// Proyecto destacado con video: solo se reproduce mientras está en pantalla.
// En iOS la reproducción automática puede bloquearse (modo bajo consumo o "reducir movimiento"):
// en ese caso se muestra un botón de play para iniciarlo con un toque.
export default function ProjectFeature({ project }) {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [needsTap, setNeedsTap] = useState(false);

  const tryPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video
      .play()
      .then(() => setNeedsTap(false))
      .catch(() => setNeedsTap(true));
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // React no escribe el atributo "muted" en el HTML; iOS lo necesita para permitir el autoplay.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setNeedsTap(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-6 lg:gap-12 items-center py-8">
      <div className="relative">
        <video
          ref={videoRef}
          onClick={() => (videoRef.current?.paused ? tryPlay() : videoRef.current?.pause())}
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          preload="none"
          poster={project.video.poster}
          aria-label={project.videoLabel}
          title={t(`alts.${project.alt}`)}
          width="768"
          height="480"
          className="w-full h-auto rounded-lg border border-gray-200 dark:border-white/[0.08] bg-[#5C94FC] [image-rendering:pixelated]"
        >
          {/* MP4 (H.264) primero: es el formato que Safari en iPhone reproduce siempre */}
          <source src={project.video.mp4} type="video/mp4" />
          <source src={project.video.webm} type="video/webm" />
        </video>
        {needsTap && (
          <button
            type="button"
            onClick={tryPlay}
            aria-label={t("projects.playVideo")}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full flex items-center justify-center bg-black/55 text-white hover:bg-black/70 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 translate-x-0.5" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10.4-6.5a1 1 0 0 0 0-1.7L9.52 4.65A1 1 0 0 0 8 5.5Z" />
            </svg>
          </button>
        )}
      </div>

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
