'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { RotateCcw, Calendar, Package, CreditCard, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ReturnsPage() {
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
            <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full">
              <RotateCcw className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Returns & Refunds Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Shop with confidence. Our hassle-free return policy ensures your satisfaction with every purchase.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <p className="text-sm text-green-800 dark:text-green-200 text-center">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </Card>
        </motion.div>

        {/* Return Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Easy Return Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Reach out to our customer service team</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Get RMA</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Receive Return Authorization number</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ship Item</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Package and send with provided label</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Get Refund</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Receive refund within 5-7 business days</p>
              </div>
            </div>
          </Card>
        </motion.div>        
{/* Main Content */}
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
                    1. Return Window & Eligibility
                  </h2>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                      <h4 className="font-semibold text-green-800 dark:text-green-200">30-Day Return Window</h4>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      You have 30 days from the date of delivery to return most items for a full refund. 
                      The item must be in its original condition, unused, and in original packaging.
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Eligible for Return
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-green-200 dark:border-green-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Returnable Items</h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Unused items in original packaging</li>
                        <li>• Items with all original accessories</li>
                        <li>• Items with tags and labels attached</li>
                        <li>• Non-personalized products</li>
                        <li>• Items within 30-day window</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border border-red-200 dark:border-red-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Non-Returnable Items</h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Personalized or customized products</li>
                        <li>• Perishable goods</li>
                        <li>• Digital downloads</li>
                        <li>• Items damaged by misuse</li>
                        <li>• Items returned after 30 days</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    2. How to Initiate a Return
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Step 1: Contact Customer Service
                  </h3>
                  <p>
                    Before returning any item, please contact our customer service team to initiate the return process:
                  </p>
                  
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Contact Information</h4>
                    <div className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                      <p>Email: <a href="mailto:returns@hwinnerz.com" className="hover:underline">returns@hwinnerz.com</a></p>
                      <p>Phone: <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a></p>
                      <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Step 2: Provide Required Information
                  </h3>
                  <p>When contacting us, please have the following information ready:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Order number</li>
                    <li>Item(s) you wish to return</li>
                    <li>Reason for return</li>
                    <li>Photos of the item (if damaged or defective)</li>
                    <li>Preferred resolution (refund, exchange, store credit)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Step 3: Receive Return Authorization
                  </h3>
                  <p>
                    Once your return request is approved, you will receive:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Return Merchandise Authorization (RMA) number</li>
                    <li>Prepaid return shipping label (for eligible returns)</li>
                    <li>Return instructions and packaging guidelines</li>
                    <li>Expected processing timeline</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    3. Return Shipping & Packaging
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Packaging Requirements
                  </h3>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="flex items-start">
                      <Package className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Proper Packaging</h4>
                        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                          <li>• Use original packaging when possible</li>
                          <li>• Include all original accessories and documentation</li>
                          <li>• Secure items to prevent damage during transit</li>
                          <li>• Include the RMA number on the outside of the package</li>
                          <li>• Use adequate padding for fragile items</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Return Shipping Options
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Free Return Shipping</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Defective or damaged items</li>
                        <li>• Wrong item sent by us</li>
                        <li>• Items not as described</li>
                        <li>• Quality issues</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Customer Pays Shipping</h4>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• Change of mind returns</li>
                        <li>• Size or color exchanges</li>
                        <li>• Items no longer needed</li>
                        <li>• Customer error in ordering</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Return Address
                  </h3>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Important:</strong> Only ship returns to the address provided with your RMA. 
                      Returns sent to other addresses may be lost or delayed.
                    </p>
                    <div className="text-sm">
                      <p><strong>Hwinnerz Returns Center</strong></p>
                      <p>789 Fulfillment Way</p>
                      <p>Buffalo, NY 14201</p>
                      <p>United States</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Refund Processing
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Refund Timeline
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Processing Time</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Refunds are processed within 5-7 business days after we receive and inspect your returned item. 
                        You will receive an email confirmation once the refund has been processed.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Refund Method</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Refunds are issued to the original payment method used for the purchase. 
                        Please allow 3-5 additional business days for the refund to appear on your statement.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Refund Amounts
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Return Reason</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Product Refund</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Shipping Refund</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Defective/Damaged</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Full refund</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Full refund</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Wrong item sent</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Full refund</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Full refund</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Change of mind</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Full refund</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">No refund</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Size/Color exchange</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Full refund</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">No refund</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    5. Exchanges
                  </h2>
                  <p>
                    We offer exchanges for defective items or size/color changes within the return window:
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Exchange Process
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">1. Contact Customer Service</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Reach out to arrange an exchange and confirm availability of the desired item.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">2. Return Original Item</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Follow the standard return process to send back the original item.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">3. Receive Replacement</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We'll ship the replacement item once we receive and process your return.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Exchange Shipping</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• We cover return shipping for defective items</li>
                      <li>• Customer pays return shipping for size/color exchanges</li>
                      <li>• We cover shipping for the replacement item</li>
                      <li>• Price differences will be charged or refunded as applicable</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    6. Damaged or Defective Items
                  </h2>
                  <p>
                    If you receive a damaged or defective item, we'll make it right immediately:
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Immediate Action Required
                  </h3>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Report Within 48 Hours</h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Please contact us within 48 hours of delivery if you receive a damaged or defective item. 
                          Include photos of the damage and packaging to expedite the resolution process.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Resolution Options
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-3">
                        <RotateCcw className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Replacement</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">Free replacement shipped immediately</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Full Refund</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Complete refund including shipping</p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg text-center">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Package className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Store Credit</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Credit for future purchases</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    7. Contact Information
                  </h2>
                  <p>
                    For returns, exchanges, or any questions about our return policy, please contact us:
                  </p>
                  
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Returns Department</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Hwinnerz Customer Service</strong></p>
                      <p>Email: <a href="mailto:returns@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">returns@hwinnerz.com</a></p>
                      <p>Phone: <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a></p>
                      <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                      <p>Average Response Time: Within 24 hours</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Our Promise</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          We stand behind every product we sell. If you're not completely satisfied with your purchase, 
                          we'll work with you to find a solution that makes you happy. Your satisfaction is our priority.
                        </p>
                      </div>
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