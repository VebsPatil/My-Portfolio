import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    // Create sparkle particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 4 + 's'
      particle.style.animationDuration = (3 + Math.random() * 3) + 's'
      const size = (2 + Math.random() * 4) + 'px'
      particle.style.width = size
      particle.style.height = size

      // Random colors from palette
      const colors = ['#8a4cfc', '#ff6daf', '#53ddfc', '#f97316', '#bd9dff']
      particle.style.background = colors[Math.floor(Math.random() * colors.length)]
      particle.style.boxShadow = `0 0 6px ${particle.style.background}`
      container.appendChild(particle)
    }

    // Create floating geometric shapes
    const shapes = ['◇', '○', '△', '□']
    for (let i = 0; i < 6; i++) {
      const shape = document.createElement('div')
      shape.className = 'geo-shape'
      shape.textContent = shapes[Math.floor(Math.random() * shapes.length)]
      shape.style.left = Math.random() * 100 + '%'
      shape.style.top = Math.random() * 100 + '%'
      shape.style.fontSize = (12 + Math.random() * 24) + 'px'
      shape.style.animationDelay = Math.random() * 12 + 's'
      shape.style.animationDuration = (10 + Math.random() * 8) + 's'
      const colors = ['#8a4cfc', '#ff6daf', '#53ddfc', '#f97316']
      shape.style.color = colors[Math.floor(Math.random() * colors.length)]
      container.appendChild(shape)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="particles-container" ref={particlesRef}>
        {/* Animated mesh gradient blobs */}
        <div className="hero-blob" />
        <div className="hero-blob" />
        <div className="hero-blob" />
        <div className="hero-blob" />
      </div>

      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Open for Collaboration
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Vaibhav Patil
        </motion.h1>

        <motion.h2
          className="hero-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Full Stack Developer &bull; Android &bull; ML Engineer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Crafting immersive digital experiences by merging robust architecture with
          visionary design. Specializing in high-performance web applications, intelligent
          mobile solutions, and data-driven insights.
        </motion.p>

        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#projects" className="btn-primary btn-filled">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
