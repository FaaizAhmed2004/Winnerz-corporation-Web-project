'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useOrdersStore } from '@/stores/orders';
import { OrderStatus } from '@/types';
import { Card } from '@/components/ui/card';
import { 
  ShoppingCart, 
  DollarSign, 
  Package, 
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

export function AdminStats() {
  const { orders } = useOrdersStore();

  const stats = useMemo(() => {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.totals.total, 0);
    const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
    
    const statusCounts = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {} as Record<OrderStatus, number>);

    const pendingOrders = statusCounts[OrderStatus.PENDING] || 0;
    const processingOrders = statusCounts[OrderStatus.PROCESSING] || 0;
    const shippedOrders = statusCounts[OrderStatus.SHIPPED] || 0;
    const deliveredOrders = statusCounts[OrderStatus.DELIVERED] || 0;
    const cancelledOrders = statusCounts[OrderStatus.CANCELLED] || 0;
    const refundedOrders = statusCounts[OrderStatus.REFUNDED] || 0;

    const completedOrders = deliveredOrders;
    const activeOrders = pendingOrders + processingOrders + shippedOrders;
    
    // Calculate recent orders (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentOrders = orders.filter(order => 
      new Date(order.createdAt) >= sevenDaysAgo
    ).length;

    // Calculate unique customers
    const uniqueCustomers = new Set(orders.map(order => order.customer.email)).size;

    return {
      totalOrders,
      totalRevenue,
      averageOrderValue,
      pendingOrders,
      processingOrders,
      shippedOrders,
      deliveredOrders,
      cancelledOrders,
      refundedOrders,
      completedOrders,
      activeOrders,
      recentOrders,
      uniqueCustomers,
      statusCounts
    };
  }, [orders]);

  const statCards = [
    {
      title: 'Total Orders',
      value: stats.totalOrders.toLocaleString(),
      icon: ShoppingCart,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      change: `+${stats.recentOrders} this week`
    },
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      icon: DollarSign,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900',
      change: `$${stats.averageOrderValue.toFixed(2)} avg order`
    },
    {
      title: 'Active Orders',
      value: stats.activeOrders.toLocaleString(),
      icon: Clock,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
      change: 'Pending + Processing + Shipped'
    },
    {
      title: 'Completed Orders',
      value: stats.completedOrders.toLocaleString(),
      icon: CheckCircle,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900',
      change: `${stats.totalOrders > 0 ? ((stats.completedOrders / stats.totalOrders) * 100).toFixed(1) : 0}% completion rate`
    },
    {
      title: 'Unique Customers',
      value: stats.uniqueCustomers.toLocaleString(),
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
      change: `${stats.totalOrders > 0 ? (stats.totalOrders / stats.uniqueCustomers).toFixed(1) : 0} orders per customer`
    },
    {
      title: 'Cancelled/Refunded',
      value: (stats.cancelledOrders + stats.refundedOrders).toLocaleString(),
      icon: XCircle,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900',
      change: `${stats.totalOrders > 0 ? (((stats.cancelledOrders + stats.refundedOrders) / stats.totalOrders) * 100).toFixed(1) : 0}% of total`
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Key metrics and order statistics
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Order Status Breakdown */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Order Status Breakdown
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(stats.statusCounts).map(([status, count]) => {
            const percentage = stats.totalOrders > 0 ? (count / stats.totalOrders) * 100 : 0;
            
            const statusConfig = {
              [OrderStatus.PENDING]: { color: 'bg-yellow-500', label: 'Pending' },
              [OrderStatus.PROCESSING]: { color: 'bg-blue-500', label: 'Processing' },
              [OrderStatus.SHIPPED]: { color: 'bg-indigo-500', label: 'Shipped' },
              [OrderStatus.DELIVERED]: { color: 'bg-green-500', label: 'Delivered' },
              [OrderStatus.CANCELLED]: { color: 'bg-red-500', label: 'Cancelled' },
              [OrderStatus.REFUNDED]: { color: 'bg-purple-500', label: 'Refunded' }
            };

            const config = statusConfig[status as OrderStatus];
            
            return (
              <motion.div
                key={status}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-12 h-12 rounded-full ${config?.color} flex items-center justify-center text-white font-bold`}>
                    {count}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {config?.label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {percentage.toFixed(1)}%
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>

      {/* Recent Activity */}
      {stats.recentOrders > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity (Last 7 Days)
          </h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {stats.recentOrders} new orders
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {orders.filter(order => {
                  const sevenDaysAgo = new Date();
                  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                  return new Date(order.createdAt) >= sevenDaysAgo && order.status === OrderStatus.DELIVERED;
                }).length} orders delivered
              </span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}