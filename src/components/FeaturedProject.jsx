import React, { useRef, useEffect, useState } from 'react'
import { ExternalLink, Github, TrendingUp, BarChart2, Search, Shield, Activity, Zap } from 'lucide-react'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const techStack = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Axios', 'REST APIs']

const features = [
  { icon: Search, label: 'Keyword Tracking', desc: 'Real-time keyword rank monitoring' },
  { icon: BarChart2, label: 'SEO Analytics', desc: 'Comprehensive performance dashboard' },
  { icon: Shield, label: 'JWT Auth', desc: 'Secure authentication & sessions' },
  { icon: Activity, label: 'Live Reports', desc: 'On-demand SEO report generation' },
]

// Mock dashboard UI
function DashboardMockup() {
  const [activeBar, setActiveBar] = useState(4)
  const bars = [65, 72, 68, 80, 88, 76, 92]

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(5,8,22,0.9)', border: '1px solid rgba(99,102,241,0.15)' }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="flex gap-1.5">
          {['#FF5F56', '#FFBD2E', '#27C93F'].map(c => (
            <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex-1 mx-4 h-6 rounded-md flex items-center px-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <span className="text-xs text-gray-600 font-mono">seo-tracker.vercel.app/dashboard</span>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4">
        {/* Top stats */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: 'SEO Score', val: '87', color: '#6366F1', trend: '+5' },
            { label: 'Keywords', val: '142', color: '#22D3EE', trend: '+12' },
            { label: 'Backlinks', val: '2.4K', color: '#8B5CF6', trend: '+8%' },
            { label: 'Traffic', val: '18.3K', color: '#6366F1', trend: '+23%' },
          ].map(({ label, val, color, trend }) => (
            <div key={label} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="text-lg font-bold font-display" style={{ color }}>{val}</div>
              <div className="text-xs text-gray-500">{label}</div>
              <div className="text-xs mt-1" style={{ color: '#22D3EE' }}>{trend}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-lg p-3 mb-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-gray-400">Keyword Rankings</span>
            <span className="text-xs" style={{ color: '#22D3EE' }}>Last 7 days</span>
          </div>
          <div className="flex items-end gap-2 h-16">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t cursor-pointer transition-all duration-300"
                style={{
                  height: `${h}%`,
                  background: i === activeBar
                    ? 'linear-gradient(180deg, #22D3EE, #6366F1)'
                    : 'rgba(99,102,241,0.3)',
                }}
                onClick={() => setActiveBar(i)}
              />
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="px-3 py-2 text-xs font-medium text-gray-400 grid grid-cols-3"
            style={{ background: 'rgba(255,255,255,0.03)' }}>
            <span>Keyword</span><span>Position</span><span>Change</span>
          </div>
          {[
            { kw: 'react developer', pos: '#3', ch: '+2', up: true },
            { kw: 'mern stack', pos: '#7', ch: '+5', up: true },
            { kw: 'node.js api', pos: '#12', ch: '-1', up: false },
          ].map(({ kw, pos, ch, up }) => (
            <div key={kw} className="px-3 py-2 grid grid-cols-3 text-xs border-t"
              style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
              <span className="text-gray-300 font-mono">{kw}</span>
              <span className="text-white font-semibold">{pos}</span>
              <span style={{ color: up ? '#22D3EE' : '#f87171' }}>{ch}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function FeaturedProject() {
  const [ref, inView] = useInView()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <section id="featured-project" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#22D3EE' }}>Featured Work</span>
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            <span className="gradient-text">Flagship</span> Project
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease',
          }}
        >
          <div
            ref={cardRef}
            className="relative rounded-3xl overflow-hidden card-shine"
            onMouseMove={handleMouseMove}
            style={{
              background: 'rgba(5,8,22,0.8)',
              border: '1px solid rgba(99,102,241,0.2)',
              boxShadow: '0 0 80px rgba(99,102,241,0.1)',
            }}
          >
            {/* Spotlight */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(99,102,241,0.12) 0%, transparent 60%)`,
              }}
            />

            {/* Featured badge */}
            <div className="absolute top-6 right-6 z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}>
                <Zap size={12} />
                <span className="text-xs font-bold">Featured Project</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Info */}
              <div className="p-10 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={20} style={{ color: '#6366F1' }} />
                  <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#6366F1' }}>
                    MERN Stack Application
                  </span>
                </div>

                <h3 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                  SEO Rank<br />
                  <span className="gradient-text">Tracker</span>
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  A modern full-stack SEO analytics platform built with the MERN stack. 
                  Users can monitor keyword rankings, analyze website SEO performance, 
                  track optimization metrics, and generate detailed reports through an 
                  interactive real-time dashboard.
                </p>

                {/* Feature grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {features.map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="p-3 rounded-xl transition-all duration-300"
                      style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.1)' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; e.currentTarget.style.background = 'rgba(99,102,241,0.1)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.1)'; e.currentTarget.style.background = 'rgba(99,102,241,0.05)' }}>
                      <Icon size={16} style={{ color: '#6366F1' }} className="mb-2" />
                      <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                      <div className="text-xs text-gray-500">{desc}</div>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {techStack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono font-medium"
                      style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)', color: '#22D3EE' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Kavi3004/SEO_rank_tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', boxShadow: '0 0 20px rgba(99,102,241,0.3)' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.5)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.3)' }}
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>

              {/* Right: Dashboard mockup */}
              <div className="p-6 lg:p-8 flex items-center" style={{ background: 'rgba(0,0,0,0.2)' }}>
                <div className="w-full" style={{ animation: 'float 6s ease-in-out infinite' }}>
                  <DashboardMockup />
                </div>
              </div>
            </div>

            {/* Bottom glow line */}
            <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #6366F1, #22D3EE, transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
