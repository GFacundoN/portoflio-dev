import Reveal from "./Reveal";

export default function SectionHeader({ icon: Icon, title, description, centered = false }) {
  return (
    <Reveal className={`mb-8 md:mb-10 ${centered ? "text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-3 ${centered ? "justify-center" : ""}`}>
        {Icon && <Icon className="w-10 h-10 text-gray-900 dark:text-white" aria-hidden="true" />}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">{title}</h2>
      </div>
      {description && (
        <p className={`text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
