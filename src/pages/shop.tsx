import Layout from '../components/Layout'
import ProductCard from '../components/commerce/ProductCard'
import CyberText from '../components/ui/CyberText'
import SectionDivider from '../components/ui/SectionDivider'

const products = [
  {
    id: '1',
    name: 'QUANTUM PRINT',
    price: 149.99,
    image: 'https://placehold.co/400x400',
    description: 'Archival quality print on premium paper'
  },
  {
    id: '2',
    name: 'NEURAL LANDSCAPE POSTER',
    price: 89.99,
    image: 'https://placehold.co/400x400',
    description: 'High-quality poster print, 24" x 36"'
  },
  {
    id: '3',
    name: 'DIGITAL CONSCIOUSNESS NFT',
    price: 0.5,
    image: 'https://placehold.co/400x400',
    description: 'Limited edition NFT on Ethereum blockchain'
  },
  {
    id: '4',
    name: 'ALGORITHMIC DREAMS T-SHIRT',
    price: 45.00,
    image: 'https://placehold.co/400x400',
    description: 'Premium cotton t-shirt with original artwork'
  },
  {
    id: '5',
    name: 'METAVERSE FRAGMENTS PRINT',
    price: 199.99,
    image: 'https://placehold.co/400x400',
    description: 'Limited edition signed print, 30" x 40"'
  },
  {
    id: '6',
    name: 'SYNTHETIC REALITY NFT COLLECTION',
    price: 2.0,
    image: 'https://placehold.co/400x400',
    description: 'Complete NFT collection (5 pieces)'
  }
]

export default function Shop() {
  return (
    <Layout title="Shop | Marc Le">
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Limited edition prints and exclusive digital assets
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
