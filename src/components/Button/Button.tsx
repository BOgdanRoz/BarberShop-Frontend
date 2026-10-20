import type { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'brown' | 'gold' | 'ghost'

interface ButtonProps {
  href: string
  variant?: ButtonVariant
  children: ReactNode
}

// Anchor-based button: internal links scroll to sections, external links open Instagram in a new tab.
function Button({ href, variant = 'brown', children }: ButtonProps) {
  const isExternal = href.startsWith('http')

  return (
    <a
      className={`${styles.button} ${styles[variant]}`}
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {isExternal && <span className="visually-hidden"> (відкриється у новій вкладці)</span>}
    </a>
  )
}

export default Button
