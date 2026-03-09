import SkillBar from "./SkillBar"

const Skills = () => {
  return (
    
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6">
     
      <h2 className="py-2 text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* FRONTEND */}
        <div className="bg-purple-900/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-700 shadow-xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold mb-6 text-pink-400">
            Frontend
          </h3>

          <SkillBar name="React.js" percent={90} />
          <SkillBar name="Next.js" percent={85} />
          <SkillBar name="JavaScript" percent={95} />
          <SkillBar name="Tailwind CSS" percent={90} />
        </div>

        {/* BACKEND */}
        <div className="bg-purple-900/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-700 shadow-xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold mb-6 text-pink-400">
            Backend
          </h3>

          <SkillBar name="Node.js" percent={85} />
          <SkillBar name="Express.js" percent={85} />
          <SkillBar name="FastAPI" percent={50} />
          <SkillBar name="MongoDB" percent={90} />
          <SkillBar name="PostgreSQL" percent={80} />
        </div>

        {/* MOBILE */}
        <div className="bg-purple-900/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-700 shadow-xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold mb-6 text-pink-400">
            Mobile Development
          </h3>

          <SkillBar name="React Native" percent={85} />
          <SkillBar name="Flutter" percent={50} />
        </div>

        {/* TOOLS */}
        <div className="bg-purple-900/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-700 shadow-xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold mb-6 text-pink-400">
            Tools & Others
          </h3>

          <SkillBar name="Git & GitHub" percent={85} />
          <SkillBar name="Postman" percent={85} />
          <SkillBar name="Figma" percent={70} />
        </div>

      </div>
    </section>
  )
}

export default Skills