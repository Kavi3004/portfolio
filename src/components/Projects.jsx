import React, { useRef, useEffect, useState } from 'react'
import { Github, ExternalLink, Users, Plane, QrCode } from 'lucide-react'

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const projects = [
  {
    title: 'Smart Attendance System',
    description: 'A full-stack MERN attendance management system with separate Student and Faculty portals, enabling secure login, role-based access control, attendance marking, and real-time tracking.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt.js'],
    github: 'https://github.com/Kavi3004/smart-attendence',
    icon: Users,
    color: '#8B5CF6',
    date: 'March 2026',
    highlights: ['Role-based Access', 'Real-time Tracking', 'Secure Auth'],
  },
  {
    title: 'Flight Delay Prediction',
    description: 'A Machine Learning-based system that analyzes historical flight and weather data to predict potential delays, helping improve travel planning through data-driven insights and end-to-end ML workflows.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Flask'],
    github: 'https://github.com/Kavi3004/flight-delay-prediction',
    icon: Plane,
    color: '#22D3EE',
    date: 'January 2026',
    highlights: ['ML Pipeline', 'Data Preprocessing', 'Prediction Engine'],
  },
]

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="section-padding" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#22D3EE' }}>More Work</span>
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Other <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="glass rounded-2xl overflow-hidden card-shine"
                style={{
                  border: `1px solid ${project.color}15`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease ${i * 0.15}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${project.color}30`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 20px 60px ${project.color}10`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${project.color}15`
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}>
                        <Icon size={20} style={{ color: project.color }} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white text-base">{project.title}</h3>
                        <span className="text-xs text-gray-500 font-mono">{project.date}</span>
                      </div>
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="transition-all duration-200"
                      onMouseEnter={e => e.currentTarget.style.color = project.color}
                      onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}>
                      <Github size={18} className="text-gray-400" />
                    </a>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.highlights.map(h => (
                      <span key={h} className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}20` }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 rounded text-xs font-mono text-gray-500"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
