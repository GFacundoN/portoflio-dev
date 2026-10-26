// Envía un evento a Google Analytics si gtag está cargado (no rompe si un bloqueador lo impide).
export function track(event, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
