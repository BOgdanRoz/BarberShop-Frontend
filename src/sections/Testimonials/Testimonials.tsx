import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { testimonials } from '../../data/testimonials'
import { testimonialsContent } from '../../data/siteContent'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading title={testimonialsContent.title} tone="light" />

        <ul className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <li key={index} className={styles.item}>
              <figure className={styles.card}>
                {testimonial.isPlaceholder && <span className={styles.tag}>Зразок</span>}
                <blockquote className={styles.quote}>
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption className={styles.name}>{testimonial.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials
