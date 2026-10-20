import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { aboutContent } from '../../data/siteContent'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading title={aboutContent.title} lead={aboutContent.lead} tone="dark" />

        <ul className={styles.list}>
          {aboutContent.items.map((item, index) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
