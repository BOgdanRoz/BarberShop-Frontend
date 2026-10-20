import { useState } from 'react'
import { testimonials } from '../../data/testimonials'
import { testimonialsContent } from '../../data/siteContent'
import styles from './Testimonials.module.css'

// Placeholder reviews are rendered one at a time with prev/next controls.
function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = testimonials.length
  const current = testimonials[activeIndex]

  const showPrevious = () => setActiveIndex((index) => (index - 1 + total) % total)
  const showNext = () => setActiveIndex((index) => (index + 1) % total)

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{testimonialsContent.title}</h2>

        <figure className={styles.slide} aria-live="polite">
          {current.isPlaceholder && <span className={styles.tag}>Зразок</span>}
          <blockquote className={styles.quote}>
            <p>{current.quote}</p>
          </blockquote>
          <figcaption className={styles.name}>{current.name}</figcaption>
        </figure>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.control}
            onClick={showPrevious}
            aria-label="Попередній відгук"
          >
            ‹
          </button>
          <span className={styles.counter}>
            {activeIndex + 1} / {total}
          </span>
          <button
            type="button"
            className={styles.control}
            onClick={showNext}
            aria-label="Наступний відгук"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
