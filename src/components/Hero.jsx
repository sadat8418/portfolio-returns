const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* ⭐ Background Layers (do NOT affect layout) */}
      <div className="stars pointer-events-none"></div>
      <div className="stars-glow pointer-events-none"></div>

      {/* ⭐ Content */}
      <div className="z-10 flex flex-col items-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Sadat Arefin
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Full-Stack Web Developer & Mobile App Developer
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8 justify-center">
          <a href="#projects">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition">
              View My Work
            </button>
          </a>

          <a href="#contact">
            <button className="px-6 py-3 rounded-full border border-purple-400 hover:scale-105 hover:bg-purple-700 transition">
              Get In Touch
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-12 justify-center">
          <div>
            <h2 className="text-2xl font-bold">3+</h2>
            <p className="text-gray-300 text-sm">Month Experience</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">10+</h2>
            <p className="text-gray-300 text-sm">Projects</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">100%</h2>
            <p className="text-gray-300 text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero