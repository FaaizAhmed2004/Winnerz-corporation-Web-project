import { Metadata } from 'next';
import { Product } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://winnerzmarketing.com';
const siteName = 'Winnerz Marketing Inc.';
const defaultDescription = 'Discover quality products at Winnerz Marketing Inc. Your trusted partner for exceptional shopping experiences.';

export function generateMetadata({
  title,
  description = defaultDescription,
  path = '',
  image,
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
  };
}

export function generateProductMetadata(product: Product): Metadata {
  const title = product.name;
  const description = product.description.length > 160 
    ? `${product.description.substring(0, 157)}...` 
    : product.description;
  const path = `/shop/${product.slug}`;
  const image = product.images[0]?.url;

  return {
    ...generateMetadata({ title, description, path, image }),
    openGraph: {
      ...generateMetadata({ title, description, path, image }).openGraph,
      type: 'product',
      images: product.images.map(img => ({
        url: img.url,
        width: 800,
        height: 600,
        alt: img.alt || product.name,
      })),
    },
    other: {
      'product:price:amount': product.price.toString(),
      'product:price:currency': 'USD',
      'product:availability': product.inStock ? 'in stock' : 'out of stock',
      'product:condition': 'new',
      'product:brand': siteName,
    },
  };
}

export function generateStructuredData(type: 'organization' | 'product' | 'breadcrumb', data?: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'organization':
      return {
        ...baseStructuredData,
        '@type': 'Organization',
        name: siteName,
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: defaultDescription,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Business Avenue, Suite 100',
          addressLocality: 'Wilmington',
          addressRegion: 'DE',
          postalCode: '19801',
          addressCountry: 'US',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-123-4567',
          contactType: 'customer service',
          email: 'support@winnerzmarketing.com',
        },
        sameAs: [
          // Add social media URLs here when available
        ],
      };

    case 'product':
      if (!data) return null;
      return {
        ...baseStructuredData,
        '@type': 'Product',
        name: data.name,
        description: data.description,
        image: data.images.map((img: any) => img.url),
        sku: data.id,
        brand: {
          '@type': 'Brand',
          name: siteName,
        },
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: 'USD',
          availability: data.inStock 
            ? 'https://schema.org/InStock' 
            : 'https://schema.org/OutOfStock',
          seller: {
            '@type': 'Organization',
            name: siteName,
          },
        },
        aggregateRating: data.rating ? {
          '@type': 'AggregateRating',
          ratingValue: data.rating.average,
          reviewCount: data.rating.count,
        } : undefined,
      };

    case 'breadcrumb':
      if (!data) return null;
      return {
        ...baseStructuredData,
        '@type': 'BreadcrumbList',
        itemListElement: data.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${baseUrl}${item.path}`,
        })),
      };

    default:
      return null;
  }
}

export function generateSitemap() {
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/shop', priority: 0.9, changefreq: 'daily' },
    { url: '/about', priority: 0.7, changefreq: 'monthly' },
    { url: '/contact', priority: 0.6, changefreq: 'monthly' },
    { url: '/legal', priority: 0.5, changefreq: 'yearly' },
    { url: '/cart', priority: 0.3, changefreq: 'never' },
    { url: '/checkout', priority: 0.3, changefreq: 'never' },
    { url: '/orders', priority: 0.3, changefreq: 'never' },
  ];

  return staticPages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq as 'daily' | 'monthly' | 'yearly' | 'never',
    priority: page.priority,
  }));
}

export const jsonLd = {
  organization: generateStructuredData('organization'),
};