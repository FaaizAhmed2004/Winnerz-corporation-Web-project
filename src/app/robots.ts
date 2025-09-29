import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://winnerzmarketing.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin-preview',
          '/api/',
          '/_next/',
          '/checkout',
          '/cart',
          '/orders',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}