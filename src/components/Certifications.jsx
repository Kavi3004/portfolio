import React, { useRef, useEffect, useState } from 'react'
import { Award, CheckCircle2, Users, Cpu } from 'lucide-react'

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

const certifications = [
  { name: 'MERN Stack Development', authority: 'Udemy', color: '#6366F1', icon: Cpu, year: '2025' },
  { name: 'Frontend Development', authority: 'CodeTech IT Solutions', color: '#8B5CF6', icon: CheckCircle2, year: '2025' },
]

const workshops = [
  { name: 'AI & ML Workshop', org: 'GeeksforGeeks', color: '#22D3EE' },
  { name: 'AI Tools Workshop', org: 'Self-Organized', color: '#6366F1' },
  { name: 'Java Concurrency & Multithreading Conference', org: 'Technical Conference', color: '#8B5CF6' },
  { name: 'React Bootcamp Conference', org: 'Frontend Conference', color: '#22D3EE' },
]

export default function Certifications() {
  const [ref, inView] = useInView()

  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#22D3EE' }}>Credentials</span>
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Certifications & <span className="gradient-text">Workshops</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.7s ease' }}
        >
          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
              <Award size={14} style={{ color: '#6366F1' }} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => {
                const Icon = cert.icon
                return (
                  <div
                    key={cert.name}
                    className="glass rounded-xl p-5 card-shine flex items-center gap-4"
                    style={{ border: `1px solid ${cert.color}20`, opacity: inView ? 1 : 0, transition: `all 0.5s ease ${i * 0.1}s` }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${cert.color}40`; e.currentTarget.style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = `${cert.color}20`; e.currentTarget.style.transform = 'translateX(0)' }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}>
                      <Icon size={22} style={{ color: cert.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{cert.authority}</p>
                    </div>
                    <span className="text-xs font-mono" style={{ color: cert.color }}>{cert.year}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Workshops */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
              <Users size={14} style={{ color: '#8B5CF6' }} />
              Conferences & Workshops
            </h3>
            <div className="space-y-3">
              {workshops.map((w, i) => (
                <div
                  key={w.name}
                  className="glass rounded-xl p-4 flex items-center gap-3 card-shine"
                  style={{ border: `1px solid ${w.color}15`, opacity: inView ? 1 : 0, transition: `all 0.5s ease ${0.2 + i * 0.1}s` }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${w.color}30`; e.currentTarget.style.transform = 'translateX(4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${w.color}15`; e.currentTarget.style.transform = 'translateX(0)' }}
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: w.color, boxShadow: `0 0 6px ${w.color}` }} />
                  <div>
                    <p className="text-sm font-medium text-white">{w.name}</p>
                    <p className="text-xs text-gray-500">{w.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
