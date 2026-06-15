/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    // Allow SVG in <img> tags (not next/image)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
  // Serve public files including SVG
  async headers() {
    return [
      {
        source: '/hero-gate.svg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

module.exports = nextConfig
