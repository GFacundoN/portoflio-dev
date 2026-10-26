import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import ServicesIcon from "../assets/icons/services.svg?react";
import WebIcon from "../assets/icons/web.svg?react";
import DashboardIcon from "../assets/icons/dashboard.svg?react";
import MobileIcon from "../assets/icons/mobile.svg?react";
import DesignIcon from "../assets/icons/design.svg?react";
import WrenchIcon from "../assets/icons/wrench.svg?react";
import WhatsAppIcon from "../assets/icons/whatsapp.svg?react";
import { whatsappUrl } from "../data/contactData";
import { track } from "../utils/track";

// Mismo orden que services.items en i18n
const serviceIcons = [WebIcon, DashboardIcon, MobileIcon, DesignIcon, WrenchIcon];

export default function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });

  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader icon={ServicesIcon} title={t("services.title")} description={t("services.description")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, index) => {
            const Icon = serviceIcons[index];
            return (
              <Reveal key={item.title} delay={index * 60} className="glass-card-interactive p-6 flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#00EC7A]/10 text-[#00C266] dark:text-[#00EC7A] border border-[#00EC7A]/20">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </Reveal>
            );
          })}

          {/* CTA: cierra la grilla como una tarjeta más */}
          <Reveal delay={items.length * 60} className="animated-border-card">
            <a
              href={whatsappUrl(t("contact.whatsappMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { location: "services" })}
              className="glass-card h-full p-6 flex flex-col justify-between gap-6 group"
            >
              <p className="font-bold text-lg leading-snug">{t("contact.title")}</p>
              <span className="btn-primary self-start">
                <WhatsAppIcon className="w-5 h-5" aria-hidden="true" />
                {t("services.cta")}
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
