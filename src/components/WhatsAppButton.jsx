import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import WhatsAppIcon from "../assets/icons/whatsapp.svg?react";
import { whatsappUrl } from "../data/contactData";
import { track } from "../utils/track";

// Botón flotante: aparece después del hero y se oculta en la sección de contacto,
// donde ya están los CTAs principales.
export default function WhatsAppButton() {
  const { t } = useTranslation();
  const [pastHero, setPastHero] = useState(false);
  const [contactInView, setContactInView] = useState(false);
  const visible = pastHero && !contactInView;

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contacto");
    if (!contact) return;
    const observer = new IntersectionObserver(([entry]) => setContactInView(entry.isIntersecting));
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl(t("contact.whatsappMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location: "floating" })}
      aria-label={t("contact.whatsapp")}
      title={t("contact.whatsapp")}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed z-40 right-4 sm:right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md border transition-all
        bg-[#25D366]/90 border-white/20 text-white hover:bg-[#25D366]
        ${visible ? "opacity-100 translate-y-0 duration-300 ease-out" : "opacity-0 translate-y-4 pointer-events-none duration-200 ease-in"}`}
      style={{ bottom: "max(1.5rem, calc(env(safe-area-inset-bottom) + 1rem))" }}
    >
      <WhatsAppIcon className="w-7 h-7" aria-hidden="true" />
    </a>
  );
}
