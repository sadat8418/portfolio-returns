import { motion } from "framer-motion"

const Hero = () => {
  const name = "Sadat Arefin".split("")

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    },
    hover: {
      transition: {
        staggerChildren: 0.04
      }
    }
  }

  const letter = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12 }
    },
    hover: {
      y: [0, -15, 0],
      transition: {
        duration: 0.4
      }
    }
  }

  const paragraph = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.2, duration: 0.6 }
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      <div className="stars pointer-events-none"></div>
      <div className="stars-glow pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center max-w-3xl mx-auto">

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="py-4 leading-[1.4] text-5xl md:text-6xl font-bold flex items-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          {name.map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={paragraph}
          initial="hidden"
          animate="visible"
          className="mt-4 text-xl text-gray-300"
        >
          Full-Stack Web Developer & Mobile App Developer
        </motion.p>

      </div>

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
      
    </section>
  )
}

export default Hero