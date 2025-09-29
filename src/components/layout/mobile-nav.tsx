'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cart';
import { useThemeStore } from '@/stores/theme';
import { 
  Menu, 
  X, 
  Home, 
  ShoppingBag, 
  ShoppingCart, 
  Package, 
  Info, 
  Phone, 
  FileText,
  Shield,
  Sun,
  Moon
} from 'lucide-react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { cart } = useCartStore();
  const { theme, toggleTheme } = useThemeStore();

  const itemCount = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const navigationItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/shop', label: 'Shop', icon: ShoppingBag },
    { href: '/cart', label: `Cart ${itemCount > 0 ? `(${itemCount})` : ''}`, icon: ShoppingCart },
    { href: '/orders', label: 'Orders', icon: Package },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Phone },
    { href: '/legal', label: 'Legal', icon: FileText },
    { href: '/admin-preview', label: 'Admin', icon: Shield }
  ];

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleNav}
        className="md:hidden relative z-50"
        aria-label="Toggle mobile menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeNav}
            />

            {/* Navigation Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Menu
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeNav}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto py-4">
                  <div className="space-y-1 px-4">
                    {navigationItems.map((item, index) => {
                      const isActive = pathname === item.href;
                      
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            onClick={closeNav}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                              isActive
                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                          >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* Footer Actions */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    variant="outline"
                    onClick={() => {
                      toggleTheme();
                      closeNav();
                    }}
                    className="w-full flex items-center gap-2"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="w-4 h-4" />
                        Switch to Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4" />
                        Switch to Dark Mode
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}