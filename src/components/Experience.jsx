import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    id: 'cfx',
    company: 'CFX Global Technologies',
    title: 'Testing Intern',
    location: 'Pune, Maharashtra',
    duration: 'Aug 2025 — Sept 2025',
    points: [
      'Worked on end-to-end testing of the DhanXpert application, covering functional, regression, and load testing.',
      'Designed test cases, prepared bug reports, and contributed to QA and process improvements.',
      'Gained expertise in Manual Testing, Unit Testing, and Automatic Testing (Selenium).',
      'Collaborated with the development team to ensure software quality before production releases.',
    ],
  },
  {
    id: 'syntonix',
    company: 'Syntonix Inc.',
    title: 'Backend Developer Intern',
    location: 'Remote',
    duration: 'Dec 2025 — Jan 2026',
    points: [
      'Completed a backend developer internship at Syntonix Inc., reporting to Dr. Mohan Venkataramana, President.',
      'Developed and maintained backend services, gaining practical engineering experience in a remote team environment.',
      'Contributed to server-side architecture, API development, and database management tasks.',
      'Strengthened skills in backend technologies, code review processes, and collaborative software engineering workflows.',
    ],
  },
  {
    id: 'ur',
    company: 'Ur Engineering Friend',
    title: 'Android Developer Intern',
    location: 'Pune, Maharashtra',
    duration: 'Aug 2023 — Sept 2023',
    points: [
      'Developed Android applications using Kotlin/Java with focus on UI/UX design and API integration.',
      'Integrated Firebase for real-time data management, user authentication, and push notifications.',
      'Gained hands-on experience in Android Studio with debugging, testing, and optimizing app performance.',
      'Built responsive and intuitive mobile interfaces following Material Design guidelines.',
    ],
  },
  {
    id: 'sumago',
    company: 'Sumago Infotech Pvt. Ltd.',
    title: 'Web Developer Intern',
    location: 'Nashik, Maharashtra',
    duration: 'June 2023 — July 2023',
    points: [
      'Completed a full-stack web development internship, gaining hands-on experience in HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL.',
      'Worked on real-world projects involving dynamic web applications and database management.',
      'Developed responsive, cross-browser compatible web interfaces with modern CSS frameworks.',
      'Contributed to both frontend and backend development in a collaborative team setting.',
    ],
  },
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="experience" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading">
          <span className="section-number">02.</span>
          <h2>Where I've Worked</h2>
        </div>

        <div className="experience-tabs">
          <ul className="tab-list">
            {experiences.map((exp, i) => (
              <li key={exp.id}>
                <button
                  className={`tab-button ${activeTab === i ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {exp.company.split(' ')[0]}
                </button>
              </li>
            ))}
          </ul>

          <motion.div 
            className="tab-content"
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>
              {experiences[activeTab].title}{' '}
              <span className="company">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="duration">
              {experiences[activeTab].duration} · {experiences[activeTab].location}
            </p>
            <ul>
              {experiences[activeTab].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
