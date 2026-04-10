import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const FolderIcon = () => (
  <svg className="project-folder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
)

const featuredProjects = [
  {
    title: 'Rental Hub for Farm Equipments',
    description: 'A web platform connecting farmers with equipment owners for renting agricultural machinery like tractors, harvesters, and seeders. Features location-based search, equipment details, rental requests, and listing management with a seamless user experience.',
    tech: ['React.js', 'Firebase', 'Node.js', 'MySQL', 'PHP'],
    github: 'https://github.com/VebsPatil/farmequipmentsrent',
    emoji: '🚜',
  },
  {
    title: 'C-Language Compiler',
    description: 'A Python-based compiler for a subset of C, implementing lexical analysis, parsing, AST construction, and code generation to produce executable Python output. Features a clean, extensible architecture with custom grammar rules, tokens, and codegen modules.',
    tech: ['Python', 'Lexer', 'Parser', 'AST', 'Code Generation'],
    github: 'https://github.com/VebsPatil/C-Language-Compiler',
    emoji: '⚙️',
  },
  {
    title: 'PPT Gesture Control (ML)',
    description: 'An ML model trained on 1000+ hand images using Python and Kaggle CNN to recognize hand gestures and finger movements. It enables presenters to control PowerPoint slides through hand gestures for a consistent, hands-free presentation flow.',
    tech: ['Python', 'CNN', 'Kaggle', 'OpenCV', 'MediaPipe'],
    github: 'https://github.com/VebsPatil/PPT-GestureControl',
    emoji: '🤖',
  },
]

const otherProjects = [
  {
    title: 'SafeYatra',
    description: 'A safe journey tracking application that ensures passenger safety during travel with real-time monitoring, emergency alerts, and route optimization.',
    tech: ['JavaScript', 'Firebase', 'Maps API'],
    github: 'https://github.com/maivyash/SafeYatra',
    isContribution: true,
  },
  {
    title: 'GovKPI Pro',
    description: 'A government KPI performance tracking dashboard for monitoring key metrics, analyzing departmental efficiency, and generating actionable insights.',
    tech: ['TypeScript', 'React', 'Node.js'],
    github: 'https://github.com/maivyash/govKPIpro',
    isContribution: true,
  },
  {
    title: 'Secure Chat Platform',
    description: 'An end-to-end encrypted messaging platform with user authentication, real-time messaging, and secure data transmission protocols.',
    tech: ['JavaScript', 'Socket.io', 'Node.js', 'Encryption'],
    github: 'https://github.com/maivyash/Secure-Chat',
    isContribution: true,
  },
  {
    title: 'Bus Reservation System',
    description: 'A comprehensive bus booking platform with seat selection, route management, and payment integration for seamless travel booking.',
    tech: ['SCSS', 'JavaScript', 'Node.js'],
    github: 'https://github.com/VebsPatil/Bus-Reservation-System',
  },
  {
    title: 'Integrate Movies API',
    description: 'A movie discovery application integrating external APIs to browse, search, and explore movie details with a beautiful and responsive interface.',
    tech: ['CSS', 'JavaScript', 'REST API'],
    github: 'https://github.com/VebsPatil/Integrate-Movies-API',
  },
  {
    title: 'TantrShell',
    description: 'Tech startup landing page with immersive 3D visuals, smooth GSAP animations, and a premium dark-themed design system showcasing business solutions.',
    tech: ['JavaScript', 'Three.js', 'GSAP'],
    github: 'https://github.com/VebsPatil/TantrShell',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading">
          <span className="section-number">03.</span>
          <h2>Some Things I've Built</h2>
        </div>

        {/* Featured Projects */}
        {featuredProjects.map((project, i) => (
          <div className="featured-project" key={project.title}>
            <div className="featured-project-image">
              <div className="project-visual">
                <div className="project-visual-grid" />
                <span style={{ position: 'relative', zIndex: 1 }}>{project.emoji}</span>
              </div>
            </div>
            <div className="featured-project-info">
              <p className="featured-label">Featured Project</p>
              <h3>{project.title}</h3>
              <div className="featured-description">
                <p>{project.description}</p>
              </div>
              <ul className="featured-tech">
                {project.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
              <div className="featured-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects */}
        <h3 className="other-projects-heading">Other Noteworthy Projects</h3>
        <p className="other-projects-subtitle">view the archive</p>

        <div className="projects-grid">
          {otherProjects.map((project, i) => (
            <motion.div
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="project-card-header">
                <FolderIcon />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              {project.isContribution && (
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--bg-void)',
                  marginBottom: '12px',
                  display: 'inline-block',
                  background: 'var(--gradient-secondary)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Contribution Project
                </span>
              )}
              <p>{project.description}</p>
              <ul className="project-tech">
                {project.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
