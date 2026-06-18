import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-white font-bold text-xl">Romaric.dev</div>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-gray-300 hover:text-white transition-colors">Accueil</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">À propos</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Compétences</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projets</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 flex flex-col gap-4">
          <a href="#home" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Accueil</a>
          <a href="#about" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>À propos</a>
          <a href="#skills" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Compétences</a>
          <a href="#projects" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Projets</a>
          <a href="#contact" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;