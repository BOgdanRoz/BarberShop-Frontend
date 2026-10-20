import type { Service } from '../../data/services'
import { formatUah } from '../../utils/formatPrice'
import ServiceIcon from '../ServiceIcon/ServiceIcon'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.item}>
      <span className={styles.icon}>
        <ServiceIcon serviceId={service.id} />
      </span>
      <h3 className={styles.name}>{service.name}</h3>
      <p className={styles.description}>{service.description}</p>
      <p className={styles.price}>
        <span className="visually-hidden">Ціна: </span>
        {formatUah(service.priceUah)}
      </p>
    </article>
  )
}

export default ServiceCard
