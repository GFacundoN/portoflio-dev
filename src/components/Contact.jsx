import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import WhatsAppIcon from "../assets/icons/whatsapp.svg?react";
import ContactIcon from "../assets/icons/contact.svg?react";
import DocumentIcon from "../assets/icons/document.svg?react";
import { contactData, whatsappUrl } from "../data/contactData";
import { track } from "../utils/track";

export default function Contact({ onOpenCv }) {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="px-4 sm:px-6 md:px-12 lg:px-20 pt-12 sm:pt-16 md:pt-20 pb-8 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="glass-card px-6 py-10 sm:px-10 sm:py-14 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 lg:items-end">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">{t("contact.title")}</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                {t("contact.description")}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 break-all">{contactData.email}</p>
            </div>
            <div className="flex flex-wrap lg:flex-col lg:items-stretch gap-2 sm:gap-3">
              <a
                href={whatsappUrl(t("contact.whatsappMessage"))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { location: "contact" })}
                className="btn-primary"
              >
                <WhatsAppIcon className="w-5 h-5" aria-hidden="true" />
                {t("contact.whatsapp")}
              </a>
              <a
                href={`mailto:${contactData.email}`}
                onClick={() => track("email_click", { location: "contact" })}
                className="btn-secondary"
              >
                <ContactIcon className="w-5 h-5" aria-hidden="true" />
                {t("contact.email")}
              </a>
              <button onClick={onOpenCv} className="btn-secondary">
                <DocumentIcon className="w-5 h-5" aria-hidden="true" />
                {t("contact.cv")}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} GFacundoN. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-6">
              {[
                ["LinkedIn", contactData.linkedin],
                ["GitHub", contactData.github],
                ["Fiverr", contactData.fiverr],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
