import type { Service } from '../../data/services'
import { formatUah } from '../../utils/formatPrice'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  service: Service
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.index} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
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
