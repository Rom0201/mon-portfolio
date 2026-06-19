const Contact = () => {
  return (
    <section id="contact" style={{fontFamily: "'Rajdhani', sans-serif", background: "#0d1117", borderBottom: "1px solid #00e5ff10", paddingTop: "128px", paddingBottom: "128px", minHeight: "100vh", display: "flex", alignItems: "center"}} className="px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div style={{fontFamily: "'Share Tech Mono', monospace", fontSize: "15px", color: "#00e5ff88", letterSpacing: "3px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px"}}>
          CONTACT.sys
          <span style={{flex: "1", height: "1px", background: "#00e5ff22"}}></span>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "12px"}}>
          <p style={{fontSize: "16px", color: "#888", marginBottom: "20px", textAlign: "center"}}>Une opportunité de stage ? N'hésitez pas à me contacter !</p>
          <a href="mailto:romaricarnlt@gmail.com" style={{fontFamily: "'Share Tech Mono', monospace", fontSize: "13px", color: "#0a0c10", background: "#00e5ff", padding: "14px 24px", textDecoration: "none", letterSpacing: "1px", textAlign: "center", borderRadius: "2px", width: "360px"}}>romaricarnlt@gmail.com</a>
          <a href="https://github.com/Rom0201" target="_blank" rel="noopener noreferrer" style={{fontFamily: "'Share Tech Mono', monospace", fontSize: "13px", color: "#e040fb", border: "1px solid #e040fb66", padding: "14px 24px", textDecoration: "none", letterSpacing: "1px", textAlign: "center", borderRadius: "2px", width: "360px"}}>GITHUB → ROM0201</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;