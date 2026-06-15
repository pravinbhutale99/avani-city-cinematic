/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'avani': {
          'gold': '#C9A84C',
          'gold-light': '#E8C97A',
          'gold-pale': '#F0DFA0',
          'navy': '#0A1628',
          'navy-deep': '#060D1A',
          'navy-mid': '#0F1F3D',
          'blue': '#1A3566',
          'blue-light': '#2A4D8F',
          'charcoal': '#111827',
          'smoke': '#1F2A3C',
          'mist': '#8A9BB5',
          'cream': '#F5F0E8',
        }
      },
      fontFamily: {
        'display': ['var(--font-cormorant)', 'Georgia', 'serif'],
        'body': ['var(--font-jost)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-dm-mono)', 'monospace'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.6' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)', opacity: '1' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)', opacity: '0.8' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201,168,76,0.6), 0 0 80px rgba(201,168,76,0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(2%, 1%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(3%, -2%)' },
          '50%': { transform: 'translate(-3%, 1%)' },
          '60%': { transform: 'translate(1%, 3%)' },
          '70%': { transform: 'translate(-2%, -1%)' },
          '80%': { transform: 'translate(2%, 4%)' },
          '90%': { transform: 'translate(-1%, -3%)' },
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(6,13,26,0) 0%, rgba(6,13,26,0.4) 40%, rgba(6,13,26,0.85) 80%, rgba(6,13,26,1) 100%)',
        'section-gradient': 'linear-gradient(180deg, #060D1A 0%, #0A1628 50%, #060D1A 100%)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
