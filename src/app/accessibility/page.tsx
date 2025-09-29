'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Accessibility, Eye, Ear, Hand, Brain, Monitor, Keyboard, MousePointer, Volume2 } from 'lucide-react';

export default function AccessibilityPage() {
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
            <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
              <Accessibility className="w-12 h-12 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            HWinnerz is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-4 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
            <p className="text-sm text-purple-800 dark:text-purple-200 text-center">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} | <strong>WCAG Version:</strong> 2.1 AA
            </p>
          </Card>
        </motion.div>

        {/* Accessibility Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Accessibility Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Visual</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">High contrast, scalable text, screen reader support</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Keyboard className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Motor</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Keyboard navigation, large click targets</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Ear className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Auditory</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Visual indicators, captions, transcripts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cognitive</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clear navigation, consistent layout, simple language</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* WCAG Compliance Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-12"
        >
          <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  WCAG 2.1 AA Compliance
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our website conforms to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level, 
                  ensuring accessibility for users with diverse abilities.
                </p>
              </div>
              <div className="ml-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold text-sm">AA</span>
                </div>
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
                    1. Our Commitment to Accessibility
                  </h2>
                  <p>
                    HWinnerz Inc. is committed to ensuring that our website is accessible to all users, including those with disabilities. 
                    We believe that everyone should have equal access to information and functionality, regardless of their abilities or the 
                    technologies they use to access the web.
                  </p>
                  <p className="mt-3">
                    We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level, which is recognized 
                    internationally as the standard for web accessibility. Our commitment extends beyond compliance to creating an 
                    inclusive experience for all users.
                  </p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Accessibility is an Ongoing Process</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      We continuously monitor, test, and improve our website's accessibility. As we add new features and content, 
                      we ensure they meet our accessibility standards.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    2. Accessibility Standards and Guidelines
                  </h2>
                  <p>
                    Our website is designed and developed following these accessibility standards:
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">WCAG 2.1 AA</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Web Content Accessibility Guidelines 2.1 at the AA conformance level, covering perceivable, 
                        operable, understandable, and robust design principles.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Section 508</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        U.S. federal accessibility standards for electronic and information technology, 
                        ensuring government and public accessibility requirements are met.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ADA Compliance</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Americans with Disabilities Act compliance for digital accessibility, 
                        ensuring equal access to our services for all users.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AODA</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Accessibility for Ontarians with Disabilities Act compliance, 
                        meeting Canadian accessibility standards and requirements.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    3. Accessibility Features Implemented
                  </h2>
                  <p>
                    We have implemented numerous accessibility features to ensure our website is usable by everyone:
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    3.1 Visual Accessibility
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">High Contrast</h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Color contrast ratios meet WCAG AA standards (4.5:1)</li>
                        <li>• Dark mode option for reduced eye strain</li>
                        <li>• Clear visual hierarchy and typography</li>
                        <li>• Focus indicators for interactive elements</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Monitor className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Scalable Design</h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Text can be scaled up to 200% without loss of functionality</li>
                        <li>• Responsive design works on all screen sizes</li>
                        <li>• Flexible layouts adapt to user preferences</li>
                        <li>• Images include descriptive alt text</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    3.2 Keyboard and Motor Accessibility
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Keyboard className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Keyboard Navigation</h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• All functionality accessible via keyboard</li>
                        <li>• Logical tab order throughout the site</li>
                        <li>• Skip navigation links for efficiency</li>
                        <li>• Keyboard shortcuts for common actions</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <MousePointer className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Motor Accessibility</h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Large click targets (minimum 44x44 pixels)</li>
                        <li>• Adequate spacing between interactive elements</li>
                        <li>• No time-sensitive actions required</li>
                        <li>• Drag and drop alternatives provided</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    3.3 Screen Reader and Assistive Technology Support
                  </h3>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Comprehensive Screen Reader Support</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Semantic HTML structure with proper headings</li>
                        <li>• ARIA labels and descriptions for complex elements</li>
                        <li>• Form labels and error messages clearly associated</li>
                        <li>• Table headers and captions for data tables</li>
                      </ul>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Landmark regions for easy navigation</li>
                        <li>• Status updates announced to screen readers</li>
                        <li>• Alternative text for all meaningful images</li>
                        <li>• Descriptive link text and button labels</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    3.4 Cognitive and Learning Accessibility
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Clear Communication</h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Plain language and simple sentence structure</li>
                        <li>• Consistent navigation and layout patterns</li>
                        <li>• Clear error messages with correction guidance</li>
                        <li>• Important information highlighted appropriately</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Hand className="w-5 h-5 text-pink-600 dark:text-pink-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">User Control</h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• No auto-playing media with sound</li>
                        <li>• Pause, stop, and hide options for moving content</li>
                        <li>• Session timeout warnings with extension options</li>
                        <li>• Undo functionality for important actions</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Assistive Technology Compatibility
                  </h2>
                  <p>
                    Our website has been tested with and supports the following assistive technologies:
                  </p>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Screen Readers</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• JAWS (Windows)</li>
                        <li>• NVDA (Windows)</li>
                        <li>• VoiceOver (macOS/iOS)</li>
                        <li>• TalkBack (Android)</li>
                        <li>• Dragon NaturallySpeaking</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Browser Accessibility</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• High contrast mode</li>
                        <li>• Browser zoom (up to 400%)</li>
                        <li>• Custom CSS stylesheets</li>
                        <li>• Reader mode compatibility</li>
                        <li>• Voice control software</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Input Devices</h4>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• Switch navigation devices</li>
                        <li>• Eye-tracking systems</li>
                        <li>• Head pointer devices</li>
                        <li>• Single-switch scanning</li>
                        <li>• Voice recognition software</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    5. Testing and Quality Assurance
                  </h2>
                  <p>
                    We employ multiple testing methods to ensure our accessibility standards are met and maintained:
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    5.1 Automated Testing
                  </h3>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• <strong>axe-core:</strong> Automated accessibility testing integrated into our development workflow</li>
                      <li>• <strong>WAVE:</strong> Web accessibility evaluation tool for comprehensive scanning</li>
                      <li>• <strong>Lighthouse:</strong> Google's accessibility audit tool for performance and accessibility metrics</li>
                      <li>• <strong>Pa11y:</strong> Command-line accessibility testing tool for continuous integration</li>
                    </ul>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    5.2 Manual Testing
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Keyboard Testing</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Tab navigation through all interactive elements</li>
                        <li>• Keyboard shortcuts and access keys</li>
                        <li>• Focus management and visual indicators</li>
                        <li>• Escape key functionality for modals and menus</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Screen Reader Testing</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Content structure and navigation</li>
                        <li>• Form labels and error announcements</li>
                        <li>• Dynamic content updates</li>
                        <li>• Table headers and data relationships</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    5.3 User Testing
                  </h3>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                    <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                      We regularly conduct usability testing with users who have disabilities to ensure our website meets real-world accessibility needs:
                    </p>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Screen reader users testing navigation and content comprehension</li>
                      <li>• Keyboard-only users evaluating interaction patterns</li>
                      <li>• Users with cognitive disabilities assessing content clarity</li>
                      <li>• Users with motor disabilities testing interface usability</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    6. Known Issues and Limitations
                  </h2>
                  <p>
                    While we strive for full accessibility, we acknowledge that some areas may need improvement. 
                    We are actively working to address these issues:
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Third-Party Content</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        Some third-party embedded content (payment processors, social media widgets) may not fully meet our accessibility standards. 
                        We work with vendors to improve accessibility and provide alternative access methods where possible.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Complex Interactive Elements</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        Some advanced interactive features (product configurators, complex filters) may require additional keyboard navigation patterns. 
                        We provide alternative methods to access the same functionality.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Legacy Content</h4>
                      <p className="text-sm text-red-700 dark:text-red-300">
                        Some older content may not meet current accessibility standards. We are systematically reviewing and updating this content 
                        to ensure compliance with WCAG 2.1 AA guidelines.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    7. Accessibility Support and Assistance
                  </h2>
                  <p>
                    If you experience any accessibility barriers while using our website, we want to help. 
                    We offer multiple ways to get assistance:
                  </p>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Immediate Assistance</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• <strong>Phone:</strong> <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a></li>
                        <li>• <strong>Email:</strong> <a href="mailto:accessibility@hwinnerz.com" className="hover:underline">accessibility@hwinnerz.com</a></li>
                        <li>• <strong>Live Chat:</strong> Available during business hours</li>
                        <li>• <strong>TTY:</strong> 711 (relay service)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Alternative Access Methods</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                        <li>• Phone orders and customer service</li>
                        <li>• Email-based product information requests</li>
                        <li>• Alternative format documents (large print, audio)</li>
                        <li>• Personal shopping assistance</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Response Time Commitment</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      We commit to responding to accessibility-related inquiries within 24 hours during business days. 
                      For urgent accessibility issues that prevent you from completing a purchase or accessing important information, 
                      we will provide immediate assistance through our phone support line.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    8. Feedback and Continuous Improvement
                  </h2>
                  <p>
                    Your feedback is essential to our accessibility efforts. We welcome comments, suggestions, and reports about accessibility barriers:
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    8.1 How to Provide Feedback
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Accessibility Feedback Form</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Use our dedicated accessibility feedback form to report issues or suggest improvements.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email Reports</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Send detailed accessibility reports to <a href="mailto:accessibility@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">accessibility@hwinnerz.com</a>
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">User Testing Participation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Join our accessibility user testing program to help us improve our website's usability.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    8.2 Our Improvement Process
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Report</h4>
                      <p className="text-xs text-blue-700 dark:text-blue-300">Issue identified and documented</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">Assess</h4>
                      <p className="text-xs text-green-700 dark:text-green-300">Priority and impact evaluation</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">Fix</h4>
                      <p className="text-xs text-orange-700 dark:text-orange-300">Solution developed and implemented</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">Test</h4>
                      <p className="text-xs text-purple-700 dark:text-purple-300">Verification and user validation</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    9. Legal and Regulatory Compliance
                  </h2>
                  <p>
                    Our accessibility efforts align with various legal requirements and industry standards:
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">United States</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Americans with Disabilities Act (ADA) Title III compliance</li>
                        <li>• Section 508 of the Rehabilitation Act standards</li>
                        <li>• State-level accessibility requirements (California Unruh Act, etc.)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Canada</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Accessibility for Ontarians with Disabilities Act (AODA)</li>
                        <li>• Canadian Human Rights Act accessibility provisions</li>
                        <li>• Provincial accessibility legislation compliance</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">International</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• European Accessibility Act (EAA) requirements</li>
                        <li>• EN 301 549 European accessibility standard</li>
                        <li>• UN Convention on the Rights of Persons with Disabilities</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    10. Contact Information
                  </h2>
                  <p>
                    For accessibility-related questions, concerns, or assistance, please contact our accessibility team:
                  </p>
                  
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Accessibility Team</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>HWinnerz Inc.</strong></p>
                      <p>456 Commerce Drive, Suite 200</p>
                      <p>Toronto, ON M5V 3A8, Canada</p>
                      <p>Email: <a href="mailto:accessibility@hwinnerz.com" className="text-blue-600 dark:text-blue-400 hover:underline">accessibility@hwinnerz.com</a></p>
                      <p>Phone: <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a></p>
                      <p>TTY: 711 (relay service)</p>
                      <p>Business Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-start">
                      <Accessibility className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Our Promise</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          We are committed to providing equal access to our website and services for all users. 
                          If you encounter any accessibility barriers, we will work with you to find a solution and improve our website for everyone.
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