import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          VP
        </div>

        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href="https://drive.google.com/file/d/178WbeO_VLjYErCTU1DeXXe2yCjFEhU-y/view?usp=drive_link" className="nav-resume-btn" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <aside className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item, i) => (
          <a key={item.label} href={item.href} onClick={handleNavClick}>
            <span className="nav-number">0{i + 1}.</span>
            {item.label}
          </a>
        ))}
        <a href="https://drive.google.com/file/d/178WbeO_VLjYErCTU1DeXXe2yCjFEhU-y/view?usp=drive_link" className="nav-resume-btn" target="_blank" rel="noopener noreferrer" onClick={handleNavClick}>
          Resume
        </a>
      </aside>
    </>
  )
}
