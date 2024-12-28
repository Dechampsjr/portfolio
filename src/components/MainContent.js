import React from "react";
import profilePic from "../assets/profile-pic.jpg"; // Imagem do perfil

const MainContent = ({ language }) => {
  return (
    <section id="home" className="main-content">
      <div className="profile">
        <h1>
          {language === "en" ? "Wellington Dechamps" : "Wellington Dechamps"}
        </h1>
        <p>
          {language === "en" ? "Full Stack Developer" : "Developer Full Stack"}
        </p>
        <p>
          {language === "en"
            ? "I am passionate about transforming ideas into innovative technological solutions. With Full Stack development skills, I create dynamic, scalable applications using technologies like JavaScript, React, and Node.js, always focused on optimizing user experience and meeting business needs."
            : "Sou apaixonado por transformar ideias em soluções inovadoras. Com habilidades em desenvolvimento Full Stack, crio aplicações dinâmicas e escaláveis utilizando tecnologias como JavaScript, React e Node.js, sempre focado em otimizar a experiência do usuário e atender às necessidades dos negócios."}
        </p>
        <button>{language === "en" ? "Contact Me" : "Contate-me"}</button>
      </div>
      <div className="profile-image">
        <img src={profilePic} alt="Wellington Dechamps" />
      </div>
    </section>
  );
};

export default MainContent;
