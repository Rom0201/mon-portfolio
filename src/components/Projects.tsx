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
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900 px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-xl p-8 flex flex-col gap-4 hover:ring-2 hover:ring-indigo-500 transition-all">
              <h3 className="text-white font-bold text-xl">{project.title}</h3>
              <p className="text-gray-400 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-indigo-900 text-indigo-300 text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">Voir le projet →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;