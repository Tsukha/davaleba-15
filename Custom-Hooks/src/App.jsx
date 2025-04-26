import { useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("theme", false);
  const device = useWindowSize();

  useEffect(() => {
    if (darkMode && device !== "MOBILE") {
      document.body.classList.add("dark");
    } else if (darkMode && device === "MOBILE") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  const toggleTheme = () => {
    if (device !== "MOBILE") {
      setDarkMode((prev) => !prev);
    }
  };

  return (
    <div className="toggle-theme">
      <button onClick={toggleTheme} className="toggle-btn">
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
