import BarberCard from '../../components/BarberCard/BarberCard'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { barbers } from '../../data/barbers'
import { barbersContent } from '../../data/siteContent'
import styles from './Barbers.module.css'
import SideDecor from '../../components/SideDecor/SideDecor'

function Barbers() {
  return (
    <section id="barbers" className={styles.section} data-header-theme="dark">
      <SideDecor seed={4} />
      <div className={styles.inner}>
        <SectionHeading title={barbersContent.title} lead={barbersContent.lead} tone="dark" />

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
