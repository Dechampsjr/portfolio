// src/components/Header.js
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Importando os ícones de lua e sol

const Header = ({ toggleDarkMode, darkMode, toggleLanguage, language }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Wellington Dechamps</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">{language === "en" ? "Home" : "Início"}</a>
          </li>
          <li>
            <a href="#services">
              {language === "en" ? "Services" : "Serviços"}
            </a>
          </li>
          <li>
            <a href="#education">
              {language === "en" ? "Education" : "Educação"}
            </a>
          </li>
          <li>
            <a href="#about">{language === "en" ? "About Us" : "Sobre Nós"}</a>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <button onClick={toggleLanguage}>
          {language === "en" ? "PT" : "EN"} {/* Exibe o idioma atual */}
        </button>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}{" "}
          {/* Muda entre Lua e Sol */}
        </button>
      </div>
    </header>
  );
};

export default Header;
