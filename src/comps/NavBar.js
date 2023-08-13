import "./css/NavBar.css";
import DarkMode from "./NavBarComps/DarkMode";
import Language from "./NavBarComps/Language";

export default function NavBar() {
  return (
    <div>
      <div className="outerNav">
        <DarkMode />
        <p className="sep">|</p>
        <Language />
      </div>
    </div>
  );
}
