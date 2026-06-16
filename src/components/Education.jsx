import React, { useRef, useEffect, useState } from 'react'
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react'

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

const education = [
  {
    degree: 'B.Tech — CSE (AI & ML)',
    institution: 'ANITS, Visakhapatnam',
    year: '2023 – 2027',
    score: '9.10 CGPA',
    icon: GraduationCap,
    color: '#6366F1',
    current: true,
    highlights: ['MERN Stack Development', 'AI & ML Projects', 'Project Team Lead', 'DSA & Algorithms'],
  },
  {
    degree: 'Class XII',
    institution: 'Sri Kumar Junior College',
    year: '2021 – 2023',
    score: '98.5%',
    icon: BookOpen,
    color: '#8B5CF6',
    current: false,
    highlights: ['BIEAP Board', 'Science Stream', 'Outstanding Performance'],
  },
  {
    degree: 'Class X',
    institution: 'Z P High School, Pedda Sriram Puram',
    year: '2021',
    score: '97.5%',
    icon: Award,
    color: '#22D3EE',
    current: false,
    highlights: ['BSEAP Board', 'Top Performer'],
  },
]

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#22D3EE' }}>Academic Path</span>
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #6366F1, #8B5CF6, #22D3EE)' }} />

          <div className="space-y-8">
            {education.map((edu, i) => {
              const Icon = edu.icon
              return (
                <div
                  key={edu.degree}
                  className="flex gap-6"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `all 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  {/* Icon dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${edu.color}15`,
                        border: `2px solid ${edu.color}`,
                        boxShadow: `0 0 20px ${edu.color}30`,
                      }}>
                      <Icon size={20} style={{ color: edu.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass rounded-2xl p-6 card-shine"
                    style={{ border: `1px solid ${edu.color}20` }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${edu.color}40`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = `${edu.color}20`; e.currentTarget.style.transform = 'translateY(0)' }}>
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-bold text-white">{edu.degree}</h3>
                          {edu.current && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                              style={{ background: 'rgba(34,211,238,0.15)', color: '#22D3EE', border: '1px solid rgba(34,211,238,0.3)' }}>
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold font-display" style={{ color: edu.color }}>{edu.score}</div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                          <Calendar size={10} />
                          {edu.year}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map(h => (
                        <span key={h} className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{ background: `${edu.color}08`, color: edu.color, border: `1px solid ${edu.color}15` }}>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
