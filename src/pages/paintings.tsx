import Layout from '../components/Layout'
import CyberText from '../components/ui/CyberText'
import MasonryGrid from '../components/ui/MansoryGrid'

const paintings = [
  {
    id: '1',
    title: 'QUANTUM ENTANGLEMENT',
    year: '2023',
    medium: 'Digital painting on blockchain',
    image: '/images/paintings/quantum.jpg',
    dimensions: '4000 × 4000 px'
  },
  {
    id: '2',
    title: 'NEURAL LANDSCAPE',
    year: '2022',
    medium: 'AI-assisted acrylic',
    image: '/images/paintings/neural.jpg',
    dimensions: '120 × 80 cm'
  },
  // Add more paintings...
]

export default function Paintings() {
  return (
    <Layout title="Paintings | Marc Le">
      <div className="container mx-auto px-6 py-20">
        <CyberText className="text-3xl mb-2">PAINTINGS</CyberText>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Algorithmically-generated abstract works exploring quantum aesthetics
        </p>
        
        <MasonryGrid items={paintings} />
      </div>
    </Layout>
  )
}