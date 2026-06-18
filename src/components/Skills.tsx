const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Python", "MySQL", "PHP", "Flask", "Docker", "Git"];

  return (
    <section id="skills" style={{fontFamily: "'Rajdhani', sans-serif", background: "#0d1117", borderBottom: "1px solid #00e5ff10"}} className="py-24 px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div style={{fontFamily: "'Share Tech Mono', monospace", fontSize: "15px", color: "#00e5ff88", letterSpacing: "3px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px"}}>
          SKILLS.exe
          <span style={{flex: "1", height: "1px", background: "#00e5ff22"}}></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill} style={{background: "#0a0c10", border: "1px solid #00e5ff22", borderRadius: "2px", padding: "16px 20px"}}>
              <span style={{fontFamily: "'Share Tech Mono', monospace", color: "#e0e0e0", fontSize: "13px", letterSpacing: "1px", display: "block", marginBottom: "10px"}}>{skill}</span>
              <div style={{width: "100%", background: "#1a1a2e", borderRadius: "1px", height: "3px"}}>
                <div style={{width: "100%", background: "linear-gradient(90deg, #00e5ff, #e040fb)", height: "3px", borderRadius: "1px"}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;