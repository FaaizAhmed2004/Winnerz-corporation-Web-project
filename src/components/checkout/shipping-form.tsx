'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShippingInfo } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ShippingFormProps {
  onSubmit: (data: ShippingInfo) => void;
  onBack?: () => void;
  initialData?: Partial<ShippingInfo>;
}

export function ShippingForm({ onSubmit, onBack, initialData }: ShippingFormProps) {
  const [formData, setFormData] = useState<ShippingInfo>({
    address: initialData?.address || '',
    city: initialData?.city || '',
    state: initialData?.state || '',
    zipCode: initialData?.zipCode || '',
    country: initialData?.country || 'United States',
    method: initialData?.method || 'standard',
    cost: initialData?.cost || 9.99
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Invalid ZIP code format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof ShippingInfo, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const shippingMethods = [
    { id: 'standard', name: 'Standard Shipping', cost: 9.99, time: '5-7 business days' },
    { id: 'express', name: 'Express Shipping', cost: 19.99, time: '2-3 business days' },
    { id: 'overnight', name: 'Overnight Shipping', cost: 39.99, time: '1 business day' }
  ];

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Shipping Information
        </h2>
        
        <div className="grid grid-cols-1 gap-4">
          <Input
            placeholder="Street Address"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            error={errors.address}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              error={errors.city}
            />
            <Input
              placeholder="State"
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              error={errors.state}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
              error={errors.zipCode}
            />
            <Input
              placeholder="Country"
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              disabled
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Shipping Method
        </h3>
        <div className="space-y-3">
          {shippingMethods.map((method) => (
            <label
              key={method.id}
              className={`flex items-center justify-between p-4 border rounded-2xl cursor-pointer transition-colors ${
                formData.method === method.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-300 hover:border-gray-400 dark:border-gray-600'
              }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name="shippingMethod"
                  value={method.id}
                  checked={formData.method === method.id}
                  onChange={(e) => {
                    handleInputChange('method', e.target.value);
                    handleInputChange('cost', method.cost.toString());
                  }}
                  className="mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {method.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {method.time}
                  </p>
                </div>
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                ${method.cost.toFixed(2)}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        {onBack && (
          <Button type="button" variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
        )}
        <Button type="submit" className="flex-1">
          Continue to Payment
        </Button>
      </div>
    </motion.form>
  );
}