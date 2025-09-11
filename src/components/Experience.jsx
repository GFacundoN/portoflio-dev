import { useTranslation } from "react-i18next";
import ExperienceIcon from "../assets/icons/experience.svg?react";
import LinkedInIcon from "../assets/icons/linkedinDark.svg?react";
import RightArrowIcon from "../assets/icons/rightArrow.svg?react";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experiencia" className="py-20 px-4 md:px-20 text-white">
      <div className="max-w-[1300px] mx-auto">
        {/* Título */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <ExperienceIcon className="w-10 h-10 text-white" />
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            {t("nav.experience")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-32 px-6">
          {/* Línea + puntos */}
          <div className="relative flex flex-col gap-24">
            <div className="absolute left-1.5 top-0 h-full w-px bg-white/20" />

            <div className="relative pl-5">
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#00EC7A]" />
              <h3 className="text-green-500 font-bold text-lg">
                Freelancer
              </h3>
              <p className="text-gray-400 text-sm mt-0.5">
                Agosto 2025 - Actualidad
              </p>
            </div>

            <div className="relative pl-5">
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#00EC7A]" />
              <h3 className="text-green-500 font-bold text-lg">
                Pasante - Frontend
              </h3>
              <h4 className="text-white font-bold -mt-1 leading-none">
                Modica Seguros
              </h4>
              <p className="text-gray-400 text-sm mt-0.5">
                Mayo 2025 - Actualidad
              </p>
            </div>
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-12">
            <div>
              <p className="text-gray-300 leading-relaxed mb-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus. Lorem ipsum dolor sit amet
              </p>
              <a
                href="#"
                className="text-[#00EC7A] font-semibold text-sm hover:underline inline-flex items-center gap-2"
              >
                Saber más <RightArrowIcon className="w-4 h-4" />
              </a>
            </div>

            <div>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus. Lorem ipsum dolor sit amet consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>

        {/* Botón LinkedIn */}
        <div className="flex justify-center mt-16">
          <a
            href="https://www.linkedin.com/in/gfacundon/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E8EAEC] text-[#2D3340] font-bold px-4 py-2 rounded-xl flex items-center gap-2 text-sm hover:bg-[#dce0e3] transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
