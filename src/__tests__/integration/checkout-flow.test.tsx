import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/navigation'
import CheckoutPage from '@/app/checkout/page'

// Mock the stores and hooks
jest.mock('@/stores/cart', () => ({
  useCartStore: () => ({
    cart: {
      id: 'test-cart',
      items: [
        {
          id: 'item-1',
          productId: 'product-1',
          product: {
            id: 'product-1',
            name: 'Test Product',
            price: 29.99,
            images: [{ id: '1', url: 'test.jpg', alt: 'Test' }],
          },
          quantity: 2,
          selectedVariants: {},
          addedAt: new Date(),
        },
      ],
      subtotal: 59.98,
      tax: 4.80,
      shipping: 9.99,
      discount: 0,
      total: 74.77,
      updatedAt: new Date(),
    },
    clearCart: jest.fn(),
  }),
}))

jest.mock('@/stores/orders', () => ({
  useOrdersStore: () => ({
    createOrder: jest.fn().mockResolvedValue({
      id: 'order-123',
      orderNumber: 'ORD-123',
    }),
  }),
}))

jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}))

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

const mockPush = jest.fn()
;(useRouter as jest.Mock).mockReturnValue({
  push: mockPush,
})

describe('Checkout Flow Integration', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('completes full checkout process', async () => {
    render(<CheckoutPage />)

    // Step 1: Shipping Information
    expect(screen.getByText('Shipping Information')).toBeInTheDocument()
    
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '555-123-4567')
    await user.type(screen.getByLabelText(/address/i), '123 Main St')
    await user.type(screen.getByLabelText(/city/i), 'Anytown')
    await user.selectOptions(screen.getByLabelText(/state/i), 'CA')
    await user.type(screen.getByLabelText(/zip code/i), '12345')

    // Continue to payment
    await user.click(screen.getByRole('button', { name: /continue to payment/i }))

    // Step 2: Payment Information
    await waitFor(() => {
      expect(screen.getByText('Payment Information')).toBeInTheDocument()
    })

    await user.type(screen.getByLabelText(/card number/i), '4111111111111111')
    await user.type(screen.getByLabelText(/expiry/i), '12/25')
    await user.type(screen.getByLabelText(/cvv/i), '123')
    await user.type(screen.getByLabelText(/cardholder name/i), 'John Doe')

    // Continue to review
    await user.click(screen.getByRole('button', { name: /continue to review/i }))

    // Step 3: Order Review
    await waitFor(() => {
      expect(screen.getByText('Order Review')).toBeInTheDocument()
    })

    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$74.77')).toBeInTheDocument()

    // Place order
    await user.click(screen.getByRole('button', { name: /place order/i }))

    // Verify order creation and redirect
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/order-confirmation/order-123')
    })
  })

  it('validates required fields', async () => {
    render(<CheckoutPage />)

    // Try to continue without filling required fields
    await user.click(screen.getByRole('button', { name: /continue to payment/i }))

    // Should show validation errors
    await waitFor(() => {
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    })
  })

  it('handles payment failure', async () => {
    // Mock failed order creation
    const { useOrdersStore } = require('@/stores/orders')
    useOrdersStore.mockReturnValue({
      createOrder: jest.fn().mockRejectedValue(new Error('Payment failed')),
    })

    render(<CheckoutPage />)

    // Fill out forms and get to order placement
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/address/i), '123 Main St')
    await user.type(screen.getByLabelText(/city/i), 'Anytown')
    await user.selectOptions(screen.getByLabelText(/state/i), 'CA')
    await user.type(screen.getByLabelText(/zip code/i), '12345')

    await user.click(screen.getByRole('button', { name: /continue to payment/i }))

    await waitFor(() => {
      expect(screen.getByText('Payment Information')).toBeInTheDocument()
    })

    await user.type(screen.getByLabelText(/card number/i), '4000000000000002') // Declined card
    await user.type(screen.getByLabelText(/expiry/i), '12/25')
    await user.type(screen.getByLabelText(/cvv/i), '123')
    await user.type(screen.getByLabelText(/cardholder name/i), 'John Doe')

    await user.click(screen.getByRole('button', { name: /continue to review/i }))

    await waitFor(() => {
      expect(screen.getByText('Order Review')).toBeInTheDocument()
    })

    await user.click(screen.getByRole('button', { name: /place order/i }))

    // Should show error message and not redirect
    await waitFor(() => {
      expect(screen.getByText(/payment failed/i)).toBeInTheDocument()
    })

    expect(mockPush).not.toHaveBeenCalled()
  })
})