'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function InquirySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', phone: '', city: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleWhatsApp = () => {
    const msg = `Hello Avani City Team,\n\nI am interested in a plot at Avani City.\n\nName: ${form.name || 'Not provided'}\nPhone: ${form.phone || 'Not provided'}\nCity: ${form.city || 'Not provided'}\nInterest: ${form.interest || 'Not specified'}\n\nPlease share more details.`
    const url = `https://wa.me/919999999999?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleWhatsApp()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(10,22,40,0.6)',
    border: '1px solid rgba(201,168,76,0.18)',
    color: '#F5F0E8',
    fontFamily: 'var(--font-jost)',
    fontSize: '13px',
    fontWeight: 300,
    letterSpacing: '0.05em',
    outline: 'none',
    borderRadius: '1px',
    transition: 'border-color 0.3s ease',
  }

  return (
    <section id="inquiry" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 50%, rgba(26,53,102,0.2) 0%, transparent 60%),
            linear-gradient(180deg, #060D1A 0%, #0A1628 50%, #060D1A 100%)
          `,
        }}
      />

      {/* Ambient light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Decorative horizontal lines */}
      {[20, 80].map((pos, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 h-px opacity-10"
          style={{
            top: `${pos}%`,
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
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
              Reserve Your Plot
            </span>
            <div className="h-px w-12 bg-avani-gold opacity-40" />
          </div>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(36px, 5.5vw, 66px)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.1,
            }}
          >
            Begin Your{' '}
            <em
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Legacy
            </em>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '15px',
              lineHeight: 1.85,
              color: 'rgba(245,240,232,0.45)',
              fontWeight: 300,
            }}
          >
            Plots at Avani City are offered to a limited number of families.
            Express your interest and our senior relationship manager will connect with you personally.
          </p>
        </motion.div>

        <motion.div
          className="glass p-8 lg:p-12 relative"
          style={{ borderRadius: '2px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Corner accents */}
          {[
            { top: 0, left: 0 },
            { top: 0, right: 0 },
            { bottom: 0, left: 0 },
            { bottom: 0, right: 0 },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-8 h-8"
              style={{
                ...pos,
                borderTop: i < 2 ? '1px solid rgba(201,168,76,0.4)' : 'none',
                borderBottom: i >= 2 ? '1px solid rgba(201,168,76,0.4)' : 'none',
                borderLeft: i % 2 === 0 ? '1px solid rgba(201,168,76,0.4)' : 'none',
                borderRight: i % 2 === 1 ? '1px solid rgba(201,168,76,0.4)' : 'none',
              }}
            />
          ))}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-[10px] tracking-[0.25em] uppercase mb-2"
                  style={{ color: 'rgba(201,168,76,0.5)', fontFamily: 'var(--font-jost)' }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                />
              </div>
              <div>
                <label
                  className="block text-[10px] tracking-[0.25em] uppercase mb-2"
                  style={{ color: 'rgba(201,168,76,0.5)', fontFamily: 'var(--font-jost)' }}
                >
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91  XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                />
              </div>
              <div>
                <label
                  className="block text-[10px] tracking-[0.25em] uppercase mb-2"
                  style={{ color: 'rgba(201,168,76,0.5)', fontFamily: 'var(--font-jost)' }}
                >
                  Your City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="City of residence"
                  value={form.city}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                />
              </div>
              <div>
                <label
                  className="block text-[10px] tracking-[0.25em] uppercase mb-2"
                  style={{ color: 'rgba(201,168,76,0.5)', fontFamily: 'var(--font-jost)' }}
                >
                  Plot Preference
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: 'none' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.18)')}
                >
                  <option value="">Select plot size</option>
                  <option value="150sqyd">150 Sq. Yds</option>
                  <option value="200sqyd">200 Sq. Yds</option>
                  <option value="300sqyd">300 Sq. Yds</option>
                  <option value="500sqyd+">500+ Sq. Yds (Premium)</option>
                  <option value="investment">Investment Purpose</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 group relative py-4 text-[11px] tracking-[0.3em] uppercase font-medium overflow-hidden transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#fff',
                  borderRadius: '1px',
                  fontFamily: 'var(--font-jost)',
                }}
                data-hover
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {submitted ? 'Opening WhatsApp...' : 'Enquire on WhatsApp'}
                </span>
              </button>

              <a
                href="tel:+919999999999"
                className="group py-4 px-8 text-[11px] tracking-[0.3em] uppercase font-light text-center transition-all duration-500"
                style={{
                  border: '1px solid rgba(201,168,76,0.3)',
                  color: 'rgba(201,168,76,0.8)',
                  borderRadius: '1px',
                  fontFamily: 'var(--font-jost)',
                }}
                data-hover
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'rgba(201,168,76,0.05)'
                  el.style.borderColor = 'rgba(201,168,76,0.6)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'transparent'
                  el.style.borderColor = 'rgba(201,168,76,0.3)'
                }}
              >
                Call Us
              </a>
            </div>
          </form>

          {/* Disclaimer */}
          <p
            className="text-center mt-6"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '10px',
              color: 'rgba(245,240,232,0.25)',
              letterSpacing: '0.05em',
            }}
          >
            By submitting, you agree to be contacted by the Avani City sales team. RERA approved project.
          </p>
        </motion.div>

        {/* Contact bar */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {[
            { label: 'Sales Office', value: 'Mon–Sun, 9am–7pm' },
            { label: 'Call/WhatsApp', value: '+91 99999 99999' },
            { label: 'Email', value: 'sales@avanicity.in' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.5)',
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '18px',
                  color: 'rgba(245,240,232,0.65)',
                  fontWeight: 400,
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
