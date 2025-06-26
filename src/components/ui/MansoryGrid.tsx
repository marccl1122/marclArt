import { useState, useEffect } from 'react'
import Image from 'next/image'
import CyberText from '../ui/CyberText'
import GlowButton from '../ui/GlowButton'
import { motion } from 'framer-motion'

type Artwork = {
  id: string
  title: string
  year: string
  medium: string
  image: string
  dimensions: string
}

type MasonryGridProps = {
  items: Artwork[]
  columns?: number
  gap?: number
}

export default function MasonryGrid({ 
  items, 
  columns = 3, 
  gap = 24 
}: MasonryGridProps) {
  const [columnItems, setColumnItems] = useState<Artwork[][]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const calculateColumns = () => {
      const columnCount = window.innerWidth < 768 ? 1 : 
                         window.innerWidth < 1024 ? 2 : columns
      organizeItems(columnCount)
    }

    const organizeItems = (columnCount: number) => {
      const newColumnItems: Artwork[][] = Array.from(
        { length: columnCount }, 
        () => []
      )
      
      items.forEach((item, index) => {
        const columnIndex = index % columnCount
        newColumnItems[columnIndex].push(item)
      })
      
      setColumnItems(newColumnItems)
      setIsLoading(false)
    }

    calculateColumns()
    window.addEventListener('resize', calculateColumns)
    
    return () => window.removeEventListener('resize', calculateColumns)
  }, [items, columns])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse text-[var(--color-accent-blue)]">Loading artworks...</div>
      </div>
    )
  }

  return (
    <div className="flex w-full" style={{ gap: `${gap}px` }}>
      {columnItems.map((column, columnIndex) => (
        <div 
          key={`column-${columnIndex}`} 
          className="flex-1"
          style={{ minWidth: 0 }}
        >
          {column.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 group"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card shadow-glow border border-[var(--color-accent-blue)]/30 hover:scale-105 transition-transform duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-4 bg-[var(--color-bg)]/80 backdrop-blur-md rounded-b-2xl">
                  <CyberText className="text-xl mb-1 text-glow">{item.title}</CyberText>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--color-accent-blue)] mb-3">
                    <span>{item.year}</span>
                    <span>{item.medium}</span>
                    <span>{item.dimensions}</span>
                  </div>
                  
                  <GlowButton 
                    as="link" 
                    href={`/artwork/${item.id}`}
                    className="w-full py-2 text-sm"
                  >
                    VIEW DETAILS
                  </GlowButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  )
}