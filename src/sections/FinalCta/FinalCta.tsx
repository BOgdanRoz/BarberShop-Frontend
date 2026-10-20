import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'
import { finalCtaContent, instagramUrl } from '../../data/siteContent'
import styles from './FinalCta.module.css'

function FinalCta() {
  return (
    <section id="instagram" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{finalCtaContent.title}</h2>
        <p className={styles.lead}>{finalCtaContent.lead}</p>
        <div>
          <Button href={instagramUrl} variant="brown">
            {finalCtaContent.cta}
          </Button>
        </div>
      </div>
      <Logo className={styles.watermark} />
    </section>
  )
}

export default FinalCta
