'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { CustomerInfo, ShippingInfo, BillingInfo } from '@/types';
import { CheckoutStepper } from '@/components/checkout/checkout-stepper';
import { ShippingForm } from '@/components/checkout/shipping-form';
import { PaymentForm } from '@/components/checkout/payment-form';
import { OrderReview } from '@/components/checkout/order-review';
import { useCartStore } from '@/stores/cart';
import { useOrdersStore } from '@/stores/orders';
import { useToast } from '@/hooks/use-toast';

const steps = [
  { id: 'shipping', title: 'Shipping', description: 'Delivery information' },
  { id: 'payment', title: 'Payment', description: 'Payment & billing' },
  { id: 'review', title: 'Review', description: 'Review your order' }
];

export default function CheckoutPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [shippingData, setShippingData] = useState<ShippingInfo | null>(null);
  const [customerData, setCustomerData] = useState<CustomerInfo | null>(null);
  const [billingData, setBillingData] = useState<BillingInfo | null>(null);
  
  const { cart, loadCart, clearCart } = useCartStore();
  const { createOrder } = useOrdersStore();
  const { toast } = useToast();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  // Redirect if cart is empty
  useEffect(() => {
    if (cart && cart.items.length === 0) {
      router.push('/cart');
    }
  }, [cart, router]);

  const handleShippingSubmit = (data: ShippingInfo) => {
    setShippingData(data);
    setCurrentStep(1);
  };

  const handlePaymentSubmit = (customer: CustomerInfo, billing: BillingInfo) => {
    setCustomerData(customer);
    setBillingData(billing);
    setCurrentStep(2);
  };

  const handleOrderSubmit = async () => {
    if (!cart || !shippingData || !customerData || !billingData) {
      showToast({
        type: 'error',
        title: 'Missing information',
        description: 'Please complete all checkout steps.'
      });
      return;
    }

    try {
      const order = await createOrder({
        cart,
        customer: customerData,
        shipping: shippingData,
        billing: billingData
      });

      clearCart();
      showToast({
        type: 'success',
        title: 'Order placed successfully!',
        description: `Order #${order.orderNumber} has been created.`
      });

      router.push(`/order-confirmation/${order.id}`);
    } catch (error) {
      showToast({
        type: 'error',
        title: 'Payment failed',
        description: error instanceof Error ? error.message : 'Please try again.'
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
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
            Add some items to your cart before checking out.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Checkout
        </h1>

        <CheckoutStepper steps={steps} currentStep={currentStep} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {currentStep === 0 && (
              <ShippingForm
                onSubmit={handleShippingSubmit}
                initialData={shippingData || undefined}
              />
            )}

            {currentStep === 1 && (
              <PaymentForm
                onSubmit={handlePaymentSubmit}
                onBack={handleBack}
                initialCustomer={customerData || undefined}
                initialBilling={billingData || undefined}
              />
            )}

            {currentStep === 2 && shippingData && customerData && billingData && (
              <OrderReview
                cart={cart}
                customer={customerData}
                shipping={shippingData}
                billing={billingData}
                onSubmit={handleOrderSubmit}
                onBack={handleBack}
              />
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Order Summary
              </h3>
              
              <div className="space-y-3 mb-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      {item.quantity}× {item.product.name}
                    </span>
                    <span className="text-gray-900 dark:text-gray-100">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm border-t border-gray-200 pt-4 dark:border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                  <span className="text-gray-900 dark:text-gray-100">${cart.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shipping:</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {cart.shipping === 0 ? 'Free' : `$${cart.shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax:</span>
                  <span className="text-gray-900 dark:text-gray-100">${cart.tax.toFixed(2)}</span>
                </div>
                {cart.discount > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Discount:</span>
                    <span>-${cart.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2 dark:border-gray-700">
                  <span>Total:</span>
                  <span>${cart.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}