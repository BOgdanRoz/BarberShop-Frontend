import { barberPhotos } from './photos'
import type { Photo } from './photos'

// Social links point to official platform homepages until verified profiles are provided.
export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'x'
  label: string
  url: string
}

export interface Barber {
  name: string
  role: string
  photo: Photo
  socials: SocialLink[]
}

const defaultSocials: SocialLink[] = [
  { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/' },
  { platform: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/' },
  { platform: 'x', label: 'X', url: 'https://x.com/' },
]

const roles = ['Grindmaster', 'Топ-барбер', 'Барбер-початківець']
const names = ['Артур', 'Іван', 'Антон']

// Editable profile data. Names are first names only; add surnames only when approved.
export const barbers: Barber[] = barberPhotos.map((photo, index) => ({
  name: names[index],
  role: roles[index],
  photo,
  socials: defaultSocials,
}))
