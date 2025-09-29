'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { CartItem } from '@/components/cart/cart-item';
import { CartSummary } from '@/components/cart/cart-summary';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cart';

export default function CartPage() {
  const router = useRouter();
  const { cart, loadCart } = useCartStore();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const handleCheckout = () => {
    router.push('/checkout');
  };

  if (!cart || cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="mx-auto h-24 w-24 text-gray-400" />
          <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Your cart is empty
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link href="/shop">
            <Button size="lg" className="mt-8">
              Start Shopping
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link
          href="/shop"
          className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Shopping Cart
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {cart.items.length} item{cart.items.length !== 1 ? 's' : ''} in your cart
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <motion.div layout className="space-y-4">
            <AnimatePresence>
              {cart.items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <CartSummary cart={cart} onCheckout={handleCheckout} />
          </div>
        </div>
      </div>
    </div>
  );
}