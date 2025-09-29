'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, FileText, Truck, RotateCcw, CreditCard, Lock } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Legal Information
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our terms of service, privacy policy, and other legal documents.
          </p>
        </motion.div>

        {/* Legal Documents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="terms" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="terms" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Terms</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Privacy</span>
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span className="hidden sm:inline">Shipping</span>
              </TabsTrigger>
              <TabsTrigger value="returns" className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Returns</span>
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                <span className="hidden sm:inline">Payment</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span className="hidden sm:inline">Security</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="terms">
              <Card className="p-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Terms of Service
                  </h2>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>

                  <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        1. Acceptance of Terms
                      </h3>
                      <p>
                        By accessing, browsing, or using this website operated by Winnerz Marketing Inc. ("Company," "we," "us," or "our"), 
                        you ("User," "you," or "your") acknowledge that you have read, understood, and agree to be bound by these Terms of Service 
                        ("Terms") and all applicable laws and regulations. If you do not agree with any part of these Terms, you must not use our website or services.
                      </p>
                      <p className="mt-3">
                        These Terms constitute a legally binding agreement between you and Winnerz Marketing Inc. Your continued use of our services 
                        after any modifications to these Terms constitutes acceptance of such changes.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        2. Definitions
                      </h3>
                      <p>For the purposes of these Terms:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>"Service"</strong> refers to the e-commerce platform and all related services provided by Winnerz Marketing Inc.</li>
                        <li><strong>"Products"</strong> refers to any goods, services, or digital content offered for sale through our platform.</li>
                        <li><strong>"Account"</strong> refers to the user account created to access certain features of our Service.</li>
                        <li><strong>"Content"</strong> refers to all text, graphics, images, music, software, audio, video, information, and other materials.</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        3. Eligibility and Account Registration
                      </h3>
                      <p>
                        You must be at least 18 years old or the age of majority in your jurisdiction to use our Service. 
                        By using our Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                      </p>
                      <p className="mt-3">
                        To access certain features, you may need to create an account. You agree to provide accurate, current, and complete information 
                        during registration and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding 
                        your account credentials and for all activities that occur under your account.
                      </p>
                      <p className="mt-3">
                        We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or illegal activities.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        4. Products and Services
                      </h3>
                      <p>
                        We offer various products through our e-commerce platform. All product descriptions, specifications, prices, and availability 
                        are subject to change without notice. We make every effort to display product colors and images accurately, but we cannot 
                        guarantee that your device's display will accurately reflect the actual product colors.
                      </p>
                      <p className="mt-3">
                        We reserve the right to limit quantities, discontinue products, refuse service, or cancel orders at our sole discretion. 
                        Product availability is not guaranteed until payment is processed and confirmed.
                      </p>
                      <p className="mt-3">
                        All prices are listed in US Dollars (USD) and are exclusive of applicable taxes, duties, and shipping charges unless otherwise stated.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        5. Order Processing and Payment
                      </h3>
                      <p>
                        All orders are subject to acceptance and product availability. We reserve the right to refuse or cancel any order for any reason, 
                        including but not limited to product availability, errors in product or pricing information, or suspected fraudulent activity.
                      </p>
                      <p className="mt-3">
                        Payment must be received and authorized before order processing begins. We accept various payment methods as displayed during checkout. 
                        By providing payment information, you authorize us to charge the total amount to your selected payment method.
                      </p>
                      <p className="mt-3">
                        If payment authorization fails, we will notify you and hold your order for 24 hours to allow payment method updates. 
                        Orders with failed payments will be automatically cancelled after this period.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        6. User Conduct and Prohibited Activities
                      </h3>
                      <p>You agree not to use our Service to:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Violate any applicable laws, regulations, or third-party rights</li>
                        <li>Engage in fraudulent, deceptive, or misleading activities</li>
                        <li>Interfere with or disrupt our Service or servers</li>
                        <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                        <li>Upload or transmit viruses, malware, or other harmful code</li>
                        <li>Harass, abuse, or harm other users or our staff</li>
                        <li>Use automated systems to access our Service without permission</li>
                        <li>Reverse engineer, decompile, or attempt to extract source code</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        7. Intellectual Property Rights
                      </h3>
                      <p>
                        All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, 
                        digital downloads, data compilations, and software, is the property of Winnerz Marketing Inc. or its content suppliers 
                        and is protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                      </p>
                      <p className="mt-3">
                        You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, 
                        download, store, or transmit any of our content without our prior written consent, except as permitted by applicable law.
                      </p>
                      <p className="mt-3">
                        Our trademarks, service marks, and logos used and displayed on this website are registered and unregistered trademarks 
                        of Winnerz Marketing Inc. Nothing on this website should be construed as granting any license or right to use any trademark without our written permission.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        8. Privacy and Data Protection
                      </h3>
                      <p>
                        Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, 
                        which is incorporated into these Terms by reference. By using our Service, you consent to the collection and use of your 
                        information as described in our Privacy Policy.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        9. Disclaimers and Warranties
                      </h3>
                      <p>
                        OUR SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
                        INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                      </p>
                      <p className="mt-3">
                        We do not warrant that our Service will be uninterrupted, secure, or error-free, or that defects will be corrected. 
                        We make no warranties about the accuracy, completeness, or reliability of any content or information available through our Service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        10. Limitation of Liability
                      </h3>
                      <p>
                        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WINNERZ MARKETING INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, 
                        GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM OR RELATING TO YOUR USE OF OUR SERVICE.
                      </p>
                      <p className="mt-3">
                        OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO OUR SERVICE SHALL NOT EXCEED THE AMOUNT 
                        YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        11. Indemnification
                      </h3>
                      <p>
                        You agree to defend, indemnify, and hold harmless Winnerz Marketing Inc., its officers, directors, employees, agents, 
                        and affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses 
                        (including attorney's fees) arising from your use of our Service, violation of these Terms, or infringement of any third-party rights.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        12. Termination
                      </h3>
                      <p>
                        We may terminate or suspend your account and access to our Service immediately, without prior notice or liability, 
                        for any reason, including if you breach these Terms. Upon termination, your right to use our Service will cease immediately.
                      </p>
                      <p className="mt-3">
                        You may terminate your account at any time by contacting us. All provisions of these Terms that by their nature should 
                        survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        13. Dispute Resolution and Governing Law
                      </h3>
                      <p>
                        These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, 
                        without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be 
                        brought exclusively in the federal or state courts located in Delaware, and you hereby consent to personal jurisdiction and venue therein.
                      </p>
                      <p className="mt-3">
                        For any dispute arising out of or relating to these Terms or our Service, you agree to first contact us to attempt 
                        to resolve the dispute informally. If we cannot resolve the dispute within 30 days, either party may pursue formal legal action.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        14. Force Majeure
                      </h3>
                      <p>
                        We shall not be liable for any failure or delay in performance under these Terms due to circumstances beyond our reasonable control, 
                        including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        15. Modifications to Terms
                      </h3>
                      <p>
                        We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms 
                        on our website with a new "Last Updated&quot; date. Your continued use of our Service after such modifications constitutes acceptance of the updated Terms.
                      </p>
                      <p className="mt-3">
                        It is your responsibility to review these Terms periodically for changes. If you do not agree to the modified Terms, 
                        you must stop using our Service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        16. Severability
                      </h3>
                      <p>
                        If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated 
                        to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        17. Entire Agreement
                      </h3>
                      <p>
                        These Terms, together with our Privacy Policy and any other legal notices published by us on our Service, 
                        constitute the entire agreement between you and Winnerz Marketing Inc. regarding your use of our Service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        18. Contact Information
                      </h3>
                      <p>
                        For questions about these Terms of Service, please contact us at:
                      </p>
                      <div className="mt-2 space-y-1">
                        <p><strong>Winnerz Marketing Inc.</strong></p>
                        <p>123 Business Avenue, Suite 100</p>
                        <p>Wilmington, DE 19801</p>
                        <p>Email: <a href="mailto:legal@winnerzmarketing.com" className="text-blue-600 dark:text-blue-400 hover:underline">legal@winnerzmarketing.com</a></p>
                        <p>Phone: <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a></p>
                        <p>Business Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                      </div>
                    </section>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card className="p-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Privacy Policy
                  </h2>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>

                  <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        1. Information We Collect
                      </h3>
                      <p>
                        We collect information you provide directly to us, including:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Name, email address, and contact information</li>
                        <li>Billing and shipping addresses</li>
                        <li>Payment information (processed securely by third-party providers)</li>
                        <li>Order history and preferences</li>
                        <li>Communications with our support team</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        2. How We Use Your Information
                      </h3>
                      <p>We use collected information to:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Process and fulfill your orders</li>
                        <li>Provide customer support</li>
                        <li>Send order updates and important notifications</li>
                        <li>Improve our products and services</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        3. Information Sharing
                      </h3>
                      <p>We do not sell your personal information. We may share information only:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>With service providers who assist in business operations</li>
                        <li>When required by law</li>
                        <li>In connection with business transfers</li>
                        <li>With your explicit consent</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        4. Data Security
                      </h3>
                      <p>
                        We implement industry-standard security measures to protect your personal information. 
                        However, no method of transmission over the internet is 100% secure.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        5. Your Rights
                      </h3>
                      <p>You have the right to:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Data portability</li>
                        <li>Object to processing</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        6. Contact Us
                      </h3>
                      <p>For privacy-related questions, contact us at:</p>
                      <div className="mt-2">
                        <p>Email: privacy@winnerzmarketing.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                      </div>
                    </section>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="shipping">
              <Card className="p-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Shipping Policy
                  </h2>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>

                  <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        1. Shipping Methods & Timeframes
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Standard Shipping (5-7 business days)</h4>
                          <p>Free on orders over $50, otherwise $5.99</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Express Shipping (2-3 business days)</h4>
                          <p>$12.99 for all orders</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Overnight Shipping (1 business day)</h4>
                          <p>$24.99 for all orders</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        2. Processing Time
                      </h3>
                      <p>
                        Orders are processed within 1-2 business days. Orders placed on weekends or holidays 
                        will be processed the next business day. You will receive a confirmation email with 
                        tracking information once your order ships.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        3. Shipping Locations
                      </h3>
                      <p>
                        We currently ship to all 50 US states, Puerto Rico, and US territories. 
                        International shipping is available to select countries. Additional customs 
                        fees may apply for international orders.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        4. Shipping Address
                      </h3>
                      <p>
                        Please ensure your shipping address is accurate and complete. We are not responsible 
                        for packages delivered to incorrect addresses provided by the customer. 
                        Address changes must be made before the order ships.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        5. Delivery Issues
                      </h3>
                      <p>
                        If your package is lost or damaged during shipping, please contact us within 
                        48 hours of the expected delivery date. We will work with the carrier to 
                        resolve the issue and ensure you receive your order.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        6. Large Items
                      </h3>
                      <p>
                        Large or heavy items may require special shipping arrangements. 
                        Additional shipping fees and extended delivery times may apply. 
                        We will contact you with details before processing these orders.
                      </p>
                    </section>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="returns">
              <Card className="p-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Returns & Refunds Policy
                  </h2>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>

                  <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        1. Return Window
                      </h3>
                      <p>
                        You have 30 days from the date of delivery to return most items for a full refund. 
                        The item must be in its original condition, unused, and in original packaging. 
                        Some items may have different return periods as noted in the product description.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        2. Return Process
                      </h3>
                      <div className="space-y-2">
                        <p>To initiate a return:</p>
                        <ol className="list-decimal list-inside space-y-1">
                          <li>Contact our customer service team</li>
                          <li>Receive a Return Merchandise Authorization (RMA) number</li>
                          <li>Package the item securely with all original materials</li>
                          <li>Include the RMA number on the package</li>
                          <li>Ship using the provided return label</li>
                        </ol>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        3. Non-Returnable Items
                      </h3>
                      <p>The following items cannot be returned:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Personalized or customized products</li>
                        <li>Perishable goods</li>
                        <li>Digital downloads</li>
                        <li>Items damaged by misuse</li>
                        <li>Items returned after 30 days</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        4. Refund Processing
                      </h3>
                      <p>
                        Refunds are processed within 5-7 business days after we receive your returned item. 
                        Refunds are issued to the original payment method. Shipping costs are non-refundable 
                        unless the return is due to our error.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        5. Exchanges
                      </h3>
                      <p>
                        We offer exchanges for defective items or size/color changes within the return window. 
                        Contact customer service to arrange an exchange. We will cover return shipping for 
                        defective items.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        6. Damaged Items
                      </h3>
                      <p>
                        If you receive a damaged item, please contact us immediately with photos of the damage. 
                        We will arrange for a replacement or full refund at no cost to you.
                      </p>
                    </section>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card className="p-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Payment Policy
                  </h2>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>

                  <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        1. Accepted Payment Methods
                      </h3>
                      <p>We accept the following payment methods:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Visa, MasterCard, American Express, Discover</li>
                        <li>PayPal</li>
                        <li>Apple Pay</li>
                        <li>Google Pay</li>
                        <li>Shop Pay</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        2. Payment Security
                      </h3>
                      <p>
                        All payment information is processed securely using industry-standard SSL encryption. 
                        We do not store your credit card information on our servers. All transactions are 
                        processed by certified payment processors.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        3. Pricing and Currency
                      </h3>
                      <p>
                        All prices are displayed in US Dollars (USD) and include applicable taxes where required. 
                        Prices are subject to change without notice. The price charged will be the price 
                        displayed at the time of purchase.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        4. Payment Authorization
                      </h3>
                      <p>
                        By providing payment information, you authorize us to charge the specified amount 
                        to your payment method. Payment is due at the time of purchase. Orders will not 
                        be processed until payment is successfully authorized.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        5. Failed Payments
                      </h3>
                      <p>
                        If a payment fails, we will notify you and hold your order for 24 hours. 
                        Please update your payment information to complete the purchase. 
                        Orders with failed payments will be automatically cancelled after 24 hours.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        6. Billing Address
                      </h3>
                      <p>
                        The billing address must match the address associated with your payment method. 
                        Orders with mismatched billing information may be delayed or cancelled for 
                        security verification.
                      </p>
                    </section>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card className="p-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Security Policy
                  </h2>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>

                  <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        1. Data Protection
                      </h3>
                      <p>
                        We implement comprehensive security measures to protect your personal and payment information. 
                        Our systems use SSL encryption, secure servers, and regular security audits to ensure 
                        your data remains safe and confidential.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        2. Account Security
                      </h3>
                      <p>
                        You are responsible for maintaining the security of your account credentials. 
                        Use a strong, unique password and do not share your login information. 
                        Contact us immediately if you suspect unauthorized access to your account.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        3. Secure Transactions
                      </h3>
                      <p>
                        All financial transactions are processed through secure, PCI-compliant payment gateways. 
                        We never store complete credit card information on our servers. Look for the lock 
                        icon in your browser to verify secure connections.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        4. Fraud Prevention
                      </h3>
                      <p>
                        We employ advanced fraud detection systems to protect against unauthorized transactions. 
                        Suspicious orders may be subject to additional verification. We may contact you to 
                        confirm order details for security purposes.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        5. Security Incidents
                      </h3>
                      <p>
                        In the unlikely event of a security breach affecting your personal information, 
                        we will notify you promptly and take immediate action to secure our systems 
                        and protect your data.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        6. Reporting Security Issues
                      </h3>
                      <p>
                        If you discover a security vulnerability or have concerns about our security practices, 
                        please contact our security team immediately at <a href="mailto:security@winnerzmarketing.com" className="text-blue-600 dark:text-blue-400 hover:underline">security@winnerzmarketing.com</a>. 
                        We take all security reports seriously and will investigate promptly.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        7. Regular Security Updates
                      </h3>
                      <p>
                        We regularly update our security measures and conduct periodic security assessments 
                        to ensure our systems remain secure against emerging threats. Our security protocols 
                        are reviewed and updated quarterly by certified security professionals.
                      </p>
                    </section>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Legal Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-6 bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Legal Questions or Concerns?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions about our legal policies or need assistance, please contact our legal team.
              </p>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Winnerz Marketing Inc.</strong></p>
                <p>123 Business Avenue, Suite 100</p>
                <p>Wilmington, DE 19801</p>
                <p>Email: <a href="mailto:legal@winnerzmarketing.com" className="text-blue-600 dark:text-blue-400 hover:underline">legal@winnerzmarketing.com</a></p>
                <p>Phone: <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a></p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  Business Hours: Monday - Friday, 9:00 AM - 5:00 PM EST
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}