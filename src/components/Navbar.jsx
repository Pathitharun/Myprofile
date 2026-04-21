import React, { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="nav-logo">

        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={activeSection === l.href.slice(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download
          className="nav-resume-btn"
          style={{ display: menuOpen ? 'none' : undefined }}
        >
          Resume ↓
        </a>

        <div className="hamburger" onClick={() => setMenuOpen(o => !o)}>
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </div>
      </div>
    </nav>
  )
}
