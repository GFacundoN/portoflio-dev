import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import profilePic from "../assets/pfp.webp";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import WhatsAppIcon from "../assets/icons/whatsapp.svg?react";
import DocumentIcon from "../assets/icons/document.svg?react";
import ArrowIcon from "../assets/icons/arrow.svg?react";
import ContactIcon from "../assets/icons/contact.svg?react";
import { contactData, whatsappUrl } from "../data/contactData";
import { track } from "../utils/track";

const socialClass =
  "transition-colors border-2 rounded-full p-2 bg-white dark:bg-[#1F2937] border-gray-300 dark:border-[#2E3845] hover:border-gray-400 dark:hover:border-white text-gray-900 dark:text-white";

export default function Hero({ onOpenCv }) {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true });

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="min-h-[calc(100vh)] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 pt-24 pb-12 md:pt-24 md:pb-12">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center w-full max-w-[1300px] transition-all duration-700 ease-out transform ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-6 scale-95"
        }`}
      >
        {/* Texto */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-2 sm:mb-3 text-gray-900 dark:text-white">
            {t("hero.title")}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300">
            {t("hero.subtitle")}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("hero.paragraph")}
          </p>

          {/* Botones */}
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            <a href="#proyectos" className="btn-primary">
              {t("hero.work")} <ArrowIcon className="w-5 h-5 text-[#2D3340]" />
            </a>

            <a href="#contacto" className="btn-secondary">
              <ContactIcon className="w-5 h-5" />
              {t("hero.contact")}
            </a>

            <button onClick={onOpenCv} className="btn-secondary">
              <DocumentIcon className="w-5 h-5" />
              {t("hero.cv")}
            </button>
          </div>

          {/* Redes y estado */}
          <div className="flex items-center gap-4 mt-2 flex-wrap">
            <div className="flex gap-3 text-gray-600 dark:text-gray-400">
              <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="LinkedIn">
                <LinkedInIcon className="w-5 h-5 text-gray-900 dark:text-white" />
              </a>
              <a href={contactData.github} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="GitHub">
                <GithubIcon className="w-5 h-5 text-gray-900 dark:text-white" />
              </a>
              <a
                href={whatsappUrl(t("contact.whatsappMessage"))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { location: "hero" })}
                className={socialClass}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-gray-900 dark:text-white" />
              </a>
            </div>
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="animated-border-gradient"
            >
              <div className="px-4 py-2 rounded-full font-bold text-sm relative z-10 text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00EC7A]" aria-hidden="true" />
                {t("hero.available")}
              </div>
            </a>
          </div>

          {/* Números */}
          <dl className="flex flex-wrap gap-x-8 gap-y-3 mt-4 pt-5 border-t border-gray-300 dark:border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="meta mt-1">{stat.label}</dt>
                <dd className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tabular-nums leading-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Imagen de perfil */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profilePic}
            alt="Facundo Gandolfo"
            width="900"
            height="900"
            fetchPriority="high"
            decoding="async"
            className="w-3/4 sm:w-4/5 md:w-5/6 max-w-md h-auto rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
