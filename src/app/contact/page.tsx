'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/forms/contact-form';
import { Card } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Headphones,
  Users,
  Globe
} from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri, 9 AM - 6 PM EST',
      action: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@winnerzmarketing.com',
      availability: 'Response within 24 hours',
      action: 'mailto:support@winnerzmarketing.com'
    },
    {
      icon: MessageCircle,
      title: 'General Inquiries',
      description: 'Questions about our services',
      contact: 'info@winnerzmarketing.com',
      availability: 'Response within 48 hours',
      action: 'mailto:info@winnerzmarketing.com'
    },
    {
      icon: Users,
      title: 'Sales Team',
      description: 'Discuss partnership opportunities',
      contact: 'sales@winnerzmarketing.com',
      availability: 'Response within 12 hours',
      action: 'mailto:sales@winnerzmarketing.com'
    }
  ];

  const officeInfo = {
    address: {
      street: '123 Business Avenue',
      suite: 'Suite 100',
      city: 'Wilmington',
      state: 'DE',
      zipCode: '19801',
      country: 'United States'
    },
    hours: {
      weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      weekends: 'Saturday - Sunday: Closed'
    }
  };

  const faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our phone support line.'
    },
    {
      question: 'What information should I include in my message?',
      answer: 'Please include your name, contact information, company (if applicable), and a detailed description of your inquiry or issue.'
    },
    {
      question: 'Do you offer technical support?',
      answer: 'Yes, we provide comprehensive technical support for all our products and services. You can reach our technical team via email or phone.'
    },
    {
      question: 'Can I schedule a consultation?',
      answer: 'Absolutely! Contact our sales team to schedule a consultation. We offer both virtual and in-person meetings based on your preference.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Office Information */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Office Location
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Winnerz Marketing Inc.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {officeInfo.address.street}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {officeInfo.address.suite}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {officeInfo.address.city}, {officeInfo.address.state} {officeInfo.address.zipCode}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {officeInfo.address.country}
                  </p>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  {officeInfo.hours.weekdays}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {officeInfo.hours.weekends}
                </p>
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Quick Links
              </h3>
              <div className="space-y-2 text-sm">
                <a 
                  href="/about" 
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  About Our Company
                </a>
                <a 
                  href="/legal" 
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Terms & Privacy
                </a>
                <a 
                  href="/shop" 
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Browse Products
                </a>
                <a 
                  href="/admin-preview" 
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Admin Dashboard
                </a>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the contact method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {method.description}
                  </p>
                  <a
                    href={method.action}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm block mb-2"
                  >
                    {method.contact}
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {method.availability}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about contacting us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}