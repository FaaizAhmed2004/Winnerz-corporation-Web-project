// Core Product Types
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: ProductImage[];
  variants?: ProductVariant[];
  category: string;
  tags: string[];
  inStock: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  options: VariantOption[];
  priceModifier: number;
}

export interface VariantOption {
  id: string;
  name: string;
  value: string;
  inStock: boolean;
}

// Cart Types
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
  addedAt: Date;
}

export interface Cart {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  couponCode?: string;
  updatedAt: Date;
}

// Order Types
export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  items: OrderItem[];
  customer: CustomerInfo;
  shipping: ShippingInfo;
  billing: BillingInfo;
  payment: PaymentInfo;
  totals: OrderTotals;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  selectedVariants?: Record<string, string>;
}

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded'
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface ShippingInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  method: string;
  cost: number;
}

export interface BillingInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  sameAsShipping: boolean;
}

export interface PaymentInfo {
  method: string;
  status: 'pending' | 'completed' | 'failed';
  transactionId?: string;
}

export interface OrderTotals {
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
}

// Filter Types
export interface ProductFilters {
  category?: string;
  priceRange?: [number, number];
  tags?: string[];
  inStock?: boolean;
  featured?: boolean;
}

// Theme Types
export type Theme = 'light' | 'dark';

// Storage Types
export interface StorageService {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
  remove(key: string): Promise<void>;
  clear(): Promise<void>;
  keys(): Promise<string[]>;
}