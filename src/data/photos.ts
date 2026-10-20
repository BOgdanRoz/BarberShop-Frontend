import heroBarber from '../assets/images/hero-barber.jpg'
import barber1 from '../assets/images/barber-1.jpg'
import barber2 from '../assets/images/barber-2.jpg'
import barber3 from '../assets/images/barber-3.jpg'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'

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

export const galleryPhotos: Photo[] = [
  {
    src: gallery1,
    alt: 'Барбер підстригає клієнта в барбершопі',
    credit: 'Gkbediako, CC BY-SA 4.0, Wikimedia Commons',
  },
  {
    src: gallery2,
    alt: 'Барбер формує бороду клієнта',
    credit: 'Gkbediako, CC BY-SA 4.0, Wikimedia Commons',
  },
  {
    src: gallery3,
    alt: 'Барбер стриже клієнта на вулиці',
    credit: 'Gkbediako, CC BY-SA 4.0, Wikimedia Commons',
  },
  {
    src: gallery4,
    alt: 'Стрижка просто неба в місті',
    credit: 'Peretz Partensky, CC BY-SA 2.0, Wikimedia Commons',
  },
]
