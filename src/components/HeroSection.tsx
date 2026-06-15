'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [loaded, setLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const { scrollY } = useScroll()

  // Parallax transforms
  const imgY       = useTransform(scrollY, [0, 900], [0, 180])
  const imgScale   = useTransform(scrollY, [0, 900], [1.08, 1.0])
  const overlayOp  = useTransform(scrollY, [0, 500], [0, 0.45])
  const textY      = useTransform(scrollY, [0, 700], [0, -100])
  const heroOpacity = useTransform(scrollY, [0, 650], [1, 0])

  // Mouse parallax
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      })
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  // Simulate load for SVG (always loads)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120)
    return () => clearTimeout(t)
  }, [])

  const particles = [
    { size: 2, x: '8%',  y: '22%', delay: 0,   dur: 10 },
    { size: 3, x: '88%', y: '16%', delay: 1.8,  dur: 12 },
    { size: 2, x: '72%', y: '68%', delay: 3.2,  dur: 9  },
    { size: 4, x: '22%', y: '75%', delay: 0.6,  dur: 11 },
    { size: 2, x: '92%', y: '50%', delay: 2.4,  dur: 8  },
    { size: 3, x: '48%', y: '12%', delay: 4.1,  dur: 13 },
    { size: 2, x: '4%',  y: '55%', delay: 1.2,  dur: 9  },
    { size: 3, x: '62%', y: '82%', delay: 2.9,  dur: 10 },
    { size: 2, x: '35%', y: '30%', delay: 5.0,  dur: 14 },
    { size: 2, x: '78%', y: '40%', delay: 0.3,  dur: 11 },
  ]

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: 680 }}
    >
      {/* ── BACKGROUND IMAGE LAYER ── */}
      <motion.div
        ref={imageRef}
        className="absolute inset-0 w-full"
        style={{
          y: imgY,
          scale: imgScale,
          height: '115%',
          top: '-7.5%',
          transformOrigin: 'center center',
        }}
      >
        {/* Mouse-tracked subtle pan */}
        <motion.div
          className="absolute inset-0"
          style={{
            x: mousePos.x * 0.4,
            y: mousePos.y * 0.4,
            transition: 'transform 1.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* The real hero image — swap src to /hero-entrance.jpg when you have it */}
          <img
            src="/hero-gate.svg"
            alt="Avani City Entrance"
            onLoad={() => setLoaded(true)}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />

          {/* Atmospheric colour grade tinted over image: warm dark blue-golden tones */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 90% 60% at 50% 42%,
                  rgba(201,140,30,0.10) 0%,
                  rgba(100,70,20,0.06) 40%,
                  transparent 70%
                ),
                radial-gradient(ellipse 70% 80% at 50% 80%,
                  rgba(6,13,26,0.55) 0%,
                  transparent 60%
                )
              `,
              mixBlendMode: 'multiply',
            }}
          />
        </motion.div>

        {/* Cinematic horizontal scan-line vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(0,0,0,0.015) 3px,
              rgba(0,0,0,0.015) 4px
            )`,
          }}
        />
      </motion.div>

      {/* ── GRADIENT OVERLAYS (layered depth) ── */}

      {/* 1. Dark vignette edges */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 110% 100% at 50% 50%,
              transparent 50%,
              rgba(6,13,26,0.65) 100%
            )
          `,
        }}
      />

      {/* 2. Cinematic bottom-to-top sweep — pushes image into darkness at bottom */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(6,13,26,0.50) 0%,
              rgba(6,13,26,0.18) 18%,
              rgba(6,13,26,0.05) 35%,
              rgba(6,13,26,0.08) 55%,
              rgba(6,13,26,0.50) 75%,
              rgba(6,13,26,0.88) 88%,
              rgba(6,13,26,1.00) 100%
            )
          `,
        }}
      />

      {/* 3. Left & right side darken */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(6,13,26,0.55) 0%,
              transparent 22%,
              transparent 78%,
              rgba(6,13,26,0.55) 100%
            )
          `,
        }}
      />

      {/* 4. Scroll-driven additional darkening */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'rgba(6,13,26,1)', opacity: overlayOp }}
      />

      {/* 5. Golden atmospheric haze at gate level (~40% from top) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 25% at 50% 42%,
              rgba(201,168,76,0.07) 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* ── PARTICLES ── */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              background: 'radial-gradient(circle, #F0DFA0, #C9A84C)',
              boxShadow: `0 0 ${p.size * 4}px rgba(201,168,76,0.9)`,
              opacity: 0.55,
              animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ── CINEMATIC REVEAL ANIMATION OVERLAY ── */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="absolute inset-0 z-50"
            style={{ background: '#060D1A' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Wipe reveal line — sweeps up as image loads */}
      <motion.div
        className="absolute left-0 right-0 z-40 pointer-events-none"
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.7), transparent)',
        }}
        initial={{ bottom: '100%', opacity: 0 }}
        animate={loaded ? { bottom: '-10%', opacity: [0, 1, 1, 0] } : {}}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ── HERO TEXT CONTENT ── */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
        style={{ y: textY, opacity: heroOpacity }}
      >
        {/* Top eyebrow */}
        <motion.div
          className="flex items-center gap-5 mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="h-px bg-avani-gold"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ opacity: 0.7 }}
          />
          <span
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '9px',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.75)',
              fontWeight: 300,
            }}
          >
            Now Presenting
          </span>
          <motion.div
            className="h-px bg-avani-gold"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ opacity: 0.7 }}
          />
        </motion.div>

        {/* AVANI — line-by-line reveal */}
        <div className="overflow-hidden mb-1">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block gold-shimmer"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(58px, 11vw, 152px)',
                fontWeight: 300,
                lineHeight: 0.92,
                letterSpacing: '0.1em',
              }}
            >
              AVANI
            </span>
          </motion.div>
        </div>

        {/* CITY */}
        <div className="overflow-hidden mb-3">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(58px, 11vw, 152px)',
                fontWeight: 200,
                lineHeight: 0.92,
                letterSpacing: '0.36em',
                color: '#F5F0E8',
              }}
            >
              CITY
            </span>
          </motion.div>
        </div>

        {/* Gold divider line */}
        <motion.div
          className="mb-7"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              height: '1px',
              width: '180px',
              background: 'linear-gradient(90deg, transparent, #C9A84C 30%, #E8C97A 50%, #C9A84C 70%, transparent)',
            }}
          />
        </motion.div>

        {/* Tagline: premium plotted township positioning */}
        <motion.p
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(16px, 2.2vw, 26px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(245,240,232,0.72)',
            letterSpacing: '0.04em',
            lineHeight: 1.5,
            marginBottom: '6px',
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
        >
          Where the Earth Meets Eternity
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          className="max-w-md mb-12"
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: 'clamp(11px, 1.3vw, 14px)',
            letterSpacing: '0.18em',
            color: 'rgba(245,240,232,0.38)',
            fontWeight: 300,
            textTransform: 'uppercase',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          A Master-Planned Plotted Township
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#inquiry"
            className="group relative px-11 py-4 text-[10px] tracking-[0.32em] uppercase font-medium overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              backgroundSize: '200% auto',
              color: '#060D1A',
              borderRadius: '1px',
              fontFamily: 'var(--font-jost)',
              transition: 'background-position 0.6s ease, transform 0.3s ease',
            }}
            data-hover
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundPosition = 'right center'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundPosition = 'left center'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            }}
          >
            Enquire Now
          </a>

          <a
            href="#about"
            className="group px-11 py-4 text-[10px] tracking-[0.32em] uppercase font-light"
            style={{
              border: '1px solid rgba(201,168,76,0.4)',
              color: 'rgba(201,168,76,0.85)',
              borderRadius: '1px',
              fontFamily: 'var(--font-jost)',
              backdropFilter: 'blur(8px)',
              background: 'rgba(6,13,26,0.25)',
              transition: 'all 0.4s ease',
            }}
            data-hover
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(201,168,76,0.75)'
              el.style.color = '#E8C97A'
              el.style.background = 'rgba(201,168,76,0.08)'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(201,168,76,0.4)'
              el.style.color = 'rgba(201,168,76,0.85)'
              el.style.background = 'rgba(6,13,26,0.25)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Explore Township
          </a>
        </motion.div>

        {/* Trust pill */}
        <motion.div
          className="mt-8 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
        >
          {['RERA Approved', 'Clear Title', 'Bank Loan Eligible'].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase"
              style={{ color: 'rgba(245,240,232,0.3)', fontFamily: 'var(--font-jost)' }}
            >
              <span
                className="w-1 h-1 rounded-full inline-block"
                style={{ background: '#C9A84C', boxShadow: '0 0 4px rgba(201,168,76,0.7)' }}
              />
              {t}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '8px',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.45)',
            }}
          >
            Scroll
          </span>
          <div
            className="relative overflow-hidden"
            style={{ width: '1px', height: '48px', background: 'rgba(201,168,76,0.12)' }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                height: '60%',
                background: 'linear-gradient(180deg, transparent, #C9A84C, rgba(201,168,76,0.3))',
              }}
              animate={{ y: ['0%', '200%'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
