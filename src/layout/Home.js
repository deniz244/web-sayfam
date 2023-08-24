import { useContext } from "react";
import Footer from "../comps/Footer";
import Hero from "../comps/Hero";
import NavBar from "../comps/NavBar";
import Profile from "../comps/Profile";
import Projects from "../comps/Projects";
import Skills from "../comps/Skills";

//context
import { DarkModeContext } from "../contexts/DarkModeContext";

export default function Home() {
  const { theme } = useContext(DarkModeContext);

  return (
    <div className="outerContainer">
      <div className="mainContainer">
        <NavBar />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <div
        className="footerContact"
        style={{ background: theme === true ? "#F9F9F9" : "#141414" }}
      >
        <div className="footerIc">
          <Footer />
        </div>
      </div>
    </div>
  );
}
