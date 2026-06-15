'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Inquiry', href: '#inquiry' },
]

function AvaniLogo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#" data-hover className="flex items-center gap-3 group">
      {/* Emblem mark: two nested diamonds */}
      <div className="relative flex-shrink-0" style={{ width: 28, height: 28 }}>
        {/* Outer diamond */}
        <div
          className="absolute inset-0 transition-all duration-500 group-hover:scale-110"
          style={{
            border: '1px solid rgba(201,168,76,0.7)',
            transform: 'rotate(45deg)',
            borderRadius: '2px',
          }}
        />
        {/* Inner diamond filled */}
        <div
          className="absolute transition-all duration-500"
          style={{
            inset: '6px',
            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
            transform: 'rotate(45deg)',
            borderRadius: '1px',
          }}
        />
      </div>

      {/* Word mark */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: compact ? '17px' : '20px',
            fontWeight: 400,
            letterSpacing: '0.28em',
            color: '#E8C97A',
            lineHeight: 1,
          }}
        >
          AVANI
        </span>
        <span
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: '7px',
            letterSpacing: '0.6em',
            color: 'rgba(201,168,76,0.55)',
            fontWeight: 300,
            lineHeight: 1,
            marginTop: '3px',
            textTransform: 'uppercase',
          }}
        >
          CITY
        </span>
      </div>
    </a>
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      const sy = window.scrollY
      setScrolled(sy > 60)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docH > 0 ? (sy / docH) * 100 : 0)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(6,13,26,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.08)' : 'none',
          transition: 'background 0.6s ease, backdrop-filter 0.6s ease, border-color 0.6s ease',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-px"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #C9A84C, #E8C97A)',
            opacity: scrolled ? 0.6 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <AvaniLogo compact={scrolled} />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-hover
                className="relative group text-[10px] tracking-[0.22em] uppercase font-light"
                style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-jost)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C9A84C' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.55)' }}
              >
                {link.label}
                {/* Underline reveal */}
                <span
                  className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full bg-avani-gold"
                  style={{ transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)', opacity: 0.6 }}
                />
              </a>
            ))}

            <a
              href="#inquiry"
              data-hover
              className="relative px-6 py-2.5 text-[9px] tracking-[0.25em] uppercase font-medium overflow-hidden"
              style={{
                border: '1px solid rgba(201,168,76,0.45)',
                color: '#C9A84C',
                fontFamily: 'var(--font-jost)',
                borderRadius: '1px',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#C9A84C'
                el.style.color = '#060D1A'
                el.style.borderColor = '#C9A84C'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.color = '#C9A84C'
                el.style.borderColor = 'rgba(201,168,76,0.45)'
              }}
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            data-hover
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-px bg-avani-gold"
                animate={{
                  width: i === 1 ? (menuOpen ? '28px' : '20px') : '28px',
                  rotate: menuOpen && i !== 1 ? (i === 0 ? 45 : -45) : 0,
                  y: menuOpen && i !== 1 ? (i === 0 ? 9 : -9) : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
                transition={{ duration: 0.35 }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ background: 'rgba(4,9,18,0.98)', backdropFilter: 'blur(40px)' }}
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            animate={{ opacity: 1, clipPath: 'circle(170% at calc(100% - 44px) 44px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo in mobile menu */}
            <motion.div
              className="mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AvaniLogo />
            </motion.div>

            <div className="gold-line w-16 mb-10" />

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="block py-3 text-[32px] font-light tracking-wide"
                style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(245,240,232,0.8)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setMenuOpen(false)}
                data-hover
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#C9A84C'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.8)'
                }}
              >
                {link.label}
              </motion.a>
            ))}

            <div className="gold-line w-16 mt-10 mb-10" />

            <motion.a
              href="#inquiry"
              className="px-10 py-3.5 text-[10px] tracking-[0.3em] uppercase"
              style={{
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#C9A84C',
                fontFamily: 'var(--font-jost)',
                borderRadius: '1px',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => setMenuOpen(false)}
            >
              Enquire Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
