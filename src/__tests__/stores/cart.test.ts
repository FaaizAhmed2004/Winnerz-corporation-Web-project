import { renderHook, act } from '@testing-library/react'
import { useCartStore } from '@/stores/cart'
import { Product } from '@/types'

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock

const mockProduct: Product = {
  id: '1',
  slug: 'test-product',
  name: 'Test Product',
  description: 'A test product description',
  price: 29.99,
  images: [
    {
      id: '1',
      url: 'https://example.com/image.jpg',
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

describe('Cart Store', () => {
  beforeEach(() => {
    // Reset the store state before each test
    useCartStore.getState().clearCart()
    jest.clearAllMocks()
  })

  it('initializes with empty cart', () => {
    const { result } = renderHook(() => useCartStore())
    expect(result.current.cart).toBeNull()
    expect(result.current.isLoading).toBe(false)
  })

  it('adds item to cart', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 2)
    })

    expect(result.current.cart).toBeTruthy()
    expect(result.current.cart?.items).toHaveLength(1)
    expect(result.current.cart?.items[0].product.id).toBe('1')
    expect(result.current.cart?.items[0].quantity).toBe(2)
  })

  it('updates quantity when adding existing item', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })
    
    act(() => {
      result.current.addItem(mockProduct, 2)
    })

    expect(result.current.cart?.items).toHaveLength(1)
    expect(result.current.cart?.items[0].quantity).toBe(3)
  })

  it('removes item from cart', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })

    const itemId = result.current.cart?.items[0].id
    
    act(() => {
      result.current.removeItem(itemId!)
    })

    expect(result.current.cart?.items).toHaveLength(0)
  })

  it('updates item quantity', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })

    const itemId = result.current.cart?.items[0].id
    
    act(() => {
      result.current.updateQuantity(itemId!, 5)
    })

    expect(result.current.cart?.items[0].quantity).toBe(5)
  })

  it('removes item when quantity is set to 0', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })

    const itemId = result.current.cart?.items[0].id
    
    act(() => {
      result.current.updateQuantity(itemId!, 0)
    })

    expect(result.current.cart?.items).toHaveLength(0)
  })

  it('calculates cart totals correctly', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 2)
    })

    expect(result.current.cart?.subtotal).toBe(59.98) // 29.99 * 2
    expect(result.current.cart?.tax).toBeGreaterThan(0)
    expect(result.current.cart?.total).toBeGreaterThan(59.98)
  })

  it('clears cart', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })
    
    act(() => {
      result.current.clearCart()
    })

    expect(result.current.cart).toBeNull()
  })

  it('applies coupon discount', async () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })

    let couponResult: boolean = false
    
    await act(async () => {
      couponResult = await result.current.applyCoupon('SAVE10')
    })

    expect(couponResult).toBe(true)
    expect(result.current.cart?.discount).toBeGreaterThan(0)
  })

  it('rejects invalid coupon', async () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })

    let couponResult: boolean = true
    
    await act(async () => {
      couponResult = await result.current.applyCoupon('INVALID')
    })

    expect(couponResult).toBe(false)
    expect(result.current.cart?.discount).toBe(0)
  })
})