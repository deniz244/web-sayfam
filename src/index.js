import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./reset.css";
import DarkModeTheme from "./contexts/DarkModeContext";
import Language from "./contexts/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Language>
    <DarkModeTheme>
      <App />
    </DarkModeTheme>
  </Language>
);
