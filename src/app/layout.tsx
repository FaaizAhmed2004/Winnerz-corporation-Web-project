import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Providers } from './providers';
import { ToastProvider } from '@/hooks/use-toast';
import { SkipNav } from '@/components/ui/skip-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Winnerz Marketing Inc. - Premium E-commerce Store',
  description: 'Discover quality products at Winnerz Marketing Inc. Your trusted partner for exceptional shopping experiences.',
  keywords: 'ecommerce, shopping, quality products, winnerz marketing',
  authors: [{ name: 'Winnerz Marketing Inc.' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Winnerz Marketing Inc. - Premium E-commerce Store',
    description: 'Discover quality products at Winnerz Marketing Inc.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winnerz Marketing Inc.',
    description: 'Discover quality products at Winnerz Marketing Inc.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <ToastProvider>
            <SkipNav />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main id="main-content" className="flex-1" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
          </ToastProvider>
        </Providers>
      </body>
    </html>
  );
}