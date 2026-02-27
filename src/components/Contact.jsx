import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent Successfully 🚀")
        form.current.reset()
      })
      .catch(() => {
        alert("Something went wrong ❌")
      })
  }

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-3 gap-8">


{/* EMAIL CARD */}

<div className="bg-white shadow-lg border border-purple-200 p-6 rounded-2xl text-center flex flex-col items-center justify-center group hover:-translate-y-2 transition duration-300 h-64">
  
  <div className="flex justify-center mb-4">
    <FaEnvelope className="text-3xl text-purple-600 transition-transform duration-500 group-hover:rotate-90" />
  </div>

  <h3 className="text-xl font-semibold text-purple-700 mb-2">
    Email
  </h3>

  <p className="text-gray-600">
    sadat.arefin98@gmail.com
  </p>
</div>

{/* CONTACT FORM */}
        <div className="bg-white shadow-lg border border-purple-200 p-6 rounded-2xl text-center group hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold text-pink-400 mb-6 text-center">
            Send Me A Message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-purple-700 focus:outline-none focus:border-pink-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-purple-700 focus:outline-none focus:border-pink-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-purple-700 focus:outline-none focus:border-pink-500"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>
        </div>

{/* PHONE CARD */}
<div className="bg-white shadow-lg border border-purple-200 p-6 rounded-2xl text-center flex flex-col items-center justify-center group hover:-translate-y-2 transition duration-300 h-64">

  <div className="flex justify-center mb-4">
    <FaPhoneAlt className="text-3xl text-purple-600 transition-transform duration-500 group-hover:rotate-45" />
  </div>

  <h3 className="text-xl font-semibold text-purple-700 mb-2">
    Phone
  </h3>

  <p className="text-gray-600">
    +880 1821233950
  </p>
</div>
      
 
 

      </div>
    </section>
  )
}

export default Contact