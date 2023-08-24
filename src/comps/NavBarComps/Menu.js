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

  const scrollToSkills = () => {
    const skillsElement = document.getElementById("skillsMain");
    setTimeout(() => {
      skillsElement.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  const scrollToProject = () => {
    const skillsElement = document.getElementById("projectsMain");
    setTimeout(() => {
      skillsElement.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="outerNavMenu">
      <div className="navMenu">
        <div className="innerNav">
          <button className="buttonNav" onClick={scrollToSkills}>
            {skills}{" "}
          </button>
          <button className="buttonNav" onClick={scrollToProject}>
            {projects}
          </button>
          <a className="buttonNavCerceve" href="mailto:deniztunc244@gmail.com">
            {hire}
          </a>
        </div>
      </div>
    </div>
  );
}
