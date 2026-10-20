import BarberCard from '../../components/BarberCard/BarberCard'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { barbers } from '../../data/barbers'
import { barbersContent } from '../../data/siteContent'
import styles from './Barbers.module.css'

function Barbers() {
  return (
    <section id="barbers" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading title={barbersContent.title} lead={barbersContent.lead} />

        <div className={styles.grid}>
          {barbers.map((barber, index) => (
            <BarberCard key={`${barber.name}-${index}`} barber={barber} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Barbers
