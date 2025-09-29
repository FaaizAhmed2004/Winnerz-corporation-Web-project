import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Winnerz Marketing Inc. - E-commerce Store',
    short_name: 'Winnerz Store',
    description: 'Discover quality products at Winnerz Marketing Inc. Your trusted partner for exceptional shopping experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['shopping', 'business'],
    lang: 'en',
    orientation: 'portrait-primary',
  };
}