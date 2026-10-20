import { useEffect, useId, useState } from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import MobileMenu from '../MobileMenu/MobileMenu'
import { instagramUrl, navItems, siteName } from '../../data/siteContent'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
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
          <Button href={instagramUrl} variant="brown">
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
