import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import CartSidebar from './commerce/CartSidebar'

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
    <div className="min-h-screen bg-background text-foreground">
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
        className="flex-grow focus:outline-none outline-none"
        tabIndex={-1}
        aria-label="Main content"
      >
        {children}
      </motion.main>
    </div>
  )
}