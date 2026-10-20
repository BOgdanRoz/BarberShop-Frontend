interface ServiceIconProps {
  serviceId: string
}

// Simple line icons drawn in currentColor, one per service id from data/services.ts.
function ServiceIcon({ serviceId }: ServiceIconProps) {
  const common = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
  }

  switch (serviceId) {
    case 'clean-shave':
      return (
        <svg {...common}>
          <path d="M6 30 34 18l6 4-28 12z" />
          <path d="M34 18l6 4M10 33l-2 4" />
          <path d="M6 30v4l3 2" />
        </svg>
      )
    case 'haircut':
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="5" />
          <circle cx="14" cy="34" r="5" />
          <path d="M18 17 42 6M18 31 42 42M22 22l8 4" />
        </svg>
      )
    case 'beard-trim':
      return (
        <svg {...common}>
          <rect x="12" y="6" width="16" height="36" rx="3" />
          <path d="M12 14h16M20 42v4M20 46h0" />
          <path d="M28 16h8M28 22h6" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M24 6c-6 9-12 15-12 23a12 12 0 0 0 24 0c0-8-6-14-12-23z" />
          <path d="M18 30a6 6 0 0 0 6 6" />
        </svg>
      )
  }
}

export default ServiceIcon
