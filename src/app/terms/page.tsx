'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FileText, Scale, Shield, AlertTriangle, Gavel, Globe } from 'lucide-react';

export default function TermsOfServicePage() {
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
              <FileText className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            These terms govern your use of HWinnerz services. Please read them carefully before using our platform.
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
              })} | <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </Card>
        </motion.div>

        {/* Key Points Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Points
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Scale className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Legal Agreement</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Binding contract between you and HWinnerz</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">User Responsibilities</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Your obligations when using our services</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gavel className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dispute Resolution</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">How we handle conflicts and legal matters</p>
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
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By accessing, browsing, or using this website operated by HWinnerz Inc. (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), 
                    you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) acknowledge that you have read, understood, and agree to be bound by these Terms of Service 
                    (&ldquo;Terms&rdquo;) and all applicable laws and regulations. If you do not agree with any part of these Terms, you must not use our website or services.
                  </p>
                  <p className="mt-3">
                    These Terms constitute a legally binding agreement between you and HWinnerz Inc. Your continued use of our services 
                    after any modifications to these Terms constitutes acceptance of such changes.
                  </p>
                  <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5" />
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <strong>Important:</strong> By using our services, you agree to these terms. If you disagree with any provision, 
                        please discontinue use immediately.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    2. Definitions
                  </h2>
                  <p>For the purposes of these Terms, the following definitions apply:</p>
                  <div className="mt-4 space-y-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p><strong>&ldquo;Service&rdquo;</strong> refers to the e-commerce platform and all related services provided by HWinnerz Inc.</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p><strong>&ldquo;Products&rdquo;</strong> refers to any goods, services, or digital content offered for sale through our platform.</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p><strong>&ldquo;Account&rdquo;</strong> refers to the user account created to access certain features of our Service.</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p><strong>&ldquo;Content&rdquo;</strong> refers to all text, graphics, images, music, software, audio, video, information, and other materials.</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p><strong>&ldquo;Intellectual Property&rdquo;</strong> includes trademarks, copyrights, patents, trade secrets, and other proprietary rights.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    3. Eligibility and Account Registration
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    3.1 Age Requirements
                  </h3>
                  <p>
                    You must be at least 18 years old or the age of majority in your jurisdiction to use our Service. 
                    By using our Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    3.2 Account Creation
                  </h3>
                  <p>To access certain features, you may need to create an account. You agree to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Update such information to keep it accurate, current, and complete</li>
                    <li>Safeguard your account credentials and maintain confidentiality</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    3.3 Account Termination
                  </h3>
                  <p>
                    We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, 
                    abusive, or illegal activities. You may terminate your account at any time by contacting us.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Products and Services
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    4.1 Product Information
                  </h3>
                  <p>
                    We offer various products through our e-commerce platform. All product descriptions, specifications, prices, and availability 
                    are subject to change without notice. We make every effort to display product colors and images accurately, but we cannot 
                    guarantee that your device's display will accurately reflect the actual product colors.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    4.2 Availability and Limitations
                  </h3>
                  <p>We reserve the right to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Limit quantities of products available for purchase</li>
                    <li>Discontinue products at our sole discretion</li>
                    <li>Refuse service or cancel orders for any reason</li>
                    <li>Modify product specifications and features</li>
                    <li>Update pricing without prior notice</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    4.3 Pricing
                  </h3>
                  <p>
                    All prices are listed in US Dollars (USD) and are exclusive of applicable taxes, duties, and shipping charges unless otherwise stated. 
                    Product availability is not guaranteed until payment is processed and confirmed. We reserve the right to correct pricing errors.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    5. Order Processing and Payment
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    5.1 Order Acceptance
                  </h3>
                  <p>
                    All orders are subject to acceptance and product availability. We reserve the right to refuse or cancel any order for any reason, 
                    including but not limited to product availability, errors in product or pricing information, or suspected fraudulent activity.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    5.2 Payment Terms
                  </h3>
                  <p>Payment must be received and authorized before order processing begins. We accept various payment methods as displayed during checkout:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Major credit cards (Visa, MasterCard, American Express, Discover)</li>
                    <li>Digital wallets (PayPal, Apple Pay, Google Pay)</li>
                    <li>Buy now, pay later services (where available)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    5.3 Payment Authorization
                  </h3>
                  <p>
                    By providing payment information, you authorize us to charge the total amount to your selected payment method. 
                    If payment authorization fails, we will notify you and hold your order for 24 hours to allow payment method updates. 
                    Orders with failed payments will be automatically cancelled after this period.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    5.4 Billing and Invoicing
                  </h3>
                  <p>
                    You will receive an electronic receipt for all transactions. The billing address must match the address associated 
                    with your payment method. Orders with mismatched billing information may be delayed or cancelled for security verification.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    6. User Conduct and Prohibited Activities
                  </h2>
                  <p>You agree not to use our Service to:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Legal Violations</h4>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Violate any applicable laws or regulations</li>
                        <li>• Infringe on third-party rights</li>
                        <li>• Engage in fraudulent activities</li>
                        <li>• Participate in money laundering</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Technical Abuse</h4>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• Interfere with or disrupt our Service</li>
                        <li>• Use automated systems without permission</li>
                        <li>• Attempt unauthorized access</li>
                        <li>• Upload malicious code or viruses</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Content Violations</h4>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• Post harmful or offensive content</li>
                        <li>• Impersonate others</li>
                        <li>• Share false information</li>
                        <li>• Violate intellectual property rights</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Commercial Misuse</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Resell products without authorization</li>
                        <li>• Use our platform for competing services</li>
                        <li>• Extract data for commercial purposes</li>
                        <li>• Reverse engineer our systems</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    7. Intellectual Property Rights
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    7.1 Our Intellectual Property
                  </h3>
                  <p>
                    All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, 
                    digital downloads, data compilations, and software, is the property of HWinnerz Inc. or its content suppliers 
                    and is protected by Canadian and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    7.2 Limited License
                  </h3>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable license to access and use our Service for personal, 
                    non-commercial purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                    publicly perform, republish, download, store, or transmit any of our content without our prior written consent.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    7.3 Trademarks
                  </h3>
                  <p>
                    HWinnerz, our logos, and other trademarks used and displayed on this website are registered and unregistered trademarks 
                    of HWinnerz Inc. Nothing on this website should be construed as granting any license or right to use any trademark without our written permission.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    7.4 User Content
                  </h3>
                  <p>
                    By submitting content to our Service (reviews, comments, images), you grant us a worldwide, royalty-free, 
                    perpetual license to use, modify, and display such content in connection with our Service. You represent that 
                    you own or have the necessary rights to grant this license.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    8. Privacy and Data Protection
                  </h2>
                  <p>
                    Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, 
                    which is incorporated into these Terms by reference. By using our Service, you consent to the collection and use of your 
                    information as described in our Privacy Policy.
                  </p>
                  <p className="mt-3">
                    We comply with applicable privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA), 
                    the General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    9. Disclaimers and Warranties
                  </h2>
                  
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg mb-4">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Legal Notice</h4>
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                          The following disclaimers limit our liability. Please read carefully.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    9.1 Service Disclaimer
                  </h3>
                  <p>
                    OUR SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
                    INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    9.2 Availability Disclaimer
                  </h3>
                  <p>
                    We do not warrant that our Service will be uninterrupted, secure, or error-free, or that defects will be corrected. 
                    We make no warranties about the accuracy, completeness, or reliability of any content or information available through our Service.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    9.3 Product Warranties
                  </h3>
                  <p>
                    Product warranties are provided by manufacturers and are separate from these Terms. We disclaim all warranties 
                    regarding products sold through our platform, except as required by applicable law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    10. Limitation of Liability
                  </h2>
                  
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-4">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Liability Limitations</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      These limitations apply to the maximum extent permitted by law and may not apply in all jurisdictions.
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    10.1 Exclusion of Damages
                  </h3>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, HWINNERZ INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, 
                    GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM OR RELATING TO YOUR USE OF OUR SERVICE.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    10.2 Liability Cap
                  </h3>
                  <p>
                    OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO OUR SERVICE SHALL NOT EXCEED THE AMOUNT 
                    YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100 CAD), WHICHEVER IS GREATER.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    10.3 Exceptions
                  </h3>
                  <p>
                    Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, 
                    our liability will be limited to the maximum extent permitted by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    11. Indemnification
                  </h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless HWinnerz Inc., its officers, directors, employees, agents, 
                    and affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses 
                    (including attorney's fees) arising from:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Your use of our Service</li>
                    <li>Your violation of these Terms</li>
                    <li>Your infringement of any third-party rights</li>
                    <li>Your violation of applicable laws</li>
                    <li>Content you submit to our Service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    12. Termination
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    12.1 Termination by Us
                  </h3>
                  <p>
                    We may terminate or suspend your account and access to our Service immediately, without prior notice or liability, 
                    for any reason, including if you breach these Terms. Upon termination, your right to use our Service will cease immediately.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    12.2 Termination by You
                  </h3>
                  <p>
                    You may terminate your account at any time by contacting us at <a href="mailto:support@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@hwinnerz.com</a>. 
                    Termination does not relieve you of any obligations incurred prior to termination.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    12.3 Effect of Termination
                  </h3>
                  <p>
                    All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, 
                    warranty disclaimers, indemnity, and limitations of liability.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    13. Dispute Resolution and Governing Law
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    13.1 Governing Law
                  </h3>
                  <p>
                    These Terms are governed by and construed in accordance with the laws of the Province of Ontario, Canada, 
                    without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be 
                    brought exclusively in the courts of Ontario, Canada, and you hereby consent to personal jurisdiction and venue therein.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    13.2 Informal Resolution
                  </h3>
                  <p>
                    For any dispute arising out of or relating to these Terms or our Service, you agree to first contact us at 
                    <a href="mailto:legal@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">legal@hwinnerz.com</a> to attempt 
                    to resolve the dispute informally. If we cannot resolve the dispute within 30 days, either party may pursue formal legal action.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    13.3 Class Action Waiver
                  </h3>
                  <p>
                    You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, 
                    consolidated, or representative action. This waiver applies to the maximum extent permitted by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    14. Force Majeure
                  </h2>
                  <p>
                    We shall not be liable for any failure or delay in performance under these Terms due to circumstances beyond our reasonable control, 
                    including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, government actions, 
                    pandemic, or supply chain disruptions. We will make reasonable efforts to notify you of such circumstances and resume performance as soon as possible.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    15. Modifications to Terms
                  </h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of material changes by:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Posting the updated Terms on our website with a new &ldquo;Last Updated&rdquo; date</li>
                    <li>Sending email notifications to registered users</li>
                    <li>Displaying prominent notices on our platform</li>
                    <li>Requiring re-acceptance where legally required</li>
                  </ul>
                  <p className="mt-3">
                    Your continued use of our Service after such modifications constitutes acceptance of the updated Terms. 
                    If you do not agree to the modified Terms, you must stop using our Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    16. Severability
                  </h2>
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, 
                    that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise 
                    remain in full force and effect and enforceable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    17. Entire Agreement
                  </h2>
                  <p>
                    These Terms, together with our Privacy Policy, Cookie Policy, and any other legal notices published by us on our Service, 
                    constitute the entire agreement between you and HWinnerz Inc. regarding your use of our Service. These Terms supersede 
                    all prior agreements and understandings between the parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    18. Contact Information
                  </h2>
                  <p>
                    For questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Legal Department</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>HWinnerz Inc.</strong></p>
                      <p>456 Commerce Drive, Suite 200</p>
                      <p>Toronto, ON M5V 3A8, Canada</p>
                      <p>Email: <a href="mailto:legal@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">legal@hwinnerz.com</a></p>
                      <p>Phone: <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a></p>
                      <p>Business Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</p>
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