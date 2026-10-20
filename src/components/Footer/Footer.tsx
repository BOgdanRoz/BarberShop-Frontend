import Logo from '../Logo/Logo'
import {
  footerContent,
  instagramUrl,
  navItems,
  siteName,
} from '../../data/siteContent'
import { barberPhotos, galleryPhotos, heroPhoto } from '../../data/photos'
import styles from './Footer.module.css'

const credits = [heroPhoto, ...barberPhotos, ...galleryPhotos].map((photo) => photo.credit)
const uniqueCredits = [...new Set(credits)]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <a href="#top" className={styles.brand}>
            <Logo className={styles.logo} />
            <span>{siteName}</span>
          </a>
          <p className={styles.description}>{footerContent.description}</p>
        </div>

        <nav className={styles.column} aria-label="Навігація у футері">
          <h2 className={styles.heading}>{footerContent.navTitle}</h2>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a className={styles.link} href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.column}>
          <h2 className={styles.heading}>{footerContent.socialTitle}</h2>
          <ul className={styles.list}>
            <li>
              <a
                className={styles.link}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <span className="visually-hidden"> (відкриється у новій вкладці)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.inner}>
          <div className={styles.credits}>
            <h2 className={styles.heading}>{footerContent.creditsTitle}</h2>
            <ul className={styles.creditList}>
              {uniqueCredits.map((credit) => (
                <li key={credit}>{credit}</li>
              ))}
            </ul>
          </div>
          <p className={styles.copyright}>© {new Date().getFullYear()} {siteName}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
