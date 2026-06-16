import React, { useRef, useEffect, useState } from 'react'
import { Users, CheckCircle2, ArrowRight, Cpu, Lightbulb, Target } from 'lucide-react'

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

const responsibilities = [
  'Leading a team of 4 members in planning, coordinating, and developing AI & ML academic projects',
  'Responsible for task allocation, progress tracking, and guiding team members throughout the project lifecycle',
  'Working closely with teammates to solve technical challenges and strengthen leadership skills',
  'Overseeing problem analysis, solution design, implementation, testing, and documentation',
]

const qualities = [
  { icon: Target, label: 'Strategic Thinking', desc: 'Planning and executing complex AI/ML projects' },
  { icon: Users, label: 'Team Leadership', desc: 'Leading a team of 4 through full project lifecycle' },
  { icon: Lightbulb, label: 'Problem Solving', desc: 'Technical challenges resolved through collaboration' },
  { icon: Cpu, label: 'Technical Depth', desc: 'Hands-on with implementation and architecture' },
]

export default function Leadership() {
  const [ref, inView] = useInView()

  return (
    <section id="leadership" className="section-padding" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#22D3EE' }}>Position of Responsibility</span>
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            <span className="gradient-text">Leadership</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-8"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.7s ease' }}
        >
          {/* Main card */}
          <div className="glass rounded-2xl p-8 card-shine relative overflow-hidden"
            style={{ border: '1px solid rgba(99,102,241,0.2)' }}>
            <div className="absolute inset-0 pointer-events-none opacity-10"
              style={{ background: 'radial-gradient(circle at 0% 0%, #6366F1, transparent 60%)' }} />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(99,102,241,0.3)' }}>
                <Users size={26} style={{ color: '#6366F1' }} />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg">Project Team Lead</h3>
                <p className="text-sm text-gray-400">ANITS — Fourth Year CSE (AI & ML)</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs" style={{ color: '#22D3EE' }}>Active Role</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} style={{ color: '#6366F1', flexShrink: 0, marginTop: 2 }} />
                  <span className="text-sm text-gray-400 leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t flex items-center justify-between"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <div>
                <span className="text-xs text-gray-500">Team Size</span>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500">Domain</span>
                <div className="text-sm font-semibold" style={{ color: '#6366F1' }}>AI & ML Projects</div>
              </div>
            </div>
          </div>

          {/* Qualities grid */}
          <div className="grid grid-cols-2 gap-4 content-start">
            {qualities.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className="glass rounded-xl p-5 card-shine"
                style={{
                  border: '1px solid rgba(99,102,241,0.12)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${0.2 + i * 0.1}s`,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.12)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}>
                  <Icon size={18} style={{ color: '#6366F1' }} />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* Hackathons quick mention */}
            <div className="col-span-2 glass rounded-xl p-5 card-shine"
              style={{ border: '1px solid rgba(34,211,238,0.15)' }}>
              <h4 className="font-semibold text-sm mb-3" style={{ color: '#22D3EE' }}>Hackathon Experience</h4>
              <div className="space-y-2">
                {[
                  'IGNITE HACK — INVENTUM 2K26 (8-Hour Vibe Coding)',
                  'Smart India Hackathon — Round 2 Qualifier',
                  'Techonova Hackathon (24 Hours)',
                  'CodTech IT Solutions Java Hackathon',
                ].map(h => (
                  <div key={h} className="flex items-center gap-2">
                    <ArrowRight size={12} style={{ color: '#22D3EE', flexShrink: 0 }} />
                    <span className="text-xs text-gray-400">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
