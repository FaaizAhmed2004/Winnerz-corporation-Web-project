'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Order, OrderStatus } from '@/types';
import { useOrdersStore } from '@/stores/orders';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  X, 
  Package, 
  User, 
  MapPin, 
  CreditCard, 
  Calendar,
  Download,
  RefreshCw,
  Truck
} from 'lucide-react';

interface OrderDetailsModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

export function OrderDetailsModal({ order, isOpen, onClose }: OrderDetailsModalProps) {
  const { updateOrderStatus } = useOrdersStore();
  const [isUpdating, setIsUpdating] = useState(false);

  if (!order) return null;

  const handleStatusUpdate = async (newStatus: OrderStatus) => {
    setIsUpdating(true);
    try {
      updateOrderStatus(order.id, newStatus);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PENDING:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case OrderStatus.PROCESSING:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case OrderStatus.SHIPPED:
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case OrderStatus.DELIVERED:
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case OrderStatus.CANCELLED:
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case OrderStatus.REFUNDED:
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getNextStatusOptions = (currentStatus: OrderStatus): OrderStatus[] => {
    switch (currentStatus) {
      case OrderStatus.PENDING:
        return [OrderStatus.PROCESSING, OrderStatus.CANCELLED];
      case OrderStatus.PROCESSING:
        return [OrderStatus.SHIPPED, OrderStatus.CANCELLED];
      case OrderStatus.SHIPPED:
        return [OrderStatus.DELIVERED];
      case OrderStatus.DELIVERED:
        return [OrderStatus.REFUNDED];
      case OrderStatus.CANCELLED:
        return [];
      case OrderStatus.REFUNDED:
        return [];
      default:
        return [];
    }
  };

  const downloadOrderDetails = () => {
    const orderData = {
      ...order,
      exportedAt: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(orderData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `order-${order.orderNumber}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Order #{order.orderNumber}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Placed on {new Date(order.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={downloadOrderDetails}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Order Status
                </h3>
                <Badge className={getStatusColor(order.status)}>
                  {order.status}
                </Badge>
              </div>
              
              {getNextStatusOptions(order.status).length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Update order status:
                  </p>
                  <div className="flex gap-2">
                    {getNextStatusOptions(order.status).map((status) => (
                      <Button
                        key={status}
                        variant="outline"
                        size="sm"
                        onClick={() => handleStatusUpdate(status)}
                        disabled={isUpdating}
                        className="flex items-center gap-2"
                      >
                        {isUpdating ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : status === OrderStatus.SHIPPED ? (
                          <Truck className="w-4 h-4" />
                        ) : (
                          <Package className="w-4 h-4" />
                        )}
                        Mark as {status}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Order Items */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Order Items ({order.items.length})
              </h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <img
                      src={item.product.images[0]?.url || '/placeholder-product.jpg'}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {item.product.name}
                      </h4>
                      {item.selectedVariants && Object.keys(item.selectedVariants).length > 0 && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {Object.entries(item.selectedVariants).map(([key, value]) => 
                            `${key}: ${value}`
                          ).join(', ')}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Customer Information */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Customer
              </h3>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-gray-900 dark:text-white">
                  {order.customer.firstName} {order.customer.lastName}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {order.customer.email}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {order.customer.phone}
                </p>
              </div>
            </Card>

            {/* Shipping Address */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Shipping Address
              </h3>
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <p>{order.shipping.address}</p>
                {order.shipping.address2 && <p>{order.shipping.address2}</p>}
                <p>{order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}</p>
                <p>{order.shipping.country}</p>
              </div>
            </Card>

            {/* Payment Information */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  Method: {order.payment.method}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Status: <span className="font-medium text-green-600">Paid</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Transaction: {order.payment.transactionId}
                </p>
              </div>
            </Card>

            {/* Order Summary */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Order Summary
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                  <span className="text-gray-900 dark:text-white">${order.totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shipping:</span>
                  <span className="text-gray-900 dark:text-white">${order.totals.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax:</span>
                  <span className="text-gray-900 dark:text-white">${order.totals.tax.toFixed(2)}</span>
                </div>
                {order.totals.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount:</span>
                    <span>-${order.totals.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                    <span>Total:</span>
                    <span>${order.totals.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Modal>
  );
}