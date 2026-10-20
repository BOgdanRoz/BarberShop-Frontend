// PLACEHOLDER testimonials. They are not real customer reviews.
// Replace each entry with an approved review and set isPlaceholder to false (or remove the field).
export interface Testimonial {
  quote: string
  name: string
  isPlaceholder: boolean
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Текст відгуку клієнта. Замініть цей блок на схвалений відгук.',
    name: 'Ім’я Прізвище',
    isPlaceholder: true,
  },
  {
    quote: 'Текст відгуку батьків про дитячу стрижку. Замініть на схвалений відгук.',
    name: 'Ім’я Прізвище',
    isPlaceholder: true,
  },
  {
    quote: 'Текст відгуку клієнта про догляд за бородою. Замініть на схвалений відгук.',
    name: 'Ім’я Прізвище',
    isPlaceholder: true,
  },
]
