import React, { useContext, useEffect, useState } from "react";

//context
import { LanguageContext } from "../contexts/LanguageContext";

//css
import "./css/Skills.css";

export default function Skills() {
  const { language } = useContext(LanguageContext);
  const [skills, setSkills] = useState();
  const [js, setJs] = useState();
  const [react, setReact] = useState();
  const [node, setNode] = useState();

  useEffect(() => {
    if (language === "tr-TR") {
      setSkills("Beceriler");
      setJs(
        "JavaScript, dinamik ve etkileşimli web geliştirmeyi sağlayan çok yönlü ve güçlü bir programlama dilidir. Ben bir frontend geliştirici olarak, JavaScript'in tam potansiyelini kullanarak etkileyici ve duyarlı kullanıcı arayüzleri oluşturma konusunda uzmanım. Değişkenler, fonksiyonlar ve nesneler gibi JavaScript'in temel kavramlarını derinlemesine anlayarak, Belgeler Nesne Modeli'ni (DOM) sorunsuz bir şekilde manipüle edebilir ve kullanıcı deneyimini geliştirmek için karmaşık mantığı uygulayabilirim. JavaScript çerçevelerini ve kütüphanelerini kullanarak, ölçeklenebilir ve çapraz platformlu uygulamaları verimli bir şekilde geliştirebilir ve fikirleri web üzerinde hayata geçirebilirim."
      );
      setReact(
        "React.js, kullanıcı arayüzleri oluşturmak için popüler bir JavaScript kütüphanesidir ve ben yeteneklerimi geliştirerek sağlam ve verimli bir şekilde frontend uygulamaları oluşturmak için React.js'in yeteneklerini kullanmayı öğrendim. React.js ile karmaşık kullanıcı arayüzü bileşenlerini yeniden kullanılabilir ve modüler bir kod haline getirebilir, bu sayede sürdürülebilirlik ve ölçeklenebilirlik sağlanır. React'in sanal DOM özelliğini kullanarak gereksiz yeniden-render işlemlerini en aza indirerek performansı optimize edebilir ve uygulamaların genel tepkisini artırabilirim. React.js ile olan deneyimim, dinamik, etkileşimli ve görsel açıdan çekici kullanıcı arayüzleri oluşturmama olanak sağlar ve olağanüstü bir kullanıcı deneyimi sunar."
      );
      setNode(
        "Node.js, sunucu tarafında JavaScript geliştirmeye olanak sağlayan güçlü bir çalışma ortamıdır. Bir frontend geliştirici olarak, Node.js konusundaki yetkinliğim, hem tam yığın uygulamalar oluşturmamı hem de web projelerinin performansını optimize etmemi sağlar. Node.js ile sorunsuz bir şekilde asenkron görevleri yönetebilir, RESTful API'ler geliştirebilir ve çeşitli veritabanlarını entegre edebilirim. Bu, ölçeklenebilir, gerçek zamanlı ve veri odaklı uygulamalar oluşturmamı sağlar. Node.js paketleri ve çerçevelerinin geniş ekosistemini kullanarak, özellik açısından zengin web uygulamaları geliştirebilir, sunucu ve istemci arasındaki iletişimi sorunsuz hale getirerek kullanıcılara kesintisiz deneyimler sunabilirim."
      );
    } else if (language === "en-US") {
      setSkills("Skills");
      setJs(
        "JavaScript is a versatile and powerful programming language that enables dynamic and interactive web development. As a frontend developer, my expertise lies in harnessing the full potential of JavaScript to create engaging and responsive user interfaces. With a deep understanding of JavaScript's core concepts, such as variables, functions, and objects, I can seamlessly manipulate the Document Object Model (DOM) and implement complex logic to enhance the user experience. Leveraging JavaScript frameworks and libraries, I can efficiently develop scalable and cross-platform applications that bring ideas to life on the web."
      );
      setReact(
        "React.js is a popular JavaScript library for building user interfaces, and I have honed my skills in leveraging its capabilities to create robust and efficient frontend applications. With React.js, I can efficiently break down complex UI components into reusable and modular code, ensuring maintainability and scalability. By utilizing React's virtual DOM, I can optimize performance by minimizing unnecessary re-rendering and enhancing the overall responsiveness of applications. My experience in working with React.js enables me to create dynamic, interactive, and visually appealing user interfaces that provide an exceptional user experience."
      );
      setNode(
        "Node.js is a powerful runtime environment that allows for server-side JavaScript development. As a frontend developer, my proficiency in Node.js empowers me to build full-stack applications and optimize the performance of web projects. With Node.js, I can seamlessly handle asynchronous tasks, develop RESTful APIs, and integrate various databases. This enables me to build scalable, real-time, and data-driven applications. Leveraging the vast ecosystem of Node.js packages and frameworks, I can efficiently develop feature-rich web applications, ensuring smooth communication between the server and client, and providing users with seamless experiences."
      );
    }
  }, [language]);

  return (
    <div className="skillsMain">
      <div className="skillsBaslik">
        <h3>{skills}</h3>
      </div>
      <div className="skillsAciklamalar">
        <div className="skillsContainer">
          <h4 className="skillsYaziBoyutu">Java Script</h4>
          <p>{js}</p>
        </div>
        <div className="skillsContainer">
          <h4 className="skillsYaziBoyutu">React.Js</h4>
          <p>{react}</p>
        </div>
        <div className="skillsContainer">
          <h4 className="skillsYaziBoyutu">Node.Js</h4>
          <p>{node}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
