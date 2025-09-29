import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    slug: 'wireless-headphones',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life. CE, FCC, and RoHS certified.',
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
    tags: ['audio', 'wireless', 'premium', 'certified'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-01T00:00:00Z')
  },
  {
    id: '2',
    slug: 'smart-watch',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitor, GPS, and smartphone integration. 1-year warranty included.',
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
    tags: ['fitness', 'smart', 'wearable', 'warranty'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-02T00:00:00Z'),
    updatedAt: new Date('2024-01-02T00:00:00Z')
  },
  {
    id: '3',
    slug: 'cotton-t-shirt',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable organic cotton t-shirt in various colors and sizes. Sustainably sourced and ethically manufactured.',
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
    tags: ['organic', 'cotton', 'casual', 'sustainable'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-03T00:00:00Z'),
    updatedAt: new Date('2024-01-03T00:00:00Z')
  },
  {
    id: '4',
    slug: 'coffee-maker',
    name: 'Automatic Coffee Maker',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe. UL certified for safety.',
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
    tags: ['coffee', 'appliance', 'automatic', 'certified'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-04T00:00:00Z'),
    updatedAt: new Date('2024-01-04T00:00:00Z')
  },
  {
    id: '5',
    slug: 'running-shoes',
    name: 'Professional Running Shoes',
    description: 'Lightweight running shoes with advanced cushioning and breathable mesh. Tested for durability and performance.',
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
    tags: ['running', 'athletic', 'lightweight', 'tested'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-05T00:00:00Z'),
    updatedAt: new Date('2024-01-05T00:00:00Z')
  },
  {
    id: '6',
    slug: 'bluetooth-speaker',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 360-degree sound and 12-hour battery life. IPX7 rated.',
    price: 89.99,
    images: [
      {
        id: '6',
        url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        alt: 'Portable Bluetooth Speaker',
        isPrimary: true
      }
    ],
    category: 'Electronics',
    tags: ['audio', 'bluetooth', 'waterproof', 'portable'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-06T00:00:00Z'),
    updatedAt: new Date('2024-01-06T00:00:00Z')
  },
  {
    id: '7',
    slug: 'yoga-mat',
    name: 'Premium Yoga Mat',
    description: 'Non-slip yoga mat made from eco-friendly TPE material. 6mm thickness for optimal comfort.',
    price: 49.99,
    images: [
      {
        id: '7',
        url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
        alt: 'Premium Yoga Mat',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: [
          { id: 'purple', name: 'Purple', value: 'purple', inStock: true },
          { id: 'blue', name: 'Blue', value: 'blue', inStock: true },
          { id: 'green', name: 'Green', value: 'green', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Sports',
    tags: ['yoga', 'fitness', 'eco-friendly', 'non-slip'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-07T00:00:00Z'),
    updatedAt: new Date('2024-01-07T00:00:00Z')
  },
  {
    id: '8',
    slug: 'led-desk-lamp',
    name: 'Adjustable LED Desk Lamp',
    description: 'Energy-efficient LED desk lamp with touch controls and USB charging port. Eye-care certified.',
    price: 79.99,
    images: [
      {
        id: '8',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        alt: 'Adjustable LED Desk Lamp',
        isPrimary: true
      }
    ],
    category: 'Home & Garden',
    tags: ['led', 'desk', 'adjustable', 'energy-efficient'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-08T00:00:00Z'),
    updatedAt: new Date('2024-01-08T00:00:00Z')
  },
  {
    id: '9',
    slug: 'wireless-charger',
    name: 'Fast Wireless Charger',
    description: 'Qi-certified wireless charging pad with fast charging support for all compatible devices.',
    price: 39.99,
    images: [
      {
        id: '9',
        url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
        alt: 'Fast Wireless Charger',
        isPrimary: true
      }
    ],
    category: 'Electronics',
    tags: ['wireless', 'charger', 'qi-certified', 'fast-charging'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-09T00:00:00Z'),
    updatedAt: new Date('2024-01-09T00:00:00Z')
  },
  {
    id: '10',
    slug: 'ceramic-dinnerware-set',
    name: 'Ceramic Dinnerware Set',
    description: '16-piece ceramic dinnerware set. Dishwasher and microwave safe. Lead-free and food-safe certified.',
    price: 119.99,
    images: [
      {
        id: '10',
        url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop',
        alt: 'Ceramic Dinnerware Set',
        isPrimary: true
      }
    ],
    category: 'Home & Kitchen',
    tags: ['ceramic', 'dinnerware', 'dishwasher-safe', 'food-safe'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-10T00:00:00Z'),
    updatedAt: new Date('2024-01-10T00:00:00Z')
  },
  {
    id: '11',
    slug: 'backpack',
    name: 'Travel Backpack',
    description: 'Durable travel backpack with laptop compartment and anti-theft features. Water-resistant material.',
    price: 89.99,
    images: [
      {
        id: '11',
        url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        alt: 'Travel Backpack',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: [
          { id: 'black', name: 'Black', value: 'black', inStock: true },
          { id: 'gray', name: 'Gray', value: 'gray', inStock: true },
          { id: 'navy', name: 'Navy', value: 'navy', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Accessories',
    tags: ['travel', 'backpack', 'anti-theft', 'water-resistant'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-11T00:00:00Z'),
    updatedAt: new Date('2024-01-11T00:00:00Z')
  },
  {
    id: '12',
    slug: 'air-purifier',
    name: 'HEPA Air Purifier',
    description: 'True HEPA air purifier with activated carbon filter. Removes 99.97% of airborne particles.',
    price: 199.99,
    images: [
      {
        id: '12',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
        alt: 'HEPA Air Purifier',
        isPrimary: true
      }
    ],
    category: 'Home & Garden',
    tags: ['air-purifier', 'hepa', 'health', 'clean-air'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-12T00:00:00Z'),
    updatedAt: new Date('2024-01-12T00:00:00Z')
  },
  {
    id: '13',
    slug: 'resistance-bands',
    name: 'Resistance Bands Set',
    description: 'Complete resistance bands set with door anchor and exercise guide. Latex-free and durable.',
    price: 34.99,
    images: [
      {
        id: '13',
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
        alt: 'Resistance Bands Set',
        isPrimary: true
      }
    ],
    category: 'Sports',
    tags: ['resistance', 'fitness', 'home-gym', 'latex-free'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-13T00:00:00Z'),
    updatedAt: new Date('2024-01-13T00:00:00Z')
  },
  {
    id: '14',
    slug: 'bamboo-cutting-board',
    name: 'Bamboo Cutting Board Set',
    description: 'Eco-friendly bamboo cutting board set with juice groove. Antimicrobial and sustainable.',
    price: 45.99,
    images: [
      {
        id: '14',
        url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop',
        alt: 'Bamboo Cutting Board Set',
        isPrimary: true
      }
    ],
    category: 'Home & Kitchen',
    tags: ['bamboo', 'cutting-board', 'eco-friendly', 'antimicrobial'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-14T00:00:00Z'),
    updatedAt: new Date('2024-01-14T00:00:00Z')
  },
  {
    id: '15',
    slug: 'essential-oils-set',
    name: 'Essential Oils Starter Set',
    description: 'Pure essential oils set with diffuser. Therapeutic grade oils for aromatherapy and wellness.',
    price: 69.99,
    images: [
      {
        id: '15',
        url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop',
        alt: 'Essential Oils Starter Set',
        isPrimary: true
      }
    ],
    category: 'Health & Beauty',
    tags: ['essential-oils', 'aromatherapy', 'wellness', 'therapeutic'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-15T00:00:00Z'),
    updatedAt: new Date('2024-01-15T00:00:00Z')
  },
  {
    id: '16',
    slug: 'tablet-stand',
    name: 'Adjustable Tablet Stand',
    description: 'Universal tablet stand with 360-degree rotation. Compatible with all tablet sizes up to 12.9 inches.',
    price: 29.99,
    images: [
      {
        id: '16',
        url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
        alt: 'Adjustable Tablet Stand',
        isPrimary: true
      }
    ],
    category: 'Accessories',
    tags: ['tablet', 'stand', 'adjustable', 'universal'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-16T00:00:00Z'),
    updatedAt: new Date('2024-01-16T00:00:00Z')
  },
  {
    id: '17',
    slug: 'stainless-steel-water-bottle',
    name: 'Insulated Water Bottle',
    description: 'Double-wall stainless steel water bottle. Keeps drinks cold for 24h, hot for 12h. BPA-free.',
    price: 24.99,
    images: [
      {
        id: '17',
        url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
        alt: 'Insulated Water Bottle',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'size',
        name: 'Size',
        options: [
          { id: '16oz', name: '16oz', value: '16oz', inStock: true },
          { id: '20oz', name: '20oz', value: '20oz', inStock: true },
          { id: '32oz', name: '32oz', value: '32oz', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Sports',
    tags: ['water-bottle', 'insulated', 'stainless-steel', 'bpa-free'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-17T00:00:00Z'),
    updatedAt: new Date('2024-01-17T00:00:00Z')
  },
  {
    id: '18',
    slug: 'wireless-mouse',
    name: 'Ergonomic Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life. 2.4GHz connection.',
    price: 34.99,
    images: [
      {
        id: '18',
        url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
        alt: 'Ergonomic Wireless Mouse',
        isPrimary: true
      }
    ],
    category: 'Electronics',
    tags: ['mouse', 'wireless', 'ergonomic', 'precision'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-18T00:00:00Z'),
    updatedAt: new Date('2024-01-18T00:00:00Z')
  },
  {
    id: '19',
    slug: 'plant-pot-set',
    name: 'Ceramic Plant Pot Set',
    description: 'Set of 3 ceramic plant pots with drainage holes and saucers. Perfect for indoor plants.',
    price: 39.99,
    images: [
      {
        id: '19',
        url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop',
        alt: 'Ceramic Plant Pot Set',
        isPrimary: true
      }
    ],
    category: 'Home & Garden',
    tags: ['plant-pots', 'ceramic', 'indoor-plants', 'drainage'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-19T00:00:00Z'),
    updatedAt: new Date('2024-01-19T00:00:00Z')
  },
  {
    id: '20',
    slug: 'phone-case',
    name: 'Protective Phone Case',
    description: 'Military-grade drop protection phone case with raised edges for screen protection. Clear design.',
    price: 19.99,
    images: [
      {
        id: '20',
        url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
        alt: 'Protective Phone Case',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'model',
        name: 'Phone Model',
        options: [
          { id: 'iphone-15', name: 'iPhone 15', value: 'iphone-15', inStock: true },
          { id: 'iphone-14', name: 'iPhone 14', value: 'iphone-14', inStock: true },
          { id: 'samsung-s24', name: 'Samsung S24', value: 'samsung-s24', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Accessories',
    tags: ['phone-case', 'protection', 'military-grade', 'clear'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-20T00:00:00Z'),
    updatedAt: new Date('2024-01-20T00:00:00Z')
  },
  {
    id: '21',
    slug: 'gaming-keyboard',
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB backlit mechanical gaming keyboard with tactile switches and programmable keys. Anti-ghosting technology.',
    price: 129.99,
    images: [
      {
        id: '21',
        url: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop',
        alt: 'Mechanical Gaming Keyboard',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'switch',
        name: 'Switch Type',
        options: [
          { id: 'blue', name: 'Blue (Tactile)', value: 'blue', inStock: true },
          { id: 'red', name: 'Red (Linear)', value: 'red', inStock: true },
          { id: 'brown', name: 'Brown (Tactile)', value: 'brown', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Electronics',
    tags: ['gaming', 'keyboard', 'mechanical', 'rgb'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-21T00:00:00Z'),
    updatedAt: new Date('2024-01-21T00:00:00Z')
  },
  {
    id: '22',
    slug: 'smart-home-hub',
    name: 'Smart Home Hub',
    description: 'Central control hub for smart home devices. Compatible with Alexa, Google Assistant, and Apple HomeKit.',
    price: 149.99,
    images: [
      {
        id: '22',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
        alt: 'Smart Home Hub',
        isPrimary: true
      }
    ],
    category: 'Electronics',
    tags: ['smart-home', 'hub', 'automation', 'iot'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-22T00:00:00Z'),
    updatedAt: new Date('2024-01-22T00:00:00Z')
  },
  {
    id: '23',
    slug: 'protein-powder',
    name: 'Whey Protein Powder',
    description: 'Premium whey protein isolate with 25g protein per serving. Available in multiple flavors. Third-party tested.',
    price: 59.99,
    images: [
      {
        id: '23',
        url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop',
        alt: 'Whey Protein Powder',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'flavor',
        name: 'Flavor',
        options: [
          { id: 'vanilla', name: 'Vanilla', value: 'vanilla', inStock: true },
          { id: 'chocolate', name: 'Chocolate', value: 'chocolate', inStock: true },
          { id: 'strawberry', name: 'Strawberry', value: 'strawberry', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Health & Beauty',
    tags: ['protein', 'fitness', 'supplement', 'whey'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-23T00:00:00Z'),
    updatedAt: new Date('2024-01-23T00:00:00Z')
  },
  {
    id: '24',
    slug: 'denim-jacket',
    name: 'Classic Denim Jacket',
    description: 'Timeless denim jacket made from premium cotton denim. Classic fit with vintage wash. Sustainable production.',
    price: 89.99,
    images: [
      {
        id: '24',
        url: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
        alt: 'Classic Denim Jacket',
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
          { id: 'xl', name: 'XL', value: 'xl', inStock: true }
        ],
        priceModifier: 0
      },
      {
        id: 'wash',
        name: 'Wash',
        options: [
          { id: 'light', name: 'Light Wash', value: 'light', inStock: true },
          { id: 'medium', name: 'Medium Wash', value: 'medium', inStock: true },
          { id: 'dark', name: 'Dark Wash', value: 'dark', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Clothing',
    tags: ['denim', 'jacket', 'classic', 'sustainable'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-24T00:00:00Z'),
    updatedAt: new Date('2024-01-24T00:00:00Z')
  },
  {
    id: '25',
    slug: 'smart-thermostat',
    name: 'Smart WiFi Thermostat',
    description: 'Energy-saving smart thermostat with WiFi connectivity and mobile app control. Learning algorithms for optimization.',
    price: 199.99,
    images: [
      {
        id: '25',
        url: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa0?w=500&h=500&fit=crop',
        alt: 'Smart WiFi Thermostat',
        isPrimary: true
      }
    ],
    category: 'Home & Garden',
    tags: ['smart', 'thermostat', 'energy-saving', 'wifi'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-25T00:00:00Z'),
    updatedAt: new Date('2024-01-25T00:00:00Z')
  },
  {
    id: '26',
    slug: 'camping-tent',
    name: '4-Person Camping Tent',
    description: 'Waterproof 4-person camping tent with easy setup. UV protection and ventilation system. Includes carry bag.',
    price: 179.99,
    images: [
      {
        id: '26',
        url: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=500&h=500&fit=crop',
        alt: '4-Person Camping Tent',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: [
          { id: 'green', name: 'Forest Green', value: 'green', inStock: true },
          { id: 'orange', name: 'Orange', value: 'orange', inStock: true },
          { id: 'blue', name: 'Blue', value: 'blue', inStock: false }
        ],
        priceModifier: 0
      }
    ],
    category: 'Sports',
    tags: ['camping', 'tent', 'outdoor', 'waterproof'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-26T00:00:00Z'),
    updatedAt: new Date('2024-01-26T00:00:00Z')
  },
  {
    id: '27',
    slug: 'skincare-set',
    name: 'Anti-Aging Skincare Set',
    description: 'Complete anti-aging skincare routine with cleanser, serum, and moisturizer. Dermatologist tested and cruelty-free.',
    price: 129.99,
    images: [
      {
        id: '27',
        url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop',
        alt: 'Anti-Aging Skincare Set',
        isPrimary: true
      }
    ],
    category: 'Health & Beauty',
    tags: ['skincare', 'anti-aging', 'dermatologist-tested', 'cruelty-free'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-27T00:00:00Z'),
    updatedAt: new Date('2024-01-27T00:00:00Z')
  },
  {
    id: '28',
    slug: 'electric-kettle',
    name: 'Stainless Steel Electric Kettle',
    description: 'Fast-boiling electric kettle with temperature control and keep-warm function. BPA-free and energy efficient.',
    price: 79.99,
    images: [
      {
        id: '28',
        url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop',
        alt: 'Stainless Steel Electric Kettle',
        isPrimary: true
      }
    ],
    category: 'Home & Kitchen',
    tags: ['electric-kettle', 'stainless-steel', 'temperature-control', 'bpa-free'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-28T00:00:00Z'),
    updatedAt: new Date('2024-01-28T00:00:00Z')
  },
  {
    id: '29',
    slug: 'wireless-earbuds',
    name: 'True Wireless Earbuds',
    description: 'Premium true wireless earbuds with active noise cancellation and 8-hour battery life. IPX7 waterproof rating.',
    price: 159.99,
    images: [
      {
        id: '29',
        url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop',
        alt: 'True Wireless Earbuds',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: [
          { id: 'white', name: 'White', value: 'white', inStock: true },
          { id: 'black', name: 'Black', value: 'black', inStock: true },
          { id: 'blue', name: 'Blue', value: 'blue', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Electronics',
    tags: ['earbuds', 'wireless', 'noise-cancellation', 'waterproof'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-29T00:00:00Z'),
    updatedAt: new Date('2024-01-29T00:00:00Z')
  },
  {
    id: '30',
    slug: 'desk-organizer',
    name: 'Bamboo Desk Organizer',
    description: 'Eco-friendly bamboo desk organizer with multiple compartments. Perfect for office supplies and stationery.',
    price: 34.99,
    images: [
      {
        id: '30',
        url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
        alt: 'Bamboo Desk Organizer',
        isPrimary: true
      }
    ],
    category: 'Accessories',
    tags: ['desk-organizer', 'bamboo', 'eco-friendly', 'office'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-30T00:00:00Z'),
    updatedAt: new Date('2024-01-30T00:00:00Z')
  },
  {
    id: '31',
    slug: 'fitness-tracker',
    name: 'Advanced Fitness Tracker',
    description: 'Comprehensive fitness tracker with heart rate monitoring, sleep tracking, and 14-day battery life. Water resistant.',
    price: 99.99,
    images: [
      {
        id: '31',
        url: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
        alt: 'Advanced Fitness Tracker',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'color',
        name: 'Band Color',
        options: [
          { id: 'black', name: 'Black', value: 'black', inStock: true },
          { id: 'blue', name: 'Blue', value: 'blue', inStock: true },
          { id: 'pink', name: 'Pink', value: 'pink', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Electronics',
    tags: ['fitness-tracker', 'heart-rate', 'sleep-tracking', 'water-resistant'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-31T00:00:00Z'),
    updatedAt: new Date('2024-01-31T00:00:00Z')
  },
  {
    id: '32',
    slug: 'garden-tool-set',
    name: 'Premium Garden Tool Set',
    description: '7-piece premium garden tool set with ergonomic handles. Includes trowel, pruners, and watering accessories.',
    price: 69.99,
    images: [
      {
        id: '32',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        alt: 'Premium Garden Tool Set',
        isPrimary: true
      }
    ],
    category: 'Home & Garden',
    tags: ['garden-tools', 'premium', 'ergonomic', 'gardening'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-02-01T00:00:00Z'),
    updatedAt: new Date('2024-02-01T00:00:00Z')
  },
  {
    id: '33',
    slug: 'leather-wallet',
    name: 'Genuine Leather Wallet',
    description: 'Handcrafted genuine leather wallet with RFID blocking technology. Multiple card slots and bill compartments.',
    price: 49.99,
    images: [
      {
        id: '33',
        url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        alt: 'Genuine Leather Wallet',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: [
          { id: 'brown', name: 'Brown', value: 'brown', inStock: true },
          { id: 'black', name: 'Black', value: 'black', inStock: true },
          { id: 'tan', name: 'Tan', value: 'tan', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Accessories',
    tags: ['wallet', 'leather', 'rfid-blocking', 'handcrafted'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-02-02T00:00:00Z'),
    updatedAt: new Date('2024-02-02T00:00:00Z')
  },
  {
    id: '34',
    slug: 'blender',
    name: 'High-Speed Blender',
    description: 'Professional-grade high-speed blender with multiple speed settings. Perfect for smoothies, soups, and sauces.',
    price: 199.99,
    images: [
      {
        id: '34',
        url: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&h=500&fit=crop',
        alt: 'High-Speed Blender',
        isPrimary: true
      }
    ],
    category: 'Home & Kitchen',
    tags: ['blender', 'high-speed', 'professional-grade', 'smoothies'],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-02-03T00:00:00Z'),
    updatedAt: new Date('2024-02-03T00:00:00Z')
  },
  {
    id: '35',
    slug: 'running-shorts',
    name: 'Athletic Running Shorts',
    description: 'Lightweight athletic running shorts with moisture-wicking fabric and built-in compression liner. Reflective details.',
    price: 39.99,
    images: [
      {
        id: '35',
        url: 'https://images.unsplash.com/photo-1506629905607-d9c297d3d45b?w=500&h=500&fit=crop',
        alt: 'Athletic Running Shorts',
        isPrimary: true
      }
    ],
    variants: [
      {
        id: 'size',
        name: 'Size',
        options: [
          { id: 's', name: 'S', value: 's', inStock: true },
          { id: 'm', name: 'M', value: 'm', inStock: true },
          { id: 'l', name: 'L', value: 'l', inStock: true },
          { id: 'xl', name: 'XL', value: 'xl', inStock: true }
        ],
        priceModifier: 0
      },
      {
        id: 'color',
        name: 'Color',
        options: [
          { id: 'black', name: 'Black', value: 'black', inStock: true },
          { id: 'navy', name: 'Navy', value: 'navy', inStock: true },
          { id: 'gray', name: 'Gray', value: 'gray', inStock: true }
        ],
        priceModifier: 0
      }
    ],
    category: 'Sports',
    tags: ['running', 'shorts', 'athletic', 'moisture-wicking'],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-02-04T00:00:00Z'),
    updatedAt: new Date('2024-02-04T00:00:00Z')
  }
];

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Home & Kitchen',
  'Home & Garden',
  'Sports',
  'Accessories',
  'Health & Beauty'
];