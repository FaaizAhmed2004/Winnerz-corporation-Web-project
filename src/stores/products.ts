import { create } from 'zustand';
import { Product, ProductFilters } from '@/types';
import { mockProducts } from '@/data/products';

interface ProductsStore {
  products: Product[];
  filteredProducts: Product[];
  filters: ProductFilters;
  searchQuery: string;
  isLoading: boolean;
  loadProducts: () => void;
  setFilters: (filters: Partial<ProductFilters>) => void;
  setSearchQuery: (query: string) => void;
  getProduct: (slug: string) => Product | null;
  applyFilters: () => void;
}

export const useProductsStore = create<ProductsStore>((set, get) => ({
  products: [],
  filteredProducts: [],
  filters: {},
  searchQuery: '',
  isLoading: false,

  loadProducts: () => {
    set({ isLoading: true });
    // Simulate loading delay
    setTimeout(() => {
      set({ 
        products: mockProducts,
        filteredProducts: mockProducts,
        isLoading: false 
      });
    }, 100);
  },

  setFilters: (newFilters: Partial<ProductFilters>) => {
    const { filters } = get();
    const updatedFilters = { ...filters, ...newFilters };
    set({ filters: updatedFilters });
    get().applyFilters();
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().applyFilters();
  },

  getProduct: (slug: string) => {
    const { products } = get();
    return products.find(product => product.slug === slug) || null;
  },

  applyFilters: () => {
    const { products, filters, searchQuery } = get();
    
    let filtered = [...products];

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Apply price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }

    // Apply tags filter
    if (filters.tags && filters.tags.length > 0) {
      filtered = filtered.filter(product =>
        filters.tags!.some(tag => product.tags.includes(tag))
      );
    }

    // Apply in stock filter
    if (filters.inStock !== undefined) {
      filtered = filtered.filter(product => product.inStock === filters.inStock);
    }

    // Apply featured filter
    if (filters.featured !== undefined) {
      filtered = filtered.filter(product => product.featured === filters.featured);
    }

    set({ filteredProducts: filtered });
  }
}));