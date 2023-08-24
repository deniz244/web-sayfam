import Hero from "../comps/Hero";
import NavBar from "../comps/NavBar";
import Profile from "../comps/Profile";
import Projects from "../comps/Projects";
import Skills from "../comps/Skills";

export default function Home() {
  return (
    <div className="outerContainer">
      <div className="mainContainer">
        <NavBar />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
    </div>
  );
}
