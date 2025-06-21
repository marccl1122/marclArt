import { useCart } from '../../context/CartContext'
import GlowButton from '../ui/GlowButton'
import { useState } from 'react'

export default function CheckoutButton() {
  const { checkout, cart } = useCart()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    if (cart.length === 0) return
    setLoading(true)
    try {
      await checkout()
    } finally {
      setLoading(false)
    }
  }

  return (
    <GlowButton
      onClick={handleCheckout}
      disabled={cart.length === 0 || loading}
      className={`w-full py-3 ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          PROCESSING...
        </span>
      ) : (
        `CHECKOUT ($${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)})`
      )}
    </GlowButton>
  )
}