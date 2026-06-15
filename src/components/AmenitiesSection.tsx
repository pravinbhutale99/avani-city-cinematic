'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const amenities = [
  {
    icon: '⬡',
    title: 'Gated Community',
    desc: 'Monumental entrance gates with 24/7 staffed security, boom barriers, and CCTV surveillance across the entire perimeter.',
    tag: 'Security',
    gradient: 'from-[#0F1F3D] to-[#0A1628]',
  },
  {
    icon: '⊞',
    title: 'Wide Internal Roads',
    desc: '30-ft and 40-ft asphalted internal roads with footpaths, storm drainage, and avenue plantation on both sides.',
    tag: 'Infrastructure',
    gradient: 'from-[#0A1628] to-[#060D1A]',
  },
  {
    icon: '❋',
    title: 'Green Lung & Parks',
    desc: 'Over 15% of total area dedicated to curated green spaces, pocket gardens, and a central boulevard park.',
    tag: 'Landscape',
    gradient: 'from-[#0F1F3D] to-[#0A1628]',
  },
  {
    icon: '◈',
    title: 'Underground Utilities',
    desc: 'Complete underground electrical, water supply, and sewage networks. No overhead cables across the township.',
    tag: 'Premium',
    gradient: 'from-[#0A1628] to-[#060D1A]',
  },
  {
    icon: '◇',
    title: 'Investment Grade',
    desc: 'Plotted land has historically delivered the strongest compounding returns in Indian real estate over any 10-year window.',
    tag: 'Wealth',
    gradient: 'from-[#1A3566] to-[#0A1628]',
  },
  {
    icon: '◉',
    title: 'Future Growth',
    desc: 'Located at the intersection of two upcoming infrastructure corridors, with a new metro station proposed within 2 km.',
    tag: 'Appreciation',
    gradient: 'from-[#0A1628] to-[#0F1F3D]',
  },
]

export default function AmenitiesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="amenities" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 50% at 50% 0%, rgba(26,53,102,0.12) 0%, transparent 50%),
            #060D1A
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-avani-gold opacity-40" />
            <span
              className="text-[10px] tracking-[0.4em] uppercase"
              style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'var(--font-jost)' }}
            >
              What We Offer
            </span>
            <div className="h-px w-12 bg-avani-gold opacity-40" />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(38px, 5.5vw, 68px)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.1,
            }}
          >
            Crafted for the{' '}
            <em
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Discerning Few
            </em>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(201,168,76,0.08)' }}>
          {amenities.map((amenity, i) => (
            <motion.div
              key={i}
              className="relative group p-8 lg:p-10 transition-all duration-700 overflow-hidden"
              style={{
                background: hoveredIndex === i
                  ? 'rgba(26,53,102,0.3)'
                  : 'rgba(6,13,26,0.95)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-hover
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)',
                }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px transition-all duration-700"
                style={{
                  background: hoveredIndex === i
                    ? 'linear-gradient(90deg, transparent, #C9A84C, transparent)'
                    : 'transparent',
                }}
              />

              {/* Tag */}
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-[9px] tracking-[0.4em] uppercase px-3 py-1.5"
                  style={{
                    color: 'rgba(201,168,76,0.6)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    fontFamily: 'var(--font-jost)',
                    borderRadius: '1px',
                  }}
                >
                  {amenity.tag}
                </span>
                <span
                  className="text-2xl transition-all duration-500"
                  style={{
                    color: hoveredIndex === i ? '#C9A84C' : 'rgba(201,168,76,0.3)',
                    filter: hoveredIndex === i ? 'drop-shadow(0 0 8px rgba(201,168,76,0.6))' : 'none',
                  }}
                >
                  {amenity.icon}
                </span>
              </div>

              {/* Title */}
              <h3
                className="mb-4 transition-colors duration-500"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '26px',
                  fontWeight: 400,
                  color: hoveredIndex === i ? '#E8C97A' : '#F5F0E8',
                  lineHeight: 1.2,
                }}
              >
                {amenity.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '13px',
                  lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.45)',
                  fontWeight: 300,
                }}
              >
                {amenity.desc}
              </p>

              {/* Bottom line reveal */}
              <div
                className="absolute bottom-0 left-0 h-px transition-all duration-500"
                style={{
                  width: hoveredIndex === i ? '100%' : '0%',
                  background: 'linear-gradient(90deg, #C9A84C, transparent)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
