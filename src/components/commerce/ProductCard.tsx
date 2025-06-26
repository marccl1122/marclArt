import { useCart } from '../../context/CartContext'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

type Product = {
  id: string
  name: string
  price: number
  image: string
  description: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, cart } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  
  const isInCart = cart.some(item => item.id === product.id)
  const cartItem = cart.find(item => item.id === product.id)

  const handleAddToCart = async () => {
    setIsAdding(true)
    try {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      })
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300))
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        {/* Price and Cart Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </div>
          {isInCart && (
            <div className="text-sm text-green-600 font-medium">
              In cart ({cartItem?.quantity})
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isAdding
              ? 'bg-gray-400 cursor-not-allowed'
              : isInCart
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
          }`}
        >
          {isAdding ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Adding...
            </div>
          ) : isInCart ? (
            '✓ Add Another'
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  )
}
