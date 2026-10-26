import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";
import ClientsIcon from "../assets/icons/clients.svg?react";
import Reveal from "./Reveal";
import StarIcon from "../assets/icons/star.svg?react";
import { clientsData, testimonialsData } from "../data/clientsData";
import { contactData } from "../data/contactData";

const textLink =
  "inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white underline decoration-gray-400/60 underline-offset-4 hover:decoration-current transition-colors";

function Rating({ value }) {
  return (
    <div className="flex items-center gap-2" aria-label={`${value} / 5`}>
      <div className="flex text-amber-400" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} className={`w-3.5 h-3.5 ${i < Math.round(value) ? "" : "opacity-25"}`} />
        ))}
      </div>
      <span className="meta tabular-nums">{value}</span>
    </div>
  );
}

function CaseBody({ data, text }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">{text.client}</h3>
        <p className="meta">{text.type}</p>
      </div>

      <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
        {text.problem} <span className="text-gray-900 dark:text-gray-100">{text.solution}</span>
      </p>
      <p className="text-sm sm:text-[15px] leading-relaxed font-semibold text-gray-900 dark:text-white">
        {text.result}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-2">
        <div className="flex flex-wrap gap-1.5">
          {data.technologies.map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>
        <div className="flex gap-4">
          {data.githubUrl && (
            <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
              {t("clients.code")} ↗
            </a>
          )}
          {data.liveUrl && (
            <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
              {t("clients.visit")} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Avatar({ review }) {
  if (review.avatar) {
    return <img src={review.avatar} alt="" width="40" height="40" loading="lazy" decoding="async" className="w-10 h-10 rounded-full shrink-0" />;
  }
  return (
    <span
      aria-hidden="true"
      className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-base font-bold"
      style={{ background: review.initial.bg, color: review.initial.fg }}
    >
      {review.initial.letter}
    </span>
  );
}

function CaseCard({ data, text, index }) {
  // Captura alta de un sitio entregado: se recorre al pasar el mouse.
  if (data.shot) {
    return (
      <Reveal delay={index * 60} className="glass-card group overflow-hidden flex flex-col">
        <div className="case-shot h-60 border-b border-gray-200 dark:border-white/[0.08]" style={{ "--shot-h": "15rem" }}>
          <img src={data.shot} alt={`${text.client} · ${text.type}`} loading="lazy" decoding="async" width="720" height="1462" />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <CaseBody data={data} text={text} />
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 60} className="glass-card md:col-span-2 overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <img src={data.image} alt={text.client} loading="lazy" decoding="async" className="w-full h-56 md:h-full object-cover" />
      <div className="p-6 sm:p-8 flex flex-col">
        <CaseBody data={data} text={text} />
      </div>
    </Reveal>
  );
}

export default function Clients() {
  const { t } = useTranslation();
  const cases = t("clients.items", { returnObjects: true });

  return (
    <section id="clientes" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader icon={ClientsIcon} title={t("clients.title")} description={t("clients.description")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {clientsData.map((data, index) => (
            <CaseCard key={data.id} data={data} text={cases[index]} index={index} />
          ))}
        </div>

        {/* Testimonios */}
        <Reveal className="rule mt-20 pt-10 flex flex-wrap items-end justify-between gap-4 mb-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t("clients.testimonials.title")}</h3>
          <a href={contactData.fiverr} target="_blank" rel="noopener noreferrer" className={textLink}>
            {t("clients.testimonials.viewAll")} ↗
          </a>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonialsData.map((review, index) => (
            <Reveal as="figure" key={review.author} delay={index * 50} className="glass-card p-5 flex flex-col gap-4">
              <Rating value={review.rating} />
              <blockquote lang={review.lang} className="text-[15px] text-gray-800 dark:text-gray-200 leading-relaxed flex-1">
                “{review.text}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <Avatar review={review} />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 dark:text-white break-words">
                    {review.author}
                    {review.project && <span className="font-normal text-gray-500 dark:text-gray-400"> · {review.project}</span>}
                  </p>
                  <p className="meta mt-0.5">
                    {t(`countries.${review.country}`)} · {review.recurring ? t("clients.testimonials.recurring") : "Fiverr"}
                  </p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
