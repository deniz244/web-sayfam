import "./css/NavBar.css";
import DarkMode from "./NavBarComps/DarkMode";
import Language from "./NavBarComps/Language";
import Menu from "./NavBarComps/Menu";

export default function NavBar() {
  return (
    <div>
      <div className="toggleNav">
        <DarkMode />
        <p className="sep">|</p>
        <Language />
      </div>
      <div className="menuNav">
        <Menu />
      </div>
    </div>
  );
}
