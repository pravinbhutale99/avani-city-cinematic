'use client'
import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import AmenitiesSection from '@/components/AmenitiesSection'
import LocationSection from '@/components/LocationSection'
import GallerySection from '@/components/GallerySection'
import InquirySection from '@/components/InquirySection'
import Footer from '@/components/Footer'

// Cursor only on desktop (no-ssr to avoid hydration mismatch)
const CinematicCursor = dynamic(() => import('@/components/CinematicCursor'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="relative min-h-screen bg-avani-navy-deep overflow-x-hidden">
      {/* Custom cursor */}
      <CinematicCursor />

      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <HeroSection />

      {/* Grain overlay — global atmospheric texture */}
      <div
        className="fixed inset-0 pointer-events-none z-[100]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.022,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Sections */}
      <AboutSection />
      <AmenitiesSection />
      <LocationSection />
      <GallerySection />
      <InquirySection />
      <Footer />
    </main>
  )
}
