'use client'
import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import AmenitiesSection from '@/components/AmenitiesSection'
import LocationSection from '@/components/LocationSection'
import GallerySection from '@/components/GallerySection'
import InvestmentSection from '@/components/InvestmentSection'
import InquirySection from '@/components/InquirySection'
import Footer from '@/components/Footer'

// Cursor: desktop-only, no-ssr avoids hydration mismatch
const CinematicCursor = dynamic(() => import('@/components/CinematicCursor'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: '#060D1A' }}>
      {/* Custom cinematic cursor */}
      <CinematicCursor />

      {/* Grain atmosphere layer — fixed, sits over entire page */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 9998,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.025,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero — full-screen cinematic entrance */}
      <HeroSection />

      {/* About — project story + entrance gate image */}
      <AboutSection />

      {/* Amenities — what the township offers */}
      <AmenitiesSection />

      {/* Location — connectivity map */}
      <LocationSection />

      {/* Gallery — cinematic grid */}
      <GallerySection />

      {/* Investment case — why buy here */}
      <InvestmentSection />

      {/* Inquiry — WhatsApp lead capture */}
      <InquirySection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
