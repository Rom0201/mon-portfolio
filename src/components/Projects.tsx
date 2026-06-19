const Projects = () => {
  const projects = [
    {
      title: "Pizzeria MITICA",
      description: "Application de carte de fidélité pour une pizzeria. Développée avec Electron et SQLite.",
      tags: ["React", "Electron", "SQLite", "TypeScript"],
      link: "https://github.com/Rom0201/pizzeria-fidelite",
    },
    {
      title: "Atelier Arkoucha",
      description: "Site galerie pour une artiste peintre avec système de QR codes pour expositions.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://rom0201.github.io/atelier_arkoucha/",
    },
    {
      title: "GreenCheck",
      description: "Application web de diagnostic de santé des plantes par photo, utilisant l'IA.",
      tags: ["React", "Flask", "TensorFlow", "MySQL", "Docker"],
      link: "https://github.com/Rom0201",
    },
    {
      title: "ARK_VIEW",
      description: "Application web de préstation Vidéo/Montage pour de l'événementiel.",
      tags: ["HTML", "CSS", "JavaScript", "MySQL", "Docker"],
      link: "https://rom0201.github.io/ark_view/#accueil",
    },
  ];

  return (
    <section id="projects" style={{fontFamily: "'Rajdhani', sans-serif", background: "#0a0c10", borderBottom: "1px solid #00e5ff10", paddingTop: "128px", paddingBottom: "128px", minHeight: "100vh", display: "flex", alignItems: "center"}} className="px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div style={{fontFamily: "'Share Tech Mono', monospace", fontSize: "15px", color: "#00e5ff88", letterSpacing: "3px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px"}}>
          PROJETS.log
          <span style={{flex: "1", height: "1px", background: "#00e5ff22"}}></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div key={project.title} style={{background: "#0d1117", border: "1px solid #00e5ff22", borderRadius: "2px", padding: "20px", display: "flex", flexDirection: "column", gap: "12px", borderLeft: i === 0 ? "3px solid #00e5ff" : i === 1 ? "3px solid #e040fb" : i === 2 ? "3px solid #76ff03" : "3px solid #ff1744"}}>
              <h3 style={{fontFamily: "'Share Tech Mono', monospace", fontSize: "14px", color: "#ffffff", letterSpacing: "1px"}}>{project.title}</h3>
              <p style={{fontSize: "13px", color: "#555", lineHeight: "1.7", flex: "1"}}>{project.description}</p>
              <div style={{display: "flex", flexWrap: "wrap", gap: "6px"}}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", color: "#e040fb", border: "1px solid #e040fb33", padding: "2px 8px", borderRadius: "2px"}}>{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", color: "#00e5ff", textDecoration: "none", letterSpacing: "1px"}}>VOIR LE PROJET →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;