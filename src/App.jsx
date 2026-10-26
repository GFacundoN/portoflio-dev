import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./i18n";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import CvModal from "./components/CvModal";
import WhatsAppButton from "./components/WhatsAppButton";
import { track } from "./utils/track";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const openCv = useCallback(() => {
    setCvOpen(true);
    track("cv_modal_open");
  }, []);
  const closeCv = useCallback(() => setCvOpen(false), []);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark bg-diamond-dark" : "bg-diamond-light"}`}>
      <Navbar setTheme={setTheme} onOpenCv={openCv} />
      <main>
        <Hero onOpenCv={openCv} />
        <Services />
        <Experience />
        <Clients />
        <Projects />
        <Education />
        <Achievements />
        <AboutMe />
        <Contact onOpenCv={openCv} />
      </main>
      <WhatsAppButton />
      <CvModal open={cvOpen} onClose={closeCv} />
    </div>
  );
}

export default App;
