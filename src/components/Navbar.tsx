import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCart } from '../context/CartContext'
import CyberText from './ui/CyberText'
import GlowButton from './ui/GlowButton'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const { totalItems, toggleCart } = useCart()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Paintings', path: '/paintings' },
    { name: 'Photography', path: '/photography' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-purple-900/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <CyberText className="text-2xl md:text-3xl">
              MΛRC_LΞ
            </CyberText>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  router.pathname === item.path
                    ? 'text-purple-400 font-bold'
                    : 'text-gray-300 hover:text-purple-300'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <GlowButton 
              onClick={toggleCart}
              className="ml-6 px-4 py-2 text-xs"
            >
              CART ({totalItems})
            </GlowButton>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-300 hover:text-purple-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button className="p-2 text-gray-300 hover:text-purple-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}