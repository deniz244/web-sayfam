import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export default function Language({ children }) {
  const systemLanguage = navigator.language || navigator.userLanguage;
  console.log(systemLanguage);

  const storedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(
    storedLanguage === null ? systemLanguage : storedLanguage
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const state = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
}
