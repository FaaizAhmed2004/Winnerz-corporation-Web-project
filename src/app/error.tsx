'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 text-center">
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-6"
            >
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Something went wrong!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We encountered an unexpected error. This has been logged and we'll look into it.
              </p>
              
              {process.env.NODE_ENV === 'development' && (
                <details className="text-left bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm">
                  <summary className="cursor-pointer font-medium text-gray-900 dark:text-white mb-2">
                    Error Details (Development)
                  </summary>
                  <pre className="text-red-600 dark:text-red-400 whitespace-pre-wrap break-words">
                    {error.message}
                  </pre>
                  {error.digest && (
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Error ID: {error.digest}
                    </p>
                  )}
                </details>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <Button 
                onClick={reset}
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

            {/* Support Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                If this problem persists, please contact our support team:
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a 
                  href="mailto:support@winnerzmarketing.com" 
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center gap-2"
                >
                  <Bug className="w-4 h-4" />
                  Report Bug
                </a>
                <a 
                  href="/contact" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Contact Support
                </a>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}