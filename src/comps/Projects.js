import React, { useContext } from "react";

//css
import "./css/Projects.css";

//context
import { LanguageContext } from "../contexts/LanguageContext";

//projects data
import projects from "../Data/projectsData";

export default function Projects() {
  const { language } = useContext(LanguageContext);

  return (
    <div id="projectsMain">
      <div className="projectsContainer1">
        <h3>{language === "tr-TR" ? "Projeler" : "Projects"}</h3>
      </div>
      <div className="projectsContainer2">
        {projects
          .filter((item) => item.language === language)
          .map((item) => (
            <div key={item.id} className="sayfalarim">
              <img
                className="dataFoto"
                src={`/images/${item.image}`}
                alt={item.title}
              />
              <h4 className="dataBaslik">{item.title}</h4>
              <p className="dataAciklama">{item.description}</p>
              <p className="yazilimlar">
                {item.yazilimlari.map((yazilim) => (
                  <span className="dataYazilimlar" key={yazilim}>
                    {yazilim}
                  </span>
                ))}
              </p>
              <p className="dataLinkler">
                <a rel="noreferrer" target="_blank" href={item.githubLink}>
                  Github
                </a>
                <a rel="noreferrer" target="_blank" href={item.websiteLink}>
                  {language === "tr-TR" ? "Siteye Git" : "View Site"}
                </a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
