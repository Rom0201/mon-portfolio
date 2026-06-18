const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-950 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <p className="text-gray-400 mb-10">Une opportunité de stage ? N'hésitez pas à me contacter !</p>
        <div className="flex flex-col gap-4 items-center">
          <a href="mailto:romaricarnlt@gmail.com" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors w-full max-w-sm text-center">romaricarnlt@gmail.com</a>
          <a href="https://github.com/Rom0201" target="_blank" rel="noopener noreferrer" className="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors w-full max-w-sm text-center">GitHub → Rom0201</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;