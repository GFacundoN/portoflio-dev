import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import ClientsIcon from "../assets/icons/clients.svg?react";
import StarIcon from "../assets/icons/star.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import LinkIcon from "../assets/icons/link.svg?react";
import RightArrowIcon from "../assets/icons/rightArrow.svg?react";
import { clientsData, testimonialsData } from "../data/clientsData";
import { contactData } from "../data/contactData";

const linkClass =
  "flex items-center gap-2 transition-colors rounded-2xl text-sm border py-2 px-3 bg-white dark:bg-[#1F2937] hover:bg-gray-100 dark:hover:bg-[#2E3845] border-gray-300 dark:border-[#2E3845] text-gray-900 dark:text-white";

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${value} / 5`}>
      <div className="flex text-amber-400" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} className={`w-4 h-4 ${i < Math.round(value) ? "" : "opacity-25"}`} />
        ))}
      </div>
      <span className="text-sm font-bold text-gray-900 dark:text-white tabular-nums">{value}</span>
    </div>
  );
}

function CaseCard({ data, text, index }) {
  const { t } = useTranslation();

  return (
    <Reveal delay={index * 70} className="glass-card-interactive overflow-hidden flex flex-col">
      {data.image && (
        <div className="h-44 overflow-hidden">
          <img src={data.image} alt={text.client} loading="lazy" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-xl font-extrabold">{text.client}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{text.type}</p>
        </div>

        {/* Necesidad y solución como un párrafo corrido; el resultado se destaca por peso, no por color */}
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {text.problem} <span className="text-gray-800 dark:text-gray-200">{text.solution}</span>
        </p>
        <p className="text-sm leading-relaxed font-semibold text-gray-900 dark:text-white border-l-2 border-[#00EC7A] pl-3">
          {text.result}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {data.technologies.map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>

        {(data.liveUrl || data.githubUrl) && (
          <div className="flex gap-2 flex-wrap">
            {data.githubUrl && (
              <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <GithubIcon className="w-5 h-5" /> {t("clients.code")}
              </a>
            )}
            {data.liveUrl && (
              <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <LinkIcon className="w-5 h-5" /> {t("clients.visit")}
              </a>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function Clients() {
  const { t } = useTranslation();
  const cases = t("clients.items", { returnObjects: true });

  return (
    <section id="clientes" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader icon={ClientsIcon} title={t("clients.title")} description={t("clients.description")} />

        {/* Casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {clientsData.map((data, index) => (
            <CaseCard key={data.id} data={data} text={cases[index]} index={index} />
          ))}
        </div>

        {/* Testimonios */}
        <Reveal as="h3" className="text-2xl font-extrabold mt-16 mb-6">
          {t("clients.testimonials.title")}
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonialsData.map((review, index) => (
            <Reveal
              as="figure"
              key={review.author}
              delay={index * 60}
              className="flex flex-col"
            >
              <div className="glass-card p-5 flex flex-col gap-4 h-full">
                <Rating value={review.rating} />
                <blockquote lang={review.lang} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                  “{review.text}”
                </blockquote>
                <figcaption className="text-sm">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {review.author}
                    {review.project && <span className="font-normal text-gray-500 dark:text-gray-400"> · {review.project}</span>}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {review.country} · {review.recurring ? t("clients.testimonials.recurring") : t("clients.testimonials.source")}
                  </p>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={contactData.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00C266] dark:text-[#00EC7A] font-semibold text-sm hover:underline inline-flex items-center gap-2"
          >
            {t("clients.testimonials.viewAll")} <RightArrowIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
