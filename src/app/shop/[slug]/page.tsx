'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Product } from '@/types';
import { ProductCarousel } from '@/components/shop/product-carousel';
import { AddToCart } from '@/components/shop/add-to-cart';
import { Button } from '@/components/ui/button';
import { useProductsStore } from '@/stores/products';
import { useToast } from '@/hooks/use-toast';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getProduct, loadProducts } = useProductsStore();
  const { toast } = useToast();

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      
      // Ensure products are loaded
      loadProducts();
      
      const resolvedParams = await params;
      
      // Small delay to ensure products are loaded
      setTimeout(() => {
        const foundProduct = getProduct(resolvedParams.slug);
        setProduct(foundProduct);
        setIsLoading(false);
        
        if (!foundProduct) {
          notFound();
        }
      }, 100);
    };

    loadProduct();
  }, [params, getProduct, loadProducts]);

  const handleShare = async () => {
    if (navigator.share && product) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href
        });
      } catch {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        toast({
          title: 'Link copied',
          description: 'Product link copied to clipboard.'
        });
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link copied',
        description: 'Product link copied to clipboard.'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="mb-6 h-6 w-32 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="aspect-square rounded-2xl bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-4">
              <div className="h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-12 w-32 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <Link
          href="/shop"
          className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ProductCarousel images={product.images} productName={product.name} />
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {product.name}
              </h1>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="flex-shrink-0"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Section */}
          <AddToCart product={product} />
        </motion.div>
      </div>

      {/* Additional Product Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 space-y-8"
      >
        <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Product Details
          </h2>
          <div className="mt-4 prose prose-gray max-w-none dark:prose-invert">
            <p>{product.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}