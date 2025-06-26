import Layout from '../components/Layout'
import  CyberText  from '../components/ui/CyberText'
import { Carousel } from '../components/ui/Carousel'
import SectionDivider from '../components/ui/SectionDivider'

const collections = [
  {
    id: 'urban',
    title: 'URBAN GEOMETRY',
    images: [
      {
        id: '1',
        title: 'ANGULAR REFLECTIONS',
        location: 'New York, 2022',
        thumbnail: 'https://placehold.co/400x400',
        fullSize: 'https://placehold.co/800x800'
      },
      {
        id: '2',
        title: 'METAL PATTERNS',
        location: 'Berlin, 2023',
        thumbnail: 'https://placehold.co/400x400',
        fullSize: 'https://placehold.co/800x800'
      }
    ]
  },
  {
    id: 'nature',
    title: 'NATURE FRAGMENTS',
    images: [
      {
        id: '1',
        title: 'BIOLOGICAL PATTERNS',
        location: 'Amazon, 2021',
        thumbnail: 'https://placehold.co/400x400',
        fullSize: 'https://placehold.co/800x800'
      },
      {
        id: '2',
        title: 'ORGANIC STRUCTURES',
        location: 'Norway, 2020',
        thumbnail: 'https://placehold.co/400x400',
        fullSize: 'https://placehold.co/800x800'
      }
    ]
  }
]

export default function Photography() {
  return (
    <Layout title="Photography | Marc Le">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="glass-card shadow-glow p-12 mb-16 text-center flex flex-col gap-4">
          <CyberText className="text-4xl mb-2 text-glow">PHOTOGRAPHY</CyberText>
          <p className="text-[var(--color-text-secondary)] mb-2 max-w-2xl mx-auto text-lg">
            Digital captures of geometric patterns in urban and natural environments
          </p>
        </div>
        <Carousel collections={collections} />
        <SectionDivider />
      </div>
    </Layout>
  )
}