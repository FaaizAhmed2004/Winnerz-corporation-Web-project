'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, Search, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 text-center">
            {/* 404 Animation */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-6"
            >
              <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                404
              </div>
              <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Page Not Found
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Sorry, we couldn't find the page you&apos;re looking for. 
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <Link href="/" className="w-full">
                <Button className="w-full flex items-center justify-center gap-2">
                  <Home className="w-4 h-4" />
                  Go Home
                </Button>
              </Link>
              
              <Link href="/shop" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Browse Products
                </Button>
              </Link>
              
              <Button 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="w-full flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
            </motion.div>

            {/* Help Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Need help? Try these links:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link 
                  href="/contact" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Contact Support
                </Link>
                <Link 
                  href="/about" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  About Us
                </Link>
                <Link 
                  href="/legal" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Help Center
                </Link>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}