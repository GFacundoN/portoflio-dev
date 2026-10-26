// Difuminados de fondo que fluctúan lentamente.
// Cada mancha ya es un degradé radial suave (sin filter: blur) y solo se anima con transform,
// así el navegador lo resuelve en la GPU sin repintar la página.
export default function BackgroundGlow() {
  return (
    <div className="bg-glow" aria-hidden="true">
      <span className="bg-glow__blob bg-glow__blob--a" />
      <span className="bg-glow__blob bg-glow__blob--b" />
      <span className="bg-glow__blob bg-glow__blob--c" />
    </div>
  );
}
