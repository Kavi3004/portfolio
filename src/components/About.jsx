import React, { useRef, useEffect, useState } from 'react'
import { User, MapPin, Mail, Cpu, Code2, Database, Brain } from 'lucide-react'

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

const specializations = [
  { icon: Code2, label: 'MERN Stack', color: '#6366F1' },
  { icon: Brain, label: 'AI & ML', color: '#8B5CF6' },
  { icon: Database, label: 'DSA Expert', color: '#22D3EE' },
  { icon: Cpu, label: 'Full Stack', color: '#6366F1' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 items-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.7s ease',
          }}
        >
          {/* Left: Visual Card */}
          <div className="relative">
            <div className="glass rounded-2xl p-8 card-shine"
              style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img src="/photo.jpeg" alt="Kavi" className="w-20 h-20 rounded-xl object-cover object-top" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-bg" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">Andala Kavi Babu</h3>
                  <p className="text-xs font-mono" style={{ color: '#6366F1' }}>@ ANITS, Visakhapatnam</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={10} className="text-gray-500" />
                    <span className="text-xs text-gray-500">India</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {specializations.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                    style={{
                      background: `${color}08`,
                      border: `1px solid ${color}20`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${color}15`; e.currentTarget.style.borderColor = `${color}40` }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${color}08`; e.currentTarget.style.borderColor = `${color}20` }}
                  >
                    <Icon size={16} style={{ color }} />
                    <span className="text-xs font-medium text-gray-300">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.1)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 font-mono">Academic Performance</span>
                  <span className="text-xs font-bold" style={{ color: '#22D3EE' }}>9.10 CGPA</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div className="h-full rounded-full skill-bar"
                    style={{
                      width: '91%',
                      background: 'linear-gradient(90deg, #6366F1, #22D3EE)',
                    }} />
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }} />
          </div>

          {/* Right: Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ background: '#6366F1' }} />
              <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#22D3EE' }}>About Me</span>
            </div>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Crafting digital experiences with{' '}
              <span className="gradient-text">code & creativity</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a passionate B.Tech CSE (AI & ML) student at ANITS with a 9.10 CGPA, deeply invested
              in building full-stack web applications and machine learning systems. My journey in tech
              is driven by curiosity and a love for solving complex problems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              With 300+ LeetCode problems solved, I've built strong algorithmic foundations.
              I specialize in the MERN stack—React, Node.js, Express.js, MongoDB—and I'm currently
              serving as <span className="text-white font-medium">Project Team Lead</span> for my
              fourth-year AI & ML academic projects, leading a team of 4 members.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Leadership', 'Full Stack Dev', 'AI & ML', 'REST APIs', 'System Design'].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
