import Reveal from "./Reveal";

// Título de sección con su ícono, descripción opcional y un link a la derecha.
export default function SectionHeader({ icon: Icon, title, description, aside }) {
  return (
    <Reveal className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" />}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">{title}</h2>
        </div>
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
