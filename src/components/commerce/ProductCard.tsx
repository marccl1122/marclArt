import { useCart } from '../../context/CartContext'
import CyberText from '../ui/CyberText'
import GlowButton from '../ui/GlowButton'

type Product = {
  id: string
  name: string
  price: number
  image: string
  description: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="border border-purple-900/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-900/10 transition-all">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <CyberText>${product.price.toFixed(2)}</CyberText>
        </div>
        
        <p className="text-gray-400 text-sm mb-4">{product.description}</p>
        
        <GlowButton
          onClick={() => addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
          })}
          className="w-full py-2 text-sm"
        >
          ADD TO CART
        </GlowButton>
      </div>
    </div>
  )
}