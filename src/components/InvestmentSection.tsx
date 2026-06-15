'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const promises = [
  {
    num: '01',
    title: 'Plotted Land — The Safest Bet',
    body: 'In 30 years of Indian real-estate history, plotted land in well-located, gated developments has never delivered a negative return over any 5-year window. Avani City is positioned at the inflection point of the region\'s next growth decade.',
    accent: 'ROI',
  },
  {
    num: '02',
    title: 'Build When You\'re Ready',
    body: 'No EMI pressure to construct immediately. Lock in land at today\'s price. Build your dream home on your own timeline — one year from now or ten. The land works for you while you wait.',
    accent: 'Flexibility',
  },
  {
    num: '03',
    title: 'Leave Something Real Behind',
    body: 'A plot of land is one of the few assets that can be touched, stood upon, and handed to the next generation. It cannot be deleted, inflated away, or volatilised. Avani City is the foundation of a family legacy.',
    accent: 'Legacy',
  },
]

export default function InvestmentSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-32 lg:py-44 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 100%, rgba(26,53,102,0.14) 0%, transparent 55%),
            linear-gradient(180deg, #060D1A 0%, #0A1628 60%, #060D1A 100%)
          `,
        }}
      />

      {/* Entrance gate watermark backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden"
        style={{ filter: 'saturate(0) brightness(2)' }}
      >
        <img
          src="/hero-gate.svg"
          alt=""
          className="absolute w-full h-full"
          style={{ objectFit: 'cover', objectPosition: 'center 40%', transform: 'scale(1.1)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-avani-gold opacity-40" />
            <span
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '9px',
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.55)',
              }}
            >
              Why Invest Here
            </span>
            <div className="h-px w-10 bg-avani-gold opacity-40" />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(34px, 5vw, 62px)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.12,
            }}
          >
            The Case for{' '}
            <em
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Avani City
            </em>
          </h2>
        </motion.div>

        {/* Promise cards */}
        <div className="grid lg:grid-cols-3 gap-px" style={{ background: 'rgba(201,168,76,0.07)' }}>
          {promises.map((p, i) => (
            <motion.div
              key={i}
              className="relative p-9 lg:p-11 group"
              style={{ background: '#060D1A' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top hover glow */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: 'linear-gradient(90deg, transparent, #C9A84C 50%, transparent)' }}
              />

              {/* Number + accent */}
              <div className="flex items-start justify-between mb-7">
                <span
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '11px',
                    color: 'rgba(201,168,76,0.35)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {p.num}
                </span>
                <span
                  className="px-2.5 py-1 text-[8px] tracking-[0.3em] uppercase"
                  style={{
                    border: '1px solid rgba(201,168,76,0.2)',
                    color: 'rgba(201,168,76,0.55)',
                    fontFamily: 'var(--font-jost)',
                    borderRadius: '1px',
                  }}
                >
                  {p.accent}
                </span>
              </div>

              {/* Title */}
              <h3
                className="mb-5"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#F5F0E8',
                  lineHeight: 1.25,
                }}
              >
                {p.title}
              </h3>

              {/* Divider */}
              <div
                className="mb-5"
                style={{
                  height: '1px',
                  width: '40px',
                  background: 'rgba(201,168,76,0.3)',
                }}
              />

              {/* Body */}
              <p
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '13px',
                  lineHeight: 1.85,
                  color: 'rgba(245,240,232,0.42)',
                  fontWeight: 300,
                }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <blockquote
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(245,240,232,0.45)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.5,
            }}
          >
            "The best time to buy land was twenty years ago. The second-best time{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              is today.
            </span>
            "
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
