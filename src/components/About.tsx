const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">À propos</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-gray-400 space-y-4">
            <p>Passionné par le développement web, je suis en formation à <span className="text-white font-semibold">Metz Numeric School</span> où j'apprends à créer des applications web modernes.</p>
            <p>Je maîtrise le front-end avec <span className="text-white font-semibold">React, TypeScript et TailwindCSS</span>, et je travaille aussi sur le back-end avec <span className="text-white font-semibold">Python, Flask et MySQL</span>.</p>
            <p>Points forts : rigueur, autonomie, curiosité. Je documente ce que je fais et je n'hésite pas à chercher des solutions.</p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="bg-gray-800 px-5 py-3 rounded-lg text-gray-300">🎓 Metz Numeric School</div>
            <div className="bg-gray-800 px-5 py-3 rounded-lg text-gray-300">📍 France</div>
            <div className="bg-gray-800 px-5 py-3 rounded-lg text-gray-300">🔍 En recherche de stage</div>
            <div className="bg-gray-800 px-5 py-3 rounded-lg text-gray-300">💻 Full-Stack Junior</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;