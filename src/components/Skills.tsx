const Skills = () => {
  const skills = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "TypeScript", level: 65 },
    { name: "Python", level: 60 },
    { name: "MySQL", level: 65 },
    { name: "PHP", level: 55 },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-800 rounded-lg p-5">
              <div className="flex justify-between mb-2">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-indigo-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;