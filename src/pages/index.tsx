import Layout from '../components/Layout'
import Link from 'next/link'
import ModelLoader from '../components/3d/ModelLoader'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Marc <span className="blue">Le</span></h1>
          <p>Contemporary Art, Technology & Philosophy</p>
          <div>
            <a href="#exhibitions" className="btn btn-primary">View Exhibitions</a>
            <a href="/paintings" className="btn btn-secondary">Explore Artwork</a>
          </div>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Interactive 3D Experience</h2>
            <p>Explore the intersection of art and technology</p>
          </div>
          <ModelLoader />
        </div>
      </section>

      {/* Featured Exhibition */}
      <section id="exhibitions" className="section bg-gray">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Latest Exhibition</h2>
          </div>
          <div className="card">
            <div className="card-img">
              <div className="placeholder"></div>
            </div>
            <div className="card-content">
              <span className="tag">Featured</span>
              <h3>Quantum Realities</h3>
              <p className="text-[var(--muted-foreground)] mb-4">Published on June 15, 2023</p>
              <p className="mb-4">
                Explore the intersection of quantum physics and digital art in Marc Le's latest exhibition. 
                This show features algorithmically generated works that challenge perception and reality, 
                creating a dialogue between human creativity and artificial intelligence.
              </p>
              <Link href="/paintings" className="btn btn-primary">
                View Paintings →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Latest Articles</h2>
          </div>
          <div className="grid grid-2">
            <article className="card">
              <div className="card-img">
                <div className="placeholder"></div>
              </div>
              <div className="card-content">
                <h3>AI & Art: The New Frontier</h3>
                <p className="text-[var(--muted-foreground)] mb-2">Published on June 10, 2023</p>
                <p className="mb-4">
                  Exploring how artificial intelligence is reshaping the creative landscape 
                  and challenging our understanding of artistic expression.
                </p>
                <Link href="/philosophy" className="btn btn-secondary">
                  Read More →
                </Link>
              </div>
            </article>
            
            <article className="card">
              <div className="card-img">
                <div className="placeholder"></div>
              </div>
              <div className="card-content">
                <h3>Capturing Urban Geometry</h3>
                <p className="text-[var(--muted-foreground)] mb-2">Published on June 5, 2023</p>
                <p className="mb-4">
                  A photographic journey through the geometric patterns and architectural 
                  forms that define our modern urban landscapes.
                </p>
                <Link href="/photography" className="btn btn-secondary">
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Artwork Preview */}
      <section className="section bg-gray">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Featured Artworks</h2>
          </div>
          <div className="grid grid-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="artwork-item">
                <div className="artwork-img">
                  <div className="placeholder"></div>
                </div>
                <h3>Artwork {i}</h3>
                <p className="text-[var(--muted-foreground)]">2023 • Digital Art</p>
                <p className="price">€2,500</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/paintings" className="btn btn-primary">
              View All Artworks
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3>Marc Le</h3>
              <p>Contemporary artist exploring the intersection of technology, philosophy, and human creativity.</p>
            </div>
            <div>
              <h3>Navigation</h3>
              <p><Link href="/paintings">Paintings</Link></p>
              <p><Link href="/photography">Photography</Link></p>
              <p><Link href="/philosophy">Philosophy</Link></p>
              <p><Link href="/shop">Shop</Link></p>
            </div>
            <div>
              <h3>Connect</h3>
              <p><Link href="/contact">Contact</Link></p>
              <p><Link href="/about">About</Link></p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p>&copy; {new Date().getFullYear()} Marc Le. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </Layout>
  )
}