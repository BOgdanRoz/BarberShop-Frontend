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
          <h1 className={styles.title}>
            <span className={styles.titleStart}>{heroContent.titleStart}</span>
            <span className={styles.titleAccent}>{heroContent.titleAccent}</span>
          </h1>
          <p className={styles.lead}>{heroContent.lead}</p>

          <div className={styles.actions}>
            <Button href={instagramUrl} variant="brown">
              {heroContent.primaryCta}
            </Button>
            <Button href="#services" variant="outline">
              {heroContent.secondaryCta}
            </Button>
          </div>

          <a className={styles.link} href={instagramUrl} target="_blank" rel="noopener noreferrer">
            {heroContent.linkText}
            <span className="visually-hidden"> (відкриється у новій вкладці)</span>
          </a>
        </div>

        <figure className={styles.media}>
          <div className={styles.frame}>
            <img
              className={styles.image}
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              width={1200}
              height={801}
              fetchPriority="high"
            />
          </div>
          <span className={styles.accent} aria-hidden="true" />
        </figure>
      </div>
    </section>
  )
}

export default Hero
