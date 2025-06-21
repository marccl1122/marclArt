import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import CartSidebar from './commerce/CartSidebar'
import CyberText from './ui/CyberText'

type LayoutProps = {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ 
  children, 
  title = "Marc Le | Contemporary Artist", 
  description = "Digital gallery showcasing contemporary paintings, photography, and philosophical works"
}: LayoutProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <CartSidebar />

      <motion.main
        key={router.asPath}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>

      <footer className="border-t border-purple-900/30 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <CyberText className="text-xl">MARC LE</CyberText>
              <p className="text-gray-400 text-sm mt-2">
                Contemporary Artist & Philosopher
              </p>
            </div>
            
            <div className="flex space-x-6">
              {['Paintings', 'Photography', 'Philosophy', 'Shop'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-purple-900/10 text-center text-gray-500 text-xs">
            <p>© {new Date().getFullYear()} Marc Le. All rights reserved.</p>
            <p className="mt-1">All artworks and content are protected under copyright law.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}