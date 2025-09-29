'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, Download, FileText, ArrowLeft, Printer } from 'lucide-react';
import { Order } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useOrdersStore } from '@/stores/orders';
import { useToast } from '@/hooks/use-toast';
import { formatPrice, formatDate } from '@/lib/utils';
import { generateOrderPDF, generateOrderJSON } from '@/lib/pdf-generator';

interface OrderConfirmationPageProps {
  params: Promise<{
    orderId: string;
  }>;
}

export default function OrderConfirmationPage({ params }: OrderConfirmationPageProps) {
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getOrder, loadOrders } = useOrdersStore();
  const { toast } = useToast();

  useEffect(() => {
    const loadOrder = async () => {
      setIsLoading(true);
      await loadOrders();
      
      const resolvedParams = await params;
      const foundOrder = getOrder(resolvedParams.orderId);
      setOrder(foundOrder);
      setIsLoading(false);
      
      if (!foundOrder) {
        notFound();
      }
    };

    loadOrder();
  }, [params, getOrder, loadOrders]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    if (order) {
      generateOrderPDF(order);
      toast({
        title: 'PDF Downloaded',
        description: 'Your order confirmation has been downloaded as PDF.'
      });
    }
  };

  const handleDownloadJSON = () => {
    if (order) {
      generateOrderJSON(order);
      toast({
        title: 'JSON Downloaded',
        description: 'Your order data has been downloaded as JSON.'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse max-w-4xl mx-auto">
          <div className="h-8 w-64 bg-gray-200 rounded mb-8 dark:bg-gray-700" />
          <div className="space-y-6">
            <div className="h-32 bg-gray-200 rounded-2xl dark:bg-gray-700" />
            <div className="h-48 bg-gray-200 rounded-2xl dark:bg-gray-700" />
            <div className="h-32 bg-gray-200 rounded-2xl dark:bg-gray-700" />
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return notFound();
  }

  const statusColors = {
    pending: 'warning',
    processing: 'default',
    shipped: 'default',
    delivered: 'success',
    cancelled: 'error',
    refunded: 'error'
  } as const;

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/orders"
            className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Order Confirmed!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for your purchase. Your order has been received.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 print:hidden">
            <Button onClick={handlePrint} variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button onClick={handleDownloadPDF} variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button onClick={handleDownloadJSON} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download JSON
            </Button>
          </div>
        </motion.div>

        {/* Order Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Order Information
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Order Number:</span>
                <span className="font-medium">{order.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Date:</span>
                <span>{formatDate(order.createdAt)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                <Badge variant={statusColors[order.status]}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total:</span>
                <span className="font-semibold text-lg">{formatPrice(order.totals.total)}</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Shipping Address
            </h2>
            <div className="text-sm space-y-1">
              <p className="font-medium">{order.customer.firstName} {order.customer.lastName}</p>
              <p>{order.shipping.address}</p>
              <p>{order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}</p>
              <p>{order.shipping.country}</p>
            </div>
          </div>
        </motion.div>

        {/* Order Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-gray-200 p-6 mb-8 dark:border-gray-700"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Order Items
          </h2>
          
          <div className="space-y-4">
            {order.items.map((item) => {
              const primaryImage = item.product.images.find(img => img.isPrimary) || item.product.images[0];
              return (
                <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                    <Image
                      src={primaryImage?.url || '/placeholder.jpg'}
                      alt={primaryImage?.alt || item.product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {item.product.name}
                    </h3>
                    {item.selectedVariants && Object.keys(item.selectedVariants).length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {Object.entries(item.selectedVariants).map(([key, value]) => (
                          <Badge key={key} variant="secondary" className="text-xs">
                            {value}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatPrice(item.price)} each
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Order Summary
          </h2>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
              <span>{formatPrice(order.totals.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Shipping:</span>
              <span>{order.totals.shipping === 0 ? 'Free' : formatPrice(order.totals.shipping)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Tax:</span>
              <span>{formatPrice(order.totals.tax)}</span>
            </div>
            {order.totals.discount > 0 && (
              <div className="flex justify-between text-sm text-green-600 dark:text-green-400">
                <span>Discount:</span>
                <span>-{formatPrice(order.totals.discount)}</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-3 dark:border-gray-700">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>{formatPrice(order.totals.total)}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center print:hidden"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We will send you shipping updates at {order.customer.email}
          </p>
          <Link href="/shop">
            <Button>
              Continue Shopping
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}