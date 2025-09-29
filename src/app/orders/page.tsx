'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useOrdersStore } from '@/stores/orders';
import { useProductsStore } from '@/stores/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

export default function OrdersPage() {
  const { orders, loadOrders } = useOrdersStore();
  const { products } = useProductsStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await loadOrders();
      setIsLoading(false);
    };
    loadData();
  }, [loadOrders]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
            <Link href="/shop">
              <Button>Start Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm border"
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                    <p className="text-sm text-gray-500">
                      Placed on {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge 
                    variant={
                      order.status === 'delivered' ? 'default' :
                      order.status === 'shipped' ? 'secondary' :
                      order.status === 'processing' ? 'outline' : 'destructive'
                    }
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item) => {
                    const product = products.find(p => p.id === item.productId);
                    return (
                      <div key={item.productId} className="flex items-center space-x-4">
                        {product && (
                          <div className="relative w-16 h-16 bg-gray-100 rounded">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-medium">{product?.name || 'Product'}</h4>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.quantity} × {formatPrice(item.price)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-lg">
                        {formatPrice(order.total)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div className="text-sm text-gray-500">
                      <p>Shipping to: {order.shippingAddress.name}</p>
                      <p>{order.shippingAddress.address}, {order.shippingAddress.city}</p>
                    </div>
                    <Link href={`/order-confirmation/${order.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}