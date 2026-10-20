import type { Barber, SocialLink } from '../../data/barbers'
import styles from './BarberCard.module.css'

interface BarberCardProps {
  barber: Barber
}

// Minimal line icons drawn in currentColor. Decorative: the link has the accessible name.
function SocialIcon({ platform }: { platform: SocialLink['platform'] }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
  }

  switch (platform) {
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
        </svg>
      )
    case 'tiktok':
      return (
        <svg {...common}>
          <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
          <path d="M14 3c.4 2.8 2.2 4.6 5 5" />
        </svg>
      )
    case 'x':
      return (
        <svg {...common}>
          <path d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5" />
        </svg>
      )
  }
}

function BarberCard({ barber }: BarberCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.portrait}>
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
        <ul className={styles.socials} aria-label={`Соцмережі: ${barber.name}`}>
          {barber.socials.map((social) => (
            <li key={social.platform}>
              <a
                className={styles.social}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} (відкриється у новій вкладці)`}
              >
                <SocialIcon platform={social.platform} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default BarberCard
