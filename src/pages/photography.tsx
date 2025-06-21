import Layout from '../components/Layout'
import  CyberText  from '../components/ui/CyberText'
import { Carousel } from '../components/ui/Carousel'

const collections = [
  {
    id: 'urban',
    title: 'URBAN GEOMETRY',
    images: [
      {
        id: '1',
        title: 'ANGULAR REFLECTIONS',
        location: 'New York, 2022',
        thumbnail: '/images/photography/urban1-thumb.jpg',
        fullSize: '/images/photography/urban1-full.jpg'
      },
      {
        id: '2',
        title: 'METAL PATTERNS',
        location: 'Berlin, 2023',
        thumbnail: '/images/photography/urban2-thumb.jpg',
        fullSize: '/images/photography/urban2-full.jpg'
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
        thumbnail: '/images/photography/nature1-thumb.jpg',
        fullSize: '/images/photography/nature1-full.jpg'
      },
      {
        id: '2',
        title: 'ORGANIC STRUCTURES',
        location: 'Norway, 2020',
        thumbnail: '/images/photography/nature2-thumb.jpg',
        fullSize: '/images/photography/nature2-full.jpg'
      }
    ]
  }
]

export default function Photography() {
  return (
    <Layout title="Photography | Marc Le">
      <div className="container mx-auto px-6 py-20">
        <CyberText className="text-3xl mb-2">PHOTOGRAPHY</CyberText>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Digital captures of geometric patterns in urban and natural environments
        </p>
        
        <Carousel collections={collections} />
      </div>
    </Layout>
  )
}