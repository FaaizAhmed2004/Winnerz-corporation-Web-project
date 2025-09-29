#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build process for Winnerz E-commerce...\n');

// Check if required files exist
const requiredFiles = [
  'package.json',
  'next.config.js',
  'tailwind.config.js',
  'tsconfig.json'
];

console.log('📋 Checking required files...');
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required file: ${file}`);
    process.exit(1);
  }
  console.log(`✅ ${file}`);
}

try {
  // Install dependencies
  console.log('\n📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Type check
  console.log('\n🔍 Running type check...');
  execSync('npm run type-check', { stdio: 'inherit' });

  // Lint
  console.log('\n🧹 Running linter...');
  execSync('npm run lint', { stdio: 'inherit' });

  // Run tests
  console.log('\n🧪 Running tests...');
  execSync('npm test -- --passWithNoTests', { stdio: 'inherit' });

  // Build
  console.log('\n🏗️  Building application...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check build output
  const distPath = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distPath)) {
    console.log('\n✅ Build completed successfully!');
    console.log(`📁 Build output: ${distPath}`);
    
    // List build files
    const files = fs.readdirSync(distPath);
    console.log('\n📄 Build files:');
    files.forEach(file => {
      console.log(`   - ${file}`);
    });
  } else {
    console.error('\n❌ Build failed - no output directory found');
    process.exit(1);
  }

  console.log('\n🎉 Build process completed successfully!');
  console.log('\n📋 Next steps:');
  console.log('   1. Deploy the dist/ folder to your hosting service');
  console.log('   2. Configure your domain and SSL certificate');
  console.log('   3. Set up monitoring and analytics');

} catch (error) {
  console.error('\n❌ Build process failed:', error.message);
  process.exit(1);
}