import { useCart } from '../../context/CartContext'
import CyberText from '../ui/CyberText'
import GlowButton from '../ui/GlowButton'

export default function CartSidebar() {
  const { 
    cart, 
    removeItem, 
    totalPrice, 
    isOpen, 
    toggleCart,
    checkout 
  } = useCart()

  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 border-l border-purple-900/50
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6 border-b border-purple-900/30 pb-4">
          <CyberText className="text-xl">YOUR CART</CyberText>
          <button 
            onClick={toggleCart} 
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-grow overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <GlowButton onClick={toggleCart}>
                CONTINUE BROWSING
              </GlowButton>
            </div>
          ) : (
            <ul className="space-y-4 divide-y divide-purple-900/30">
              {cart.map(item => (
                <li key={item.id} className="pt-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded border border-purple-900/30"
                      />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-purple-400">${item.price.toFixed(2)} × {item.quantity}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="border-t border-purple-900/30 pt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400">TOTAL:</span>
              <CyberText className="text-xl">${totalPrice.toFixed(2)}</CyberText>
            </div>
            <GlowButton 
              onClick={checkout}
              className="w-full py-3"
            >
              PROCEED TO CHECKOUT
            </GlowButton>
          </div>
        )}
      </div>
    </div>
  )
}