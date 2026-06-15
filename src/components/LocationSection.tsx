'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const connections = [
  { label: 'City Centre', distance: '12 min', detail: 'via expressway', direction: 'N' },
  { label: 'Int\'l Airport', distance: '25 min', detail: 'direct access', direction: 'E' },
  { label: 'Tech Hub', distance: '8 min', detail: 'emerging IT zone', direction: 'S' },
  { label: 'Metro Station', distance: '5 min', detail: 'proposed 2027', direction: 'W' },
  { label: 'School District', distance: '3 min', detail: 'CBSE & ICSE', direction: 'NE' },
  { label: 'Hospital Hub', distance: '7 min', detail: 'multi-specialty', direction: 'SE' },
  { label: 'Shopping Precinct', distance: '10 min', detail: 'lifestyle retail', direction: 'NW' },
  { label: 'Ring Road', distance: '2 min', detail: 'seamless connectivity', direction: 'SW' },
]

export default function LocationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="location" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 30% 50%, rgba(26,53,102,0.18) 0%, transparent 55%),
            linear-gradient(180deg, #060D1A 0%, #0A1628 50%, #060D1A 100%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Animated map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Map container */}
            <div
              className="relative aspect-square max-w-md mx-auto"
              style={{ maxWidth: 460 }}
            >
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '1px solid rgba(201,168,76,0.1)',
                }}
              />
              <div
                className="absolute inset-8 rounded-full"
                style={{
                  border: '1px solid rgba(201,168,76,0.08)',
                }}
              />
              <div
                className="absolute inset-16 rounded-full"
                style={{
                  border: '1px solid rgba(201,168,76,0.12)',
                }}
              />

              {/* Rotating outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '1px solid transparent',
                  borderTopColor: 'rgba(201,168,76,0.4)',
                  borderRightColor: 'rgba(201,168,76,0.15)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Grid lines */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: 'rgba(201,168,76,0.08)' }} />
                <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ background: 'rgba(201,168,76,0.08)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rotate-45 border" style={{ borderColor: 'rgba(201,168,76,0.05)' }} />
              </div>

              {/* Connection nodes */}
              {connections.map((conn, i) => {
                const angle = (i / connections.length) * 360 - 90
                const rad = (angle * Math.PI) / 180
                const r = 43 // percent radius
                const x = 50 + r * Math.cos(rad)
                const y = 50 + r * Math.sin(rad)

                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  >
                    {/* Line to center */}
                    <svg
                      className="absolute"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: `${r * 2}%`,
                        overflow: 'visible',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Node dot */}
                    <div
                      className="relative group"
                      data-hover
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: '#C9A84C',
                          boxShadow: '0 0 8px rgba(201,168,76,0.6)',
                        }}
                      />
                      {/* Tooltip */}
                      <div
                        className="absolute z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap"
                        style={{
                          bottom: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          marginBottom: '8px',
                          background: 'rgba(10,22,40,0.95)',
                          border: '1px solid rgba(201,168,76,0.3)',
                          padding: '6px 12px',
                          borderRadius: '1px',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-jost)',
                            fontSize: '10px',
                            color: '#C9A84C',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {conn.label}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-jost)',
                            fontSize: '9px',
                            color: 'rgba(245,240,232,0.5)',
                          }}
                        >
                          {conn.distance}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Center: AVANI */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center relative"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex flex-col items-center justify-center animate-pulse-glow"
                    style={{
                      background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, rgba(10,22,40,0.8) 70%)',
                      border: '1px solid rgba(201,168,76,0.3)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '13px',
                        color: '#C9A84C',
                        letterSpacing: '0.2em',
                        fontWeight: 500,
                      }}
                    >
                      AVANI
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-jost)',
                        fontSize: '8px',
                        color: 'rgba(201,168,76,0.5)',
                        letterSpacing: '0.3em',
                      }}
                    >
                      CITY
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Pulse rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute rounded-full"
                  style={{
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '1px solid rgba(201,168,76,0.3)',
                  }}
                  animate={{
                    width: [`${ring * 15}px`, `${ring * 50}px`],
                    height: [`${ring * 15}px`, `${ring * 50}px`],
                    opacity: [0.6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: ring * 0.8,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-avani-gold opacity-60" />
              <span
                className="text-[10px] tracking-[0.4em] uppercase"
                style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'var(--font-jost)' }}
              >
                Location Advantage
              </span>
            </div>

            <h2
              className="mb-8"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(36px, 4.5vw, 54px)',
                fontWeight: 300,
                color: '#F5F0E8',
                lineHeight: 1.1,
              }}
            >
              At the Crossroads of{' '}
              <em
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Everything
              </em>
            </h2>

            <p
              className="mb-10"
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '15px',
                lineHeight: 1.85,
                color: 'rgba(245,240,232,0.5)',
                fontWeight: 300,
              }}
            >
              Positioned at the heart of the region's most anticipated growth corridor,
              Avani City places you equidistant from the city's commerce, culture, and connectivity
              — all while preserving the quiet of curated neighbourhood living.
            </p>

            {/* Connection list */}
            <div className="space-y-3">
              {connections.slice(0, 6).map((conn, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between py-3 group"
                  style={{ borderBottom: '1px solid rgba(201,168,76,0.06)' }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{
                        background: '#C9A84C',
                        boxShadow: '0 0 4px rgba(201,168,76,0.5)',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-jost)',
                        fontSize: '13px',
                        color: 'rgba(245,240,232,0.65)',
                        fontWeight: 300,
                      }}
                    >
                      {conn.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-jost)',
                        fontSize: '11px',
                        color: 'rgba(245,240,232,0.3)',
                      }}
                    >
                      · {conn.detail}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '18px',
                      color: '#C9A84C',
                      fontWeight: 400,
                    }}
                  >
                    {conn.distance}
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
