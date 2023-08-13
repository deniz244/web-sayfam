import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeTheme() {
  const [theme, setTheme] = useState();

  const state = {
    theme,
    setTheme,
  };
}
