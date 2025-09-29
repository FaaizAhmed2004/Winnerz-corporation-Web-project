'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { Cart, CustomerInfo, ShippingInfo, BillingInfo } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';

interface OrderReviewProps {
  cart: Cart;
  customer: CustomerInfo;
  shipping: ShippingInfo;
  billing: BillingInfo;
  onSubmit: () => Promise<void>;
  onBack: () => void;
}

export function OrderReview({ cart, customer, shipping, billing, onSubmit, onBack }: OrderReviewProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await onSubmit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        Review Your Order
      </h2>

      {/* Order Items */}
      <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Order Items
        </h3>
        <div className="space-y-4">
          {cart.items.map((item) => {
            const primaryImage = item.product.images.find(img => img.isPrimary) || item.product.images[0];
            return (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                  <Image
                    src={primaryImage?.url || '/placeholder.jpg'}
                    alt={primaryImage?.alt || item.product.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">
                    {item.product.name}
                  </h4>
                  {item.selectedVariants && Object.keys(item.selectedVariants).length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {Object.entries(item.selectedVariants).map(([key, value]) => (
                        <Badge key={key} variant="secondary" className="text-xs">
                          {value}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Qty: {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Customer Information */}
      <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Contact Information
        </h3>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Name:</span> {customer.firstName} {customer.lastName}</p>
          <p><span className="font-medium">Email:</span> {customer.email}</p>
          {customer.phone && (
            <p><span className="font-medium">Phone:</span> {customer.phone}</p>
          )}
        </div>
      </div>

      {/* Shipping Information */}
      <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Shipping Information
        </h3>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Address:</span> {shipping.address}</p>
          <p><span className="font-medium">City:</span> {shipping.city}, {shipping.state} {shipping.zipCode}</p>
          <p><span className="font-medium">Country:</span> {shipping.country}</p>
          <p><span className="font-medium">Method:</span> {shipping.method} ({formatPrice(shipping.cost)})</p>
        </div>
      </div>

      {/* Billing Information */}
      <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Billing Information
        </h3>
        {billing.sameAsShipping ? (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Same as shipping address
          </p>
        ) : (
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Address:</span> {billing.address}</p>
            <p><span className="font-medium">City:</span> {billing.city}, {billing.state} {billing.zipCode}</p>
            <p><span className="font-medium">Country:</span> {billing.country}</p>
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Order Summary
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>{formatPrice(cart.subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>{cart.shipping === 0 ? 'Free' : formatPrice(cart.shipping)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax:</span>
            <span>{formatPrice(cart.tax)}</span>
          </div>
          {cart.discount > 0 && (
            <div className="flex justify-between text-green-600 dark:text-green-400">
              <span>Discount:</span>
              <span>-{formatPrice(cart.discount)}</span>
            </div>
          )}
          <div className="border-t border-gray-200 pt-2 dark:border-gray-700">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>{formatPrice(cart.total)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="button" variant="outline" onClick={onBack} className="flex-1" disabled={isSubmitting}>
          Back to Payment
        </Button>
        <Button onClick={handleSubmit} className="flex-1" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Place Order'
          )}
        </Button>
      </div>
    </motion.div>
  );
}