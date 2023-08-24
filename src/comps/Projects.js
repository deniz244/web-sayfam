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
    <div className="ProjectsMain">
      <div className="ProjectsContainer1">
        <h3>{language === "tr-TR" ? "Projeler" : "Projects"}</h3>
      </div>
      <div className="ProjectsContainer2">
        {projects
          .filter((item) => item.language === language)
          .map((item) => (
            <div key={item.id} className="Sayfalarim">
              <img
                className="DataFoto"
                src={`/images/${item.image}`}
                alt={item.title}
              />
              <h4 className="DataBaslik">{item.title}</h4>
              <p className="DataAciklama">{item.description}</p>
              <p className="Yazilimlar">
                {item.yazilimlari.map((yazilim) => (
                  <span className="DataYazilimlar" key={yazilim}>
                    {yazilim}
                  </span>
                ))}
              </p>
              <p className="DataLinkler">
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
