import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./i18n";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`min-h-screen transition-all ${theme === "dark" ? "dark bg-diamond-dark" : "bg-diamond-light"}`}>
      <Navbar setTheme={setTheme} />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
