const About = () => {
  return (
    <section id="about" style={{fontFamily: "'Rajdhani', sans-serif", background: "#0a0c10", borderBottom: "1px solid #00e5ff10", paddingTop: "128px", paddingBottom: "128px", minHeight: "100vh", display: "flex", alignItems: "center"}} className="px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div style={{fontFamily: "'Share Tech Mono', monospace", fontSize: "15px", color: "#00e5ff88", letterSpacing: "3px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px"}}>
          À_PROPOS
          <span style={{flex: "1", height: "1px", background: "#00e5ff22"}}></span>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div style={{flex: "1"}}>
            <p style={{fontSize: "16px", color: "#888", lineHeight: "1.9", marginBottom: "16px"}}>Passionné par le développement web, je suis en formation à <span style={{color: "#00e5ff"}}>Metz Numeric School</span> où j'apprends à créer des applications web modernes.</p>
            <p style={{fontSize: "16px", color: "#888", lineHeight: "1.9", marginBottom: "16px"}}>Je maîtrise le front-end avec <span style={{color: "#e040fb"}}>React, TypeScript et TailwindCSS</span>, et je travaille aussi sur le back-end avec <span style={{color: "#e040fb"}}>Python, Flask et MySQL</span>.</p>
            <p style={{fontSize: "16px", color: "#888", lineHeight: "1.9"}}>Points forts : rigueur, autonomie, curiosité.</p>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", minWidth: "220px"}}>
            <div style={{background: "#0d1117", border: "1px solid #00e5ff22", padding: "12px 18px", borderRadius: "2px", fontFamily: "'Share Tech Mono', monospace", fontSize: "13px", color: "#888"}}>🎓 Metz Numeric School</div>
            <div style={{background: "#0d1117", border: "1px solid #00e5ff22", padding: "12px 18px", borderRadius: "2px", fontFamily: "'Share Tech Mono', monospace", fontSize: "13px", color: "#888"}}>📍 France</div>
            <div style={{background: "#0d1117", border: "1px solid #00e5ff22", padding: "12px 18px", borderRadius: "2px", fontFamily: "'Share Tech Mono', monospace", fontSize: "13px", color: "#00e5ff"}}>🔍 Disponible pour un stage</div>
            <div style={{background: "#0d1117", border: "1px solid #00e5ff22", padding: "12px 18px", borderRadius: "2px", fontFamily: "'Share Tech Mono', monospace", fontSize: "13px", color: "#888"}}>💻 Concépteur Développeur Intégrateur d'IA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;