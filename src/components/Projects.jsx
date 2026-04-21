import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const PROJECTS = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px', color: '#818cf8' }}>
        <path d="M12 2a4 4 0 0 1 4 4c0 .34-.04.67-.1 1H16a3 3 0 0 1 3 3v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2v-1a3 3 0 0 1 3-3h.1A4.02 4.02 0 0 1 8 6a4 4 0 0 1 4-4z" />
        <path d="M9 12h.01M15 12h.01M9.5 16a5 5 0 0 0 5 0" />
      </svg>
    ),
    title: 'Elli — AI Assistant',
    tag: 'AI',
    tagClass: 'tag-ai',
    desc: 'Built an AI chatbot with real-time responses and TTS, featuring a dynamic Jarvis-inspired UI using React and Python (solo project, in development).',
    tech: ['Python', 'ChromaDB', 'Nividia API', 'Semantic Search'],
    github: 'https://github.com/Pathitharun/project_AI',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px', color: '#818cf8' }}>
        <path d="M12 2a4 4 0 0 1 4 4c0 .34-.04.67-.1 1H16a3 3 0 0 1 3 3v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2v-1a3 3 0 0 1 3-3h.1A4.02 4.02 0 0 1 8 6a4 4 0 0 1 4-4z" />
        <path d="M9 12h.01M15 12h.01M9.5 16a5 5 0 0 0 5 0" />
      </svg>
    ),
    title: 'profile website',
    tag: 'web',
    tagClass: 'tag-web',
    desc: 'Created a responsive React-based portfolio website to present projects and profile professionally.',
    tech: ['React.js', 'vite', 'css',],
    github: 'https://github.com/Pathitharun/myprofile',
  },
]

const FILTERS = ['All', 'AI', 'Web', 'Tools']

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useReveal()

  const filtered = PROJECTS.filter(p =>
    activeFilter === 'All' ? true : p.tag === activeFilter
  )

  return (
    <section id="projects" className="projects">
      <div className="container" ref={ref}>
        <div className="text-center reveal">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of things I've built — from AI systems to web apps.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs reveal">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-tab${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div key={p.id} className={`project-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="project-header">
                <div className="project-icon">{p.icon}</div>
                <span className={`project-tag ${p.tagClass}`}>{p.tag}</span>
              </div>

              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tech">
                {p.tech.map(t => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={p.github} className="project-link" target="_blank" rel="noreferrer">
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
