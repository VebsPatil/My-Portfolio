import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: '💻 Languages',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'Kotlin'],
  },
  {
    title: '🌐 Frontend',
    skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'Bootstrap', 'SCSS', 'Figma', 'UI/UX Design'],
  },
  {
    title: '⚡ Backend & Database',
    skills: ['Node.js', 'Express.js', 'Firebase', 'MySQL', 'MongoDB', 'REST APIs', 'AWS Lambda'],
  },
  {
    title: '🧠 AI / ML',
    skills: ['Machine Learning (Python)', 'CNN', 'OpenCV', 'MediaPipe', 'Kaggle', 'Data Visualization'],
  },
  {
    title: '🔧 DevOps & Tools',
    skills: ['Git', 'GitHub', 'CI/CD Pipeline', 'Android Studio', 'VS Code', 'Selenium'],
  },
  {
    title: '🧪 Testing',
    skills: ['Manual Testing', 'Unit Testing', 'Automated Testing', 'Selenium', 'Defect Life Cycle', 'Bug Reporting'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading">
          <span className="section-number">04.</span>
          <h2>Skills & Technologies</h2>
        </div>

        <div className="skills-categories">
          {skillCategories.map((cat, i) => (
            <motion.div
              className="skill-category"
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
            >
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
