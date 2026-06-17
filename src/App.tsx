import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  // État pour gérer l'ouverture du menu sur mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <div className="logo">MonPortfolio</div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Accueil</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>À propos</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        {/* Bouton Menu Burger pour mobile */}
        <button
          className="menu-toggle"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <h1>Développeur Web Full-Stack</h1>
        <p>En recherche de stage</p>
        <a href="#projects" className="btn">Voir mes projets</a>
      </section>
   
    {/* À PROPOS */}
      <section id="about" className="about">
        <h2>À propos</h2>
        <p> Passionné par le développement web, je maîtrise les bases du front-end (HTML, CSS, JavaScript, React)
            et je continue d’apprendre chaque jour pour devenir un développeur complet.</p>
     <p style={{ marginTop: 10 }}>
  Points forts : rigueur, communication, autonomie. Je documente ce que je fais
  et je demande de l’aide quand c’est nécessaire.
</p>
     
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Compétences</h2>
        <div className="skills-grid">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">TypeScript</div>
          <div className="skill-card">PHP</div>
          <div className="skill-card">MySQL</div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projects" className="projects">
        <h2>Mes Projets</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Projet 1</h3>
            <p>Description rapide du projet.</p>
          </div>
          <div className="project-card">
            <h3>Projet 2</h3>
            <p>Description rapide du projet.</p>
          </div>
          <div className="project-card">
            <h3>Projet 3</h3>
            <p>Description rapide du projet.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>N'hésitez pas à me contacter pour toute opportunité :
        <a href="mailto:romaricarnlt@gmail.com"> romaricarnlt@gmail.com</a>
        </p>
      </section>

        {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 MonPortfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default App;
