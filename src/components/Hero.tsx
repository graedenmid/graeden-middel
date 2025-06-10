const Hero = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            Hello, I'm <span className="text-primary">Graeden Middel</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
            Sales Operations and Strategy Analyst
          </p>

          <p className="text-lg text-neutral-500 mb-12 max-w-2xl mx-auto">
            Welcome to my portfolio. I specialize in optimizing sales operations
            and developing strategic insights to drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="btn-primary inline-flex items-center justify-center"
            >
              Learn More About Me
            </a>
            <a
              href="#projects"
              className="btn-secondary inline-flex items-center justify-center"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
