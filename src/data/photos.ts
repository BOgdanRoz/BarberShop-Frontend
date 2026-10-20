import heroBarber from '../assets/images/hero-barber.jpg'
import barber1 from '../assets/images/barber-1.jpg'
import barber2 from '../assets/images/barber-2.jpg'
import barber3 from '../assets/images/barber-3.jpg'
import galleryBeard from '../assets/images/gallery-2.jpg'
import galleryAtWork from '../assets/images/gallery-barber-at-work.jpg'
import galleryHistoric from '../assets/images/gallery-toledo-1895.jpg'

// Photos are third-party Wikimedia Commons images under free licenses; they do not depict
// the business or its staff. Credits are rendered in the footer. Replace with own photography when available.
export interface Photo {
  src: string
  alt: string
  credit: string
}

export const heroPhoto: Photo = {
  src: heroBarber,
  alt: 'Барбер стриже клієнта машинкою в перукарні',
  credit: 'Nenad Stojkovic, CC BY 2.0, Wikimedia Commons',
}

export const barberPhotos: Photo[] = [
  {
    src: barber1,
    alt: 'Барбер приносить стрижку і догляд за бородою клієнту',
    credit: 'Shixart1985, CC BY 2.0, Wikimedia Commons',
  },
  {
    src: barber2,
    alt: 'Барбер стриже молодого чоловіка, вид зі спини',
    credit: 'Nenad Stojkovic, CC BY 2.0, Wikimedia Commons',
  },
  {
    src: barber3,
    alt: 'Молоді чоловіки з актуальними стрижками в барбершопі',
    credit: 'Nenad Stojkovic, CC BY 2.0, Wikimedia Commons',
  },
]

export const aboutPhoto: Photo = {
  src: galleryHistoric,
  alt: 'Інтер’єр барбершопу з дерев’яними кріслами і дзеркалами',
  credit: 'Digital Public Library of America, public domain, Wikimedia Commons',
}

export const galleryPhotos: Photo[] = [
  {
    src: galleryAtWork,
    alt: 'Барбер за роботою в затишному барбершопі',
    credit: 'PattayaPatrol, CC BY-SA 4.0, Wikimedia Commons',
  },
  {
    src: galleryBeard,
    alt: 'Барбер формує бороду клієнта',
    credit: 'Gkbediako, CC BY-SA 4.0, Wikimedia Commons',
  },
  {
    src: galleryHistoric,
    alt: 'Інтер’єр барбершопу з дерев’яними кріслами і дзеркалами',
    credit: 'Digital Public Library of America, public domain, Wikimedia Commons',
  },
]
