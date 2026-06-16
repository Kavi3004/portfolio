import React from 'react'
import { Github, Linkedin, ExternalLink, Heart, Code2 } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: 'rgba(99,102,241,0.1)' }}>
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
              <span className="text-white font-bold text-xs font-mono">KB</span>
            </div>
            <span className="font-display font-semibold text-white">Andala Kavi Babu</span>
          </div>

          <p className="text-xs text-gray-500 flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400" /> and <Code2 size={12} style={{ color: '#6366F1' }} /> — {year}
          </p>

          <div className="flex items-center gap-4">
            {[
              { href: 'https://github.com/Kavi3004', icon: Github },
              { href: 'https://linkedin.com/in/kavi-andala-b41b15349', icon: Linkedin },
              { href: 'https://leetcode.com/u/Kavi_Andala/', icon: ExternalLink },
            ].map(({ href, icon: Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-white"
                onMouseEnter={e => e.currentTarget.style.color = '#6366F1'}
                onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
