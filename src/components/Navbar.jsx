import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "../assets/icons/languages.svg?react";
import MonitorIcon from "../assets/icons/themes.svg?react";
import DocumentIcon from "../assets/icons/document.svg?react";

const themes = ["light", "dark", "???"];
const randomThemes = ["light", "dark"];

const navItems = [
  { name: "services", href: "#servicios", section: "servicios" },
  { name: "experience", href: "#experiencia", section: "experiencia" },
  { name: "clients", href: "#clientes", section: "clientes" },
  { name: "projects", href: "#proyectos", section: "proyectos" },
  { name: "education", href: "#educacion", section: "educacion" },
  { name: "about", href: "#sobremi", section: "sobremi" },
  { name: "contact", href: "#contacto", section: "contacto" },
];

const iconButton =
  "w-9 h-9 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-[#464FB4]/10 dark:hover:bg-[#818CF8]/15 transition-colors duration-200";

export default function Navbar({ setTheme, onOpenCv }) {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState("");
  const [hovered, setHovered] = useState(null);
  const [showThemes, setShowThemes] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const linksRef = useRef(null);
  const [indicator, setIndicator] = useState({ x: 0, w: 0, visible: false });

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
  }, []);

  // La pastilla "fluye" hasta el link bajo el mouse; si no hay hover, marca la sección activa.
  const target = hovered ?? current;
  useLayoutEffect(() => {
    const el = linksRef.current?.querySelector(`[data-nav="${target}"]`);
    setIndicator((prev) =>
      el && el.offsetWidth ? { x: el.offsetLeft, w: el.offsetWidth, visible: true } : { ...prev, visible: false }
    );
  }, [target, i18n.language]);

  // Entrada al cargar
  useEffect(() => {
    const timeout = setTimeout(() => setNavVisible(true), 100);
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
      {/* Barra con material "chrome": vidrio azul marino a tono con el fondo */}
      <div
        className={`chrome chrome-blur relative rounded-full p-1 flex items-center gap-1 text-sm font-semibold transition-[opacity,transform] duration-500 ease-out ${
          navVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
      >
        {/* Links con indicador que fluye */}
        <div ref={linksRef} className="relative hidden lg:flex items-center" onMouseLeave={() => setHovered(null)}>
          <span
            aria-hidden="true"
            className="chrome-pill absolute top-0 bottom-0 left-0 rounded-full"
            style={{
              width: indicator.w,
              transform: `translateX(${indicator.x}px)`,
              opacity: indicator.visible ? 1 : 0,
            }}
          />
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              data-nav={item.name}
              onMouseEnter={() => setHovered(item.name)}
              onFocus={() => setHovered(item.name)}
              onBlur={() => setHovered(null)}
              aria-current={current === item.name ? "true" : undefined}
              className={`relative z-10 px-3.5 py-2 rounded-full whitespace-nowrap transition-colors duration-300 ${
                target === item.name ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {t(`nav.${item.name}`)}
            </a>
          ))}
        </div>

        <span className="hidden lg:block w-px h-5 mx-1 bg-[#464FB4]/15 dark:bg-[#818CF8]/20" aria-hidden="true" />

        {/* CV: abre el modal de vista previa */}
        <button
          onClick={onOpenCv}
          className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-gray-900 dark:text-white bg-[#464FB4]/10 dark:bg-[#818CF8]/15 hover:bg-[#464FB4]/[0.16] dark:hover:bg-[#818CF8]/25 transition-colors duration-200"
        >
          <DocumentIcon className="w-4 h-4" aria-hidden="true" />
          {t("nav.cv")}
        </button>

        <button className={iconButton} title={t("toggleLanguage")} aria-label={t("toggleLanguage")} onClick={toggleLanguage}>
          <LanguageIcon className="w-[18px] h-[18px]" />
        </button>

        {/* Tema con menú desplegable */}
        <div className="relative">
          <button
            onClick={() => setShowThemes(!showThemes)}
            className={iconButton}
            title={t("theme.switch")}
            aria-label={t("theme.switch")}
            aria-expanded={showThemes}
          >
            <MonitorIcon className="w-[18px] h-[18px]" />
          </button>

          <div
            className={`chrome chrome-blur absolute right-0 mt-3 min-w-[9rem] rounded-2xl p-1 text-sm font-semibold z-50 transition-[opacity,transform] duration-200 ${
              showThemes
                ? "opacity-100 translate-y-0 pointer-events-auto ease-out"
                : "opacity-0 -translate-y-1 pointer-events-none ease-in"
            }`}
          >
            {themes.map((tKey) => (
              <button
                key={tKey}
                onClick={() => changeTheme(tKey)}
                className="block w-full text-left px-3 py-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-[#464FB4]/10 dark:hover:bg-[#818CF8]/15 transition-colors"
              >
                {tKey === "???" ? t("theme.random") : t(`theme.${tKey}`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
