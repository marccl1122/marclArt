import { ReactNode } from 'react'

type CyberTextProps = {
  children: ReactNode
  className?: string
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl'
  glow?: boolean
}

export default function CyberText({ 
  children, 
  className = '', 
  size = 'base', 
  glow = true 
}: CyberTextProps) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  }

  return (
    <span className={`
      ${sizeClasses[size]}
      font-sora font-extrabold
      text-accent-blue
      ${glow ? 'text-glow' : ''}
      uppercase
      tracking-widest
      ${className}
    `} tabIndex={0}>
      {children}
    </span>
  )
}