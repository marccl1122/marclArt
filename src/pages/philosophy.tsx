import Layout from '../components/Layout'
import CyberText from '../components/ui/CyberText'

const essays = [
  {
    id: '1',
    title: 'THE AESTHETICS OF CODE',
    excerpt: 'Examining the beauty in algorithmic structures...',
    date: 'May 2023',
    readTime: '12 min'
  },
  // Add more essays...
]

export default function Philosophy() {
  return (
    <Layout title="Philosophy | Marc Le">
      <div className="container mx-auto px-6 py-20">
        <CyberText className="text-3xl mb-2">PHILOSOPHICAL WORKS</CyberText>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Essays and interactive thought experiments at the edge of consciousness
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {essays.map((essay) => (
            <div 
              key={essay.id} 
              className="border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{essay.title}</h3>
              <div className="flex text-sm text-gray-400 mb-3">
                <span>{essay.date}</span>
                <span className="mx-2">•</span>
                <span>{essay.readTime} read</span>
              </div>
              <p className="text-gray-300 mb-4">{essay.excerpt}</p>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-mono">
                READ FULL ESSAY →
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}