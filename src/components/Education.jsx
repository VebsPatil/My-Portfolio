import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    degree: 'B.E. — Computer Science & Engineering',
    institution: 'Siddhant College of Engineering, Pune',
    affiliation: 'Affiliated by Savitribai Phule Pune University',
    duration: 'Sept 2024 — Jun 2027',
    grade: 'CGPA: 8.86 (2nd Year, Last Semester)',
  },
  {
    degree: 'Diploma — Computer Science & Engineering',
    institution: 'SSVPS College of Polytechnic, Dhule',
    affiliation: 'Affiliated by Maharashtra State Board of Technical Education',
    duration: 'Oct 2021 — Jun 2024',
    grade: 'Aggregate: 80.80% (Final Year)',
  },
  {
    degree: 'SSC 10th',
    institution: 'Sane Guruji Vidhya Mandir, Amalner',
    affiliation: '',
    duration: 'May 2020 — June 2021',
    grade: '84.20% PCM',
  },
]

const certifications = [
  {
    title: 'Python Essentials Course',
    issuer: 'Cisco Networking Academy',
    description: 'Completed a Python fundamentals course covering data types, control structures, functions, and OOP with hands-on coding and problem-solving.',
  },
  {
    title: 'Data Visualization',
    issuer: 'Tata Group — Forage',
    description: 'Job simulation on data visualization techniques — data analysis, dashboard creation, and storytelling using visualization tools.',
  },
  {
    title: 'Entrepreneurship Development',
    issuer: '',
    description: 'Course on business planning, market analysis, financial management, and startup strategies.',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="education" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading">
          <span className="section-number">05.</span>
          <h2>Education & Certifications</h2>
        </div>

        <div className="education-timeline">
          {education.map((edu, i) => (
            <motion.div
              className="timeline-item"
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 * i }}
            >
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              {edu.affiliation && (
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  {edu.affiliation}
                </p>
              )}
              <p className="duration">{edu.duration}</p>
              <p className="grade">{edu.grade}</p>
            </motion.div>
          ))}
        </div>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              className="cert-card"
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="cert-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <h4>{cert.title}</h4>
              {cert.issuer && (
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', marginBottom: '8px' }}>
                  {cert.issuer}
                </p>
              )}
              <p>{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
