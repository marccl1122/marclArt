import Layout from '../components/Layout'
import CyberText from '../components/ui/CyberText'
import SectionDivider from '../components/ui/SectionDivider'

const essays = [
  {
    id: '1',
    title: 'THE AESTHETICS OF CODE',
    excerpt: 'Examining the beauty in algorithmic structures and how they mirror natural patterns found in mathematics, biology, and consciousness itself.',
    date: 'May 2023',
    readTime: '12 min',
    image: 'https://placehold.co/400x400'
  },
  {
    id: '2',
    title: 'DIGITAL CONSCIOUSNESS',
    excerpt: 'Exploring the emergence of awareness in artificial systems and what this reveals about the nature of human consciousness.',
    date: 'April 2023',
    readTime: '18 min',
    image: 'https://placehold.co/400x400'
  },
  {
    id: '3',
    title: 'QUANTUM ART THEORY',
    excerpt: 'How quantum mechanics principles can be applied to artistic creation and the nature of reality itself.',
    date: 'March 2023',
    readTime: '15 min',
    image: 'https://placehold.co/400x400'
  },
  {
    id: '4',
    title: 'THE METAVERSE PARADOX',
    excerpt: 'Examining the contradictions inherent in virtual reality and our relationship with digital spaces.',
    date: 'February 2023',
    readTime: '20 min',
    image: 'https://placehold.co/400x400'
  }
]

export default function Philosophy() {
  return (
    <Layout title="Philosophy | Marc Le">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="glass-card shadow-glow p-12 mb-16 text-center flex flex-col gap-4">
          <CyberText className="text-4xl mb-2 text-glow">PHILOSOPHICAL WORKS</CyberText>
          <p className="text-[var(--color-text-secondary)] mb-2 max-w-2xl mx-auto text-lg">
            Essays and interactive thought experiments at the edge of consciousness
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {essays.map((essay) => (
            <div 
              key={essay.id} 
              className="glass-card shadow-glow border border-[var(--color-accent-blue)]/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 flex flex-col gap-4"
            >
              <img src={essay.image} alt={essay.title} className="w-full h-[180px] object-cover mb-4 rounded" />
              <h3 className="text-2xl font-bold mb-2 text-[var(--color-accent-blue)] uppercase tracking-widest">{essay.title}</h3>
              <div className="flex text-base text-[var(--color-accent-blue)] mb-3 gap-2">
                <span>{essay.date}</span>
                <span className="mx-2">•</span>
                <span>{essay.readTime} read</span>
              </div>
              <p className="text-[var(--color-text-main)] mb-4 text-base">{essay.excerpt}</p>
              <button className="pill-button text-sm font-mono">READ FULL ESSAY →</button>
            </div>
          ))}
        </div>
        <SectionDivider />
      </div>
    </Layout>
  )
}