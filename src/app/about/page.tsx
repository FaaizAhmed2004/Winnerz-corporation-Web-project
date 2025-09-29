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
  Heart,
  Truck
} from 'lucide-react';

export default function AboutPage() {
  const companyInfo = {
    name: 'HWinnerz',
    legalName: 'HWinnerz Inc.',
    founded: '2018',
    registrationNumber: 'CBC-123456789',
    jurisdiction: 'Canada Business Corporations Act',
    address: {
      street: '456 Commerce Drive',
      suite: 'Suite 200',
      city: 'Toronto',
      state: 'ON',
      zipCode: 'M5V 3A8',
      country: 'Canada'
    },
    usWarehouse: {
      street: '789 Fulfillment Way',
      city: 'Buffalo',
      state: 'NY',
      zipCode: '14201',
      country: 'United States'
    },
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'support@hwinnerz.com',
      legal: 'legal@hwinnerz.com'
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
      year: '2018',
      title: 'Company Founded',
      description: 'Incorporated under Canada Business Corporations Act with a vision for global commerce.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded sourcing and manufacturing partnerships globally to ensure quality and compliance.'
    },
    {
      year: '2022',
      title: 'U.S. Fulfillment Centers',
      description: 'Established U.S. fulfillment centers to provide fast, reliable delivery across America.'
    },
    {
      year: '2024',
      title: 'Serving Global Retailers',
      description: 'Today: Serving global retailers with certified, high-quality products and trusted partnerships.'
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
            Who We Are
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            HWinnerz is an international brand committed to sourcing and delivering quality products 
            across diverse categories. Founded with a vision to bring reliability and innovation into 
            global commerce, we ensure compliance, quality, and customer satisfaction at every step.
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
                Our Story & Mission
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  <strong>Mission:</strong> To deliver premium, certified products with integrity and reliability, 
                  while building long-term partnerships with retailers and customers worldwide.
                </p>
                <p>
                  HWinnerz was founded with a commitment to bringing reliability and innovation into global commerce. 
                  We specialize in sourcing and delivering quality products across diverse categories, ensuring 
                  compliance, quality, and customer satisfaction at every step of our operations.
                </p>
                <p>
                  As a company incorporated under the Canada Business Corporations Act, we operate with full 
                  legal compliance and transparency. Our U.S. fulfillment centers enable us to provide 
                  reliable 2-5 day delivery across the United States, combining international sourcing 
                  expertise with local fulfillment capabilities.
                </p>
                <p>
                  Our commitment extends beyond products to building lasting relationships based on trust, 
                  transparency, and exceptional service. We ensure strict quality checks and certifications 
                  for every product, providing peace of mind for both customers and retail partners.
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
                    {companyInfo.jurisdiction}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Registration Number</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {companyInfo.registrationNumber}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Founded</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {companyInfo.founded}
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

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of expertise in international commerce, 
              quality assurance, and customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">JD</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  John Doe, CEO
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  15+ years in international trade and e-commerce. Former VP of Operations at GlobalTech Solutions.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">SM</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Sarah Miller, Head of Operations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  MBA in Supply Chain Management. 12+ years optimizing logistics and fulfillment operations.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">MC</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Michael Chen, Head of Quality Assurance
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Certified Quality Engineer with ISO 9001 expertise. 10+ years ensuring product compliance and safety.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* U.S. Fulfillment Center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <Card className="p-8 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
                  U.S. Fulfillment Center
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-4">
                  Our strategically located U.S. warehouse ensures fast, reliable delivery across America 
                  with 2-5 day shipping and easy returns processing.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span className="text-green-800 dark:text-green-200">
                      {companyInfo.usWarehouse.street}, {companyInfo.usWarehouse.city}, {companyInfo.usWarehouse.state} {companyInfo.usWarehouse.zipCode}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-green-600" />
                    <span className="text-green-800 dark:text-green-200">
                      Shipping Partners: FedEx, UPS, DHL, USPS
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 dark:bg-green-800 rounded-full mb-4">
                  <Truck className="w-12 h-12 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-green-700 dark:text-green-300 font-semibold">
                  2-5 Day Delivery
                </p>
                <p className="text-green-600 dark:text-green-400 text-sm">
                  Across the United States
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
                Why Partner With HWinnerz
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                We bring reliability, rigorous quality controls, scalable logistics, and deep marketplace 
                expertise to every partnership. Our certifications and compliance ensure peace of mind.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  Canadian Corporation
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  ISO 9001 Certified
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  CE/FCC/RoHS Compliant
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  SGS Tested
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  U.S. Fulfillment Ready
                </Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}