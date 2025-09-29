'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Shield,
  Award,
  Users,
  Target,
  Heart
} from 'lucide-react';

export default function AboutPage() {
  const companyInfo = {
    name: 'Winnerz Marketing Inc.',
    legalName: 'Winnerz Marketing Incorporated',
    founded: '2024',
    ein: 'XX-XXXXXXX',
    state: 'Delaware',
    address: {
      street: '123 Business Avenue',
      suite: 'Suite 100',
      city: 'Wilmington',
      state: 'DE',
      zipCode: '19801',
      country: 'United States'
    },
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'info@winnerzmarketing.com',
      support: 'support@winnerzmarketing.com'
    }
  };

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive results.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is centered around creating exceptional customer experiences.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical business practices in everything we do.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships with our clients.'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'Winnerz Marketing Inc. was officially incorporated in Delaware.'
    },
    {
      year: '2024',
      title: 'E-commerce Platform Launch',
      description: 'Launched our flagship e-commerce platform with cutting-edge technology.'
    },
    {
      year: '2024',
      title: 'Growing Team',
      description: 'Expanded our team of marketing and technology professionals.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About {companyInfo.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're a forward-thinking marketing company dedicated to helping businesses 
            succeed in the digital age through innovative solutions and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Founded in 2024, Winnerz Marketing Inc. emerged from a simple yet powerful vision: 
                  to democratize access to world-class marketing solutions for businesses of all sizes. 
                  Our journey began when our founders recognized the growing gap between traditional 
                  marketing approaches and the rapidly evolving digital landscape.
                </p>
                <p>
                  Today, we specialize in creating comprehensive e-commerce solutions that combine 
                  cutting-edge technology with proven marketing strategies. Our platform represents 
                  the culmination of extensive research, development, and real-world testing to 
                  deliver results that matter.
                </p>
                <p>
                  As a Delaware corporation, we operate with the highest standards of corporate 
                  governance while maintaining the agility and innovation of a modern tech company. 
                  Our commitment to excellence drives everything we do, from product development 
                  to customer service.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Company Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Legal Information */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Legal Information
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Legal Name</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {companyInfo.legalName}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Incorporation</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Delaware Corporation
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Founded</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {companyInfo.founded}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">EIN</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {companyInfo.ein}
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Contact Information
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {companyInfo.address.street}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {companyInfo.address.suite}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zipCode}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {companyInfo.address.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a 
                    href={`tel:${companyInfo.contact.phone}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a 
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These core principles guide our decisions and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Key milestones in our company's growth and development.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
                    {milestone.year}
                  </Badge>
                </div>
                <Card className="flex-1 p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {milestone.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Compliance & Certifications
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                We maintain the highest standards of business operations and compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  Delaware Corporation
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  GDPR Compliant
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  SOC 2 Type II
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  PCI DSS Compliant
                </Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}