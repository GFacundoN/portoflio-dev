import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import profilePic from "../assets/pfp.jpg";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import ContactIcon from "../assets/icons/contact.svg?react";
import ArrowIcon from "../assets/icons/arrow.svg?react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 md:px-20">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full max-w-[1300px] transition-all duration-700 ease-out transform ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-6 scale-95"
        }`}
      >
        {/* Texto */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            {t("hero.title")}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300">
            {t("hero.subtitle")}
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {t("hero.paragraph")}
          </p>

          {/* Botones */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="#proyectos"
              className="flex items-center gap-2 text-[#2D3340] font-bold bg-[#E8EAEC] hover:bg-[#dce0e3] transition-colors px-6 py-3 rounded-full text-base"
            >
              {t("hero.work")} <ArrowIcon className="w-5 h-5" />
            </a>

            <a
              href="#contacto"
              className="flex items-center gap-2 text-white font-bold border border-[#5E6673] bg-[#1F2937] hover:border-[#A8ADB3] transition-colors px-6 rounded-full text-base"
            >
              <ContactIcon className="w-5 h-5" />
              {t("hero.contact")}
            </a>
          </div>

          {/* Redes y estado */}
          <div className="flex items-center gap-4 mt-2 flex-wrap">
            <div className="flex gap-3 text-gray-400">
              <a
                href="https://www.linkedin.com/in/gfacundon/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors border-2 border-[#2E3845] rounded-full p-2 bg-[#1F2937]"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/gfacundon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors border-2 border-[#2E3845] rounded-full p-2 bg-[#1F2937]"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://www.linkedin.com/in/gfacundon/"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-border-gradient"
            >
              <div className="px-4 py-2 rounded-full text-white font-bold text-sm relative z-10">
                {t("hero.available")}
              </div>
            </a>
          </div>
        </div>

        {/* Imagen de perfil */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profilePic}
            alt="Facundo Gandolfo"
            className="w-5/6 rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
