import Layout from '../components/Layout'
import ProductCard from '../components/commerce/ProductCard'
import CyberText from '../components/ui/CyberText'

const products = [
  {
    id: '1',
    name: 'QUANTUM PRINT',
    price: 149.99,
    image: '/images/shop/print1.jpg',
    description: 'Archival quality print on premium paper'
  },
  // Add more products...
]

export default function Shop() {
  return (
    <Layout title="Shop | Marc Le">
      <div className="container mx-auto px-6 py-20">
        <CyberText className="text-3xl mb-2">SHOP</CyberText>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Limited edition prints and exclusive digital assets
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}