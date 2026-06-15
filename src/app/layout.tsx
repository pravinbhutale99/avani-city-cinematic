import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avani City — A New Standard of Living',
  description: 'Avani City: Premium plotted township. Curated plots in a master-planned, gated community designed for the discerning few.',
  openGraph: {
    title: 'Avani City — A New Standard of Living',
    description: 'Premium plotted township. Future-ready. Architecturally curated.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
