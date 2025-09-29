'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/stores/cart';
import { useOrdersStore } from '@/stores/orders';
import { ThemeProvider } from '@/components/theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  const { loadCart } = useCartStore();
  const { loadOrders } = useOrdersStore();

  useEffect(() => {
    // Load persisted data on app start
    loadCart();
    loadOrders();
  }, [loadCart, loadOrders]);

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}