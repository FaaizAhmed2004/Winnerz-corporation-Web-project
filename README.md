# Winnerz Marketing Inc. - E-commerce Platform

A modern, fully-featured e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS. This is a frontend-only implementation that simulates a complete shopping experience without requiring any backend infrastructure.

## 🚀 Features

### Core E-commerce Functionality
- **Product Catalog**: Browse products with filtering, search, and pagination
- **Product Details**: Detailed product pages with image carousels and variant selection
- **Shopping Cart**: Add, remove, and modify items with real-time updates
- **Checkout Process**: Multi-step checkout with form validation
- **Order Management**: Order history, confirmation, and PDF invoice generation
- **Admin Dashboard**: Order management interface with status updates

### Technical Features
- **Frontend-Only**: No backend required - all data stored in localStorage/IndexedDB
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Dark Mode**: Complete theme system with smooth transitions
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Animations**: Smooth micro-interactions using Framer Motion
- **SEO Optimized**: Meta tags, structured data, and sitemap generation
- **Type Safety**: Full TypeScript implementation
- **Testing**: Comprehensive test suite with Jest and React Testing Library

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Storage**: localStorage with IndexedDB fallback
- **PDF Generation**: jsPDF
- **Icons**: Lucide React
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint with Next.js config

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd winnerz-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── (shop)/                   # Route group for shop pages
│   ├── admin-preview/            # Admin interface
│   ├── checkout/                 # Checkout process
│   ├── orders/                   # Order history
│   └── ...                       # Other pages
├── components/                   # Reusable components
│   ├── ui/                       # Base UI components
│   ├── layout/                   # Layout components
│   ├── shop/                     # Shop-specific components
│   ├── cart/                     # Cart components
│   ├── checkout/                 # Checkout components
│   └── admin/                    # Admin components
├── lib/                          # Utility functions
├── hooks/                        # Custom React hooks
├── stores/                       # Zustand stores
├── types/                        # TypeScript definitions
└── data/                         # Mock data
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run type-check` - Run TypeScript type checking

## 🧪 Testing

The project includes comprehensive testing:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

Test coverage includes:
- Unit tests for components and utilities
- Integration tests for user flows
- Store/state management tests
- Accessibility tests

## 🎨 Customization

### Theme Configuration
The theme system supports easy customization through Tailwind CSS variables and the theme store:

```typescript
// Modify colors in tailwind.config.js
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  }
}
```

### Adding Products
Products are defined in `src/data/products.ts`. Add new products by extending the array:

```typescript
{
  id: 'new-product',
  slug: 'new-product',
  name: 'New Product',
  description: 'Product description',
  price: 99.99,
  images: [{ id: '1', url: 'image-url', alt: 'Alt text' }],
  category: 'Category',
  inStock: true,
  // ... other properties
}
```

## 🚀 Deployment

### Static Export (Recommended)
The project is configured for static export, making it deployable to any static hosting service:

```bash
npm run build
```

This generates a `dist/` folder with static files ready for deployment.

### Deployment Platforms
- **Vercel**: Zero-config deployment with `vercel` CLI
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload static files to S3 bucket
- **Any CDN**: Works with any static file hosting service

### Environment Variables
Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

For production, set:
```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## 🔧 Configuration

### Performance Optimization
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Analysis**: Use `@next/bundle-analyzer` to analyze bundle size
- **Caching**: Aggressive caching strategies for static assets

### SEO Configuration
- **Meta Tags**: Dynamic meta tag generation for all pages
- **Structured Data**: JSON-LD structured data for products and organization
- **Sitemap**: Automatically generated sitemap.xml
- **Robots.txt**: Configured for optimal crawling

## 🛡 Security

- **Content Security Policy**: Configured headers for XSS protection
- **Data Validation**: Client-side validation for all forms
- **Secure Storage**: Encrypted localStorage for sensitive data
- **HTTPS Only**: Enforced HTTPS in production

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Accessibility**: Screen readers, keyboard navigation
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Write tests for new features
- Ensure accessibility compliance
- Follow the existing code style
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Email**: support@winnerzmarketing.com
- **Documentation**: Check the `/docs` folder for detailed guides
- **Issues**: Create an issue on GitHub for bug reports

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Lucide**: For beautiful icons
- **Unsplash**: For high-quality placeholder images

---

**Winnerz Marketing Inc.** - Building exceptional digital experiences.