import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const SkillBar = ({ name, percent }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="mb-5" ref={ref}>
      <div className="flex justify-between mb-2 text-sm">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>

      <div className="w-full bg-purple-950 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percent}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
        />
      </div>
    </div>
  )
}

export default SkillBar