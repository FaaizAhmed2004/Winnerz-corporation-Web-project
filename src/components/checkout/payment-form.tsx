'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Wallet } from 'lucide-react';
import { CustomerInfo, BillingInfo } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PaymentFormProps {
  onSubmit: (customer: CustomerInfo, billing: BillingInfo) => void;
  onBack: () => void;
  initialCustomer?: Partial<CustomerInfo>;
  initialBilling?: Partial<BillingInfo>;
}

export function PaymentForm({ onSubmit, onBack, initialCustomer, initialBilling }: PaymentFormProps) {
  const [customerData, setCustomerData] = useState<CustomerInfo>({
    firstName: initialCustomer?.firstName || '',
    lastName: initialCustomer?.lastName || '',
    email: initialCustomer?.email || '',
    phone: initialCustomer?.phone || ''
  });

  const [billingData, setBillingData] = useState<BillingInfo>({
    address: initialBilling?.address || '',
    city: initialBilling?.city || '',
    state: initialBilling?.state || '',
    zipCode: initialBilling?.zipCode || '',
    country: initialBilling?.country || 'United States',
    sameAsShipping: initialBilling?.sameAsShipping ?? true
  });

  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Customer validation
    if (!customerData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!customerData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!customerData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(customerData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Billing validation (if not same as shipping)
    if (!billingData.sameAsShipping) {
      if (!billingData.address.trim()) {
        newErrors.billingAddress = 'Billing address is required';
      }
      if (!billingData.city.trim()) {
        newErrors.billingCity = 'Billing city is required';
      }
      if (!billingData.state.trim()) {
        newErrors.billingState = 'Billing state is required';
      }
      if (!billingData.zipCode.trim()) {
        newErrors.billingZipCode = 'Billing ZIP code is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(customerData, billingData);
    }
  };

  const paymentMethods = [
    { id: 'credit_card', name: 'Credit Card', icon: CreditCard, description: 'Visa, Mastercard, American Express' },
    { id: 'paypal', name: 'PayPal', icon: Wallet, description: 'Pay with your PayPal account' },
    { id: 'apple_pay', name: 'Apple Pay', icon: Smartphone, description: 'Touch ID or Face ID' }
  ];

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Customer Information */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="First Name"
              value={customerData.firstName}
              onChange={(e) => setCustomerData(prev => ({ ...prev, firstName: e.target.value }))}
              error={errors.firstName}
            />
            <Input
              placeholder="Last Name"
              value={customerData.lastName}
              onChange={(e) => setCustomerData(prev => ({ ...prev, lastName: e.target.value }))}
              error={errors.lastName}
            />
          </div>
          <Input
            type="email"
            placeholder="Email Address"
            value={customerData.email}
            onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
            error={errors.email}
          />
          <Input
            type="tel"
            placeholder="Phone Number (Optional)"
            value={customerData.phone}
            onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>
      </div>

      {/* Billing Address */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Billing Address
        </h3>
        
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={billingData.sameAsShipping}
            onChange={(e) => setBillingData(prev => ({ ...prev, sameAsShipping: e.target.checked }))}
            className="mr-2"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Same as shipping address
          </span>
        </label>

        {!billingData.sameAsShipping && (
          <div className="grid grid-cols-1 gap-4">
            <Input
              placeholder="Billing Address"
              value={billingData.address}
              onChange={(e) => setBillingData(prev => ({ ...prev, address: e.target.value }))}
              error={errors.billingAddress}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="City"
                value={billingData.city}
                onChange={(e) => setBillingData(prev => ({ ...prev, city: e.target.value }))}
                error={errors.billingCity}
              />
              <Input
                placeholder="State"
                value={billingData.state}
                onChange={(e) => setBillingData(prev => ({ ...prev, state: e.target.value }))}
                error={errors.billingState}
              />
            </div>
            <Input
              placeholder="ZIP Code"
              value={billingData.zipCode}
              onChange={(e) => setBillingData(prev => ({ ...prev, zipCode: e.target.value }))}
              error={errors.billingZipCode}
            />
          </div>
        )}
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Payment Method
        </h3>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`flex items-center p-4 border rounded-2xl cursor-pointer transition-colors ${
                paymentMethod === method.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-300 hover:border-gray-400 dark:border-gray-600'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={paymentMethod === method.id}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <method.icon className="h-6 w-6 mr-3 text-gray-600 dark:text-gray-400" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {method.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {method.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="button" variant="outline" onClick={onBack} className="flex-1">
          Back to Shipping
        </Button>
        <Button type="submit" className="flex-1">
          Review Order
        </Button>
      </div>
    </motion.form>
  );
}