import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeTheme({ children }) {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null ? !isDarkMode : storedTheme
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const state = {
    theme,
    setTheme,
  };

  return (
    <DarkModeContext.Provider value={state}>
      {children}
    </DarkModeContext.Provider>
  );
}
