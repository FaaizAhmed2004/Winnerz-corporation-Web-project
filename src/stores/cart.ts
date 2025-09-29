import { create } from 'zustand';
import { Cart, CartItem, Product } from '@/types';
import { storage } from '@/lib/storage';

interface CartStore {
  cart: Cart | null;
  isLoading: boolean;
  addItem: (product: Product, quantity: number, variants?: Record<string, string>) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  applyCoupon: (code: string) => Promise<boolean>;
  clearCart: () => void;
  loadCart: () => Promise<void>;
  saveCart: () => Promise<void>;
}

const TAX_RATE = 0.08;
const SHIPPING_COST = 9.99;
const FREE_SHIPPING_THRESHOLD = 75;

const calculateTotals = (items: CartItem[], discount = 0): Omit<Cart, 'id' | 'items' | 'couponCode' | 'updatedAt'> => {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + shipping - discount;

  return {
    subtotal,
    tax,
    shipping,
    discount,
    total
  };
};

const generateCartId = () => `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
const generateItemId = () => `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

export const useCartStore = create<CartStore>((set, get) => ({
  cart: null,
  isLoading: false,

  addItem: (product: Product, quantity: number, variants?: Record<string, string>) => {
    const { cart } = get();
    const currentCart = cart || {
      id: generateCartId(),
      items: [],
      subtotal: 0,
      tax: 0,
      shipping: 0,
      discount: 0,
      total: 0,
      updatedAt: new Date()
    };

    // Check if item with same product and variants already exists
    const existingItemIndex = currentCart.items.findIndex(item => 
      item.productId === product.id && 
      JSON.stringify(item.selectedVariants) === JSON.stringify(variants)
    );

    let newItems: CartItem[];
    
    if (existingItemIndex >= 0) {
      // Update existing item quantity
      newItems = [...currentCart.items];
      newItems[existingItemIndex] = {
        ...newItems[existingItemIndex],
        quantity: newItems[existingItemIndex].quantity + quantity
      };
    } else {
      // Add new item
      const newItem: CartItem = {
        id: generateItemId(),
        productId: product.id,
        product,
        quantity,
        selectedVariants: variants,
        addedAt: new Date()
      };
      newItems = [...currentCart.items, newItem];
    }

    const totals = calculateTotals(newItems, currentCart.discount);
    const updatedCart: Cart = {
      ...currentCart,
      items: newItems,
      ...totals,
      updatedAt: new Date()
    };

    set({ cart: updatedCart });
    get().saveCart();
  },

  removeItem: (itemId: string) => {
    const { cart } = get();
    if (!cart) return;

    const newItems = cart.items.filter(item => item.id !== itemId);
    const totals = calculateTotals(newItems, cart.discount);
    
    const updatedCart: Cart = {
      ...cart,
      items: newItems,
      ...totals,
      updatedAt: new Date()
    };

    set({ cart: updatedCart });
    get().saveCart();
  },

  updateQuantity: (itemId: string, quantity: number) => {
    const { cart } = get();
    if (!cart) return;

    if (quantity <= 0) {
      get().removeItem(itemId);
      return;
    }

    const newItems = cart.items.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );

    const totals = calculateTotals(newItems, cart.discount);
    const updatedCart: Cart = {
      ...cart,
      items: newItems,
      ...totals,
      updatedAt: new Date()
    };

    set({ cart: updatedCart });
    get().saveCart();
  },

  applyCoupon: async (code: string): Promise<boolean> => {
    const { cart } = get();
    if (!cart) return false;

    // Mock coupon validation
    const validCoupons: Record<string, number> = {
      'SAVE10': 10,
      'WELCOME20': 20,
      'FREESHIP': 15
    };

    const discount = validCoupons[code.toUpperCase()];
    if (!discount) return false;

    const totals = calculateTotals(cart.items, discount);
    const updatedCart: Cart = {
      ...cart,
      ...totals,
      couponCode: code.toUpperCase(),
      updatedAt: new Date()
    };

    set({ cart: updatedCart });
    await get().saveCart();
    return true;
  },

  clearCart: () => {
    set({ cart: null });
    storage.remove('cart');
  },

  loadCart: async () => {
    set({ isLoading: true });
    try {
      const savedCart = await storage.get<Cart>('cart');
      if (savedCart) {
        // Ensure dates are properly parsed
        const cart: Cart = {
          ...savedCart,
          updatedAt: new Date(savedCart.updatedAt),
          items: savedCart.items.map(item => ({
            ...item,
            addedAt: new Date(item.addedAt)
          }))
        };
        set({ cart });
      }
    } catch (error) {
      console.error('Failed to load cart:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  saveCart: async () => {
    const { cart } = get();
    if (cart) {
      try {
        await storage.set('cart', cart);
      } catch (error) {
        console.error('Failed to save cart:', error);
      }
    }
  }
}));