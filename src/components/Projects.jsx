import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projectData = [
  // {
  //   id: 1,
  //   title: " 🧠 AI Chatbot",
  //   category: "NextJs",
  //   description: " A chatbot built using NextJS and TypeScript\nTags: Ai, Chatbot, PDF summarizer, NextJS, TypeScript ",
  //   link: "https://ai-bot89.vercel.app"
  // },
  {
    id: 2,
    title: "📱 React Auth Website",
    category: "React",
    description: "Modern dashboard with authentication & API integration.\nTags: React, TailwindCSS, Appwrite",
    link: "https://sketch-book-kappa.vercel.app"
  },
  {
    id: 3,
    title: "🌐 Animated Website",
    category: "Animations",
    description: "A Three.js-powered interactive website\nTags:  HTML, CSS, JS, GSAP, ThreeJS, Framer-Motion",
    link: "https://xephyra.vercel.app"
  },
  {
    id: 4,
    title: " 🧠 AI Chatbot",
    category: ["Agentic AI","NextJs"],
    description: " A chatbot built using NextJS and TypeScript\nTags: Ai, Chatbot, PDF summarizer, NextJS, TypeScript ",
    link: "https://ai-bot89.vercel.app"
  },
  {
    id: 5,
    title: "📱 Mobile App",
    category: "React Native",
    description: "Currency Converter, Roll the Dice Game, Tic Tac Toe, App Navigation Demo\nTags: React Native, TypeScript, RN CLI, React Navigation, UI",
    link: "https://drive.google.com/drive/folders/1B6-qlkVkZtC9LubMSxCRmTjmRJAzfeE3?usp=sharing"
  },
  {
    id: 6,
    title: "🪸 Mini Projects",
    category: "React",
    description: " Animated clock, Relationship Visualizer, Screen Partitioner, Video Player, Item Duplicator.\nTags: Tags:  HTML, CSS, React, TypeScript, Framer-Motion",
    link: "https://minie-dusky.vercel.app"
  },
  {
    id: 7,
    title: "🏡 Valo Bari",
    category: ["React", "Backend"], 
    description: " Full-stack apartments booking platform with admin dashboard, payments, and property management.\nTags: Express, PostgreSQL, JWT Auth, Bkash, Render    ",
    link: "https://valo-bari.vercel.app",
     video: "https://drive.google.com/file/d/1BJ5n8PVvGvDcB8fu8t5hnAfkGjdfb6W7/view?usp=drive_link" 
  },

]

const categories = [
  "All",
  "React",
  "NextJs",
  "Agentic AI",
  "React Native",
  // "Flutter",
  "Animations",
  "Backend"
]

const Projects = () => {
  const [active, setActive] = useState("All")

 const filteredProjects =
  active === "All"
    ? projectData
    : projectData.filter((project) =>
        Array.isArray(project.category)
          ? project.category.includes(active)
          : project.category === active
      )
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Projects
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm transition ${
              active === cat
                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                : "bg-purple-900/60 border border-purple-700 hover:bg-purple-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-purple-900/50 backdrop-blur-md p-6 rounded-2xl border border-purple-700 shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-pink-400 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 whitespace-pre-line">
                {project.description}
              </p>
              <div className="flex gap-3 mt-3">
  <a
    href={project.link}
    target="_blank"
    className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
  >
    View Project
  </a>

  {project.video && (
    <a
      href={project.video}
      target="_blank"
      className="text-sm px-4 py-2 rounded-full border border-pink-400 text-pink-300 hover:bg-pink-500/20 transition"
    >
      ▶ Watch Video
    </a>
  )}
</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Projects