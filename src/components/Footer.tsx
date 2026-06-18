const Footer = () => {
  return (
    <footer style={{fontFamily: "'Share Tech Mono', monospace", background: "#080a0f", borderTop: "1px solid #00e5ff22", padding: "20px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px"}}>
      <div style={{display: "flex", gap: "20px"}}>
        <a href="https://github.com/Rom0201" target="_blank" rel="noopener noreferrer" style={{fontSize: "11px", color: "#555", textDecoration: "none", letterSpacing: "2px"}}>GITHUB</a>
        <a href="mailto:romaricarnlt@gmail.com" style={{fontSize: "11px", color: "#555", textDecoration: "none", letterSpacing: "2px"}}>EMAIL</a>
      </div>
      <p style={{fontSize: "11px", color: "#333", letterSpacing: "2px"}}>© 2025 — R0MARIC ARKOUCHA</p>
    </footer>
  );
};

export default Footer;