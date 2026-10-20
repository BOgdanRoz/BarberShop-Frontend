import type { Barber } from '../../data/barbers'
import styles from './BarberCard.module.css'

interface BarberCardProps {
  barber: Barber
}

function BarberCard({ barber }: BarberCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.frame}>
        <img
          className={styles.image}
          src={barber.photo.src}
          alt={barber.photo.alt}
          width={1200}
          height={1500}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{barber.name}</h3>
        <p className={styles.role}>{barber.role}</p>
      </div>
    </article>
  )
}

export default BarberCard
