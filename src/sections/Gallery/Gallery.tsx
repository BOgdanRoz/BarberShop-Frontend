import { galleryPhotos } from '../../data/photos'
import { galleryContent } from '../../data/siteContent'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import styles from './Gallery.module.css'

function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading title={galleryContent.title} lead={galleryContent.lead} />

        <ul className={styles.grid}>
          {galleryPhotos.map((photo, index) => (
            <li key={photo.src} className={index === 0 ? styles.itemLarge : styles.item}>
              <img className={styles.image} src={photo.src} alt={photo.alt} width={1200} height={900} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Gallery
