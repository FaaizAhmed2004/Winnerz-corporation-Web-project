'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/stores/cart';
import { useToast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product, 1);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
      variant: 'success'
    });
  };

  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <Link href={`/shop/${product.slug}`}>
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg dark:bg-gray-800">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={primaryImage?.url || '/placeholder.jpg'}
              alt={primaryImage?.alt || product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            
            {/* Badges */}
            <div className="absolute left-3 top-3 flex flex-col gap-2">
              {product.featured && (
                <Badge variant="success">Featured</Badge>
              )}
              {!product.inStock && (
                <Badge variant="error">Out of Stock</Badge>
              )}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              className="absolute bottom-3 right-3 flex gap-2"
            >
              <Button
                size="sm"
                variant="secondary"
                className="h-10 w-10 p-0 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Heart className="h-4 w-4" />
              </Button>
              {product.inStock && (
                <Button
                  size="sm"
                  className="h-10 w-10 p-0 shadow-lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              )}
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <div className="mb-2">
              <h3 className="font-medium text-gray-900 line-clamp-2 dark:text-gray-100">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                {product.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {product.category}
                </span>
              </div>

              {product.variants && product.variants.length > 0 && (
                <div className="flex gap-1">
                  {product.variants[0].options.slice(0, 3).map((option) => (
                    <div
                      key={option.id}
                      className="h-4 w-4 rounded-full border border-gray-300 dark:border-gray-600"
                      style={{
                        backgroundColor: option.value === 'white' ? '#ffffff' : 
                                       option.value === 'black' ? '#000000' :
                                       option.value === 'navy' ? '#1e3a8a' :
                                       option.value === 'silver' ? '#c0c0c0' :
                                       option.value === 'gold' ? '#ffd700' : '#e5e7eb'
                      }}
                    />
                  ))}
                  {product.variants[0].options.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      +{product.variants[0].options.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}