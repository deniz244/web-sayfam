import "./css/Menu.css";

import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function Menu() {
  const { language } = useContext(LanguageContext);

  const [skills, setSkills] = useState();
  const [projects, setProjects] = useState();
  const [hire, setHire] = useState();

  useEffect(() => {
    if (language === "tr-TR") {
      setSkills("Beceriler");
      setProjects("Projeler");
      setHire("İletişim!");
    } else if (language === "en-US") {
      setSkills("Skills");
      setProjects("Projects");
      setHire("Contact!");
    }
  }, [language]);

  return (
    <div className="outerNavMenu">
      <div className="navMenu">
        <div className="innerNav">
          <button className="buttonNav">{skills}</button>
          <button className="buttonNav">{projects}</button>
          <a className="buttonNavCerceve" href="mailto:deniztunc244@gmail.com">
            {hire}
          </a>
        </div>
      </div>
    </div>
  );
}
