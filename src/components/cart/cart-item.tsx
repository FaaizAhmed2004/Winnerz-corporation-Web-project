'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/stores/cart';
import { useToast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/utils';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const { updateQuantity, removeItem } = useCartStore();
  const { toast } = useToast();

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setIsUpdating(true);
    updateQuantity(item.id, newQuantity);
    
    // Small delay for visual feedback
    setTimeout(() => setIsUpdating(false), 200);
  };

  const handleRemove = () => {
    removeItem(item.id);
    showToast({
      type: 'success',
      title: 'Item removed',
      description: `${item.product.name} has been removed from your cart.`
    });
  };

  const primaryImage = item.product.images.find(img => img.isPrimary) || item.product.images[0];
  const itemTotal = item.product.price * item.quantity;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
    >
      {/* Product Image */}
      <Link href={`/shop/${item.product.slug}`} className="flex-shrink-0">
        <div className="relative h-20 w-20 overflow-hidden rounded-xl">
          <Image
            src={primaryImage?.url || '/placeholder.jpg'}
            alt={primaryImage?.alt || item.product.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Link
            href={`/shop/${item.product.slug}`}
            className="font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
          >
            {item.product.name}
          </Link>
          
          {/* Variants */}
          {item.selectedVariants && Object.keys(item.selectedVariants).length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {Object.entries(item.selectedVariants).map(([key, value]) => (
                <Badge key={key} variant="secondary" className="text-xs">
                  {value}
                </Badge>
              ))}
            </div>
          )}
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {formatPrice(item.product.price)} each
          </p>
        </div>

        {/* Quantity and Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1 || isUpdating}
              className="h-8 w-8 p-0"
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="w-8 text-center text-sm font-medium">
              {item.quantity}
            </span>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(item.quantity + 1)}
              disabled={isUpdating}
              className="h-8 w-8 p-0"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {formatPrice(itemTotal)}
            </span>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}