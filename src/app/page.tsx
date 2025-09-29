'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Truck, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/shop/product-grid';
import { useProductsStore } from '@/stores/products';

export default function HomePage() {
  const { products, loadProducts, isLoading } = useProductsStore();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  const features = [
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your data is protected with industry-standard security measures.'
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Free shipping on orders over $75. Express delivery available.'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our customer service team is here to help you anytime.'
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: 'We stand behind every product with our satisfaction guarantee.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-primary/10 dark:via-accent/10 dark:to-primary/20">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-100">
              Welcome to{' '}
              <span className="gradient-text">Winnerz</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover premium products and exceptional quality at unbeatable prices. 
              Your satisfaction is our commitment.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/shop">
                <Button variant="gradient" size="lg" className="text-lg">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Why Choose Winnerz?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We&apos;re committed to providing you with the best shopping experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20">
                  <feature.icon className="h-8 w-8 text-primary dark:text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Discover our most popular and highly-rated products
            </p>
          </motion.div>

          <ProductGrid products={featuredProducts} isLoading={isLoading} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/shop">
              <Button size="lg" variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white">
              Ready to Start Shopping?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Join thousands of satisfied customers and discover quality products today.
            </p>
            <div className="mt-8">
              <Link href="/shop">
                <Button size="lg" variant="secondary" className="text-lg">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}