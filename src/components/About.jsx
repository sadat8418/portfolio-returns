import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 max-w-7xl mx-auto px-6">
      
      {/* SECTION TITLE */}
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        About Me
      </h2>

      {/* MAIN ABOUT GRID */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="rounded-2xl shadow-2xl w-full max-w-md"
          />
        </div>

        {/* TEXT CONTENT */}
        <div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a passionate Full-Stack Developer specializing in 
            React, Next.js, Node.js and scalable backend systems.
            I enjoy building modern, efficient and user-friendly applications.
          </p>

          {/* RESPONSIVE FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-purple-900/50 p-4 rounded-xl border border-purple-700 hover:scale-105 transition">
              <h4 className="font-semibold text-pink-400">Goal Oriented</h4>
              <p className="text-sm text-gray-400">
                Focused on delivering impactful results
              </p>
            </div>

            <div className="bg-purple-900/50 p-4 rounded-xl border border-purple-700 hover:scale-105 transition">
              <h4 className="font-semibold text-pink-400">Team Player</h4>
              <p className="text-sm text-gray-400">
                Strong collaborative mindset
              </p>
            </div>

            <div className="bg-purple-900/50 p-4 rounded-xl border border-purple-700 hover:scale-105 transition">
              <h4 className="font-semibold text-pink-400">Fast Learner</h4>
              <p className="text-sm text-gray-400">
                Quickly adapts to new technologies
              </p>
            </div>

            <div className="bg-purple-900/50 p-4 rounded-xl border border-purple-700 hover:scale-105 transition">
              <h4 className="font-semibold text-pink-400">Quality Focused</h4>
              <p className="text-sm text-gray-400">
                Attention to detail & clean code
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div className="mt-40">
        <h3 className="text-3xl font-bold mb-8 text-center text-purple-300">
          Education
        </h3>

        <div className="max-w-3xl mx-auto bg-purple-900/50 backdrop-blur-md p-8 rounded-2xl border border-purple-700 shadow-xl hover:-translate-y-2 transition duration-300">
          
          <h4 className="text-xl font-semibold text-pink-400 mb-2">
            B.Sc. in Computer Science & Engineering
          </h4>

          <p className="text-gray-300">
            Rajshahi University of Engineering & Technology (RUET)
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Focused on software engineering, system design, algorithms, 
            database systems, and modern web technologies.
          </p>

        </div>
      </div>

    </section>
  )
}

export default About