import React, { useContext, useEffect, useState } from "react";

import Foto from "../img/Foto.png";

//css
import "./css/Hero.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

//context
import { LanguageContext } from "../contexts/LanguageContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(DarkModeContext);

  const [txt1, setTxt1] = useState("");
  const [txt2, setTxt2] = useState("");
  const [txt3, setTxt3] = useState("");
  const [txt4, setTxt4] = useState("");

  useEffect(() => {
    if (language === "tr-TR") {
      setTxt1("Yaratıcı düşünür");
      setTxt2("Minimalizm aşığı");
      setTxt3(
        "Merhaba, ben Deniz. Ben bir full-stack geliştiricisiyim. Mükemmel kullanıcı deneyimleriyle sağlam ve ölçeklenebilir frontend ürünleri oluşturacak bir geliştirici arıyorsanız el sıkışalım."
      );
      setTxt4("İletişim!");
    } else if (language === "en-US") {
      setTxt1("Creative thinker");
      setTxt2("Minimalism lover");
      setTxt3(
        "Hi, I’m Deniz. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me."
      );
      setTxt4("Contact!");
    }
  }, [language]);

  return (
    <div className="HeroMain">
      <div className="leftSide">
        <div id="sol1" className="mg40"></div>
        <div>
          <h2 id="sol2"></h2>
        </div>
        <div id="sol2Name" className="mg40">
          <h2>{txt1}</h2>
          <h2>{txt2}</h2>
        </div>

        {/*<div className="mg40">
          <h2 id="sol2Yazi"></h2>
  </div>*/}

        <div id="sol3" className="mg40">
          <p>{txt3}</p>
        </div>

        <div id="sol4" className="mg40">
          <div id="sol4Button">
            <a
              className="sol4-1 buttonSolFont"
              rel="noreferrer"
              target="_blank"
            >
              {txt4}
            </a>

            <a
              className="sol4-2 buttonSolFont"
              href="https://github.com/deniz244"
              rel="noreferrer"
              target="_blank"
            >
              <p>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: theme === true ? "#3730A3" : "#BAB2E7" }}
                />
              </p>
              <p>Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/deniz-tunc/"
              className="sol4-3 buttonSolFont"
              rel="noreferrer"
              target="_blank"
            >
              <p>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ color: theme === true ? "#3730A3" : "#BAB2E7" }}
                />
              </p>
              <p>Linkedin</p>
            </a>
          </div>
        </div>
      </div>

      <div className="rightSide">
        <img className="rightSideFoto" src={Foto} alt="fotoğrafım" />
      </div>
    </div>
  );
}
