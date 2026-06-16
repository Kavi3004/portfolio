import React, { useRef, useEffect, useState } from 'react'
import { Github, Star, GitFork, ExternalLink, Code2, BookOpen } from 'lucide-react'

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

const repos = [
  { name: 'SEO_rank_tracker', desc: 'MERN stack SEO analytics & keyword ranking platform', lang: 'JavaScript', stars: 3, forks: 1, url: 'https://github.com/Kavi3004/SEO_rank_tracker', color: '#f1e05a' },
  { name: 'smart-attendence', desc: 'Full-stack attendance management with role-based access', lang: 'JavaScript', stars: 2, forks: 0, url: 'https://github.com/Kavi3004/smart-attendence', color: '#f1e05a' },
  { name: 'flight-delay-prediction', desc: 'ML-based flight delay prediction with Scikit-learn', lang: 'Python', stars: 2, forks: 1, url: 'https://github.com/Kavi3004/flight-delay-prediction', color: '#3572A5' },
]

// Generate a contribution grid (mock)
function ContributionGrid() {
  const weeks = 26
  const days = 7
  const cells = []
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const intensity = Math.random()
      let bg = 'rgba(255,255,255,0.04)'
      if (intensity > 0.85) bg = 'rgba(99,102,241,0.9)'
      else if (intensity > 0.65) bg = 'rgba(99,102,241,0.6)'
      else if (intensity > 0.4) bg = 'rgba(99,102,241,0.3)'
      else if (intensity > 0.2) bg = 'rgba(99,102,241,0.15)'
      cells.push({ bg, key: `${w}-${d}` })
    }
  }
  return (
    <div>
      <div className="text-xs text-gray-500 font-mono mb-3 flex justify-between">
        <span>Jan 2026</span><span>Jun 2026</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-1">
            {Array.from({ length: days }).map((_, d) => {
              const cell = cells[w * days + d]
              return (
                <div
                  key={cell.key}
                  className="w-3 h-3 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer"
                  style={{ background: cell.bg }}
                  title={`${Math.floor(Math.random() * 8)} contributions`}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GitHub() {
  const [ref, inView] = useInView()

  return (
    <section id="github" className="section-padding" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#22D3EE' }}>Open Source</span>
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            GitHub <span className="gradient-text">Activity</span>
          </h2>
        </div>

        <div
          ref={ref}
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.7s ease' }}
        >
          {/* Profile card */}
          <div className="glass rounded-2xl p-6 mb-6 card-shine"
            style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
                <Github size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-white text-lg">Kavi3004</h3>
                <a href="https://github.com/Kavi3004" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-mono transition-colors" style={{ color: '#22D3EE' }}>
                  github.com/Kavi3004
                </a>
              </div>
              <div className="flex gap-4 text-center">
                {[
                  { label: 'Repos', val: '8+' },
                  { label: 'Commits', val: '200+' },
                  { label: 'Stars', val: '7+' },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <div className="font-bold text-white font-display">{val}</div>
                    <div className="text-xs text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <ContributionGrid />
          </div>

          {/* Repos */}
          <div className="grid md:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 card-shine block transition-all duration-300"
                style={{
                  border: '1px solid rgba(99,102,241,0.12)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${0.2 + i * 0.1}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(99,102,241,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.12)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <BookOpen size={16} style={{ color: '#6366F1' }} />
                  <ExternalLink size={14} className="text-gray-600" />
                </div>
                <h4 className="font-mono font-semibold text-white text-sm mb-2">{repo.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{repo.desc}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ background: repo.color }} />
                    {repo.lang}
                  </span>
                  <span className="flex items-center gap-1"><Star size={12} />{repo.stars}</span>
                  <span className="flex items-center gap-1"><GitFork size={12} />{repo.forks}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
