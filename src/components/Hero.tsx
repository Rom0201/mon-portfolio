const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-950 px-6 pt-20" style={{backgroundColor: "#030712"}}>
      <p style={{color: "#818cf8"}} className="text-lg mb-2 tracking-widest uppercase">Bonjour, je suis</p>
      <h1 style={{color: "#ffffff"}} className="text-5xl md:text-7xl font-bold mb-4">Romaric</h1>
      <h2 style={{color: "#9ca3af"}} className="text-2xl md:text-3xl mb-6">Développeur Web Full-Stack</h2>
      <p style={{color: "#6b7280"}} className="max-w-xl mb-10">En formation à Metz Numeric School, je crée des applications web modernes et je recherche un stage.</p>
      <div className="flex gap-4">
        <a href="#projects" style={{backgroundColor: "#4f46e5", color: "#ffffff"}} className="px-6 py-3 rounded-lg font-semibold">Voir mes projets</a>
        <a href="#contact" style={{border: "1px solid #4b5563", color: "#d1d5db"}} className="px-6 py-3 rounded-lg font-semibold">Me contacter</a>
      </div>
    </section>
  );
};

export default Hero;