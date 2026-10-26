import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "../assets/icons/languages.svg?react";
import MonitorIcon from "../assets/icons/themes.svg?react";
import DocumentIcon from "../assets/icons/document.svg?react";


const themes = ["light", "dark", "???"];
const randomThemes = ["light", "dark"];

export default function Navbar({ setTheme, onOpenCv }) {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState("");
  const [showThemes, setShowThemes] = useState(false);
  const [navVisible, setNavVisible] = useState(false); // Estado para controlar la aparición
  const [isDesktop, setIsDesktop] = useState(false);

  const navItems = [
    { name: "services", href: "#servicios", section: "servicios" },
    { name: "experience", href: "#experiencia", section: "experiencia" },
    { name: "clients", href: "#clientes", section: "clientes" },
    { name: "projects", href: "#proyectos", section: "proyectos" },
    { name: "education", href: "#educacion", section: "educacion" },
    { name: "about", href: "#sobremi", section: "sobremi" },
    { name: "contact", href: "#contacto", section: "contacto" },
  ];

  // Ref y ancho para animación de width
  const measureRef = useRef(null);
  const [width, setWidth] = useState();

  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth);
    }
  }, [i18n.language, showThemes, current]);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Scroll spy: una línea imaginaria a un tercio de la pantalla marca la sección activa.
  // IntersectionObserver evita leer el layout en cada evento de scroll.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = navItems.find((i) => i.section === entry.target.id);
            setCurrent(item ? item.name : "");
          }
        });
      },
      { rootMargin: "-33% 0px -66% 0px" }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.section);
      if (el) observer.observe(el);
    });
    const onTop = () => {
      if (window.scrollY < window.innerHeight / 2) setCurrent("");
    };
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Activar animación de entrada al cargar
  useEffect(() => {
    const timeout = setTimeout(() => setNavVisible(true), 100); // pequeño delay
    return () => clearTimeout(timeout);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  };

  const changeTheme = (selected) => {
    const themeToSet =
      selected === "???" ? randomThemes[Math.floor(Math.random() * randomThemes.length)] : selected;

    setTheme(themeToSet);
    localStorage.setItem("theme", themeToSet);
    setShowThemes(false);
  };

  return (
    <nav className="w-full flex z-30 justify-end lg:justify-center items-center p-4 fixed">
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
        <span className="flex items-center gap-1.5 px-3 py-0.5 border"><DocumentIcon className="w-4 h-4" />{t("nav.cv")}</span>
        <LanguageIcon className="w-5 h-5" />
        <MonitorIcon className="w-5 h-5 mt-1" />
      </div>

      {/* Navbar visible con animación */}
      <div
        className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-1 flex items-center gap-2 sm:gap-4 backdrop-blur-md border font-bold text-xs sm:text-sm transition-all duration-500 ease-out transform bg-white/90 dark:bg-[#1F2937]/90 border-gray-300/50 dark:border-white/10 text-gray-900 dark:text-white ${
          navVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95"
        }`}
        style={{ width: isDesktop ? width : 'auto' }}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`hidden lg:block whitespace-nowrap transition-colors duration-500 ${
              current === item.name ? "text-[#4885FF]" : "text-gray-700 dark:text-gray-300 hover:text-[#4885FF]"
            }`}
          >
            {t(`nav.${item.name}`)}
          </a>
        ))}

        {/* CV: abre el modal de vista previa */}
        <button
          onClick={onOpenCv}
          className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-0.5 border border-gray-300 dark:border-white/15 text-gray-900 dark:text-white hover:border-[#4885FF] hover:text-[#4885FF] transition-colors duration-300"
        >
          <DocumentIcon className="w-4 h-4" aria-hidden="true" />
          {t("nav.cv")}
        </button>

        {/* Botón idioma */}
        <button
          className="text-gray-700 dark:text-gray-300 hover:text-[#4885FF]"
          title={t("toggleLanguage")}
          onClick={toggleLanguage}
        >
          <LanguageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-gray-300" />
        </button>

        {/* Botón tema con dropdown animado */}
        <div className="relative">
          <button
            onClick={() => setShowThemes(!showThemes)}
            className="text-gray-700 dark:text-gray-300 hover:text-[#4885FF]"
            title={t("theme.switch")}
          >
            <MonitorIcon className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-gray-900 dark:text-gray-300" />
          </button>

          <div
            className={`absolute right-0 mt-2 text-sm font-semibold shadow-lg rounded-lg py-2 px-4 space-y-1 z-50 transform transition-all duration-300 ease-in-out bg-white dark:bg-[#1F2937] bg-opacity-90 dark:bg-opacity-90 text-gray-900 dark:text-white ${
              showThemes
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }`}
          >
            {themes.map((tKey) => (
              <div
                key={tKey}
                onClick={() => changeTheme(tKey)}
                className="text-gray-900 dark:text-white py-1 px-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs font-bold cursor-pointer"
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
