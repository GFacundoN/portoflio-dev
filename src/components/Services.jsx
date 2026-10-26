import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import WhatsAppIcon from "../assets/icons/whatsapp.svg?react";
import ServicesIcon from "../assets/icons/services.svg?react";
import { whatsappUrl } from "../data/contactData";
import { track } from "../utils/track";

export default function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });

  return (
    <section id="servicios" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-20">
        {/* Columna izquierda: queda fija mientras se recorre la lista */}
        <Reveal className="lg:sticky lg:top-28 self-start flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <ServicesIcon className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" aria-hidden="true" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">{t("services.title")}</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
            {t("services.description")}
          </p>
          <a
            href={whatsappUrl(t("contact.whatsappMessage"))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { location: "services" })}
            className="btn-primary self-start mt-2"
          >
            <WhatsAppIcon className="w-5 h-5" aria-hidden="true" />
            {t("services.cta")}
          </a>
        </Reveal>

        {/* Lista numerada: la jerarquía la da la tipografía, no los íconos */}
        <ol className="border-t border-gray-300 dark:border-white/10">
          {items.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 50}
              className="group grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.5rem_1fr] gap-x-2 py-6 border-b border-gray-300 dark:border-white/10"
            >
              <span className="font-mono text-xs tabular-nums text-gray-400 dark:text-gray-500 pt-2 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold leading-snug">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mt-1.5 max-w-xl">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
