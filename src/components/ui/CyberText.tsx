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
      font-mono
      text-accent-blue
      ${glow ? 'text-shadow-purple-glow' : ''}
      relative
      before:absolute 
      before:-bottom-1 
      before:left-0 
      before:w-full 
      before:h-0.5 
      before:bg-gradient-to-r 
      before:from-purple-500 
      before:to-blue-500 
      before:opacity-80
      ${className}
    `}>
      {children}
    </span>
  )
}