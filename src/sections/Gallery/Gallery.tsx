import { atmospherePhotos } from '../../data/photos'
import { galleryContent } from '../../data/siteContent'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import styles from './Gallery.module.css'
import SideDecor from '../../components/SideDecor/SideDecor'

// Asymmetric layout: one tall frame and two stacked frames with different proportions.
const layoutClasses = [styles.tall, styles.wide, styles.square]

function Gallery() {
  return (
    <section id="gallery" className={styles.section} data-header-theme="light">
      <SideDecor seed={5} />
      <div className={styles.inner}>
        <SectionHeading title={galleryContent.title} lead={galleryContent.lead} />

        <ul className={styles.grid}>
          {atmospherePhotos.map((photo, index) => (
            <li key={photo.src} className={layoutClasses[index]}>
              <img className={styles.image} src={photo.src} alt={photo.alt} width={1200} height={1200} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Gallery
