import { aboutContent } from '../../data/siteContent'
import Logo from '../../components/Logo/Logo'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.emblem}>
          <Logo className={styles.emblemLogo} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>{aboutContent.title}</h2>
          <p className={styles.lead}>{aboutContent.lead}</p>

          <ul className={styles.list}>
            {aboutContent.items.map((item, index) => (
              <li key={item.title} className={styles.item}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
