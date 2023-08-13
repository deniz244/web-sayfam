import "./App.css";
import Home from "./layout/Home";

import { DarkModeContext } from "./contexts/DarkModeContext";
import { useContext, useEffect } from "react";

function App() {
  const { theme } = useContext(DarkModeContext);

  useEffect(() => {
    document.body.className = theme ? "light-mode" : "dark-mode";
  }, [theme]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
