const Navbar = () => {
  return (
    <header style={{fontFamily: "'Share Tech Mono', monospace", background: "#0a0c10ee", borderBottom: "1px solid #00e5ff22"}} className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <span style={{color: "#00e5ff", letterSpacing: "4px", fontSize: "15px"}}>R0MARIC ARKOUCHA</span>
        <nav className="hidden md:flex gap-8">
          <a href="#home" style={{color: "#888", fontSize: "13px", letterSpacing: "1px", textDecoration: "none", textTransform: "uppercase"}}>Accueil</a>
          <a href="#about" style={{color: "#888", fontSize: "13px", letterSpacing: "1px", textDecoration: "none", textTransform: "uppercase"}}>À propos</a>
          <a href="#skills" style={{color: "#888", fontSize: "13px", letterSpacing: "1px", textDecoration: "none", textTransform: "uppercase"}}>Skills</a>
          <a href="#projects" style={{color: "#888", fontSize: "13px", letterSpacing: "1px", textDecoration: "none", textTransform: "uppercase"}}>Projets</a>
          <a href="#contact" style={{color: "#888", fontSize: "13px", letterSpacing: "1px", textDecoration: "none", textTransform: "uppercase"}}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;