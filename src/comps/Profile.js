import React, { useContext, useEffect, useState } from "react";

//context
import { LanguageContext } from "../contexts/LanguageContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

//css
import "./css/Profile.css";

export default function Profile() {
  const { language } = useContext(LanguageContext);
  const [profil, setProfil] = useState("");
  const [dTarihi, setdTarihi] = useState("");
  const [ikamet, setIkamet] = useState("");
  const [egitimDurumu, setEgitimDurumu] = useState("");
  const [egitim, setEgitim] = useState("");
  const [rol, setRol] = useState("");
  const [rolAciklama, setRolAciklama] = useState("");
  const [hakkinda, setHakkinda] = useState("");
  const [hakkindaAciklama, setHakkindaAciklama] = useState("");

  useEffect(() => {
    if (language === "tr-TR") {
      setProfil("Profil");
      setdTarihi("Doğum Tarihi");
      setIkamet("İkamet Şehri");
      setEgitimDurumu("Eğitim Durumu");
      setEgitim(<p>Ankara Hacettepe Ünv. Biyoloji Lisans</p>);
      setRol("Tercih Ettiği Rol");
      setRolAciklama("Frontend, UI");
      setHakkinda("Hakkında");
      setHakkindaAciklama(
        <p>
          Full stack web geliştirici olarak, eğitim geçmişimin yanı sıra
          Workintech'te aldığım eğitimle bilgi ve becerilerimi önemli ölçüde
          geliştirdim. Bu süre içinde JavaScript, React.js gibi teknolojilerde
          becerilerimi geliştirdim. Her zaman yeni zorluklarla karşılaşmayı
          sabırsızlıkla bekliyorum.
        </p>
      );
    } else if (language === "en-US") {
      setProfil("Profile");
      setdTarihi("Date of Birth");
      setIkamet("Residence City");
      setEgitimDurumu("Education Status");
      setEgitim(<p>Hacettepe Uni Biology</p>);
      setRol("Preferred Role");
      setRolAciklama("Frontend, UI");
      setHakkinda("About Me");
      setHakkindaAciklama(
        <p>
          As a full stack web developer in addition to my educational background
          my knowledge and skills with the training I received at Workintech I
          have improved significantly. During this period I have improved my
          skills in technologies like JavaScript and React.js. I'm always
          looking forward to the encounter with new challenges.
        </p>
      );
    }
  }, [language]);

  return (
    <div className="ProfileMain">
      <div data-aos="fade" className="ProfileKisim1">
        <h3>{profil}</h3>
      </div>
      <div className="ProfileKisim2">
        <div data-aos="fade-up" className="ProfileKisim2-Profile">
          <h4 className="ProfilYaziBoyutu">{profil}</h4>
          <div className="ProfileKisim2-1">
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">{dTarihi}</h5>
              <p className="ProfileHakkinda-2">24.03.1996</p>
            </div>
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">{ikamet}</h5>
              <p className="ProfileHakkinda-2">Ankara</p>
            </div>
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">{egitimDurumu}</h5>
              <p className="ProfileHakkinda-2">{egitim}</p>
            </div>
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">{rol}</h5>
              <p className="ProfileHakkinda-2">{rolAciklama}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="ProfileKisim2-About">
          <h4 className="ProfilYaziBoyutu">{hakkinda}</h4>
          <p>{hakkindaAciklama}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
