import { instagramUrl } from '../../data/siteContent'
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
        <div className={styles.caption}>
          <h3 className={styles.name}>{barber.name}</h3>
          <p className={styles.role}>{barber.role}</p>
        </div>
      </div>

      <div className={styles.bar}>
        <a
          className={styles.social}
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
          </svg>
          <span className="visually-hidden">Instagram майстра (відкриється у новій вкладці)</span>
        </a>
      </div>
    </article>
  )
}

export default BarberCard
