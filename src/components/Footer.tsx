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
          {/* Logo */}
          <div>
            <div
              className="text-2xl font-light tracking-[0.35em] uppercase mb-1"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: '#C9A84C',
              }}
            >
              AVANI
            </div>
            <div
              className="text-[9px] tracking-[0.55em] uppercase"
              style={{ color: 'rgba(201,168,76,0.4)' }}
            >
              CITY
            </div>
            <p
              className="mt-4 max-w-xs"
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '12px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.3)',
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
