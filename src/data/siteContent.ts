// All user-facing copy lives here. Replace placeholders with approved business details.
export const siteName = 'Барбершоп'
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
  title: 'Стрижка з увагою до кожної деталі',
  lead: 'Класичні та сучасні стрижки, догляд за бородою і спокійна атмосфера, де комфортно і дорослим, і дітям.',
  primaryCta: 'Переглянути роботи в Instagram',
  secondaryCta: 'Послуги та ціни',
}

export const servicesContent = {
  title: 'Послуги та ціни',
  lead: 'Чоловічі послуги та догляд за бородою. Дитячі стрижки проходять спокійно, без поспіху.',
  note: 'Ціни вказані в гривнях (₴). Актуальність цін варто уточнювати перед візитом.',
}

export interface AboutItem {
  title: string
  text: string
}

export const aboutContent: { title: string; lead: string; items: AboutItem[] } = {
  title: 'Чому обирають нас',
  lead: 'Ми працюємо повільно там, де це важливо: контур, лінія шиї, форма бороди. Результат має виглядати охайно не лише в день візиту.',
  items: [
    {
      title: 'Увага до деталей',
      text: 'Контур і форму перевіряємо до кінця, а не лише загальний силует стрижки.',
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
  lead: 'Стрижки, борода і робоча атмосфера барбершопу.',
}

export const testimonialsContent = {
  title: 'Відгуки клієнтів',
}

export const finalCtaContent = {
  title: 'Слідкуйте за нами в Instagram',
  lead: 'Дивіться роботи, актуальні стрижки та новини барбершопу.',
  cta: 'Відкрити Instagram',
}

export const footerContent = {
  description: 'Чоловічі та дитячі стрижки, догляд за бородою і гоління.',
  navTitle: 'Навігація',
  socialTitle: 'Соцмережі',
  creditsTitle: 'Фото',
}
