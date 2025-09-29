'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';
import { Cart } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/stores/cart';
import { useToast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/utils';

interface CartSummaryProps {
  cart: Cart;
  showCheckoutButton?: boolean;
  onCheckout?: () => void;
}

export function CartSummary({ cart, showCheckoutButton = true, onCheckout }: CartSummaryProps) {
  const [couponCode, setCouponCode] = useState('');
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const { applyCoupon } = useCartStore();
  const { toast } = useToast();

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return;

    setIsApplyingCoupon(true);
    
    try {
      const success = await applyCoupon(couponCode);
      
      if (success) {
        showToast({
          type: 'success',
          title: 'Coupon applied',
          description: `Coupon "${couponCode}" has been applied to your order.`
        });
        setCouponCode('');
      } else {
        showToast({
          type: 'error',
          title: 'Invalid coupon',
          description: 'The coupon code you entered is not valid.'
        });
      }
    } catch (error) {
      showToast({
        type: 'error',
        title: 'Error',
        description: 'Failed to apply coupon. Please try again.'
      });
    } finally {
      setIsApplyingCoupon(false);
    }
  };

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Order Summary
      </h2>

      {/* Item Count */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">
          Items ({itemCount})
        </span>
        <span className="text-gray-900 dark:text-gray-100">
          {formatPrice(cart.subtotal)}
        </span>
      </div>

      {/* Shipping */}
      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">
          Shipping
        </span>
        <span className="text-gray-900 dark:text-gray-100">
          {cart.shipping === 0 ? 'Free' : formatPrice(cart.shipping)}
        </span>
      </div>

      {/* Tax */}
      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">
          Tax
        </span>
        <span className="text-gray-900 dark:text-gray-100">
          {formatPrice(cart.tax)}
        </span>
      </div>

      {/* Discount */}
      {cart.discount > 0 && (
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Discount
            {cart.couponCode && (
              <Badge variant="success" className="ml-2 text-xs">
                {cart.couponCode}
              </Badge>
            )}
          </span>
          <span className="text-green-600 dark:text-green-400">
            -{formatPrice(cart.discount)}
          </span>
        </div>
      )}

      {/* Coupon Code */}
      {!cart.couponCode && (
        <div className="mt-4 space-y-2">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="pl-10"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleApplyCoupon();
                  }
                }}
              />
            </div>
            <Button
              variant="outline"
              onClick={handleApplyCoupon}
              disabled={!couponCode.trim() || isApplyingCoupon}
              isLoading={isApplyingCoupon}
            >
              Apply
            </Button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Try: SAVE10, WELCOME20, or FREESHIP
          </p>
        </div>
      )}

      {/* Total */}
      <div className="mt-6 border-t border-gray-200 pt-4 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Total
          </span>
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {formatPrice(cart.total)}
          </span>
        </div>
      </div>

      {/* Free Shipping Notice */}
      {cart.shipping > 0 && cart.subtotal < 75 && (
        <div className="mt-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Add {formatPrice(75 - cart.subtotal)} more for free shipping!
          </p>
        </div>
      )}

      {/* Checkout Button */}
      {showCheckoutButton && (
        <Button
          size="lg"
          onClick={onCheckout}
          className="mt-6 w-full"
          disabled={cart.items.length === 0}
        >
          Proceed to Checkout
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </motion.div>
  );
}