import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import CyberText from '../ui/CyberText'
import GlowButton from '../ui/GlowButton'


type ImageItem = {
  id: string
  title: string
  location: string
  thumbnail: string
  fullSize: string
}

type Collection = {
  id: string
  title: string
  images: ImageItem[]
}

type CarouselProps = {
  collections: Collection[]
}

export function Carousel({ collections }: CarouselProps) {
  const [currentCollectionIndex, setCurrentCollectionIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState<ImageItem | null>(null)

  return (
    <div className="space-y-8">
      {/* Collection Selector */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {collections.map((collection, index) => (
          <button
            key={collection.id}
            onClick={() => setCurrentCollectionIndex(index)}
            className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-blue)] shadow-glow ${
              currentCollectionIndex === index
                ? 'bg-[var(--color-accent-blue)] text-white' : 'bg-[var(--color-bg)]/80 text-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue)]/30'
            }`}
            tabIndex={0}
          >
            {collection.title}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections[currentCollectionIndex].images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentImage(image)}
            className="cursor-pointer relative aspect-square glass-card shadow-glow border border-[var(--color-accent-blue)]/30 overflow-hidden transition-transform duration-300"
          >
            <Image
              src={image.thumbnail}
              alt={image.title}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity rounded-2xl">
              <div>
                <CyberText className="text-sm text-glow">{image.title}</CyberText>
                <p className="text-xs text-[var(--color-accent-blue)]">{image.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setCurrentImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-[var(--color-bg)]/80 rounded-2xl overflow-hidden shadow-glow">
                <Image
                  src={currentImage.fullSize}
                  alt={currentImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <CyberText className="text-xl text-glow">{currentImage.title}</CyberText>
                <p className="text-[var(--color-accent-blue)]">{currentImage.location}</p>
                <GlowButton
                  onClick={() => setCurrentImage(null)}
                  className="mt-6 px-6 py-2"
                >
                  CLOSE
                </GlowButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}