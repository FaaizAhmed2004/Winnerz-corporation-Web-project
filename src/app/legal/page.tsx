'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, FileText, Eye, Lock } from 'lucide-react';

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
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="terms" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Terms of Service
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Privacy Policy
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
                        By accessing and using this website operated by Winnerz Marketing Inc. ("we," "our," or "us"), 
                        you accept and agree to be bound by the terms and provision of this agreement. 
                        If you do not agree to abide by the above, please do not use this service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        2. Use License
                      </h3>
                      <p>
                        Permission is granted to temporarily download one copy of the materials on Winnerz Marketing Inc.'s 
                        website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                        not a transfer of title, and under this license you may not:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>modify or copy the materials</li>
                        <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                        <li>attempt to decompile or reverse engineer any software contained on the website</li>
                        <li>remove any copyright or other proprietary notations from the materials</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        3. Disclaimer
                      </h3>
                      <p>
                        The materials on Winnerz Marketing Inc.'s website are provided on an 'as is' basis. 
                        Winnerz Marketing Inc. makes no warranties, expressed or implied, and hereby disclaims 
                        and negates all other warranties including without limitation, implied warranties or 
                        conditions of merchantability, fitness for a particular purpose, or non-infringement 
                        of intellectual property or other violation of rights.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        4. Limitations
                      </h3>
                      <p>
                        In no event shall Winnerz Marketing Inc. or its suppliers be liable for any damages 
                        (including, without limitation, damages for loss of data or profit, or due to business 
                        interruption) arising out of the use or inability to use the materials on Winnerz Marketing Inc.'s 
                        website, even if Winnerz Marketing Inc. or a Winnerz Marketing Inc. authorized representative 
                        has been notified orally or in writing of the possibility of such damage.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        5. Accuracy of Materials
                      </h3>
                      <p>
                        The materials appearing on Winnerz Marketing Inc.'s website could include technical, 
                        typographical, or photographic errors. Winnerz Marketing Inc. does not warrant that 
                        any of the materials on its website are accurate, complete, or current. Winnerz Marketing Inc. 
                        may make changes to the materials contained on its website at any time without notice.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        6. Links
                      </h3>
                      <p>
                        Winnerz Marketing Inc. has not reviewed all of the sites linked to our website and is not 
                        responsible for the contents of any such linked site. The inclusion of any link does not 
                        imply endorsement by Winnerz Marketing Inc. of the site. Use of any such linked website 
                        is at the user's own risk.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        7. Modifications
                      </h3>
                      <p>
                        Winnerz Marketing Inc. may revise these terms of service for its website at any time without notice. 
                        By using this website, you are agreeing to be bound by the then current version of these terms of service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        8. Governing Law
                      </h3>
                      <p>
                        These terms and conditions are governed by and construed in accordance with the laws of Delaware 
                        and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        9. Contact Information
                      </h3>
                      <p>
                        If you have any questions about these Terms of Service, please contact us at:
                      </p>
                      <div className="mt-2">
                        <p>Winnerz Marketing Inc.</p>
                        <p>123 Business Avenue, Suite 100</p>
                        <p>Wilmington, DE 19801</p>
                        <p>Email: legal@winnerzmarketing.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
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
                        We collect information you provide directly to us, such as when you create an account, 
                        make a purchase, or contact us for support. This may include:
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
                      <p>
                        We use the information we collect to:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Process and fulfill your orders</li>
                        <li>Provide customer support and respond to your inquiries</li>
                        <li>Send you important updates about your orders and account</li>
                        <li>Improve our products and services</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        3. Information Sharing
                      </h3>
                      <p>
                        We do not sell, trade, or otherwise transfer your personal information to third parties 
                        except in the following circumstances:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>With service providers who assist us in operating our website and conducting business</li>
                        <li>When required by law or to protect our rights and safety</li>
                        <li>In connection with a business transfer or merger</li>
                        <li>With your explicit consent</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        4. Data Security
                      </h3>
                      <p>
                        We implement appropriate security measures to protect your personal information against 
                        unauthorized access, alteration, disclosure, or destruction. However, no method of 
                        transmission over the internet or electronic storage is 100% secure.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        5. Cookies and Tracking
                      </h3>
                      <p>
                        Our website uses cookies and similar tracking technologies to enhance your browsing experience. 
                        You can control cookie settings through your browser preferences. Note that disabling cookies 
                        may affect website functionality.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        6. Your Rights
                      </h3>
                      <p>
                        Depending on your location, you may have certain rights regarding your personal information, including:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Access to your personal information</li>
                        <li>Correction of inaccurate information</li>
                        <li>Deletion of your personal information</li>
                        <li>Portability of your data</li>
                        <li>Objection to processing</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        7. Children's Privacy
                      </h3>
                      <p>
                        Our website is not intended for children under 13 years of age. We do not knowingly 
                        collect personal information from children under 13. If we become aware that we have 
                        collected such information, we will take steps to delete it.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        8. Changes to This Policy
                      </h3>
                      <p>
                        We may update this privacy policy from time to time. We will notify you of any changes 
                        by posting the new policy on this page and updating the "Last updated" date.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        9. Contact Us
                      </h3>
                      <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                      </p>
                      <div className="mt-2">
                        <p>Winnerz Marketing Inc.</p>
                        <p>123 Business Avenue, Suite 100</p>
                        <p>Wilmington, DE 19801</p>
                        <p>Email: privacy@winnerzmarketing.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                      </div>
                    </section>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Additional Legal Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  Frontend-Only Demo Notice
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  This is a demonstration e-commerce website. All data is stored locally in your browser 
                  and no actual transactions are processed. No personal information is transmitted to external servers.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}