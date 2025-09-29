'use client';

import { generateStructuredData } from '@/lib/seo';

interface StructuredDataProps {
  type: 'organization' | 'product' | 'breadcrumb';
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = generateStructuredData(type, data);

  if (!structuredData) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}