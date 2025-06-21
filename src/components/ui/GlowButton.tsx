import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type BaseProps = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
}

type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'link'
}

type GlowButtonProps = ButtonProps | LinkProps

export default function GlowButton(props: GlowButtonProps) {
  const commonClasses = `
    relative
    bg-gradient-to-r
    from-purple-600
    to-blue-600
    text-white
    font-mono
    uppercase
    tracking-wider
    px-6
    rounded-md
    overflow-hidden
    transition-all
    duration-300
    hover:shadow-lg
    hover:shadow-purple-500/30
    before:absolute
    before:inset-0
    before:bg-gradient-to-r
    before:from-purple-500
    before:to-blue-500
    before:opacity-0
    before:hover:opacity-100
    before:transition-opacity
    before:duration-300
    before:-z-10
    ${props.className || ''}
  `

  if (props.as === 'link') {
    const { as, ...rest } = props
    return (
      <a className={commonClasses} {...rest}>
        {props.children}
      </a>
    )
  }

  const { as, ...rest } = props
  return (
    <button className={commonClasses} {...rest}>
      {props.children}
    </button>
  )
}