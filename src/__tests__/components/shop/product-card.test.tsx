import { render, screen, fireEvent } from '@testing-library/react'
import { ProductCard } from '@/components/shop/product-card'
import { Product } from '@/types'

// Mock the stores
jest.mock('@/stores/cart', () => ({
  useCartStore: () => ({
    addItem: jest.fn(),
  }),
}))

jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}))

const mockProduct: Product = {
  id: '1',
  slug: 'test-product',
  name: 'Test Product',
  description: 'A test product description',
  price: 29.99,
  images: [
    {
      id: '1',
      url: 'https://images.unsplash.com/test-image.jpg',
      alt: 'Test product image',
    },
  ],
  variants: [],
  category: 'Electronics',
  tags: ['test'],
  inStock: true,
  featured: false,
  createdAt: new Date(),
  updatedAt: new Date(),
}

describe('ProductCard Component', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
    expect(screen.getByText('Electronics')).toBeInTheDocument()
    
    const image = screen.getByAltText('Test product image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://images.unsplash.com/test-image.jpg')
  })

  it('shows out of stock badge when product is not in stock', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false }
    render(<ProductCard product={outOfStockProduct} />)
    
    expect(screen.getByText('Out of Stock')).toBeInTheDocument()
  })

  it('shows featured badge when product is featured', () => {
    const featuredProduct = { ...mockProduct, featured: true }
    render(<ProductCard product={featuredProduct} />)
    
    expect(screen.getByText('Featured')).toBeInTheDocument()
  })

  it('handles add to cart action', () => {
    const { useCartStore } = require('@/stores/cart')
    const mockAddItem = jest.fn()
    useCartStore.mockReturnValue({ addItem: mockAddItem })

    render(<ProductCard product={mockProduct} />)
    
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i })
    fireEvent.click(addToCartButton)
    
    expect(mockAddItem).toHaveBeenCalledWith(mockProduct, 1, {})
  })

  it('disables add to cart button when out of stock', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false }
    render(<ProductCard product={outOfStockProduct} />)
    
    const addToCartButton = screen.getByRole('button', { name: /out of stock/i })
    expect(addToCartButton).toBeDisabled()
  })

  it('navigates to product page when clicked', () => {
    render(<ProductCard product={mockProduct} />)
    
    const productLink = screen.getByRole('link')
    expect(productLink).toHaveAttribute('href', '/shop/test-product')
  })
})