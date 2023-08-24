import React, { useContext, useEffect, useState } from "react";

//css
import "./css/Footer.css";

//context
import { LanguageContext } from "../contexts/LanguageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  const [yazi, setYazi] = useState();
  const [mail, setMail] = useState();

  useEffect(() => {
    if (language === "tr-TR") {
      setYazi("Birlikte bir sonraki ürününüz üzerinde çalışalım.");
      setMail("Mail adresim");
    } else if (language === "en-US") {
      setYazi("Let’s work together on your next product.");
      setMail("My mail address");
    }
  }, [language]);

  return (
    <div className="footerMain">
      <div className="footerMain-Yazi">
        <h3 className="footeryazi">{yazi}</h3>
      </div>
      <div className="footerAlt">
        <div>
          <h4 className="mainBolumu">
            <img className="mailFoto" src={`/images/1.svg`} alt={mail} />
            <a className="mailYazisi" href="mailto:deniztunc244@gmail.com">
              deniztunc244@gmail.com
            </a>
          </h4>
        </div>
        <div className="footerLink">
          {/* <a
            className="github"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/deniz244"
          >
            Personal Blog{" "}
          </a>*/}
          <a
            className="github"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/deniz244"
          >
            Github{" "}
          </a>
          <a
            className="linkedin"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/deniz-tunc/"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
