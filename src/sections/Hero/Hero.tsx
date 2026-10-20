import Button from '../../components/Button/Button'
import { heroPhoto } from '../../data/photos'
import { heroContent, instagramUrl } from '../../data/siteContent'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{heroContent.eyebrow}</p>
          <h1 className={styles.title}>{heroContent.title}</h1>
          <p className={styles.lead}>{heroContent.lead}</p>
          <div className={styles.actions}>
            <Button href={instagramUrl} variant="gold">
              {heroContent.primaryCta}
            </Button>
            <Button href="#services" variant="ghost">
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>

        <figure className={styles.media}>
          <img
            className={styles.image}
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            width={1200}
            height={801}
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero
