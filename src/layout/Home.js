import Hero from "../comps/Hero";
import NavBar from "../comps/NavBar";
import Skills from "../comps/Skills";

export default function Home() {
  return (
    <div className="outerContainer">
      <div className="mainContainer">
        <NavBar />
        <Hero />
        <Skills />
      </div>
    </div>
  );
}
