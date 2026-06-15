'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Particle = ({ style }: { style: React.CSSProperties }) => (
  <div className="absolute rounded-full animate-float pointer-events-none" style={style} />
)

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  const heroY = useTransform(scrollY, [0, 800], [0, 200])
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0])
  const textY = useTransform(scrollY, [0, 600], [0, -80])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  const particles = [
    { size: 3, x: '12%', y: '25%', delay: 0, duration: 9, opacity: 0.6 },
    { size: 5, x: '85%', y: '18%', delay: 1.5, duration: 11, opacity: 0.4 },
    { size: 2, x: '68%', y: '72%', delay: 3, duration: 8, opacity: 0.7 },
    { size: 4, x: '28%', y: '80%', delay: 0.8, duration: 10, opacity: 0.5 },
    { size: 2, x: '90%', y: '55%', delay: 2, duration: 12, opacity: 0.45 },
    { size: 6, x: '45%', y: '15%', delay: 4, duration: 9.5, opacity: 0.3 },
    { size: 3, x: '5%', y: '60%', delay: 1, duration: 13, opacity: 0.55 },
    { size: 2, x: '75%', y: '88%', delay: 2.5, duration: 7, opacity: 0.65 },
  ]

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: 640 }}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
        style={{ y: heroY }}
      >
        {/* Deep luxury gradient background (inspired by the entrance arch) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 30%, rgba(26,53,102,0.8) 0%, rgba(10,22,40,0) 60%),
              radial-gradient(ellipse at 80% 80%, rgba(42,77,143,0.3) 0%, transparent 50%),
              linear-gradient(180deg, #060D1A 0%, #0A1628 40%, #0F1F3D 60%, #0A1628 80%, #060D1A 100%)
            `,
          }}
        />

        {/* Architectural glow — simulating the arch entrance illumination */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 45%,
                rgba(201,168,76,0.12) 0%,
                rgba(201,168,76,0.06) 30%,
                transparent 65%
              )
            `,
          }}
        />

        {/* Horizontal ambient lines (architectural feel) */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full"
              style={{
                top: `${20 + i * 15}%`,
                height: '1px',
                background: `linear-gradient(90deg, transparent 0%, rgba(201,168,76,${0.04 - i * 0.006}) 20%, rgba(201,168,76,${0.08 - i * 0.01}) 50%, rgba(201,168,76,${0.04 - i * 0.006}) 80%, transparent 100%)`,
              }}
            />
          ))}
        </div>

        {/* Vertical architectural pillars feel */}
        <div className="absolute inset-0 flex justify-center gap-16 opacity-20">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="h-full w-px"
              style={{
                background: `linear-gradient(180deg, transparent, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.15) 70%, transparent)`,
                opacity: i === 3 ? 1 : 0.4,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Overlay gradient for text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(6,13,26,0.3) 0%,
              rgba(6,13,26,0.1) 30%,
              rgba(6,13,26,0.2) 50%,
              rgba(6,13,26,0.75) 80%,
              rgba(6,13,26,1) 100%
            )
          `,
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 z-20">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              background: `radial-gradient(circle, #E8C97A, #C9A84C)`,
              boxShadow: `0 0 ${p.size * 3}px rgba(201,168,76,0.8)`,
              opacity: p.opacity,
              animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Parallax light orbs */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div
          className="absolute"
          style={{
            top: '25%', left: '20%', width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '40%', right: '15%', width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(42,77,143,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
        style={{ y: textY, opacity: heroOpacity }}
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-px w-12 bg-avani-gold opacity-60" />
          <span
            className="text-[10px] tracking-[0.5em] uppercase font-light"
            style={{ color: 'rgba(201,168,76,0.8)', fontFamily: 'var(--font-jost)' }}
          >
            Presenting
          </span>
          <div className="h-px w-12 bg-avani-gold opacity-60" />
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            className="gold-shimmer"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(52px, 10vw, 140px)',
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: '0.08em',
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            AVANI
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(52px, 10vw, 140px)',
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: '0.08em',
              color: '#F5F0E8',
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            CITY
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="max-w-xl mb-4"
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: 'clamp(12px, 1.5vw, 15px)',
            letterSpacing: '0.2em',
            color: 'rgba(245,240,232,0.55)',
            fontWeight: 300,
            textTransform: 'uppercase',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          Where the Earth Meets Eternity
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="max-w-lg mb-14"
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: 'clamp(13px, 1.4vw, 16px)',
            letterSpacing: '0.05em',
            color: 'rgba(245,240,232,0.4)',
            fontWeight: 300,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          A master-planned plotted township redefining how the discerning few choose to live.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#inquiry"
            className="group relative px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium overflow-hidden transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              color: '#060D1A',
              borderRadius: '1px',
              fontFamily: 'var(--font-jost)',
            }}
            data-hover
          >
            <span className="relative z-10">Enquire Now</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, #E8C97A, #C9A84C)' }}
            />
          </a>
          <a
            href="#about"
            className="group px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-light transition-all duration-500"
            style={{
              border: '1px solid rgba(201,168,76,0.35)',
              color: 'rgba(201,168,76,0.8)',
              borderRadius: '1px',
              fontFamily: 'var(--font-jost)',
            }}
            data-hover
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(201,168,76,0.8)'
              el.style.color = '#C9A84C'
              el.style.background = 'rgba(201,168,76,0.05)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(201,168,76,0.35)'
              el.style.color = 'rgba(201,168,76,0.8)'
              el.style.background = 'transparent'
            }}
          >
            Explore Township
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <span
            className="text-[9px] tracking-[0.4em] uppercase"
            style={{ color: 'rgba(201,168,76,0.5)', fontFamily: 'var(--font-jost)' }}
          >
            Scroll
          </span>
          <div className="relative w-px h-12 overflow-hidden" style={{ background: 'rgba(201,168,76,0.15)' }}>
            <motion.div
              className="absolute top-0 w-full"
              style={{ height: '100%', background: 'linear-gradient(180deg, #C9A84C, transparent)' }}
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
