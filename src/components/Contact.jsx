import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Fallback if environment variables are missing
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      alert("EmailJS is not configured. Please set up the environment variables.")
      return
    }

    setSending(true)
    setStatus(null)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: 'Vaibhav Patil',
          to_email: 'vaibhavbpatil1210@gmail.com',
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus({ type: 'success' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus({ type: 'error', message: error?.text || error?.message || 'Something went wrong.' })
    } finally {
      setSending(false)
      setTimeout(() => setStatus(null), 8000)
    }
  }

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-number">06. What's Next?</span>
        <h2>Get In Touch</h2>
        <p>
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question, a project idea, or just want to say hi —
          I'll do my best to get back to you!
        </p>

        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Message........"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={sending}
          >
            <span className="btn-text">
              {sending ? 'Sending...' : 'Send Message'}
            </span>
          </button>

          {status?.type === 'success' && (
            <div className="form-status success">
              ✓ Message sent successfully!
            </div>
          )}
          {status?.type === 'error' && (
            <div className="form-status error">
              ✕ {status.message}
            </div>
          )}
        </form>

        <p style={{ fontSize: '0.85rem' }}>
          Or reach me directly at{' '}
          <a href="mailto:vaibhavbpatil1210@gmail.com">vaibhavbpatil1210@gmail.com</a>
          {' '}·{' '}
          <a href="tel:+919356886572">+91 93568 86572</a>
        </p>
      </motion.div>
    </section>
  )
}
