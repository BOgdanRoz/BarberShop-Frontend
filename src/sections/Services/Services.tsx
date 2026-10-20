import Button from '../../components/Button/Button'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { services } from '../../data/services'
import { instagramUrl, servicesContent } from '../../data/siteContent'
import styles from './Services.module.css'

function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className={styles.aside}>
          <h2 className={styles.title}>
            {servicesContent.title} <span className={styles.accent}>{servicesContent.accent}</span>
          </h2>
          <p className={styles.lead}>{servicesContent.lead}</p>
          <Button href={instagramUrl} variant="gold">
            {servicesContent.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services
