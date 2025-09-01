import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "../assets/icons/languages.svg?react";
import MonitorIcon from "../assets/icons/themes.svg?react";

const themes = ["light", "dark", "???"];
const randomThemes = ["light", "dark"]; // Usás tus temas personalizados con gradient

export default function Navbar({ setTheme }) {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState("experience");
  const [showThemes, setShowThemes] = useState(false);

  const navItems = [
    { name: "experience", href: "#experiencia" },
    { name: "education", href: "#educacion" },
    { name: "projects", href: "#proyectos" },
    { name: "about", href: "#sobremi" },
    { name: "contact", href: "#contacto" },
  ];

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
    <nav className="w-full flex justify-center items-center p-4">
      <div className="rounded-full px-4 py-1 flex items-center gap-4 backdrop-blur-md border bg-[#1F2937] border-white/10 bg-opacity-90">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setCurrent(item.name)}
            className={`text-sm font-bold transition-colors duration-200 ${
              current === item.name
                ? "text-[#4885FF]"
                : "text-gray-300 hover:text-[#4885FF]"
            }`}
          >
            {t(`nav.${item.name}`)}
          </a>
        ))}

        {/* Botón de idioma */}
        <button
          className="text-gray-300 hover:text-[#4885FF]"
          title={t("toggleLanguage")}
          onClick={toggleLanguage}
        >
          <LanguageIcon className="w-5 h-5" />
        </button>

        {/* Selector de tema */}
        <div className="relative">
          <button
            onClick={() => setShowThemes(!showThemes)}
            className="text-gray-300 hover:text-[#4885FF]"
            title={t("theme.switch")}
          >
            <MonitorIcon className="w-5 h-5 mt-1" />
          </button>

          {showThemes && (
            <div className="absolute right-0 mt-2 bg-[#1F2937] bg-opacity-90 text-white text-sm font-semibold shadow-lg rounded-lg py-2 px-4 space-y-1 z-50">
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
          )}
        </div>
      </div>
    </nav>
  );
}
