import { useEffect, useId, useRef, useState } from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import MobileMenu from '../MobileMenu/MobileMenu'
import { instagramUrl, navItems, siteName } from '../../data/siteContent'
import styles from './Header.module.css'

type HeaderTheme = 'light' | 'dark' | 'accent'

const themes: HeaderTheme[] = ['light', 'dark', 'accent']

// Reads the theme of the section under the header's vertical midpoint (data-header-theme attribute).
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<HeaderTheme>('light')
  const headerRef = useRef<HTMLElement>(null)
  const menuId = useId()

  useEffect(() => {
    let frame = 0

    const updateTheme = () => {
      frame = 0
      const header = headerRef.current
      if (!header) return

      const probeY = header.getBoundingClientRect().height / 2
      const sections = document.querySelectorAll<HTMLElement>('[data-header-theme]')
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= probeY && rect.bottom > probeY) {
          const next = themes.find((value) => value === section.dataset.headerTheme)
          if (next) setTheme(next)
          return
        }
      }
    }

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateTheme)
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // Light CTA on dark surfaces; brown CTA on light and accent surfaces.
  const ctaVariant = theme === 'dark' ? 'gold' : 'brown'

  return (
    <header ref={headerRef} className={styles.header} data-theme={theme}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <Logo className={styles.logo} />
          <span className={styles.brandName}>{siteName}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Основна навігація">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a className={styles.navLink} href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktopCta}>
          <Button href={instagramUrl} variant={ctaVariant}>
            Відкрити Instagram
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? 'Закрити' : 'Меню'}
        </button>
      </div>

      <MobileMenu id={menuId} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}

export default Header
