import React from 'react'
import { useReveal } from '../hooks/useReveal'

const skillCategories = [
  {
    icon: '🧠',
    title: 'AI & Machine Learning',
    skills: ['Python', 'ChromaDB', 'Sentence Transformers', 'LLMs', 'Prompt Engineering', 'RAG'],
  },
  {
    icon: '⚡',
    title: 'Backend',
    skills: ['FastAPI', 'Python', 'REST APIs', 'WebSockets', 'JSON', 'SQLite'],
  },
  {
    icon: '⚛️',
    title: 'Frontend',
    skills: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    icon: '🛠️',
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'npm', 'Obsidian'],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills">
      <div className="container" ref={ref}>
        <div className="text-center reveal">
          <h2 className="section-title">
            Skills &amp;{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            The tools and technologies I use to turn ideas into reality.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className={`skill-category reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="skill-cat-icon">{cat.icon}</div>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-pills">
                {cat.skills.map((s, j) => (
                  <span key={j} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
