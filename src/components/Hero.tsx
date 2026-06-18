const Hero = () => {
  return (
    <section id="home" style={{fontFamily: "'Rajdhani', sans-serif", background: "#0a0c10", borderBottom: "1px solid #00e5ff15"}} className="min-h-screen flex flex-col justify-center px-8 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div style={{display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", color: "#00e5ff", border: "1px solid #00e5ff44", padding: "4px 12px", borderRadius: "2px", marginBottom: "24px", letterSpacing: "2px"}}>
          <span style={{width: "6px", height: "6px", borderRadius: "50%", background: "#00e5ff", boxShadow: "0 0 6px #00e5ff", display: "inline-block"}}></span>
          DISPONIBLE POUR UN STAGE
        </div>
        <h1 style={{fontSize: "52px", fontWeight: "600", lineHeight: "1.1", marginBottom: "16px", letterSpacing: "1px"}}>
          <span style={{color: "#ffffff", display: "block"}}>ROMARIC</span>
          <span style={{color: "#e040fb", display: "block"}}>CONCEPTEUR DÉVELOPPEUR INTÉGRATEUR D'IA</span>
        </h1>
        <p style={{fontFamily: "'Share Tech Mono', monospace", fontSize: "13px", color: "#555", lineHeight: "2", marginBottom: "32px", maxWidth: "460px"}}>
          &gt; Formation @ Metz Numeric School<br/>
          &gt; React · TypeScript · Python · MySQL
        </p>
        <div style={{display: "flex", gap: "12px"}}>
          <a href="#projects" style={{background: "#00e5ff", color: "#0a0c10", padding: "10px 24px", fontSize: "13px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", fontFamily: "'Rajdhani', sans-serif"}}>Voir mes projets</a>
          <a href="#contact" style={{background: "transparent", color: "#e040fb", padding: "10px 24px", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", border: "1px solid #e040fb66", textDecoration: "none", borderRadius: "2px", fontFamily: "'Rajdhani', sans-serif"}}>Me contacter</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;