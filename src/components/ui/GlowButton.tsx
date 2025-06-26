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
  const commonClasses = `pill-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan ${props.className || ''}`

  if (props.as === 'link') {
    const { as, ...rest } = props
    return (
      <a className={commonClasses} {...rest} tabIndex={0}>
        {props.children}
      </a>
    )
  }

  const { as, ...rest } = props
  return (
    <button className={commonClasses} {...rest} tabIndex={0}>
      {props.children}
    </button>
  )
}