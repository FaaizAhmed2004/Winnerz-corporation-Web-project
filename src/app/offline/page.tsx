'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { WifiOff, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function OfflinePage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 text-center">
            {/* Offline Icon */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-6"
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <WifiOff className="w-8 h-8 text-gray-600 dark:text-gray-400" />
              </div>
            </motion.div>

            {/* Offline Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                You're Offline
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                It looks like you&apos;ve lost your internet connection. 
                Please check your network and try again.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <Button 
                onClick={handleRetry}
                className="w-full flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>
              
              <Link href="/" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Home className="w-4 h-4" />
                  Go Home
                </Button>
              </Link>
            </motion.div>

            {/* Offline Tips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Troubleshooting tips:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Check your Wi-Fi connection</li>
                <li>• Try refreshing the page</li>
                <li>• Check if other websites work</li>
                <li>• Contact your internet provider</li>
              </ul>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}