import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";
import ClientsIcon from "../assets/icons/clients.svg?react";
import Reveal from "./Reveal";
import { clientsData, testimonialsData } from "../data/clientsData";
import { contactData } from "../data/contactData";

const textLink =
  "inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white underline decoration-gray-400/60 underline-offset-4 hover:decoration-current transition-colors";

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

function Avatar({ review, size = "w-10 h-10 text-base" }) {
  if (review.avatar) {
    return <img src={review.avatar} alt="" width="40" height="40" loading="lazy" decoding="async" className={`${size} rounded-full shrink-0`} />;
  }
  return (
    <span
      aria-hidden="true"
      className={`${size} rounded-full shrink-0 flex items-center justify-center font-bold`}
      style={{ background: review.initial.bg, color: review.initial.fg }}
    >
      {review.initial.letter}
    </span>
  );
}

// Idioma del sitio: las reseñas se muestran traducidas y se aclara cuando no es el texto original.
function useSiteLang() {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? "en" : "es";
}

function ReviewMeta({ review }) {
  const { t } = useTranslation();
  const siteLang = useSiteLang();
  const translated = review.lang !== siteLang;
  return (
    <p className="meta mt-0.5">
      <span className="text-amber-500 dark:text-amber-400">★</span> {review.rating.toFixed(1)} · {t(`countries.${review.country}`)} ·{" "}
      {t("clients.testimonials.source")}
      {translated && (
        <> · {t(review.lang === "en" ? "clients.testimonials.translatedFromEn" : "clients.testimonials.translatedFromEs")}</>
      )}
    </p>
  );
}

function ReviewText({ review, className }) {
  const siteLang = useSiteLang();
  return (
    <blockquote lang={siteLang} className={className}>
      “{review.text[siteLang]}”
    </blockquote>
  );
}

function ReviewAuthor({ review }) {
  return (
    <p className="text-sm font-bold text-gray-900 dark:text-white break-words">
      {review.author}
      {review.project && <span className="font-normal text-gray-500 dark:text-gray-400"> · {review.project}</span>}
    </p>
  );
}

function CaseCard({ data, text, index }) {
  const { t } = useTranslation();

  // Captura alta de un sitio entregado: se recorre al pasar el mouse.
  if (data.shot) {
    return (
      <Reveal delay={index * 60} className="glass-card group overflow-hidden flex flex-col">
        <div className="case-shot h-60 border-b border-gray-200 dark:border-white/[0.08]" style={{ "--shot-h": "15rem" }}>
          <img src={data.shot} alt={t(`alts.${data.alt}`)} loading="lazy" decoding="async" width="720" height="1462" />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <CaseBody data={data} text={text} />
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 60} className="glass-card md:col-span-2 overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <img src={data.image} alt={t(`alts.${data.alt}`)} loading="lazy" decoding="async" className="w-full h-56 md:h-full object-cover" />
      <div className="p-6 sm:p-8 flex flex-col">
        <CaseBody data={data} text={text} />
      </div>
    </Reveal>
  );
}

export default function Clients() {
  const { t } = useTranslation();
  const cases = t("clients.items", { returnObjects: true });
  // La reseña más completa va destacada
  const featuredReview = testimonialsData.find((r) => r.featured) ?? testimonialsData[0];
  const otherReviews = testimonialsData.filter((r) => r !== featuredReview);

  return (
    <section id="clientes" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 text-gray-900 dark:text-white">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader icon={ClientsIcon} title={t("clients.title")} description={t("clients.description")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {clientsData.map((data, index) => (
            <CaseCard key={data.id} data={data} text={cases[index]} index={index} />
          ))}
        </div>

        {/* Testimonios: una reseña destacada en grande y el resto como lista editorial */}
        <Reveal className="rule mt-20 pt-10 flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t("clients.testimonials.title")}</h3>
            <p className="meta mt-2">{t("clients.testimonials.subtitle")}</p>
          </div>
          <a href={contactData.fiverr} target="_blank" rel="noopener noreferrer" className={textLink}>
            {t("clients.testimonials.viewAll")} ↗
          </a>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-10 lg:gap-16">
          <Reveal as="figure" className="flex flex-col gap-6 lg:pr-4">
            <ReviewText
              review={featuredReview}
              className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-gray-900 dark:text-white"
            />
            <figcaption className="flex items-center gap-3">
              <Avatar review={featuredReview} size="w-12 h-12 text-lg" />
              <div className="min-w-0">
                <ReviewAuthor review={featuredReview} />
                <ReviewMeta review={featuredReview} />
              </div>
            </figcaption>
          </Reveal>

          <ul className="rule">
            {otherReviews.map((review, index) => (
              <Reveal as="li" key={review.author} delay={index * 50} className="py-6 border-b border-gray-300 dark:border-white/10">
                <figure className="flex flex-col gap-4">
                  <ReviewText review={review} className="text-base leading-relaxed text-gray-800 dark:text-gray-200" />
                  <figcaption className="flex items-center gap-3">
                    <Avatar review={review} size="w-8 h-8 text-sm" />
                    <div className="min-w-0">
                      <ReviewAuthor review={review} />
                      <ReviewMeta review={review} />
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
