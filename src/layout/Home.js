import Hero from "../comps/Hero";
import NavBar from "../comps/NavBar";

export default function Home() {
  return (
    <div className="outerContainer">
      <div className="mainContainer">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}
