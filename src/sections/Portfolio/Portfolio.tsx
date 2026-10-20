import { useRef, useState } from 'react'
import type { KeyboardEvent, TouchEvent } from 'react'
import { portfolioPhotos } from '../../data/photos'
import { portfolioContent } from '../../data/siteContent'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import styles from './Portfolio.module.css'

const SWIPE_THRESHOLD_PX = 50

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const total = portfolioPhotos.length

  const goTo = (index: number) => setActiveIndex((index + total) % total)
  const goPrevious = () => goTo(activeIndex - 1)
  const goNext = () => goTo(activeIndex + 1)

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') goPrevious()
    if (event.key === 'ArrowRight') goNext()
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return
    if (delta < 0) goNext()
    else goPrevious()
  }

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading title={portfolioContent.title} lead={portfolioContent.lead} tone="dark" />

        <div
          className={styles.carousel}
          role="region"
          aria-roledescription="каруселі"
          aria-label="Роботи майстрів"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.viewport}>
            <ul
              className={styles.track}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {portfolioPhotos.map((photo, index) => (
                <li
                  key={photo.src}
                  className={styles.slide}
                  aria-roledescription="слайд"
                  aria-label={`${index + 1} з ${total}`}
                  aria-hidden={index !== activeIndex}
                >
                  <img className={styles.image} src={photo.src} alt={photo.alt} width={1024} height={1280} loading={index === 0 ? 'eager' : 'lazy'} />
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.controls}>
            <button type="button" className={styles.control} onClick={goPrevious} aria-label="Попередня робота">
              ‹
            </button>
            <p className={styles.counter} aria-live="polite">
              {activeIndex + 1} / {total}
            </p>
            <button type="button" className={styles.control} onClick={goNext} aria-label="Наступна робота">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
