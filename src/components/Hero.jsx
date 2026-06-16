import React, { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, ExternalLink, ChevronDown, Code2, Terminal } from 'lucide-react'
import photoImg from '../../public/photo.jpeg'

const roles = ['Software Engineer', 'MERN Stack Developer', 'AI & ML Enthusiast', 'Problem Solver']

function useTypewriter(words, speed = 100, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }

    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

function AnimatedCounter({ target, label, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) { setStarted(true) } },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-display font-bold counter-glow" style={{ color: '#6366F1' }}>
        {count}{suffix}
      </div>
      <div className="text-xs text-gray-400 mt-1 font-medium">{label}</div>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(roles, 80, 2000)

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #22D3EE, transparent)', transform: 'translate(-50%, -50%)' }} />
      </div>

      {/* Orbit rings behind photo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 hidden lg:block pointer-events-none"
        style={{ right: '8%' }}>
        {[320, 400, 480].map((size, i) => (
          <div key={i} className="orbit-ring absolute top-1/2 left-1/2"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              animationDuration: `${15 + i * 5}s`,
              animationDirection: i % 2 ? 'reverse' : 'normal',
            }}
          />
        ))}
      </div>

      <div className="container-max px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8" style={{ background: '#6366F1' }} />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase"
                style={{ color: '#22D3EE' }}>
                Available for Opportunities
              </span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            <h1 className="font-display font-bold leading-none mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              <span className="block text-white">Andala</span>
              <span className="block gradient-text">Kavi Babu</span>
            </h1>

            <div className="flex items-center gap-2 mb-6 h-10">
              <Terminal size={16} style={{ color: '#6366F1' }} />
              <span className="font-mono text-base" style={{ color: '#22D3EE' }}>
                {typed}
                <span className="typewriter-cursor text-white">|</span>
              </span>
            </div>

            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
              B.Tech CSE (AI & ML) student at ANITS with a{' '}
              <span style={{ color: '#22D3EE' }} className="font-semibold">9.10 CGPA</span>.
              Building scalable MERN applications, solving{' '}
              <span style={{ color: '#6366F1' }} className="font-semibold">300+ LeetCode problems</span>,
              and leading AI & ML projects. Graduating 2027.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-4 px-6 rounded-xl"
              style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.1)' }}>
              <AnimatedCounter target={300} suffix="+" label="LeetCode" />
              <AnimatedCounter target={9} suffix=".10" label="CGPA" />
              <AnimatedCounter target={3} suffix="+" label="Projects" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  boxShadow: '0 0 30px rgba(99,102,241,0.4)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(99,102,241,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.4)' }}
              >
                <Code2 size={16} />
                View Projects
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{ border: '1px solid rgba(99,102,241,0.4)', color: '#a5b4fc' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366F1'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; e.currentTarget.style.background = 'transparent' }}
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { href: 'https://github.com/Kavi3004', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/kavi-andala-b41b15349', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://leetcode.com/u/Kavi_Andala/', icon: ExternalLink, label: 'LeetCode' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366F1'; e.currentTarget.style.background = 'rgba(99,102,241,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <Icon size={18} className="text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative" style={{ animation: 'float 6s ease-in-out infinite' }}>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-50"
                style={{
                  background: 'conic-gradient(from 0deg, #6366F1, #8B5CF6, #22D3EE, #6366F1)',
                  transform: 'scale(1.1)',
                }} />

              {/* Gradient border */}
              <div className="relative rounded-full p-[3px]"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #22D3EE)' }}>
                <div className="rounded-full overflow-hidden w-64 h-64 lg:w-80 lg:h-80"
                  style={{ background: '#050816' }}>
                  <img
                    src={photoImg}
                    alt="Andala Kavi Babu"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: 'contrast(1.05) brightness(1.05)' }}
                  />
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'React', x: '-60px', y: '20%', color: '#22D3EE' },
                { label: 'Node.js', x: '105%', y: '30%', color: '#6366F1' },
                { label: 'MongoDB', x: '-50px', y: '70%', color: '#8B5CF6' },
                { label: 'AI/ML', x: '95%', y: '65%', color: '#22D3EE' },
              ].map(({ label, x, y, color }) => (
                <div
                  key={label}
                  className="absolute px-3 py-1.5 rounded-full text-xs font-mono font-semibold"
                  style={{
                    left: x,
                    top: y,
                    background: 'rgba(5,8,22,0.9)',
                    border: `1px solid ${color}40`,
                    color,
                    backdropFilter: 'blur(10px)',
                    boxShadow: `0 0 15px ${color}20`,
                    animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: 'float 2s ease-in-out infinite' }}>
          <span className="text-xs text-gray-600 font-mono">scroll</span>
          <ChevronDown size={16} className="text-gray-600" />
        </div>
      </div>
    </section>
  )
}
