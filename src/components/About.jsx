import React from 'react'
import { useReveal } from '../hooks/useReveal'

const stats = [
  { number: '2', label: 'Projects Built' },
  { number: '3+', label: 'Tech Stacks' },
  { number: '∞', label: 'Ideas in Queue' },
  { number: '100%', label: 'Passion-Driven' },
]

const highlights = [
  'Built Elli — an AI assistant',
  'Designed full-stack apps with React + FastAPI',
  'Created a responsive React-based portfolio website',
  'Always learning and building new things',
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid" ref={ref}>
          {/* Stats */}
          <div className="about-stats reveal">
            {stats.map((s, i) => (
              <div key={i} className={`stat-card reveal reveal-delay-${i % 3 + 1}`}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="about-text reveal">
            <h2 className="section-title">
              Building the Future,<br />
              <span className="gradient-text">One Commit at a Time</span>
            </h2>
            <p>
              I'm <strong>Pathi Tarun Naidu</strong>, a developer deeply interested in
              artificial intelligence, Python backends, and modern frontend experiences.
              I enjoy turning complex ideas into real, working software.
            </p>
            <p>
              My flagship project, <strong>Elli</strong>, is an AI assistant I built
              from the ground up — with semantic memory, ChromaDB retrieval, Obsidian
              note integration, and a React frontend. It reflects my belief that
              software should feel intelligent and personal.
            </p>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div key={i} className="highlight-item">
                  <div className="highlight-dot" />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
