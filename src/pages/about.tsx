import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout title="About | Marc Le">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text-main)] mb-4">About Marc Le</h1>
          <p className="text-xl text-[var(--color-text-secondary)]">Contemporary Artist & Digital Philosopher</p>
        </header>

        <main className="space-y-8">
          <section className="border border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)]">Artist Statement</h2>
            <p className="text-[var(--color-text-main)] mb-4">
              My work explores the intersection of technology, consciousness, and artistic expression. 
              Through digital painting, photography, and philosophical inquiry, I examine how our 
              relationship with technology shapes our perception of reality and identity.
            </p>
            <p className="text-[var(--color-text-main)]">
              Each piece is a meditation on the boundaries between the organic and artificial, 
              the conscious and algorithmic, the individual and the collective digital consciousness.
            </p>
          </section>

          <section className="border border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)]">Background</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-2 text-[var(--color-text-main)]">Education</h3>
                <ul className="text-[var(--color-text-secondary)] space-y-1">
                  <li>MFA Digital Arts, Berlin University of the Arts</li>
                  <li>BA Philosophy, Humboldt University</li>
                  <li>Certificate in AI & Machine Learning, MIT</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-[var(--color-text-main)]">Exhibitions</h3>
                <ul className="text-[var(--color-text-secondary)] space-y-1">
                  <li>Quantum Realities - Berlin Gallery (2023)</li>
                  <li>Digital Consciousness - Paris Biennale (2022)</li>
                  <li>Algorithmic Aesthetics - NYC Modern (2021)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)]">Philosophy</h2>
            <p className="text-[var(--color-text-main)] mb-4">
              I believe that art in the digital age must engage with the fundamental questions 
              of our time: How does technology change what it means to be human? What is the 
              nature of creativity in an age of algorithms? How do we maintain our individual 
              identity in an increasingly connected world?
            </p>
            <Link href="/philosophy" className="text-[var(--color-accent-blue)] hover:underline inline-flex items-center font-medium">
              Read My Philosophical Works &rarr;
            </Link>
          </section>
        </main>

        <footer className="mt-12 pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-text-secondary)]">
          <p>&copy; {new Date().getFullYear()} Marc Le. All rights reserved.</p>
        </footer>
      </div>
    </Layout>
  )
} 