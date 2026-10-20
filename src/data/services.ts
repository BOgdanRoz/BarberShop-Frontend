// Source prices are USD values from the "Services Section Example" reference.
// UAH = usdPrice * USD_TO_UAH_RATE, rounded to the nearest 50 UAH.
// Rate: National Bank of Ukraine official rate, 45.0791 UAH per 1 USD
// (bank.gov.ua NBUStatService, valcode=USD, exchangedate 21.10.2026, fetched during implementation).
// Update USD_TO_UAH_RATE when prices are re-checked; these are reference-based, not verified business prices.
export const USD_TO_UAH_RATE = 45.0791
const ROUNDING_STEP_UAH = 50

export interface Service {
  id: string
  name: string
  description: string
  usdPrice: number
  priceUah: number
}

const convertUsdToUah = (usd: number): number =>
  Math.round((usd * USD_TO_UAH_RATE) / ROUNDING_STEP_UAH) * ROUNDING_STEP_UAH

const serviceSources = [
  {
    id: 'clean-shave',
    name: 'Класичне гоління',
    description: 'Гоління бритвою з чітким контуром для гладкої шкіри.',
    usdPrice: 49,
  },
  {
    id: 'haircut',
    name: 'Стрижка',
    description: 'Стрижка з урахуванням форми голови, типу волосся та побажань.',
    usdPrice: 49,
  },
  {
    id: 'beard-trim',
    name: 'Підрівнювання бороди',
    description: 'Формування контуру та довжини бороди під ваш стиль.',
    usdPrice: 30,
  },
  {
    id: 'face-wash',
    name: 'Очищення обличчя',
    description: 'Очищення шкіри обличчя після стрижки або гоління.',
    usdPrice: 19,
  },
]

export const services: Service[] = serviceSources.map((service) => ({
  ...service,
  priceUah: convertUsdToUah(service.usdPrice),
}))
