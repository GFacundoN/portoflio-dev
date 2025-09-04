import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "../assets/icons/languages.svg?react";
import MonitorIcon from "../assets/icons/themes.svg?react";


const themes = ["light", "dark", "???"];
const randomThemes = ["light", "dark"];

export default function Navbar({ setTheme }) {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState("experience");
  const [showThemes, setShowThemes] = useState(false);
  const [navVisible, setNavVisible] = useState(false); // Estado para controlar la aparición

  const navItems = [
    { name: "experience", href: "#experiencia" },
    { name: "education", href: "#educacion" },
    { name: "projects", href: "#proyectos" },
    { name: "about", href: "#sobremi" },
    { name: "contact", href: "#contacto" },
  ];

  // Ref y ancho para animación de width
  const measureRef = useRef(null);
  const [width, setWidth] = useState();

  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth);
    }
  }, [i18n.language, showThemes, current]);

  // Activar animación de entrada al cargar
  useEffect(() => {
    const timeout = setTimeout(() => setNavVisible(true), 100); // pequeño delay
    return () => clearTimeout(timeout);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const changeTheme = (selected) => {
    const themeToSet =
      selected === "???" ? randomThemes[Math.floor(Math.random() * randomThemes.length)] : selected;

    setTheme(themeToSet);
    localStorage.setItem("theme", themeToSet);
    setShowThemes(false);
  };

  return (
    <nav className="w-full flex z-10 justify-center items-center p-4 fixed">
      {/* Invisible measure block */}
      <div
        ref={measureRef}
        className="rounded-full px-4 py-1 flex items-center gap-4 backdrop-blur-md border bg-[#1F2937] border-white/10 bg-opacity-90 font-bold text-sm opacity-0 pointer-events-none"
        style={{ position: "fixed", left: -9999, top: 0, zIndex: -1 }}
        aria-hidden="true"
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            className={`transition-colors duration-200 ${
              current === item.name ? "text-[#4885FF]" : "text-gray-300 hover:text-[#4885FF]"
            }`}
          >
            {t(`nav.${item.name}`)}
          </a>
        ))}
        <LanguageIcon className="w-5 h-5" />
        <MonitorIcon className="w-5 h-5 mt-1" />
      </div>

      {/* Navbar visible con animación */}
      <div
        className={`rounded-full px-4 py-1 flex items-center gap-4 backdrop-blur-md border bg-[#1F2937] border-white/10 bg-opacity-90 font-bold text-sm transition-all duration-500 ease-out transform ${
          navVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95"
        }`}
        style={{ width }}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setCurrent(item.name)}
            className={`whitespace-nowrap transition-colors duration-500 ${
              current === item.name ? "text-[#4885FF]" : "text-gray-300 hover:text-[#4885FF]"
            }`}
          >
            {t(`nav.${item.name}`)}
          </a>
        ))}

        {/* Botón idioma */}
        <button
          className="text-gray-300 hover:text-[#4885FF]"
          title={t("toggleLanguage")}
          onClick={toggleLanguage}
        >
          <LanguageIcon className="w-5 h-5" />
        </button>

        {/* Botón tema con dropdown animado */}
        <div className="relative">
          <button
            onClick={() => setShowThemes(!showThemes)}
            className="text-gray-300 hover:text-[#4885FF]"
            title={t("theme.switch")}
          >
            <MonitorIcon className="w-5 h-5 mt-1" />
          </button>

          <div
            className={`absolute right-0 mt-2 bg-[#1F2937] bg-opacity-90 text-white text-sm font-semibold shadow-lg rounded-lg py-2 px-4 space-y-1 z-50 transform transition-all duration-300 ease-in-out ${
              showThemes
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }`}
          >
            {themes.map((tKey) => (
              <div
                key={tKey}
                onClick={() => changeTheme(tKey)}
                className="hover:text-[#4885FF] cursor-pointer transition-colors"
              >
                {tKey === "???" ? t("theme.random") : t(`theme.${tKey}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
