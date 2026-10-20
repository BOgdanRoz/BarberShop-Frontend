import ServiceCard from '../../components/ServiceCard/ServiceCard'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { services } from '../../data/services'
import { servicesContent } from '../../data/siteContent'
import styles from './Services.module.css'

function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading title={servicesContent.title} lead={servicesContent.lead} tone="light" />

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <p className={styles.note}>{servicesContent.note}</p>
      </div>
    </section>
  )
}

export default Services
