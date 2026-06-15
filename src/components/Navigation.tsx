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

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background: scrolled
            ? 'rgba(6,13,26,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col items-start gap-0" data-hover>
            <span
              className="text-xl lg:text-2xl font-light tracking-[0.3em] uppercase"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                color: '#C9A84C',
                letterSpacing: '0.35em',
              }}
            >
              AVANI
            </span>
            <span
              className="text-[9px] tracking-[0.55em] uppercase font-light"
              style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '0.55em' }}
            >
              CITY
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300"
                style={{ color: 'rgba(245,240,232,0.6)', fontFamily: 'var(--font-jost)' }}
                data-hover
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#C9A84C'
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.6)'
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inquiry"
              className="px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300 animate-border-pulse"
              style={{
                border: '1px solid rgba(201,168,76,0.5)',
                color: '#C9A84C',
                fontFamily: 'var(--font-jost)',
                borderRadius: '1px',
              }}
              data-hover
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = '#C9A84C'
                el.style.color = '#060D1A'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'transparent'
                el.style.color = '#C9A84C'
              }}
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            data-hover
          >
            <motion.span
              className="block h-px w-7 bg-avani-gold"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px w-5 bg-avani-gold"
              animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? -10 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px w-7 bg-avani-gold"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ background: 'rgba(6,13,26,0.97)', backdropFilter: 'blur(30px)' }}
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="gold-line w-24 mb-12" />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="block py-4 text-3xl font-light tracking-wider"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#F5F0E8' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setMenuOpen(false)}
                data-hover
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#C9A84C'
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = '#F5F0E8'
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="gold-line w-24 mt-12" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
