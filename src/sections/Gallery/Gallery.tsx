import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { galleryPhotos } from '../../data/photos'
import { galleryContent } from '../../data/siteContent'
import styles from './Gallery.module.css'

function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading title={galleryContent.title} lead={galleryContent.lead} tone="dark" />

        <ul className={styles.grid}>
          {galleryPhotos.map((photo) => (
            <li key={photo.src} className={styles.item}>
              <img className={styles.image} src={photo.src} alt={photo.alt} width={1200} height={900} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Gallery
