import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import EmailSidebar from './components/EmailSidebar'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Navbar />
      <SocialSidebar />
      <EmailSidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function Loader() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0d0d18',
      zIndex: 9999,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #8a4cfc, #ff6daf)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse-glow 1.5s ease-in-out infinite',
          boxShadow: '0 0 40px rgba(138, 76, 252, 0.4), 0 0 80px rgba(255, 109, 175, 0.2)',
        }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.3rem',
            fontWeight: 700,
            color: '#0d0d18',
          }}>VP</span>
        </div>
        <div style={{
          width: '120px',
          height: '3px',
          borderRadius: '3px',
          background: '#1e1e2d',
          overflow: 'hidden',
        }}>
          <div style={{
            width: '50%',
            height: '100%',
            background: 'linear-gradient(90deg, #8a4cfc, #ff6daf)',
            borderRadius: '3px',
            animation: 'loading-bar 1.5s ease-in-out infinite',
          }} />
        </div>
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(138, 76, 252, 0.4), 0 0 80px rgba(255, 109, 175, 0.2); }
            50% { transform: scale(1.08); box-shadow: 0 0 60px rgba(138, 76, 252, 0.6), 0 0 120px rgba(255, 109, 175, 0.3); }
          }
          @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
        `}</style>
      </div>
    </div>
  )
}

export default App
