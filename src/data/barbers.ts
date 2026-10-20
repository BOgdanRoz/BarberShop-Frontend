import { barberPhotos } from './photos'
import type { Photo } from './photos'

// Placeholder staff entries. Replace names, roles and photos with approved real details.
export interface Barber {
  name: string
  role: string
  photo: Photo
}

export const barbers: Barber[] = barberPhotos.map((photo) => ({
  name: 'Ім’я Прізвище',
  role: 'Барбер',
  photo,
}))
