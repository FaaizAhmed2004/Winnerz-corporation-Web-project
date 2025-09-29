'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Product, ProductVariant } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/stores/cart';
import { useToast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/utils';

interface AddToCartProps {
  product: Product;
}

export function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const handleVariantChange = (variantId: string, optionValue: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [variantId]: optionValue
    }));
  };

  const calculatePrice = () => {
    let price = product.price;
    
    if (product.variants) {
      product.variants.forEach(variant => {
        const selectedOption = selectedVariants[variant.id];
        if (selectedOption) {
          price += variant.priceModifier;
        }
      });
    }
    
    return price;
  };

  const isVariantSelectionComplete = () => {
    if (!product.variants) return true;
    
    return product.variants.every(variant => 
      selectedVariants[variant.id] !== undefined
    );
  };

  const getSelectedVariantStock = () => {
    if (!product.variants) return product.inStock;
    
    return product.variants.every(variant => {
      const selectedOptionId = selectedVariants[variant.id];
      if (!selectedOptionId) return true;
      
      const option = variant.options.find(opt => opt.value === selectedOptionId);
      return option?.inStock ?? true;
    });
  };

  const handleAddToCart = () => {
    if (!isVariantSelectionComplete()) {
      toast({
        title: 'Please select all options',
        description: 'You need to select all product options before adding to cart.',
        variant: 'warning'
      });
      return;
    }

    if (!getSelectedVariantStock()) {
      toast({
        title: 'Out of stock',
        description: 'The selected variant is currently out of stock.',
        variant: 'destructive'
      });
      return;
    }

    addItem(product, quantity, selectedVariants);
    toast({
      title: 'Added to cart',
      description: `${quantity} × ${product.name} added to your cart.`,
      variant: 'success'
    });
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const finalPrice = calculatePrice();
  const isInStock = product.inStock && getSelectedVariantStock();
  const canAddToCart = isInStock && isVariantSelectionComplete();

  return (
    <div className="space-y-6">
      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {formatPrice(finalPrice)}
          </span>
          {finalPrice !== product.price && (
            <span className="text-lg text-gray-500 line-through dark:text-gray-400">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
        {!isInStock && (
          <Badge variant="error">Out of Stock</Badge>
        )}
      </div>

      {/* Variants */}
      {product.variants && product.variants.map((variant) => (
        <div key={variant.id} className="space-y-3">
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            {variant.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {variant.options.map((option) => {
              const isSelected = selectedVariants[variant.id] === option.value;
              const isOptionInStock = option.inStock;
              
              return (
                <Button
                  key={option.id}
                  variant={isSelected ? 'primary' : 'outline'}
                  size="sm"
                  disabled={!isOptionInStock}
                  onClick={() => handleVariantChange(variant.id, option.value)}
                  className={`${!isOptionInStock ? 'opacity-50' : ''}`}
                >
                  {option.name}
                  {!isOptionInStock && (
                    <span className="ml-1 text-xs">(Out of Stock)</span>
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Quantity Selector */}
      <div className="space-y-3">
        <h3 className="font-medium text-gray-900 dark:text-gray-100">
          Quantity
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-2xl border border-gray-300 dark:border-gray-600">
            <Button
              variant="ghost"
              size="sm"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="h-10 w-10 p-0 rounded-l-2xl rounded-r-none"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="flex h-10 w-16 items-center justify-center text-sm font-medium">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={incrementQuantity}
              className="h-10 w-10 p-0 rounded-r-2xl rounded-l-none"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Total: {formatPrice(finalPrice * quantity)}
          </span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <motion.div whileTap={{ scale: 0.98 }}>
        <Button
          size="lg"
          onClick={handleAddToCart}
          disabled={!canAddToCart}
          className="w-full"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          {!isInStock ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </motion.div>

      {/* Product Info */}
      <div className="space-y-4 border-t border-gray-200 pt-6 dark:border-gray-700">
        <div>
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            Description
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {product.description}
          </p>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            Category
          </h3>
          <Badge variant="secondary" className="mt-2">
            {product.category}
          </Badge>
        </div>

        {product.tags.length > 0 && (
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Tags
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}