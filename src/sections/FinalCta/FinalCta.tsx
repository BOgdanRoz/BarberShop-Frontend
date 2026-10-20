import Button from '../../components/Button/Button'
import { finalCtaContent, instagramUrl } from '../../data/siteContent'
import styles from './FinalCta.module.css'

function FinalCta() {
  return (
    <section id="instagram" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{finalCtaContent.title}</h2>
        <p className={styles.lead}>{finalCtaContent.lead}</p>
        <div>
          <Button href={instagramUrl} variant="gold">
            {finalCtaContent.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FinalCta
