import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./i18n";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`min-h-screen transition-all ${theme === "dark" ? "bg-diamond-dark" : "bg-diamond-light"}`}>
      <Navbar setTheme={setTheme} />
    </div>
  );
}

export default App;
