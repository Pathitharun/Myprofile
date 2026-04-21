import React, { useEffect, useRef, useState } from 'react'

const ROLES = ['AI Developer', 'Python Engineer', 'Data Science Student', 'Full-Stack Dev']

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(108,99,255,${p.opacity})`
        ctx.fill()
      })

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(108,99,255,${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas id="particles" ref={canvasRef} />
}

function AbstractAvatar() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '75%', height: '75%' }}>
      {/* Outer glow circle */}
      <circle cx="100" cy="100" r="80" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
      {/* Core hexagon */}
      <polygon points="100,40 148,70 148,130 100,160 52,130 52,70" fill="url(#hexGrad)" stroke="url(#grad1)" strokeWidth="1.5" />
      {/* Inner details */}
      <circle cx="100" cy="100" r="28" fill="url(#innerGrad)" />
      <circle cx="100" cy="100" r="14" fill="rgba(108,99,255,0.5)" />
      <circle cx="100" cy="100" r="5" fill="#fff" />
      {/* Orbiting dots */}
      <circle cx="100" cy="40" r="4" fill="#6c63ff">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="148" cy="70" r="3" fill="#00d4ff">
        <animateTransform attributeName="transform" type="rotate" from="120 100 100" to="480 100 100" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="52" cy="130" r="3" fill="#ff6bdf">
        <animateTransform attributeName="transform" type="rotate" from="240 100 100" to="600 100 100" dur="10s" repeatCount="indefinite" />
      </circle>
      {/* Lines from center */}
      <line x1="100" y1="100" x2="100" y2="40" stroke="rgba(108,99,255,0.3)" strokeWidth="1" />
      <line x1="100" y1="100" x2="148" y2="130" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
      <line x1="100" y1="100" x2="52" y2="70" stroke="rgba(255,107,223,0.3)" strokeWidth="1" />
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6c63ff" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <radialGradient id="innerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(108,99,255,0.4)" />
          <stop offset="100%" stopColor="rgba(0,212,255,0.1)" />
        </radialGradient>
        <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(108,99,255,0.25)" />
          <stop offset="100%" stopColor="rgba(0,212,255,0.08)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = ROLES[roleIndex]
    let timeout

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" className="hero">
      <ParticleCanvas />
      <div className="hero-grid" />

      <div className="hero-content">
        {/* Text */}
        <div className="hero-text">
          <div className="hero-badge">✦ Available for opportunities</div>

          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="gradient-text">Pathi Tarun</span>
            <span className="typewriter-wrap">
              <span className="typewriter">{displayed}</span>
              <span className="cursor-blink" />
            </span>
          </h1>

          <p className="hero-desc">
            I build intelligent systems and elegant interfaces — from AI-powered
            assistants with persistent memory to full-stack web apps. Always
            shipping, always learning.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              ↓ Download Resume
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="hero-visual">
          <div className="avatar-container">
            <div className="avatar-ring" />
            <div className="avatar-ring-2" />
            <div className="avatar-glow" />
            <div className="avatar-svg-wrap">
              <AbstractAvatar />
            </div>
            <div className="floating-badges">
              <div className="float-badge">🧠 AI / ML</div>
              <div className="float-badge">⚡ FastAPI</div>
              <div className="float-badge">⚛️ React</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        Scroll down
      </div>
    </section>
  )
}
