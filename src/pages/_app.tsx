import type { AppProps } from 'next/app'
import { CartProvider } from '../context/CartContext'
import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [modelError, setModelError] = useState(false)

  useEffect(() => {
    // Verify model exists on startup
    fetch('/models/abstract_art.glb')
      .then(res => {
        if (!res.ok) {
          console.error('Model file missing!')
          setModelError(true)
        }
      })
      .catch(() => setModelError(true))
  }, [])

  return (
    <>
      <Head>
        <title>Marc Le - Contemporary Artist</title>
        {modelError && (
          <meta name="model-status" content="missing" />
        )}
      </Head>
      <CartProvider>
        {/* Global error boundary */}
        <div className="min-h-screen bg-gray-900 text-white">
          <Component {...pageProps} modelError={modelError} />
        </div>
      </CartProvider>
    </>
  )
}