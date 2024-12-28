import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  // Estado para o modo escuro (true para escuro, false para claro)
  const [darkMode, setDarkMode] = useState(false);

  // Estado para o idioma (PT ou EN)
  const [language, setLanguage] = useState("pt");

  // Função para alternar entre modo escuro e claro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Função para alternar entre os idiomas (PT ou EN)
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  // Atualizar a classe do body conforme o estado do modo escuro
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleLanguage={toggleLanguage}
        language={language}
      />
      <MainContent language={language} />{" "}
      {/* Passando o idioma para o MainContent */}
      <Footer />
    </div>
  );
};

export default App;
