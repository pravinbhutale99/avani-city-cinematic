'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About',     href: '#about'     },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location',  href: '#location'  },
  { label: 'Gallery',   href: '#gallery'   },
  { label: 'Inquiry',   href: '#inquiry'   },
]

// ── AVANI LOGO MARK (SVG recreation matching the real brand identity) ──────────
// Pentagon shape, 5 triangular facets in cobalt/navy blue
function AvaniMark({ size = 32 }: { size?: number }) {
  const s = size
  // Normalised points on s×(s*1.13) canvas
  // Peak(cx,4), armL(4,s*0.38), baseL(s*0.13,s), baseR(s*0.87,s), armR(s,s*0.38), centre(cx,s*0.57)
  const cx = s / 2
  const peak     = `${cx},${s * 0.03}`
  const armL     = `${s * 0.03},${s * 0.38}`
  const armR     = `${s * 0.97},${s * 0.38}`
  const baseL    = `${s * 0.13},${s * 0.97}`
  const baseR    = `${s * 0.87},${s * 0.97}`
  const centre   = `${cx},${s * 0.57}`
  const h        = s * 1.13 // height of viewBox

  return (
    <svg
      viewBox={`0 0 ${s} ${h}`}
      width={s}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Avani City logo mark"
    >
      <defs>
        {/* Top-left: dark navy */}
        <linearGradient id="nl1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#082248"/>
          <stop offset="100%" stopColor="#0D3060"/>
        </linearGradient>
        {/* Top-right: rich cobalt */}
        <linearGradient id="nl2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1958A0"/>
          <stop offset="100%" stopColor="#1450A8"/>
        </linearGradient>
        {/* Bottom-left: deep navy */}
        <linearGradient id="nl3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A2A58"/>
          <stop offset="100%" stopColor="#082040"/>
        </linearGradient>
        {/* Bottom-right: bright mid-blue */}
        <linearGradient id="nl4" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2870C8"/>
          <stop offset="100%" stopColor="#1E60B8"/>
        </linearGradient>
        {/* Bottom-centre base */}
        <linearGradient id="nl5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A5098"/>
          <stop offset="100%" stopColor="#1040880"/>
        </linearGradient>
      </defs>

      {/* Facet 1 — top-left dark (peak → armL → centre) */}
      <polygon points={`${peak} ${armL} ${centre}`} fill="url(#nl1)"/>
      {/* Facet 2 — top-right cobalt (peak → centre → armR) */}
      <polygon points={`${peak} ${centre} ${armR}`} fill="url(#nl2)"/>
      {/* Facet 3 — bottom-left navy (armL → baseL → centre) */}
      <polygon points={`${armL} ${baseL} ${centre}`} fill="url(#nl3)"/>
      {/* Facet 4 — bottom-right bright (centre → baseR → armR) */}
      <polygon points={`${centre} ${baseR} ${armR}`} fill="url(#nl4)"/>
      {/* Facet 5 — base strip (baseL → baseR → centre) */}
      <polygon points={`${baseL} ${baseR} ${centre}`} fill="url(#nl4)" opacity="0.8"/>

      {/* Facet edge separators — very subtle white lines */}
      <line x1={cx}        y1={s*0.03} x2={cx}        y2={s*0.57} stroke="rgba(255,255,255,0.20)" strokeWidth="0.5"/>
      <line x1={s*0.03}    y1={s*0.38} x2={cx}        y2={s*0.57} stroke="rgba(255,255,255,0.10)" strokeWidth="0.4"/>
      <line x1={s*0.97}    y1={s*0.38} x2={cx}        y2={s*0.57} stroke="rgba(255,255,255,0.10)" strokeWidth="0.4"/>
      <line x1={s*0.03}    y1={s*0.38} x2={s*0.97}    y2={s*0.38} stroke="rgba(255,255,255,0.07)" strokeWidth="0.35"/>

      {/* Outer perimeter */}
      <polygon
        points={`${peak} ${armR} ${baseR} ${baseL} ${armL}`}
        fill="none"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="0.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── FULL LOGO LOCKUP (mark + wordmark) ───────────────────────────────────────
function AvaniLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const markSize  = size === 'sm' ? 22 : size === 'lg' ? 44 : 28
  const nameSize  = size === 'sm' ? '14px' : size === 'lg' ? '24px' : '18px'
  const subSize   = size === 'sm' ? '6.5px' : size === 'lg' ? '10px' : '7.5px'

  return (
    <a href="#" data-hover className="flex items-center gap-3 group">
      {/* Mark — slight lift on hover */}
      <div
        className="flex-shrink-0 transition-all duration-500 group-hover:scale-105"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(26,80,168,0.35))' }}
      >
        <AvaniMark size={markSize} />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: nameSize,
            fontWeight: 500,
            letterSpacing: '0.32em',
            color: '#FFFFFF',
            lineHeight: 1,
            textTransform: 'uppercase',
            transition: 'color 0.3s ease',
          }}
          className="group-hover:text-white"
        >
          AVANI
        </span>
        <span
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: subSize,
            letterSpacing: '0.55em',
            color: 'rgba(255,255,255,0.42)',
            fontWeight: 300,
            lineHeight: 1,
            marginTop: '4px',
            textTransform: 'uppercase',
          }}
        >
          CITY
        </span>
      </div>
    </a>
  )
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────
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
          background: scrolled ? 'rgba(6,13,26,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(26,80,168,0.12)' : 'none',
          transition: 'background 0.6s ease, backdrop-filter 0.6s ease, border-color 0.6s ease',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      >
        {/* Scroll progress — blue brand colour */}
        <div
          className="absolute bottom-0 left-0 h-px transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #1450A8, #2870C8, #C9A84C)',
            opacity: scrolled ? 0.7 : 0,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <AvaniLogo size={scrolled ? 'sm' : 'md'} />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-hover
                className="relative group text-[10px] tracking-[0.22em] uppercase font-light"
                style={{
                  color: 'rgba(245,240,232,0.50)',
                  fontFamily: 'var(--font-jost)',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.90)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.50)'
                }}
              >
                {link.label}
                <span
                  className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full"
                  style={{
                    background: 'linear-gradient(90deg, #1958A8, #2870C8)',
                    transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)',
                    opacity: 0.8,
                  }}
                />
              </a>
            ))}

            {/* CTA button — gold, matching rest of site */}
            <a
              href="#inquiry"
              data-hover
              className="px-6 py-2.5 text-[9px] tracking-[0.25em] uppercase font-medium"
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
                className="block h-px"
                style={{ background: 'rgba(255,255,255,0.7)' }}
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

      {/* Mobile full-screen overlay */}
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
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AvaniLogo size="lg" />
            </motion.div>

            {/* Blue divider line in mobile menu */}
            <div
              className="mb-10"
              style={{
                height: '1px',
                width: '64px',
                background: 'linear-gradient(90deg, transparent, #1958A8, #2870C8, transparent)',
                opacity: 0.6,
              }}
            />

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="block py-3"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '32px',
                  fontWeight: 300,
                  letterSpacing: '0.08em',
                  color: 'rgba(245,240,232,0.80)',
                  transition: 'color 0.3s',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setMenuOpen(false)}
                data-hover
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.80)'
                }}
              >
                {link.label}
              </motion.a>
            ))}

            <div
              className="mt-10 mb-10"
              style={{
                height: '1px',
                width: '64px',
                background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)',
              }}
            />

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
