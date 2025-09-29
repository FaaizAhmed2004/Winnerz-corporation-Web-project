'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProductsStore } from '@/stores/products';
import { categories } from '@/data/products';

export function ProductFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const { filters, setFilters } = useProductsStore();

  const priceRanges = [
    { label: 'Under $50', value: [0, 50] as [number, number] },
    { label: '$50 - $100', value: [50, 100] as [number, number] },
    { label: '$100 - $200', value: [100, 200] as [number, number] },
    { label: '$200+', value: [200, 1000] as [number, number] }
  ];

  const handleCategoryChange = (category: string) => {
    setFilters({ category: category === 'All' ? undefined : category });
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    setFilters({ 
      priceRange: filters.priceRange && 
                  filters.priceRange[0] === range[0] && 
                  filters.priceRange[1] === range[1] 
                  ? undefined 
                  : range 
    });
  };

  const handleInStockChange = () => {
    setFilters({ inStock: filters.inStock ? undefined : true });
  };

  const handleFeaturedChange = () => {
    setFilters({ featured: filters.featured ? undefined : true });
  };

  const clearFilters = () => {
    setFilters({});
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="relative">
      {/* Filter Toggle Button */}
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Filter className="mr-2 h-4 w-4" />
        Filters
        {activeFiltersCount > 0 && (
          <Badge variant="default" className="ml-2 h-5 w-5 p-0 text-xs">
            {activeFiltersCount}
          </Badge>
        )}
      </Button>

      {/* Filter Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 top-full z-50 mt-2 w-80 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Filters
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h4 className="mb-3 font-medium text-gray-900 dark:text-gray-100">
                Category
              </h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      (category === 'All' && !filters.category) || 
                      filters.category === category
                        ? 'primary'
                        : 'outline'
                    }
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="mb-3 font-medium text-gray-900 dark:text-gray-100">
                Price Range
              </h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <Button
                    key={range.label}
                    variant={
                      filters.priceRange &&
                      filters.priceRange[0] === range.value[0] &&
                      filters.priceRange[1] === range.value[1]
                        ? 'primary'
                        : 'outline'
                    }
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => handlePriceRangeChange(range.value)}
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Additional Filters */}
            <div>
              <h4 className="mb-3 font-medium text-gray-900 dark:text-gray-100">
                Availability
              </h4>
              <div className="space-y-2">
                <Button
                  variant={filters.inStock ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full justify-start"
                  onClick={handleInStockChange}
                >
                  In Stock Only
                </Button>
                <Button
                  variant={filters.featured ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full justify-start"
                  onClick={handleFeaturedChange}
                >
                  Featured Products
                </Button>
              </div>
            </div>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="w-full"
              >
                Clear All Filters
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}