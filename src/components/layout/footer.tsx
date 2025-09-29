'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' }
      ]
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Shipping Info', href: '#' },
        { name: 'Size Guide', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/legal' },
        { name: 'Terms of Service', href: '/legal' },
        { name: 'Cookie Policy', href: '/legal' },
        { name: 'Accessibility', href: '#' }
      ]
    }
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Winnerz
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Winnerz Marketing Inc. - Your trusted partner for quality products and exceptional service.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>123 Business Ave, Suite 100</p>
              <p>New York, NY 10001</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@winnerz.com</p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Winnerz Marketing Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/legal"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
              >
                Privacy
              </Link>
              <Link
                href="/legal"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}