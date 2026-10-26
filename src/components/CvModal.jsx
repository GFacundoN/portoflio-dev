import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { contactData } from "../data/contactData";
import { track } from "../utils/track";
import CloseIcon from "../assets/icons/close.svg?react";
import DownloadIcon from "../assets/icons/download.svg?react";
import ExternalIcon from "../assets/icons/external.svg?react";
import DocumentIcon from "../assets/icons/document.svg?react";

const FILE_NAMES = {
  es: "Facundo Gandolfo - CV.pdf",
  en: "Facundo Gandolfo - Resume.pdf",
};

// En mobile los navegadores no muestran bien un PDF embebido: ahí ofrecemos abrirlo o descargarlo.
function useCanPreviewPdf() {
  const [canPreview, setCanPreview] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px)");
    const update = () => setCanPreview(query.matches && navigator.pdfViewerEnabled !== false);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return canPreview;
}

async function savePdf(src, fileName) {
  // Chrome / Edge: diálogo "Guardar como" para elegir nombre y carpeta.
  if ("showSaveFilePicker" in window) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: fileName,
        types: [{ description: "PDF", accept: { "application/pdf": [".pdf"] } }],
      });
      const blob = await fetch(src).then((res) => res.blob());
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return true;
    } catch (err) {
      if (err.name === "AbortError") return false;
      // Cualquier otro error cae a la descarga clásica.
    }
  }

  // Safari / Firefox: descarga normal (el navegador decide la carpeta según su configuración).
  const link = document.createElement("a");
  link.href = src;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  return true;
}

export default function CvModal({ open, onClose }) {
  const { t, i18n } = useTranslation();
  const siteLang = i18n.language === "en" ? "en" : "es";
  const [lang, setLang] = useState(siteLang);
  const [rendered, setRendered] = useState(open);
  const [shown, setShown] = useState(false);
  // El visor de PDF del navegador es pesado: se monta recién cuando terminó la animación de entrada.
  const [pdfReady, setPdfReady] = useState(false);
  const closeRef = useRef(null);
  const canPreview = useCanPreviewPdf();

  const src = contactData.cv[lang];
  const fileName = FILE_NAMES[lang];

  // Al abrir, el CV arranca en el idioma del sitio.
  useEffect(() => {
    if (open) setLang(siteLang);
  }, [open, siteLang]);

  // Precarga el CV en el idioma del sitio cuando el navegador está libre, así el modal abre al instante.
  useEffect(() => {
    const prefetch = () => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = contactData.cv[siteLang];
      document.head.appendChild(link);
    };
    const id = "requestIdleCallback" in window ? window.requestIdleCallback(prefetch) : setTimeout(prefetch, 2000);
    return () => ("cancelIdleCallback" in window ? window.cancelIdleCallback(id) : clearTimeout(id));
  }, [siteLang]);

  // Entrada con ease-out, salida más corta con ease-in.
  useEffect(() => {
    if (open) {
      setRendered(true);
      const frame = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
      const ready = setTimeout(() => setPdfReady(true), 260);
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(ready);
      };
    }
    setShown(false);
    setPdfReady(false);
    const timeout = setTimeout(() => setRendered(false), 160);
    return () => clearTimeout(timeout);
  }, [open]);

  // Escape para cerrar, bloqueo de scroll y foco inicial / de retorno.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!rendered) return null;

  const handleDownload = async () => {
    const saved = await savePdf(src, fileName);
    if (saved) track("cv_download", { cv_language: lang });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      {/* Fondo */}
      <div
        className={`absolute inset-0 bg-black/70 transition-opacity ${
          shown ? "opacity-100 duration-200 ease-out" : "opacity-0 duration-150 ease-in"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`relative w-full sm:max-w-4xl max-h-[92vh] flex flex-col rounded-t-3xl sm:rounded-2xl border shadow-2xl
          bg-white border-gray-200 dark:bg-[#0B0E2B] dark:border-white/10 text-gray-900 dark:text-white
          transition-[opacity,transform] ${
            shown
              ? "opacity-100 translate-y-0 duration-200 ease-out"
              : "opacity-0 translate-y-4 duration-150 ease-in"
          }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* Encabezado */}
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-gray-200 dark:border-white/10">
          <div className="min-w-0">
            <h2 id="cv-modal-title" className="text-xl sm:text-2xl font-extrabold">
              {t("cv.title")}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{t("cv.subtitle")}</p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            className="shrink-0 w-11 h-11 -mr-2 -mt-1 flex items-center justify-center rounded-full hover:bg-gray-200/70 dark:hover:bg-white/10 transition-colors"
            aria-label={t("cv.close")}
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Vista previa */}
        <div className="flex-1 min-h-0 p-3 sm:p-4">
          {canPreview ? (
            pdfReady ? (
              <iframe
                key={src}
                src={`${src}#view=FitH&navpanes=0`}
                title={t("cv.title")}
                className="w-full h-[60vh] rounded-xl border border-gray-200 dark:border-white/10 bg-white"
              />
            ) : (
              <div className="w-full h-[60vh] rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/[0.04]" aria-hidden="true" />
            )
          ) : (
            <div className="glass-card flex flex-col items-center text-center gap-3 px-6 py-10">
              <DocumentIcon className="w-12 h-12 text-[#00EC7A]" aria-hidden="true" />
              <p className="font-bold">{fileName}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">{t("cv.noPreview")}</p>
            </div>
          )}
        </div>

        {/* Acciones */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 p-5 sm:p-6 pt-2 sm:pt-2">
          <div
            className="inline-flex self-start rounded-full border p-1 border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5"
            role="group"
            aria-label={t("cv.languageLabel")}
          >
            {["es", "en"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`min-w-[44px] min-h-[36px] px-3 rounded-full text-sm font-bold transition-colors ${
                  lang === code
                    ? "bg-white text-gray-900 shadow dark:bg-[#E8EAEC] dark:text-[#2D3340]"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("cv_open", { cv_language: lang })}
              className="btn-secondary"
            >
              <ExternalIcon className="w-5 h-5" aria-hidden="true" />
              {t("cv.open")}
            </a>
            <button onClick={handleDownload} className="btn-primary">
              <DownloadIcon className="w-5 h-5" aria-hidden="true" />
              {t("cv.download")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
