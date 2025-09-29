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
      title: 'Legally Registered Business',
      description: 'Incorporated under Canada Business Corporations Act with full legal compliance and transparency.'
    },
    {
      icon: Star,
      title: 'Certified & Compliant',
      description: 'All products meet international safety and quality standards with comprehensive certifications.'
    },
    {
      icon: Truck,
      title: 'Fast U.S. Fulfillment',
      description: 'U.S. warehouse ensures 2–5 day delivery with reliable shipping partners and easy returns.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Trusted Partnerships',
      description: 'Transparent, reliable, and long-term business approach with proven track record.'
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
              <span className="gradient-text">HWinnerz</span> — Delivering Quality Products with Global Trust
            </h1>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-200 font-medium">
              Registered, Certified, and Committed to Excellence for Retailers and Customers Worldwide
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Manufacturing • Sourcing • Compliance • Global Fulfillment
              <br />
              Incorporated under Canada Business Corporations Act with U.S. fulfillment centers for reliable 2-5 day delivery.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/shop">
                <Button variant="gradient" size="lg" className="text-lg">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg">
                  Partner With Us
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
              Why Choose HWinnerz?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Your trusted partner for quality, compliance, and reliable fulfillment
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
              Featured Products / Catalog Preview
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Discover our premium product selection with verified quality and compliance
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
                View Complete Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Commitment
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              &ldquo;We ensure strict quality checks and certifications for every product, providing peace of mind 
              for both customers and retail partners. Our commitment extends beyond products to building 
              lasting relationships based on trust, transparency, and exceptional service.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Trust Badges */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Certifications & Trust Badges
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Verified compliance and quality standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {['ISO 9001', 'SGS', 'CE', 'RoHS', 'FCC', 'UL'].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Testimonials / Customer Quotes
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              What our partners and customers say about us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                &ldquo;HWinnerz products exceeded expectations — quality and fast shipping. Their legal compliance 
                and certifications gave us confidence in our partnership from day one.&rdquo;
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                — Sarah Johnson, Retail Partner
              </cite>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                &ldquo;Reliable supplier with strong certifications and easy returns. HWinnerz has become our 
                trusted partner with their transparent business approach and excellent support.&rdquo;
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                — Michael Chen, Distributor
              </cite>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works / Our Process */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              How It Works / Our Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              From concept to delivery - our proven 4-step process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Design & Sourcing', description: 'Product development and supplier qualification' },
              { step: '2', title: 'Manufacturing & QC', description: 'Production oversight and quality control' },
              { step: '3', title: 'Logistics & Fulfillment', description: 'Global shipping and inventory management' },
              { step: '4', title: 'Customer Support', description: 'Ongoing support and relationship management' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
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