import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCart } from '../context/CartContext'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { totalItems, toggleCart } = useCart()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

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

  const themeIcon = theme === 'light' ? '🌞' : theme === 'dark' ? '🌚' : '💧'
  const themeLabel = theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'Blue'

  return (
    <header aria-label="Site navigation" className="nav">
      <div className="nav-content">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl" aria-label="Go to homepage">
          Marc Le
        </Link>
        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={router.pathname === item.path ? 'underline' : ''}
              tabIndex={0}
              aria-current={router.pathname === item.path ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Cart Icon */}
          <button
            onClick={toggleCart}
            className="relative p-2 hover:text-blue-500 transition-colors"
            aria-label={`Shopping cart with ${totalItems} items`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
