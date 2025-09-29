'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProductGrid } from '@/components/shop/product-grid';
import { ProductFilters } from '@/components/shop/product-filters';
import { useProductsStore } from '@/stores/products';

export default function ShopPage() {
  const { filteredProducts, isLoading, loadProducts, searchQuery } = useProductsStore();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Shop All Products
        </h1>
        {searchQuery && (
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Showing results for "{searchQuery}"
          </p>
        )}
      </motion.div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ProductFilters />
        
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {isLoading ? (
            'Loading products...'
          ) : (
            `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} found`
          )}
        </div>
      </div>

      <ProductGrid products={filteredProducts} isLoading={isLoading} />
    </div>
  );
}