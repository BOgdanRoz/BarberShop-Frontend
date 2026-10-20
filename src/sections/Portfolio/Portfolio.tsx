import { portfolioPhotos } from '../../data/photos'
import { portfolioContent } from '../../data/siteContent'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import styles from './Portfolio.module.css'
import SideDecor from '../../components/SideDecor/SideDecor'

// The sequence is rendered twice. The track animates by exactly one sequence width,
// so the loop restarts without a visible jump. Copies are decorative and hidden from assistive tech.
function Portfolio() {
  return (
    <section id="portfolio" className={styles.section} data-header-theme="dark">
      <SideDecor seed={6} />
      <div className={styles.inner}>
        <SectionHeading title={portfolioContent.title} lead={portfolioContent.lead} tone="dark" />
      </div>

      <div className={styles.viewport}>
        <ul className={styles.track}>
          {portfolioPhotos.map((photo) => (
            <li key={photo.src} className={styles.item}>
              <img className={styles.image} src={photo.src} alt={photo.alt} loading="lazy" />
            </li>
          ))}
          {portfolioPhotos.map((photo) => (
            <li key={`${photo.src}-copy`} className={`${styles.item} ${styles.copy}`} aria-hidden="true">
              <img className={styles.image} src={photo.src} alt="" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
