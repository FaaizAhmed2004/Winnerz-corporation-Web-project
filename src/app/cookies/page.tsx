'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Cookie, Settings, Eye, Shield, BarChart3, Target, Globe, Trash2 } from 'lucide-react';

export default function CookiePolicyPage() {
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
            <div className="p-4 bg-orange-100 dark:bg-orange-900 rounded-full">
              <Cookie className="w-12 h-12 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn how HWinnerz uses cookies and similar technologies to enhance your browsing experience and provide personalized services.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-4 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
            <p className="text-sm text-orange-800 dark:text-orange-200 text-center">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </Card>
        </motion.div>

        {/* Cookie Types Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Types of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Essential</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Required for basic site functionality</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Help us understand site usage</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Marketing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Personalize ads and content</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Functional</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Remember your preferences</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Cookie Consent Banner Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-12"
        >
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cookie Consent Management
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  You can manage your cookie preferences at any time through our cookie consent banner or by contacting us directly.
                </p>
              </div>
              <div className="ml-6">
                <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
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
                    1. What Are Cookies?
                  </h2>
                  <p>
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. 
                    They are widely used to make websites work more efficiently and provide information to website owners about how users interact with their sites.
                  </p>
                  <p className="mt-3">
                    Cookies can be &ldquo;first-party&rdquo; (set by the website you're visiting) or &ldquo;third-party&rdquo; (set by other websites). 
                    They can also be &ldquo;session&rdquo; cookies (deleted when you close your browser) or &ldquo;persistent&rdquo; cookies (remain on your device for a set period).
                  </p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Similar Technologies</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      This policy also covers similar technologies such as web beacons, pixels, local storage, and software development kits (SDKs) 
                      that serve similar functions to cookies.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    2. How We Use Cookies
                  </h2>
                  <p>
                    HWinnerz uses cookies to enhance your browsing experience, provide personalized content, analyze site performance, 
                    and deliver relevant advertisements. We use both first-party and third-party cookies for various purposes.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    2.1 Essential Cookies (Always Active)
                  </h3>
                  <p>These cookies are necessary for the website to function properly and cannot be disabled:</p>
                  
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Cookie Name</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Purpose</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">session_id</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Maintains your session and login state</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Session</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">cart_items</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Stores items in your shopping cart</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">30 days</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">csrf_token</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Prevents cross-site request forgery attacks</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Session</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">cookie_consent</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Remembers your cookie preferences</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    2.2 Functional Cookies (Optional)
                  </h3>
                  <p>These cookies enhance functionality and personalization:</p>
                  
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Cookie Name</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Purpose</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">theme_preference</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Remembers your dark/light mode preference</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 year</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">language_pref</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Stores your language preference</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 year</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">recently_viewed</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Shows recently viewed products</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">30 days</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono text-sm">wishlist_items</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Saves items to your wishlist</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    2.3 Analytics Cookies (Optional)
                  </h3>
                  <p>These cookies help us understand how visitors use our website:</p>
                  
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Service</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Purpose</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Google Analytics</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Website traffic and user behavior analysis</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2 years</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Hotjar</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Heatmaps and user session recordings</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 year</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Internal Analytics</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom analytics for site optimization</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    2.4 Marketing Cookies (Optional)
                  </h3>
                  <p>These cookies are used to deliver personalized advertisements:</p>
                  
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Service</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Purpose</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Google Ads</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Personalized advertising and conversion tracking</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">90 days</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Facebook Pixel</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Social media advertising and retargeting</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">90 days</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Email Marketing</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Email campaign tracking and personalization</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    3. Third-Party Cookies
                  </h2>
                  <p>
                    Some cookies on our website are set by third-party services. We work with reputable partners who have their own privacy policies. 
                    Here are the main third-party services we use:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Payment Processors</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Stripe (payment processing)</li>
                        <li>• PayPal (payment processing)</li>
                        <li>• Apple Pay (payment processing)</li>
                        <li>• Google Pay (payment processing)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics & Optimization</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Google Analytics (website analytics)</li>
                        <li>• Google Tag Manager (tag management)</li>
                        <li>• Hotjar (user experience analytics)</li>
                        <li>• Optimizely (A/B testing)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Marketing & Advertising</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Google Ads (advertising)</li>
                        <li>• Facebook Pixel (social advertising)</li>
                        <li>• Mailchimp (email marketing)</li>
                        <li>• Criteo (retargeting)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Customer Support</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Intercom (live chat)</li>
                        <li>• Zendesk (support tickets)</li>
                        <li>• Trustpilot (reviews)</li>
                        <li>• reCAPTCHA (spam protection)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Managing Your Cookie Preferences
                  </h2>
                  <p>
                    You have several options for managing cookies on our website. You can control your preferences through our cookie consent banner, 
                    your browser settings, or by contacting us directly.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    4.1 Cookie Consent Banner
                  </h3>
                  <p>
                    When you first visit our website, you'll see a cookie consent banner that allows you to:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your preferences by cookie category</li>
                    <li>Learn more about each type of cookie</li>
                  </ul>
                  
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Changing Your Mind</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      You can change your cookie preferences at any time by clicking the &ldquo;Cookie Settings&rdquo; link in our website footer 
                      or by clearing your browser cookies and revisiting our site.
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    4.2 Browser Settings
                  </h3>
                  <p>Most browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:</p>
                  
                  <div className="mt-4 space-y-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Google Chrome</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Settings → Privacy and security → Cookies and other site data
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Mozilla Firefox</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Options → Privacy & Security → Cookies and Site Data
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Safari</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Preferences → Privacy → Manage Website Data
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Microsoft Edge</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Settings → Cookies and site permissions → Cookies and site data
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    4.3 Opt-Out Tools
                  </h3>
                  <p>You can also use these industry tools to opt out of targeted advertising:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Digital Advertising Alliance:</strong> <a href="http://optout.aboutads.info/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a></li>
                    <li><strong>Network Advertising Initiative:</strong> <a href="http://optout.networkadvertising.org/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a></li>
                    <li><strong>Google Ads Settings:</strong> <a href="https://adssettings.google.com/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">adssettings.google.com</a></li>
                    <li><strong>Facebook Ad Preferences:</strong> <a href="https://www.facebook.com/ads/preferences/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/ads/preferences</a></li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    5. Impact of Disabling Cookies
                  </h2>
                  <p>
                    While you can disable cookies, doing so may affect your experience on our website. Here's what might happen if you disable different types of cookies:
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Essential Cookies Disabled</h4>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Unable to maintain login sessions</li>
                        <li>• Shopping cart won't work properly</li>
                        <li>• Security features may be compromised</li>
                        <li>• Some pages may not load correctly</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Functional Cookies Disabled</h4>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• Preferences won't be remembered</li>
                        <li>• No recently viewed products</li>
                        <li>• Language and theme settings reset</li>
                        <li>• Less personalized experience</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Analytics Cookies Disabled</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• We can't improve site performance</li>
                        <li>• No insights into user preferences</li>
                        <li>• Harder to identify and fix issues</li>
                        <li>• Less relevant content recommendations</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Marketing Cookies Disabled</h4>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• Ads may be less relevant</li>
                        <li>• No personalized product recommendations</li>
                        <li>• May see more generic advertising</li>
                        <li>• Email campaigns less targeted</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    6. Mobile Apps and Other Platforms
                  </h2>
                  <p>
                    If we develop mobile applications or use other platforms, similar tracking technologies may be used. 
                    These will be governed by the privacy settings of your device and the specific terms of those platforms.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-4">
                    6.1 Mobile Device Settings
                  </h3>
                  <p>You can control tracking on mobile devices through:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>iOS:</strong> Settings → Privacy & Security → Tracking</li>
                    <li><strong>Android:</strong> Settings → Privacy → Ads</li>
                    <li><strong>App-specific settings:</strong> Within individual app privacy settings</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    7. International Considerations
                  </h2>
                  <p>
                    Our cookie practices comply with applicable laws in different jurisdictions:
                  </p>
                  
                  <div className="mt-4 space-y-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">European Union (GDPR)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We obtain explicit consent for non-essential cookies and provide granular control options.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">California (CCPA)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        California residents can opt out of the sale of personal information, including through cookies.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Canada (PIPEDA)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We follow Canadian privacy principles for meaningful consent and data minimization.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    8. Updates to This Cookie Policy
                  </h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. 
                    We will notify you of material changes by:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Updating the &ldquo;Last Updated&rdquo; date at the top of this policy</li>
                    <li>Displaying a notice on our website</li>
                    <li>Sending email notifications to registered users (for significant changes)</li>
                    <li>Requesting renewed consent where required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    9. Contact Us About Cookies
                  </h2>
                  <p>
                    If you have questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cookie Questions</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>HWinnerz Inc.</strong></p>
                      <p>456 Commerce Drive, Suite 200</p>
                      <p>Toronto, ON M5V 3A8, Canada</p>
                      <p>Email: <a href="mailto:privacy@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@hwinnerz.com</a></p>
                      <p>Phone: <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a></p>
                      <p>Subject Line: &ldquo;Cookie Policy Inquiry&rdquo;</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Your Rights</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          You have the right to withdraw consent, request information about cookies we use, 
                          and file complaints with relevant data protection authorities if you're not satisfied with our response.
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