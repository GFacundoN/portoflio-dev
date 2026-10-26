import Reveal from "./Reveal";

// Título de sección: la jerarquía la dan el tamaño y el peso, sin íconos decorativos.
export default function SectionHeader({ title, description, aside }) {
  return (
    <Reveal className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] text-gray-900 dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mt-3">
            {description}
          </p>
        )}
      </div>
      {aside}
    </Reveal>
  );
}
