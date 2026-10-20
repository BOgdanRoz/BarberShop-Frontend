// All user-facing copy lives here. Replace placeholders with approved business details.
export const siteName = "Men's Beard"
export const instagramUrl = 'https://www.instagram.com/'

export interface NavItem {
  id: string
  label: string
}

export const navItems: NavItem[] = [
  { id: 'services', label: 'Послуги' },
  { id: 'about', label: 'Про нас' },
  { id: 'barbers', label: 'Майстри' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'testimonials', label: 'Відгуки' },
]

export const heroContent = {
  eyebrow: 'Чоловічі та дитячі стрижки',
  titleStart: 'Стрижка з увагою',
  titleAccent: 'до кожної деталі.',
  lead: 'Класичні та сучасні стрижки, догляд за бородою і спокійна атмосфера, де комфортно і дорослим, і дітям.',
  primaryCta: 'Переглянути роботи в Instagram',
  secondaryCta: 'Послуги та ціни',
  linkText: 'Дивіться наші роботи в Instagram',
}

export const servicesContent = {
  title: 'Якість, яку видно',
  accent: 'в кожній деталі',
  lead: 'Послуги для чоловіків і догляд за бородою. Дитячі стрижки проходять спокійно і без поспіху.',
  note: 'Ціни вказані в гривнях (₴). Актуальність цін варто уточнювати перед візитом.',
  cta: 'Відкрити Instagram',
}

export interface AboutItem {
  title: string
  text: string
}

export const aboutContent: { title: string; lead: string; items: AboutItem[] } = {
  title: 'Хто ми',
  lead: 'Ми стрижемо чоловіків і дітей, і кожна стрижка для нас окрема робота. Контур, лінія шиї і форма бороди перевіряються до кінця.',
  items: [
    {
      title: 'Увага до деталей',
      text: 'Перевіряємо загальний силует, а також контур і лінію шиї.',
    },
    {
      title: 'Комфорт для дітей',
      text: 'Спокійний темп і пояснення кожного кроку, щоб перша стрижка проходила без страху.',
    },
    {
      title: 'Зрозумілі ціни',
      text: 'Вартість послуг вказана на сайті, щоб ви знали її ще до приходу.',
    },
  ],
}

export const barbersContent = {
  title: 'Наші майстри',
  lead: 'Команда, яка стриже чоловіків і дітей з однаковою увагою.',
}

export const galleryContent = {
  title: 'Стиль і атмосфера',
  lead: 'Робоча атмосфера, догляд за бородою і стрижки в спокійному темпі.',
}

export const testimonialsContent = {
  title: 'Наші клієнти',
}

export const finalCtaContent = {
  title: 'Слідкуйте за нами в Instagram',
  lead: 'Дивіться роботи майстрів, актуальні стрижки та новини барбершопу.',
  cta: 'Відкрити Instagram',
}

export const footerContent = {
  description: 'Чоловічі та дитячі стрижки, догляд за бородою і гоління.',
  navTitle: 'Навігація',
  socialTitle: 'Соцмережі',
}
