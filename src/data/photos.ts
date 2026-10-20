import heroBarber from '../assets/images/hero-barber.jpg'
import atmosphere1 from '../assets/images/web/atmosphere1.jpg'
import atmosphere2 from '../assets/images/web/atmosphere2.jpg'
import atmosphere3 from '../assets/images/web/atmosphere3.jpg'
import barber1 from '../assets/images/web/barber1.jpg'
import barber2 from '../assets/images/web/barber2.jpg'
import barber3 from '../assets/images/web/barber3.jpg'
import portfolio1 from '../assets/images/web/portfolio1.jpg'
import portfolio2 from '../assets/images/web/portfolio2.jpg'
import portfolio3 from '../assets/images/web/portfolio3.jpg'
import portfolio4 from '../assets/images/web/portfolio4.jpg'
import portfolio5 from '../assets/images/web/portfolio5.jpg'
import portfolio6 from '../assets/images/web/portfolio6.jpg'

// Image sources and licenses are listed in docs/IMAGE_CREDITS.md.
export interface Photo {
  src: string
  alt: string
}

export const heroPhoto: Photo = {
  src: heroBarber,
  alt: 'Барбер стриже клієнта машинкою в перукарні',
}

export const atmospherePhotos: Photo[] = [
  { src: atmosphere1, alt: 'Атмосфера барбершопу, фото 1' },
  { src: atmosphere2, alt: 'Атмосфера барбершопу, фото 2' },
  { src: atmosphere3, alt: 'Атмосфера барбершопу, фото 3' },
]

export const barberPhotos: Photo[] = [
  { src: barber1, alt: 'Портрет майстра, фото 1' },
  { src: barber2, alt: 'Портрет майстра, фото 2' },
  { src: barber3, alt: 'Портрет майстра, фото 3' },
]

export const portfolioPhotos: Photo[] = [
  { src: portfolio1, alt: 'Роботи майстрів, фото 1 з 6' },
  { src: portfolio2, alt: 'Роботи майстрів, фото 2 з 6' },
  { src: portfolio3, alt: 'Роботи майстрів, фото 3 з 6' },
  { src: portfolio4, alt: 'Роботи майстрів, фото 4 з 6' },
  { src: portfolio5, alt: 'Роботи майстрів, фото 5 з 6' },
  { src: portfolio6, alt: 'Роботи майстрів, фото 6 з 6' },
]
