# Deployment Guide

This guide covers deploying the Winnerz E-commerce site to various hosting platforms.

## 🚀 Quick Deploy

### Vercel (Recommended)
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure Environment Variables**
   - Set `NEXT_PUBLIC_BASE_URL` to your domain
   - Configure any other environment variables

### Netlify
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Drag and drop the `dist/` folder to Netlify
   - Or connect your Git repository for automatic deployments

### Static Hosting (AWS S3, GitHub Pages, etc.)
1. **Build for static export**
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder**
   - Upload all files in the `dist/` directory to your hosting service
   - Configure your web server to serve `index.html` for all routes

## 📋 Pre-deployment Checklist

### Environment Configuration
- [ ] Set `NEXT_PUBLIC_BASE_URL` to production domain
- [ ] Configure analytics tracking (if using)
- [ ] Set up error monitoring (if using)

### Performance Optimization
- [ ] Enable gzip compression on your server
- [ ] Configure CDN for static assets
- [ ] Set up proper caching headers
- [ ] Enable HTTP/2

### Security
- [ ] Configure HTTPS/SSL certificate
- [ ] Set up security headers (already configured in middleware)
- [ ] Configure CSP (Content Security Policy)
- [ ] Set up rate limiting if needed

### SEO & Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Configure Google Analytics (if using)
- [ ] Set up monitoring and uptime checks
- [ ] Configure social media meta tags

## 🔧 Platform-Specific Instructions

### Vercel
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "nextjs",
  "functions": {
    "src/app/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  }
}
```

### Netlify
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### AWS S3 + CloudFront
1. **Create S3 bucket**
2. **Enable static website hosting**
3. **Upload dist/ contents**
4. **Configure CloudFront distribution**
5. **Set up Route 53 for custom domain**

### GitHub Pages
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🌐 Domain Configuration

### Custom Domain Setup
1. **Purchase domain** from registrar
2. **Configure DNS records**
   - A record: `@` → Your hosting IP
   - CNAME record: `www` → Your hosting domain
3. **Set up SSL certificate**
4. **Configure redirects** (www → non-www or vice versa)

### Environment Variables
```bash
# Production
NEXT_PUBLIC_BASE_URL=https://your-domain.com
NODE_ENV=production

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

## 📊 Monitoring & Analytics

### Performance Monitoring
- **Core Web Vitals**: Monitor LCP, FID, CLS
- **Lighthouse CI**: Automated performance testing
- **Real User Monitoring**: Track actual user experience

### Error Tracking
- **Sentry**: For error monitoring and performance tracking
- **LogRocket**: For session replay and debugging
- **Custom logging**: For business-specific metrics

### Analytics
- **Google Analytics 4**: For user behavior tracking
- **Google Search Console**: For SEO monitoring
- **Hotjar**: For user experience insights

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint
      - run: npm run type-check
      - run: npm test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🚨 Troubleshooting

### Common Issues

**Build Fails**
- Check Node.js version (requires 18+)
- Clear node_modules and reinstall
- Check for TypeScript errors

**Static Export Issues**
- Ensure no server-side features are used
- Check for dynamic imports
- Verify all images have proper alt text

**Performance Issues**
- Enable compression
- Optimize images
- Use CDN for static assets
- Implement proper caching

**SEO Issues**
- Verify meta tags are generated
- Check sitemap.xml accessibility
- Ensure proper structured data

### Support
For deployment issues:
- Check the hosting platform documentation
- Review build logs for errors
- Test locally with `npm run build && npm start`
- Contact support if needed

## 📈 Post-Deployment

### Launch Checklist
- [ ] Test all pages and functionality
- [ ] Verify mobile responsiveness
- [ ] Check loading performance
- [ ] Test checkout flow
- [ ] Verify analytics tracking
- [ ] Submit to search engines
- [ ] Set up monitoring alerts

### Ongoing Maintenance
- Regular security updates
- Performance monitoring
- Content updates
- Feature enhancements
- User feedback integration