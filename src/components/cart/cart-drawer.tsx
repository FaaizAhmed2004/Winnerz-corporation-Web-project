'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCartStore } from '@/stores/cart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, updateQuantity, removeItem } = useCartStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  const itemCount = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const subtotal = cart?.subtotal || 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: isVisible ? 0 : '100%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-96 max-w-[90vw] bg-white dark:bg-gray-900 shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Shopping Cart
                </h2>
                {itemCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {itemCount}
                  </Badge>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {!cart || cart.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Add some products to get started
                  </p>
                  <Link href="/shop" onClick={handleClose}>
                    <Button>
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {cart.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.product.images[0]?.url || '/placeholder-product.jpg'}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm truncate">
                          {item.product.name}
                        </h4>
                        
                        {item.selectedVariants && Object.keys(item.selectedVariants).length > 0 && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {Object.entries(item.selectedVariants).map(([key, value]) => 
                              `${key}: ${value}`
                            ).join(', ')}
                          </p>
                        )}

                        <div className="flex items-center justify-between mt-2">
                          <span className="font-medium text-gray-900 dark:text-white text-sm">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="h-6 w-6 p-0"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            
                            <span className="text-sm font-medium text-gray-900 dark:text-white min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 h-6 w-6 p-0"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart && cart.items.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Subtotal
                  </span>
                  <span className="text-base font-bold text-gray-900 dark:text-white">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link href="/cart" onClick={handleClose} className="w-full">
                    <Button className="w-full">
                      View Cart
                    </Button>
                  </Link>
                  
                  <Link href="/checkout" onClick={handleClose} className="w-full">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      Checkout
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                  Shipping and taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}