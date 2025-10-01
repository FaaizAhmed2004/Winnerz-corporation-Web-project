'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Truck, Clock, MapPin, Package, Shield, AlertCircle } from 'lucide-react';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Truck className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Shipping Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Fast, reliable shipping across North America. Learn about our delivery options, processing times, and shipping policies.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </Card>
        </motion.div>

        {/* Shipping Options Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Shipping Options & Delivery Times
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Standard Shipping</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">5-7 Business Days</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">FREE on orders $50+</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Otherwise $5.99</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Express Shipping</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">2-3 Business Days</p>
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">$12.99</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">All orders</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Overnight Shipping</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">1 Business Day</p>
                <p className="text-lg font-bold text-purple-600 dark:text-purple-400">$24.99</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">All orders</p>
              </div>
            </div>
          </Card>
        </motion.div>        {/*
 Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-8">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    1. Processing Time
                  </h2>
                  <p>
                    Orders are processed within 1-2 business days (Monday through Friday, excluding holidays). 
                    Orders placed on weekends or holidays will be processed the next business day.
                  </p>
                  <p className="mt-3">
                    You will receive a confirmation email with tracking information once your order ships. 
                    Please allow up to 24 hours for tracking information to become active.
                  </p>
                  
                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Holiday Processing</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          During peak seasons and holidays, processing times may be extended by 1-2 additional business days. 
                          We'll notify you of any delays via email.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    2. Shipping Locations
                  </h2>
                  <p>
                    We currently ship to all locations across North America, including:
                  </p>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">United States</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• All 50 states</li>
                        <li>• Washington D.C.</li>
                        <li>• Puerto Rico</li>
                        <li>• U.S. Virgin Islands</li>
                        <li>• Military APO/FPO addresses</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Canada</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• All provinces and territories</li>
                        <li>• Major cities and rural areas</li>
                        <li>• P.O. Box addresses accepted</li>
                        <li>• Remote locations (additional fees may apply)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">International Shipping</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      International shipping to select countries is available upon request. Additional customs fees, 
                      duties, and taxes may apply and are the responsibility of the customer. Contact our customer 
                      service team for international shipping quotes and availability.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    3. Shipping Address Requirements
                  </h2>
                  <p>
                    Please ensure your shipping address is accurate and complete to avoid delivery delays:
                  </p>
                  
                  <div className="mt-4 space-y-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Required Information</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Full recipient name</li>
                        <li>• Complete street address (no P.O. Boxes for express shipping)</li>
                        <li>• City, state/province, and ZIP/postal code</li>
                        <li>• Phone number for delivery notifications</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-1">Important Notes</h4>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• We are not responsible for packages delivered to incorrect addresses provided by the customer</li>
                        <li>• Address changes must be made before the order ships</li>
                        <li>• Apartment, suite, or unit numbers are required for multi-unit buildings</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Shipping Partners & Tracking
                  </h2>
                  <p>
                    We work with trusted shipping partners to ensure reliable delivery:
                  </p>
                  
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Truck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">FedEx</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-12 h-12 bg-brown-100 dark:bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Package className="w-6 h-6 text-brown-600 dark:text-brown-400" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">UPS</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Canada Post</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">USPS</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Tracking Your Order
                  </h3>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                      <li>• Tracking information is provided via email once your order ships</li>
                      <li>• Track your package directly on the carrier's website using the provided tracking number</li>
                      <li>• Delivery notifications are available through our shipping partners</li>
                      <li>• Contact customer service if you haven't received tracking information within 48 hours</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    5. Delivery Issues & Resolution
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Lost or Damaged Packages
                  </h3>
                  <p>
                    If your package is lost or damaged during shipping, please contact us within 48 hours of the expected delivery date. 
                    We will work with the carrier to resolve the issue and ensure you receive your order.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Delivery Attempts
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Standard Delivery</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Packages may be left at your door if no signature is required. We recommend being available 
                        during the delivery window or providing delivery instructions.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Signature Required</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        High-value orders may require a signature. If you're not available, the carrier will leave 
                        a notice with pickup instructions or attempt redelivery.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Undeliverable Packages
                  </h3>
                  <p>
                    Packages returned to us due to incorrect addresses, refused delivery, or multiple failed delivery attempts 
                    will be held for 30 days. Customers are responsible for return shipping fees and any additional charges 
                    for reshipment.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    6. Special Shipping Considerations
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Large or Heavy Items
                  </h3>
                  <p>
                    Large or heavy items may require special shipping arrangements:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Additional shipping fees may apply</li>
                    <li>Extended delivery times (7-14 business days)</li>
                    <li>Curbside delivery or appointment scheduling may be required</li>
                    <li>We will contact you with details before processing these orders</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Hazardous Materials
                  </h3>
                  <p>
                    Certain products containing batteries, chemicals, or other regulated materials may have shipping restrictions:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Ground shipping only (no air transport)</li>
                    <li>Extended delivery times</li>
                    <li>Additional handling fees may apply</li>
                    <li>Some items cannot be shipped to certain locations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    7. Shipping Costs & Taxes
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Shipping Calculations
                  </h3>
                  <p>Shipping costs are calculated based on:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Package weight and dimensions</li>
                    <li>Destination address</li>
                    <li>Selected shipping method</li>
                    <li>Order value (for free shipping eligibility)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Taxes and Duties
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">Domestic Orders</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Sales tax is calculated and collected at checkout based on your shipping address and local tax rates.
                      </p>
                    </div>
                    <div className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">International Orders</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        Customs duties, taxes, and brokerage fees are the responsibility of the customer and are not included in our pricing.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    8. Contact Information
                  </h2>
                  <p>
                    For shipping-related questions or issues, please contact our customer service team:
                  </p>
                  
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Customer Service</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Hwinnerz Customer Support</strong></p>
                      <p>Email: <a href="mailto:support@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@hwinnerz.com</a></p>
                      <p>Phone: <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a></p>
                      <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                      <p>Response Time: Within 24 hours</p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}