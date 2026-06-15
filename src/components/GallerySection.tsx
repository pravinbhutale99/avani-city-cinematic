'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryItems = [
  {
    title: 'Grand Entrance',
    category: 'Architecture',
    aspect: 'tall',
    gradient: 'from-[#1A3566] via-[#0F1F3D] to-[#060D1A]',
    accent: 'rgba(201,168,76,0.15)',
    symbol: '⬡',
  },
  {
    title: 'Boulevard Drive',
    category: 'Infrastructure',
    aspect: 'wide',
    gradient: 'from-[#0A1628] via-[#1A3566] to-[#0A1628]',
    accent: 'rgba(42,77,143,0.2)',
    symbol: '◈',
  },
  {
    title: 'Central Park',
    category: 'Landscape',
    aspect: 'square',
    gradient: 'from-[#0F1F3D] to-[#060D1A]',
    accent: 'rgba(201,168,76,0.1)',
    symbol: '❋',
  },
  {
    title: 'Plot Boundary',
    category: 'Premium Plots',
    aspect: 'wide',
    gradient: 'from-[#060D1A] via-[#0F1F3D] to-[#1A3566]',
    accent: 'rgba(201,168,76,0.12)',
    symbol: '◇',
  },
  {
    title: 'Clubhouse',
    category: 'Amenity',
    aspect: 'tall',
    gradient: 'from-[#1A3566] to-[#060D1A]',
    accent: 'rgba(42,77,143,0.25)',
    symbol: '◉',
  },
  {
    title: 'Twilight Vista',
    category: 'Atmosphere',
    aspect: 'square',
    gradient: 'from-[#060D1A] to-[#0A1628]',
    accent: 'rgba(201,168,76,0.2)',
    symbol: '⊞',
  },
]

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="gallery" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 40% at 80% 50%, rgba(26,53,102,0.1) 0%, transparent 50%),
            #060D1A
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-avani-gold opacity-60" />
            <span
              className="text-[10px] tracking-[0.4em] uppercase"
              style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'var(--font-jost)' }}
            >
              Gallery
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(36px, 5vw, 62px)',
                fontWeight: 300,
                color: '#F5F0E8',
                lineHeight: 1.1,
              }}
            >
              The Avani{' '}
              <em
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Experience
              </em>
            </h2>
            <p
              className="max-w-xs"
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '13px',
                color: 'rgba(245,240,232,0.4)',
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              A curated glimpse into the township, its architecture, and the lifestyle it cultivates.
            </p>
          </div>
        </motion.div>

        {/* Masonry-style gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(201,168,76,0.06)' }}>
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative group overflow-hidden"
              style={{
                aspectRatio: item.aspect === 'tall' ? '3/4' : item.aspect === 'wide' ? '4/3' : '1/1',
                gridRow: item.aspect === 'tall' ? 'span 2' : 'span 1',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-hover
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-all duration-700`}
                style={{
                  filter: hoveredIndex === i ? 'brightness(1.2)' : 'brightness(0.9)',
                }}
              />

              {/* Accent glow */}
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${item.accent} 0%, transparent 70%)`,
                  opacity: hoveredIndex === i ? 1 : 0.5,
                }}
              />

              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Center symbol */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-700"
                style={{
                  fontSize: hoveredIndex === i ? '80px' : '60px',
                  color: hoveredIndex === i ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.06)',
                  transform: hoveredIndex === i ? 'scale(1.2)' : 'scale(1)',
                }}
              >
                {item.symbol}
              </div>

              {/* Overlay on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(6,13,26,0.85) 100%)',
                  opacity: hoveredIndex === i ? 1 : 0.4,
                }}
              />

              {/* Content */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500"
                style={{
                  transform: hoveredIndex === i ? 'translateY(0)' : 'translateY(8px)',
                  opacity: hoveredIndex === i ? 1 : 0.6,
                }}
              >
                <span
                  className="block text-[9px] tracking-[0.3em] uppercase mb-1.5"
                  style={{ color: 'rgba(201,168,76,0.7)', fontFamily: 'var(--font-jost)' }}
                >
                  {item.category}
                </span>
                <span
                  className="block"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: '#F5F0E8',
                  }}
                >
                  {item.title}
                </span>
              </div>

              {/* Top-right zoom icon on hover */}
              <div
                className="absolute top-4 right-4 transition-all duration-500"
                style={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  transform: hoveredIndex === i ? 'scale(1)' : 'scale(0.8)',
                }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ border: '1px solid rgba(201,168,76,0.4)' }}
                >
                  <span style={{ color: '#C9A84C', fontSize: '14px' }}>+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
