import Layout from '../components/Layout'
import ModelLoader from '../components/3d/ModelLoader'
import CyberText from '../components/ui/CyberText'
import GlowButton from '../components/ui/GlowButton'
import SectionDivider from '../components/ui/SectionDivider'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ModelLoader />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <CyberText className="text-5xl md:text-7xl font-bold mb-6">
            MARC LE
          </CyberText>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-300">
            Exploring the intersection of art, technology, and philosophy
          </p>
          <GlowButton href = "/about" className="px-8 py-3">
            ENTER THE UNIVERSE
          </GlowButton>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <CyberText className="text-3xl mb-8">DIGITAL ALCHEMIST</CyberText>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-4">
                I transmute raw data into visual poetry, blending traditional 
                artistry with cutting-edge technology to create works that 
                challenge perception.
              </p>
              <p className="text-gray-300">
                My practice spans multiple dimensions - from blockchain-encoded 
                paintings to AI-assisted philosophical explorations.
              </p>
            </div>
            <div className="border border-purple-900/50 rounded-lg overflow-hidden">
              <img 
                src="/images/artist-portrait.jpg" 
                alt="Marc Le in studio"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Collections Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <CyberText>EXPLORE COLLECTIONS</CyberText>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'QUANTUM PAINTINGS',
                description: 'Algorithmically-generated abstract works',
                image: '/images/paintings-preview.jpg',
                link: '/paintings'
              },
              {
                title: 'DIGITAL PHOTOGRAPHY',
                description: 'Urban geometry & nature fragments',
                image: '/images/photography-preview.jpg',
                link: '/photography'
              },
              {
                title: 'PHILOSOPHICAL WORKS',
                description: 'Essays & interactive thought experiments',
                image: '/images/philosophy-preview.jpg',
                link: '/philosophy'
              }
            ].map((collection, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{collection.title}</h3>
                    <p className="text-gray-300 mb-4">{collection.description}</p>
                    <GlowButton 
                      href={collection.link} 
                      className="text-sm px-4 py-2"
                    >
                      VIEW COLLECTION
                    </GlowButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}