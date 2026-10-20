import { instagramUrl, navItems } from '../../data/siteContent'
import Button from '../Button/Button'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  id: string
  isOpen: boolean
  onClose: () => void
}

function MobileMenu({ id, isOpen, onClose }: MobileMenuProps) {
  return (
    <nav id={id} className={styles.menu} aria-label="Мобільна навігація" hidden={!isOpen}>
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a className={styles.link} href={`#${item.id}`} onClick={onClose}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.cta}>
        <Button href={instagramUrl} variant="brown">
          Відкрити Instagram
        </Button>
      </div>
    </nav>
  )
}

export default MobileMenu
