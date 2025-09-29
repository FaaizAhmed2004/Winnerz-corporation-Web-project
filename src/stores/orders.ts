import { create } from 'zustand';
import { Order, OrderStatus, Cart, CustomerInfo, ShippingInfo, BillingInfo } from '@/types';
import { storage } from '@/lib/storage';

interface CreateOrderData {
  cart: Cart;
  customer: CustomerInfo;
  shipping: ShippingInfo;
  billing: BillingInfo;
}

interface OrdersStore {
  orders: Order[];
  currentOrder: Order | null;
  isLoading: boolean;
  createOrder: (orderData: CreateOrderData) => Promise<Order>;
  getOrder: (orderId: string) => Order | null;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  loadOrders: () => Promise<void>;
  saveOrders: () => Promise<void>;
}

const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substr(2, 4).toUpperCase();
  return `WM${timestamp.slice(-6)}${random}`;
};

const generateOrderId = (): string => {
  return `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const useOrdersStore = create<OrdersStore>((set, get) => ({
  orders: [],
  currentOrder: null,
  isLoading: false,

  createOrder: async (orderData: CreateOrderData): Promise<Order> => {
    const { cart, customer, shipping, billing } = orderData;
    
    // Simulate payment processing
    const paymentSuccess = Math.random() > 0.1; // 90% success rate
    
    if (!paymentSuccess) {
      throw new Error('Payment failed. Please try again.');
    }

    const order: Order = {
      id: generateOrderId(),
      orderNumber: generateOrderNumber(),
      status: OrderStatus.PENDING,
      items: cart.items.map(item => ({
        id: item.id,
        productId: item.productId,
        product: item.product,
        quantity: item.quantity,
        price: item.product.price,
        selectedVariants: item.selectedVariants
      })),
      customer,
      shipping,
      billing,
      payment: {
        method: 'credit_card',
        status: 'completed',
        transactionId: `txn_${Date.now()}`
      },
      totals: {
        subtotal: cart.subtotal,
        tax: cart.tax,
        shipping: cart.shipping,
        discount: cart.discount,
        total: cart.total
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const { orders } = get();
    const updatedOrders = [order, ...orders];
    
    set({ 
      orders: updatedOrders,
      currentOrder: order 
    });
    
    await get().saveOrders();
    return order;
  },

  getOrder: (orderId: string) => {
    const { orders } = get();
    return orders.find(order => order.id === orderId) || null;
  },

  updateOrderStatus: (orderId: string, status: OrderStatus) => {
    const { orders } = get();
    const updatedOrders = orders.map(order =>
      order.id === orderId
        ? { ...order, status, updatedAt: new Date() }
        : order
    );
    
    set({ orders: updatedOrders });
    get().saveOrders();
  },

  loadOrders: async () => {
    set({ isLoading: true });
    try {
      const savedOrders = await storage.get<Order[]>('orders');
      if (savedOrders) {
        // Ensure dates are properly parsed
        const orders = savedOrders.map(order => ({
          ...order,
          createdAt: new Date(order.createdAt),
          updatedAt: new Date(order.updatedAt)
        }));
        set({ orders });
      }
    } catch (error) {
      console.error('Failed to load orders:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  saveOrders: async () => {
    const { orders } = get();
    try {
      await storage.set('orders', orders);
    } catch (error) {
      console.error('Failed to save orders:', error);
    }
  }
}));