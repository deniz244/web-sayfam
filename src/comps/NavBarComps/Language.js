import "./css/Language.css";
import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export default function Language() {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme } = useContext(DarkModeContext);

  const handleChange = () => {
    const lngStat = language === "tr-TR" ? "en-US" : "tr-TR";
    setLanguage(lngStat);
  };

  const TR = (
    <p className="lng">
      <span
        style={{ color: theme === true ? "#4731D3" : "#BAB2E7" }}
        id="lng-id"
      >
        TÜRKÇE
      </span>
      'YE GEÇ
    </p>
  );
  const ENG = (
    <p className="lng">
      <span
        style={{ color: theme === true ? "#4731D3" : "#BAB2E7" }}
        id="lng-id"
      >
        ENGLISH
      </span>
    </p>
  );

  return (
    <div className="language">
      <button className="lng-btn" onClick={handleChange}>
        {language === "tr-TR" ? ENG : TR}
      </button>
    </div>
  );
}
