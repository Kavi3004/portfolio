import React, { useRef, useEffect, useState } from 'react'

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

const skillGroups = [
  {
    category: 'Frontend',
    color: '#6366F1',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 85 },
    ]
  },
  {
    category: 'Backend',
    color: '#8B5CF6',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT Auth', level: 80 },
    ]
  },
  {
    category: 'Database',
    color: '#22D3EE',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'SQL', level: 75 },
      { name: 'Mongoose', level: 80 },
    ]
  },
  {
    category: 'Languages',
    color: '#6366F1',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 78 },
      { name: 'JavaScript', level: 88 },
    ]
  },
  {
    category: 'AI & ML',
    color: '#8B5CF6',
    skills: [
      { name: 'Machine Learning', level: 75 },
      { name: 'Python / Scikit-learn', level: 78 },
      { name: 'Data Analysis', level: 72 },
    ]
  },
  {
    category: 'Core CS',
    color: '#22D3EE',
    skills: [
      { name: 'DSA', level: 90 },
      { name: 'DBMS', level: 80 },
      { name: 'OS / CN', level: 75 },
    ]
  },
]

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="h-full rounded-full skill-bar"
          style={{
            width: inView ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            transition: `width 1s ease ${delay}s`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#22D3EE' }}>Technical Arsenal</span>
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="glass rounded-2xl p-6 card-shine"
              style={{
                border: `1px solid ${group.color}15`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${gi * 0.1}s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${group.color}30` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = `${group.color}15` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
                <h3 className="font-display font-semibold text-sm tracking-wide uppercase" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              {group.skills.map((s, si) => (
                <SkillBar key={s.name} {...s} color={group.color} inView={inView} delay={gi * 0.1 + si * 0.1} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
