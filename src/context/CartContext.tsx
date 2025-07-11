import { createContext, useContext, useState, ReactNode } from 'react'
import { toast } from 'react-hot-toast'

type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  toggleCart: () => void
  checkout: () => Promise<void>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existingItem = prev.find(i => i.id === item.id)
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setIsOpen(true)
    toast.success(`${item.name} added to cart`)
  }

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id))
    toast.success('Item removed from cart')
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setCart(prev => 
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const checkout = async () => {
    // Redirect to checkout page
    window.location.href = '/checkout'
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const toggleCart = () => setIsOpen(prev => !prev)

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addItem, 
        removeItem, 
        updateQuantity,
        clearCart, 
        totalItems, 
        totalPrice,
        isOpen,
        toggleCart,
        checkout
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
