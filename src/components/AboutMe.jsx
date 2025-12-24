import { useTranslation } from "react-i18next";
import PacmanIcon from "../assets/icons/pacman.svg?react";
import aboutMeImage from "../assets/pfp-aboutme.png";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="sobremi" className="min-h-screen flex flex-col justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            {/* Title with Pacman Icon */}
            <div className="flex items-center gap-3 md:gap-4">
              <PacmanIcon 
                className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 dark:text-white"
              />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {t("nav.about")}
              </h2>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-3 md:space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                {t("aboutMe.paragraph1")}
              </p>
              <p>
                {t("aboutMe.paragraph2")}
              </p>
              <p>
                {t("aboutMe.paragraph3")}
              </p>
            </div>
          </div>
            {/* Image Container */}
            <div className="">
                <div className="relative">
                    <img 
                    src={aboutMeImage} 
                    alt="Facundo Gandolfo" 
                    className="w-full h-auto max-w-m mx-auto"
                    />
                </div>
            </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-300 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 GFacundoN. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/gfacundon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/GFacundoN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href="mailto:gandolfofacundonicolas@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
            >
              {t("nav.contact")}
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default AboutMe;
