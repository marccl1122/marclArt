import Layout from '../components/Layout'
import Link from 'next/link'

const paintings = [
  {
    id: '1',
    title: 'QUANTUM ENTANGLEMENT',
    year: '2023',
    medium: 'Digital painting on blockchain',
    image: 'https://placehold.co/400x400',
    dimensions: '4000 × 4000 px',
    price: '€2,500'
  },
  {
    id: '2',
    title: 'NEURAL LANDSCAPE',
    year: '2022',
    medium: 'AI-assisted acrylic',
    image: 'https://placehold.co/400x400',
    dimensions: '120 × 80 cm',
    price: '€8,500'
  },
  {
    id: '3',
    title: 'DIGITAL CONSCIOUSNESS',
    year: '2023',
    medium: 'Algorithmic art',
    image: 'https://placehold.co/400x400',
    dimensions: '3000 × 2000 px',
    price: '€1,800'
  },
  {
    id: '4',
    title: 'METAVERSE FRAGMENTS',
    year: '2022',
    medium: 'Mixed media digital',
    image: 'https://placehold.co/400x400',
    dimensions: '150 × 100 cm',
    price: '€6,200'
  },
  {
    id: '5',
    title: 'SYNTHETIC REALITY',
    year: '2023',
    medium: 'Generative art',
    image: 'https://placehold.co/400x400',
    dimensions: '5000 × 3000 px',
    price: '€3,200'
  },
  {
    id: '6',
    title: 'ALGORITHMIC DREAMS',
    year: '2021',
    medium: 'Digital painting',
    image: 'https://placehold.co/400x400',
    dimensions: '2000 × 2000 px',
    price: '€4,800'
  }
]

export default function Paintings() {
  return (
    <Layout title="Paintings | Marc Le">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Paintings</h1>
          <p>Algorithmically-generated abstract works exploring quantum aesthetics</p>
          <div>
            <a href="#gallery" className="btn btn-primary">View Gallery</a>
            <a href="/shop" className="btn btn-secondary">Shop</a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Artwork Collection</h2>
            <p>Explore the intersection of technology and creativity</p>
          </div>
          <div className="grid grid-3">
            {paintings.map((painting) => (
              <div key={painting.id} className="artwork-item">
                <Link href={`/artwork/${painting.id}`}>
                  <div className="artwork-img">
                    <div className="placeholder"></div>
                  </div>
                  <h3>{painting.title}</h3>
                  <p className="text-[var(--muted-foreground)]">{painting.year} • {painting.medium}</p>
                  <p className="text-[var(--muted-foreground)]">{painting.dimensions}</p>
                  <p className="price">{painting.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-gray">
        <div className="container">
          <div className="text-center mb-4">
            <h2>About the Collection</h2>
          </div>
          <div className="card">
            <div className="card-content">
              <p className="mb-4">
                This collection represents a fusion of traditional artistic principles with cutting-edge 
                technology. Each piece is created using algorithmic processes that explore the boundaries 
                between human creativity and artificial intelligence.
              </p>
              <p className="mb-4">
                The works challenge our understanding of authorship, creativity, and the role of technology 
                in artistic expression. They invite viewers to question the nature of reality and perception 
                in our increasingly digital world.
              </p>
              <Link href="/philosophy" className="btn btn-primary">
                Read Philosophy →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}