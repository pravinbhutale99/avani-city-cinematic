'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '200+', label: 'Curated Plots', sub: 'Premium sized' },
  { value: '40', label: 'Acres', sub: 'Master-planned' },
  { value: '24/7', label: 'Security', sub: 'Gated & surveilled' },
  { value: '2026', label: 'Possession', sub: 'Ready to build' },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(26,53,102,0.15) 0%, transparent 60%),
            linear-gradient(180deg, #060D1A 0%, #0A1628 50%, #060D1A 100%)
          `,
        }}
      />

      {/* Decorative vertical line */}
      <div
        className="absolute left-1/2 top-0 w-px h-full opacity-10"
        style={{ background: 'linear-gradient(180deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Decorative element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Large decorative number */}
            <div
              className="absolute -top-8 -left-4 text-[160px] font-light leading-none select-none pointer-events-none"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: 'rgba(201,168,76,0.04)',
                lineHeight: 1,
              }}
            >
              01
            </div>

            {/* Main visual block */}
            <div className="relative">
              <div
                className="w-full aspect-[4/3] relative overflow-hidden"
                style={{ borderRadius: '2px' }}
              >
                {/* Abstract architectural visualization */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(135deg, #0F1F3D 0%, #0A1628 40%, #1A3566 70%, #0A1628 100%)
                    `,
                  }}
                />
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Highlight lines */}
                <div className="absolute inset-0 flex flex-col justify-around opacity-30">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-full h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
                    />
                  ))}
                </div>
                {/* Central element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-center"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    <div
                      className="text-5xl font-light mb-2"
                      style={{
                        background: 'linear-gradient(135deg, #C9A84C, #E8C97A, #C9A84C)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      AVANI
                    </div>
                    <div
                      className="text-xs tracking-[0.6em] uppercase"
                      style={{ color: 'rgba(201,168,76,0.5)' }}
                    >
                      City
                    </div>
                  </div>
                </div>
                {/* Corner accents */}
                {[
                  { top: 0, left: 0 },
                  { top: 0, right: 0 },
                  { bottom: 0, left: 0 },
                  { bottom: 0, right: 0 },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute w-6 h-6"
                    style={{
                      ...pos,
                      borderTop: i < 2 ? '1px solid rgba(201,168,76,0.5)' : 'none',
                      borderBottom: i >= 2 ? '1px solid rgba(201,168,76,0.5)' : 'none',
                      borderLeft: i % 2 === 0 ? '1px solid rgba(201,168,76,0.5)' : 'none',
                      borderRight: i % 2 === 1 ? '1px solid rgba(201,168,76,0.5)' : 'none',
                    }}
                  />
                ))}
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-2 gap-px mt-px" style={{ background: 'rgba(201,168,76,0.1)' }}>
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="glass-light p-5 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className="text-2xl font-light mb-1"
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        color: '#C9A84C',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[10px] tracking-[0.2em] uppercase"
                      style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-jost)' }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-avani-gold opacity-60" />
              <span
                className="text-[10px] tracking-[0.4em] uppercase"
                style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'var(--font-jost)' }}
              >
                About The Project
              </span>
            </div>

            <h2
              className="mb-8"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(36px, 5vw, 58px)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#F5F0E8',
              }}
            >
              A Township{' '}
              <em
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontStyle: 'italic',
                }}
              >
                Built for
              </em>{' '}
              the Ages
            </h2>

            <div
              className="space-y-5"
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '15px',
                lineHeight: 1.85,
                color: 'rgba(245,240,232,0.55)',
                fontWeight: 300,
              }}
            >
              <p>
                Avani City is not merely a plotted development. It is a curated vision of how land should
                be held — as legacy, as investment, and as the foundation upon which tomorrow's finest
                homes will rise.
              </p>
              <p>
                Designed with the precision of master planners and the sensibility of architects who
                understand permanence, Avani City offers 200+ premium plots within a fully gated,
                infrastructure-complete township.
              </p>
              <p>
                Wide tree-lined boulevards, underground utilities, green corridors, and a community clubhouse
                form the bones of a neighborhood that will only appreciate in character and value over
                the decades ahead.
              </p>
            </div>

            <div className="gold-line mt-10 mb-8" />

            {/* Trust markers */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'RERA Approved Development',
                'Clear Title Guarantee',
                'Bank Loan Eligible Plots',
                'Gated Entry Architecture',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                >
                  <div
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: '#C9A84C', boxShadow: '0 0 6px rgba(201,168,76,0.6)' }}
                  />
                  <span
                    className="text-[11px] tracking-wide"
                    style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-jost)' }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
