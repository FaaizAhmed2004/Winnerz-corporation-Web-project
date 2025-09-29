'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Shield, Eye, Lock, Database, UserCheck, Globe, Download, Trash2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
              <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how HWinnerz collects, uses, and protects your personal information.
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

        {/* Privacy Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy at a Glance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Transparency</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clear information about data collection</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Security</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Industry-standard protection measures</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <UserCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Control</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">You control your personal data</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Compliance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">GDPR, CCPA, and PIPEDA compliant</p>
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
                    1. Introduction
                  </h2>
                  <p>
                    HWinnerz Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy and personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                    or use our services. This policy applies to all users of our platform, regardless of location.
                  </p>
                  <p className="mt-3">
                    As a Canadian corporation, we comply with the Personal Information Protection and Electronic Documents Act (PIPEDA), 
                    the General Data Protection Regulation (GDPR) for European users, and the California Consumer Privacy Act (CCPA) 
                    for California residents.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    2. Information We Collect
                  </h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    2.1 Personal Information You Provide
                  </h3>
                  <p>We collect information you voluntarily provide to us, including:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Account Information:</strong> Name, email address, phone number, and password</li>
                    <li><strong>Billing Information:</strong> Billing address, payment method details (processed securely by third-party providers)</li>
                    <li><strong>Shipping Information:</strong> Delivery addresses and contact preferences</li>
                    <li><strong>Communication Data:</strong> Messages, reviews, and support inquiries</li>
                    <li><strong>Profile Information:</strong> Preferences, interests, and demographic information (optional)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    2.2 Information Collected Automatically
                  </h3>
                  <p>When you use our services, we automatically collect:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns, search queries</li>
                    <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                    <li><strong>Cookies and Tracking:</strong> See our Cookie Policy for detailed information</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    2.3 Information from Third Parties
                  </h3>
                  <p>We may receive information from:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Payment processors (transaction status, fraud prevention)</li>
                    <li>Shipping partners (delivery status, tracking information)</li>
                    <li>Social media platforms (if you choose to connect your accounts)</li>
                    <li>Marketing partners (with your consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p>We use your personal information for the following purposes:</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    3.1 Service Provision
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Process and fulfill orders</li>
                    <li>Manage your account and provide customer support</li>
                    <li>Process payments and prevent fraud</li>
                    <li>Arrange shipping and delivery</li>
                    <li>Handle returns and refunds</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    3.2 Communication
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Send order confirmations and shipping updates</li>
                    <li>Respond to inquiries and provide support</li>
                    <li>Send important service announcements</li>
                    <li>Provide marketing communications (with consent)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    3.3 Improvement and Analytics
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Analyze usage patterns and improve our services</li>
                    <li>Personalize your shopping experience</li>
                    <li>Conduct research and development</li>
                    <li>Monitor and prevent security threats</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    3.4 Legal Compliance
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Comply with applicable laws and regulations</li>
                    <li>Respond to legal requests and court orders</li>
                    <li>Protect our rights and prevent illegal activities</li>
                    <li>Maintain business records as required</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Information Sharing and Disclosure
                  </h2>
                  <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    4.1 Service Providers
                  </h3>
                  <p>We share information with trusted third-party service providers who assist us in:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Payment processing (Stripe, PayPal)</li>
                    <li>Shipping and logistics (FedEx, UPS, DHL, USPS)</li>
                    <li>Cloud hosting and data storage</li>
                    <li>Customer support and communication tools</li>
                    <li>Marketing and analytics services</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    4.2 Legal Requirements</h3>
                  <p>We may disclose information when required by law or to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Comply with legal processes or government requests</li>
                    <li>Protect our rights, property, or safety</li>
                    <li>Prevent fraud or illegal activities</li>
                    <li>Enforce our terms of service</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    4.3 Business Transfers</h3>
                  <p>
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                    to the new entity, subject to the same privacy protections.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    4.4 With Your Consent</h3>
                  <p>
                    We may share information for other purposes with your explicit consent or at your direction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    5. Data Security
                  </h2>
                  <p>We implement comprehensive security measures to protect your personal information:</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    5.1 Technical Safeguards
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>AES-256 encryption for data storage</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Multi-factor authentication for admin access</li>
                    <li>Automated backup and disaster recovery systems</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    5.2 Organizational Measures
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Employee training on data protection</li>
                    <li>Access controls and need-to-know basis</li>
                    <li>Regular security policy updates</li>
                    <li>Incident response procedures</li>
                    <li>Third-party security assessments</li>
                  </ul>

                  <p className="mt-4">
                    <strong>Important:</strong> While we implement industry-standard security measures, no method of 
                    transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    6. Your Privacy Rights
                  </h2>
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Access</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Request a copy of your personal information we hold
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center mb-2">
                        <UserCheck className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Correction</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Update or correct inaccurate personal information
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Deletion</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Request deletion of your personal information
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Download className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Portability</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Receive your data in a portable format
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    6.1 How to Exercise Your Rights
                  </h3>
                  <p>To exercise any of these rights, please contact us at:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Email: <a href="mailto:privacy@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@hwinnerz.com</a></li>
                    <li>Phone: <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a></li>
                    <li>Mail: HWinnerz Inc., Privacy Officer, 456 Commerce Drive, Suite 200, Toronto, ON M5V 3A8, Canada</li>
                  </ul>

                  <p className="mt-4">
                    We will respond to your request within 30 days (or as required by applicable law). 
                    We may need to verify your identity before processing your request.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    7. Data Retention
                  </h2>
                  <p>We retain your personal information for as long as necessary to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Provide our services and maintain your account</li>
                    <li>Comply with legal obligations and resolve disputes</li>
                    <li>Enforce our agreements and protect our rights</li>
                    <li>Improve our services and conduct analytics</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    Specific Retention Periods:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Account Information:</strong> Until account deletion + 30 days</li>
                    <li><strong>Transaction Records:</strong> 7 years (tax and legal requirements)</li>
                    <li><strong>Marketing Data:</strong> Until consent withdrawal + 30 days</li>
                    <li><strong>Support Communications:</strong> 3 years</li>
                    <li><strong>Website Analytics:</strong> 26 months</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    8. International Data Transfers
                  </h2>
                  <p>
                    As a Canadian company with U.S. fulfillment operations, your information may be transferred to and 
                    processed in Canada, the United States, or other countries where our service providers operate. 
                    We ensure appropriate safeguards are in place for international transfers, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
                    <li>Adequacy decisions where available</li>
                    <li>Binding Corporate Rules for internal transfers</li>
                    <li>Certification schemes and codes of conduct</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    9. Children's Privacy
                  </h2>
                  <p>
                    Our services are not intended for children under 13 years of age (or 16 in the EU). 
                    We do not knowingly collect personal information from children. If we become aware that 
                    we have collected information from a child without parental consent, we will take steps 
                    to delete such information promptly.
                  </p>
                  <p className="mt-3">
                    If you are a parent or guardian and believe your child has provided us with personal information, 
                    please contact us immediately at <a href="mailto:privacy@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@hwinnerz.com</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    10. Changes to This Privacy Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, 
                    technology, legal requirements, or other factors. We will notify you of material changes by:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending email notifications to registered users</li>
                    <li>Displaying prominent notices on our platform</li>
                    <li>Requiring re-consent where legally required</li>
                  </ul>
                  <p className="mt-3">
                    Your continued use of our services after the effective date of changes constitutes acceptance 
                    of the updated policy, unless otherwise required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    11. Contact Information
                  </h2>
                  <p>
                    If you have questions, concerns, or complaints about this Privacy Policy or our privacy practices, 
                    please contact us:
                  </p>
                  
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy Officer</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>HWinnerz Inc.</strong></p>
                      <p>456 Commerce Drive, Suite 200</p>
                      <p>Toronto, ON M5V 3A8, Canada</p>
                      <p>Email: <a href="mailto:privacy@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@hwinnerz.com</a></p>
                      <p>Phone: <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a></p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    Regulatory Authorities
                  </h3>
                  <p>
                    If you are not satisfied with our response to your privacy concerns, you may file a complaint with:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Canada:</strong> Office of the Privacy Commissioner of Canada</li>
                    <li><strong>EU:</strong> Your local Data Protection Authority</li>
                    <li><strong>California:</strong> California Attorney General's Office</li>
                  </ul>
                </section>

              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}