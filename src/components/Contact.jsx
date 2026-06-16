import React, { useRef, useEffect, useState } from 'react'
import { Mail, Github, Linkedin, ExternalLink, Send, MapPin, MessageSquare } from 'lucide-react'

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

const socials = [
  { icon: Github, label: 'GitHub', handle: '@Kavi3004', href: 'https://github.com/Kavi3004', color: '#6366F1' },
  { icon: Linkedin, label: 'LinkedIn', handle: 'kavi-andala-b41b15349', href: 'https://linkedin.com/in/kavi-andala-b41b15349', color: '#8B5CF6' },
  { icon: ExternalLink, label: 'LeetCode', handle: '@Kavi_Andala', href: 'https://leetcode.com/u/Kavi_Andala/', color: '#22D3EE' },
  { icon: Mail, label: 'Email', handle: 'andalakavi@gmail.com', href: 'mailto:andalakavi@gmail.com', color: '#6366F1' },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens mailto with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:andalakavi@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section-padding" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#22D3EE' }}>Let's Connect</span>
            <div className="h-px w-8" style={{ background: '#6366F1' }} />
          </div>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            I'm currently open to internship and entry-level opportunities. Whether you have a project idea,
            a job offer, or just want to say hello — my inbox is always open.
          </p>
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-8"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.7s ease' }}
        >
          {/* Left: Info */}
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6 card-shine" style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} style={{ color: '#22D3EE' }} />
                <span className="text-sm text-gray-400">Visakhapatnam, India</span>
              </div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-gray-400">Available for opportunities</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Graduating in 2027 — actively seeking internships, project collaborations,
                and full-stack or AI/ML-focused roles with innovative teams.
              </p>
            </div>

            {socials.map(({ icon: Icon, label, handle, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-4 card-shine block transition-all duration-300"
                style={{ border: `1px solid ${color}15` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}35`; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${color}15`; e.currentTarget.style.transform = 'translateX(0)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}12`, border: `1px solid ${color}20` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">{label}</div>
                  <div className="text-sm font-mono text-white">{handle}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Contact form */}
          <div className="glass rounded-2xl p-8 card-shine" style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={18} style={{ color: '#6366F1' }} />
              <h3 className="font-display font-semibold text-white">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">{label}</label>
                  <input
                    type={type}
                    value={form[id]}
                    onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                    placeholder={placeholder}
                    required
                    className="w-full rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(99,102,241,0.2)',
                    }}
                    onFocus={e => e.target.style.borderColor = '#6366F1'}
                    onBlur={e => e.target.style.borderColor = 'rgba(99,102,241,0.2)'}
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Hi Kavi, I'd love to discuss..."
                  required
                  rows={4}
                  className="w-full rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(99,102,241,0.2)',
                  }}
                  onFocus={e => e.target.style.borderColor = '#6366F1'}
                  onBlur={e => e.target.style.borderColor = 'rgba(99,102,241,0.2)'}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{
                  background: sent ? 'rgba(34,211,238,0.2)' : 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  border: sent ? '1px solid rgba(34,211,238,0.4)' : 'none',
                  color: sent ? '#22D3EE' : 'white',
                  boxShadow: sent ? 'none' : '0 0 30px rgba(99,102,241,0.3)',
                }}
                onMouseEnter={e => { if (!sent) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(99,102,241,0.5)' }}}
                onMouseLeave={e => { if (!sent) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.3)' }}}
              >
                <Send size={15} />
                {sent ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
