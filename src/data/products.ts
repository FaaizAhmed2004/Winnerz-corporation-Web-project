import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    slug: 'wireless-headphones',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 299.99,
    images: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        alt: 'Premium Wireless Headphones',
        isPrimary: true
      }
    ],
    category: 'Electronics',
    tags: ['audio', 'wireless', 'premium'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-01T00:00:00Z')
  },
  {
    id: '2',
    slug: 'smart-watch',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitor, GPS, and smartphone integration.',
    price: 199.99,
    images: [
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        alt: 'Smart Fitness Watch',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: [
          { id: 'black', name: 'Black', value: 'black', inStock: true },
          { id: 'silver', name: 'Silver', value: 'silver', inStock: true },
          { id: 'gold', name: 'Gold', value: 'gold', inStock: false }
        ],
        priceModifier: 0
      }
    ],
    category: 'Electronics',
    tags: ['fitness', 'smart', 'wearable'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-02T00:00:00Z'),
    updatedAt: new Date('2024-01-02T00:00:00Z')
  },
  {
    id: '3',
    slug: 'cotton-t-shirt',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable organic cotton t-shirt in various colors and sizes.',
    price: 29.99,
    images: [
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
        alt: 'Organic Cotton T-Shirt',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'size',
        name: 'Size',
        options: [
          { id: 'xs', name: 'XS', value: 'xs', inStock: true },
          { id: 's', name: 'S', value: 's', inStock: true },
          { id: 'm', name: 'M', value: 'm', inStock: true },
          { id: 'l', name: 'L', value: 'l', inStock: true },
          { id: 'xl', name: 'XL', value: 'xl', inStock: false }
        ],
        priceModifier: 0
      },
      {
        id: 'color',
        name: 'Color',
        options: [
          { id: 'white', name: 'White', value: 'white', inStock: true },
          { id: 'black', name: 'Black', value: 'black', inStock: true },
          { id: 'navy', name: 'Navy', value: 'navy', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Clothing',
    tags: ['organic', 'cotton', 'casual'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-03T00:00:00Z'),
    updatedAt: new Date('2024-01-03T00:00:00Z')
  },
  {
    id: '4',
    slug: 'coffee-maker',
    name: 'Automatic Coffee Maker',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    price: 149.99,
    images: [
      {
        id: '4',
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop',
        alt: 'Automatic Coffee Maker',
        isPrimary: true
      }
    ],
    category: 'Home & Kitchen',
    tags: ['coffee', 'appliance', 'automatic'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-04T00:00:00Z'),
    updatedAt: new Date('2024-01-04T00:00:00Z')
  },
  {
    id: '5',
    slug: 'running-shoes',
    name: 'Professional Running Shoes',
    description: 'Lightweight running shoes with advanced cushioning and breathable mesh.',
    price: 129.99,
    images: [
      {
        id: '5',
        url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
        alt: 'Professional Running Shoes',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'size',
        name: 'Size',
        options: [
          { id: '7', name: '7', value: '7', inStock: true },
          { id: '8', name: '8', value: '8', inStock: true },
          { id: '9', name: '9', value: '9', inStock: true },
          { id: '10', name: '10', value: '10', inStock: true },
          { id: '11', name: '11', value: '11', inStock: false }
        ],
        priceModifier: 0
      }
    ],
    category: 'Sports',
    tags: ['running', 'athletic', 'lightweight'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-05T00:00:00Z'),
    updatedAt: new Date('2024-01-05T00:00:00Z')
  }
];

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Home & Kitchen',
  'Sports',
  'Books'
];