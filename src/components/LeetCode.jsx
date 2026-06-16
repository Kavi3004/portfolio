import React, { useRef, useEffect, useState } from 'react'
import { Code2, Target, Zap, Award, TrendingUp } from 'lucide-react'

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

function Counter({ target, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

const difficulties = [
  { label: 'Easy', count: 120, color: '#22D3EE', pct: 40 },
  { label: 'Medium', count: 140, color: '#6366F1', pct: 47 },
  { label: 'Hard', count: 40, color: '#8B5CF6', pct: 13 },
]

const dsaTopics = [
  'Arrays', 'Strings', 'Trees', 'Graphs', 'DP', 'Hash Maps',
  'Binary Search', 'Linked Lists', 'Stacks', 'Queues', 'Sorting', 'Backtracking',
]

export default function LeetCode() {
  const [ref, inView] = useInView()

  return (
    <section id="leetcode" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#22D3EE' }}>Problem Solving</span>
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            LeetCode <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-8"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.7s ease' }}
        >
          {/* Left: Big stat card */}
          <div className="glass rounded-2xl p-8 flex flex-col justify-between card-shine"
            style={{ border: '1px solid rgba(99,102,241,0.2)', position: 'relative', overflow: 'hidden' }}>
            <div className="absolute inset-0 pointer-events-none opacity-20"
              style={{ background: 'radial-gradient(circle at 80% 20%, #6366F1, transparent 60%)' }} />

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)' }}>
                  <Code2 size={24} style={{ color: '#6366F1' }} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">LeetCode Profile</div>
                  <a href="https://leetcode.com/u/Kavi_Andala/" target="_blank" rel="noopener noreferrer"
                    className="text-sm font-mono hover:text-primary transition-colors" style={{ color: '#22D3EE' }}>
                    @Kavi_Andala
                  </a>
                </div>
              </div>

              {/* Massive counter */}
              <div className="text-center py-8">
                <div className="font-display font-black counter-glow mb-2" style={{ fontSize: '5rem', lineHeight: 1, color: '#6366F1' }}>
                  <Counter target={300} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm font-medium">Problems Solved</div>
                <div className="text-xs text-gray-600 mt-1 font-mono">Across all difficulty levels</div>
              </div>
            </div>

            {/* Difficulty breakdown */}
            <div className="space-y-4">
              {difficulties.map(({ label, count, color, pct }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                      <span className="text-xs font-medium text-gray-300">{label}</span>
                    </div>
                    <span className="text-xs font-mono font-bold" style={{ color }}>{count}+</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div className="h-full rounded-full transition-all duration-1000 skill-bar"
                      style={{ width: inView ? `${pct}%` : '0%', background: `linear-gradient(90deg, ${color}, ${color}60)`, transitionDelay: '0.3s' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats + Topics */}
          <div className="flex flex-col gap-6">
            {/* Mini stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Target, label: 'Contest Rating', val: '1400+', color: '#6366F1' },
                { icon: Zap, label: 'Streak', val: '30+', color: '#22D3EE' },
                { icon: Award, label: 'Top', val: '25%', color: '#8B5CF6' },
              ].map(({ icon: Icon, label, val, color }) => (
                <div key={label} className="glass rounded-xl p-4 text-center card-shine"
                  style={{ border: `1px solid ${color}20` }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${color}20`; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <Icon size={18} style={{ color }} className="mx-auto mb-2" />
                  <div className="font-bold text-white text-base font-display">{val}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* Topics Mastered */}
            <div className="glass rounded-2xl p-6 flex-1 card-shine"
              style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp size={16} style={{ color: '#6366F1' }} />
                <h3 className="text-sm font-semibold text-white">DSA Topics Mastered</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {dsaTopics.map((topic, i) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-default"
                    style={{
                      background: 'rgba(99,102,241,0.08)',
                      border: '1px solid rgba(99,102,241,0.15)',
                      color: '#a5b4fc',
                      animationDelay: `${i * 0.05}s`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(99,102,241,0.2)'
                      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
                      e.currentTarget.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(99,102,241,0.08)'
                      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)'
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <a
                  href="https://leetcode.com/u/Kavi_Andala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                  style={{ border: '1px solid rgba(99,102,241,0.3)', color: '#6366F1' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; e.currentTarget.style.borderColor = '#6366F1' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)' }}
                >
                  View LeetCode Profile →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
