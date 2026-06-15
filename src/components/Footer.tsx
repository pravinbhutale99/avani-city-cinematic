'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 gold-line" />
      <div
        className="absolute inset-0"
        style={{ background: '#060D1A' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-12">
          {/* Logo — real AVANI mark + wordmark */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              {/* Logo mark */}
              <div style={{ filter: 'drop-shadow(0 2px 10px rgba(26,80,168,0.4))' }}>
                <svg viewBox="0 0 120 136" width="30" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ff1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#082248"/>
                      <stop offset="100%" stopColor="#0D3060"/>
                    </linearGradient>
                    <linearGradient id="ff2" x1="1" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1958A0"/>
                      <stop offset="100%" stopColor="#1450A8"/>
                    </linearGradient>
                    <linearGradient id="ff3" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0A2A58"/>
                      <stop offset="100%" stopColor="#082040"/>
                    </linearGradient>
                    <linearGradient id="ff4" x1="1" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2870C8"/>
                      <stop offset="100%" stopColor="#1E60B8"/>
                    </linearGradient>
                  </defs>
                  <polygon points="60,4 4,52 60,77" fill="url(#ff1)"/>
                  <polygon points="60,4 60,77 116,52" fill="url(#ff2)"/>
                  <polygon points="4,52 16,132 60,77" fill="url(#ff3)"/>
                  <polygon points="60,77 104,132 116,52" fill="url(#ff4)"/>
                  <polygon points="16,132 104,132 60,77" fill="url(#ff4)" opacity="0.8"/>
                  <line x1="60" y1="4" x2="60" y2="77" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6"/>
                  <line x1="4" y1="52" x2="60" y2="77" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                  <line x1="116" y1="52" x2="60" y2="77" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                  <polygon points="60,4 116,52 104,132 16,132 4,52" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeLinejoin="round"/>
                </svg>
              </div>
              {/* Wordmark */}
              <div className="flex flex-col leading-none">
                <span style={{ fontFamily: 'var(--font-jost)', fontSize: '16px', fontWeight: 500, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.75)', lineHeight: 1 }}>
                  AVANI
                </span>
                <span style={{ fontFamily: 'var(--font-jost)', fontSize: '7px', letterSpacing: '0.5em', color: 'rgba(255,255,255,0.28)', fontWeight: 300, lineHeight: 1, marginTop: '3px' }}>
                  CITY
                </span>
              </div>
            </a>
            <p
              className="max-w-xs"
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '12px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.28)',
                fontWeight: 300,
              }}
            >
              A master-planned gated township for those who build with intention.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 lg:gap-12">
            {[
              { label: 'About', href: '#about' },
              { label: 'Amenities', href: '#amenities' },
              { label: 'Location', href: '#location' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Enquire', href: '#inquiry' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-[0.25em] uppercase transition-colors duration-300"
                style={{ color: 'rgba(245,240,232,0.35)', fontFamily: 'var(--font-jost)' }}
                data-hover
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#C9A84C'
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.35)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RERA badge */}
          <div
            className="flex flex-col items-center p-4 text-center"
            style={{
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '1px',
              minWidth: 120,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '22px',
                color: '#C9A84C',
                fontWeight: 300,
              }}
            >
              RERA
            </span>
            <span
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '8px',
                letterSpacing: '0.2em',
                color: 'rgba(245,240,232,0.3)',
                textTransform: 'uppercase',
              }}
            >
              Approved
            </span>
            <span
              style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize: '8px',
                color: 'rgba(201,168,76,0.4)',
                marginTop: '4px',
              }}
            >
              REG/XXXX/2024
            </span>
          </div>
        </div>

        <div className="gold-line mb-8 opacity-20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '10px',
              color: 'rgba(245,240,232,0.2)',
              letterSpacing: '0.05em',
            }}
          >
            © {new Date().getFullYear()} Avani City. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '10px',
              color: 'rgba(245,240,232,0.15)',
              letterSpacing: '0.05em',
            }}
          >
            Subject to RERA approvals. All images are indicative and for representation only.
          </p>
        </div>
      </div>
    </footer>
  )
}
