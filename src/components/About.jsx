import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    'JavaScript (ES6+)', 'React.js', 'Node.js',
    'Python', 'Java / Kotlin', 'MySQL / Firebase',
    'React Native', 'PHP', 'Git / CI/CD',
    'AWS Lambda', 'Android Studio', 'Figma (UI/UX)',
  ]

  return (
    <section className="section" id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading">
          <span className="section-number">01.</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I'm <span className="highlight">Vaibhav</span>, a passionate full-stack developer 
              based in <span className="highlight">Pune, Maharashtra</span>. I enjoy creating things that 
              live on the internet, whether that's websites, applications, or anything in between. 
              My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
            <p>
              I'm currently pursuing my <span className="highlight">B.E. in Computer Science & Engineering</span> at 
              Siddhant College of Engineering, Pune (8.86 CGPA). I've had the privilege of working as 
              an intern at multiple organizations, gaining hands-on experience in full-stack web 
              development, Android development, and backend engineering.
            </p>
            <p>
              I'm eager to learn, grow, and contribute to projects in software development, 
              web development, AI/ML, and Big Data. Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="skills-list">
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="about-image-wrapper">
            <div className="image-frame">
              <div className="about-avatar">VP</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
