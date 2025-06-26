import type { AppProps } from 'next/app'
import { CartProvider } from '../context/CartContext'
import { ThemeProvider } from '../context/ThemeContext'
import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Marc Le - Contemporary Artist</title>
      </Head>
      <CartProvider>
        {/* Global error boundary */}
        <div className="min-h-screen bg-gray-900 text-white">
          <Component {...pageProps} />
        </div>
      </CartProvider>
    </ThemeProvider>
  )
}