import "./css/DarkMode.css";

import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function DarkMode() {
  const { theme, setTheme } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  const [darkMode, setDarkMode] = useState();
  const [lightMode, setLightMode] = useState();

  useEffect(() => {
    if (language === "tr-TR") {
      setDarkMode("KARANLIK MOD");
      setLightMode("AYDINLIK MOD");
    } else if (language === "en-US") {
      setDarkMode("DARK MOD");
      setLightMode("LIGHT MOD");
    }
  }, [language]);

  return (
    <div className="mode">
      <label htmlFor="theme-toggle" className="switch">
        <input
          id="theme-toggle"
          type="checkbox"
          onChange={() => setTheme(!theme)}
          checked={theme}
        />
        <span className="slider round"></span>
        <span className={theme === false ? "slider2 round2" : ""}></span>
      </label>
      <p style={{ color: theme === true ? "#777777" : "#D9D9D9" }}>
        {theme === false ? lightMode : darkMode}
      </p>
    </div>
  );
}
