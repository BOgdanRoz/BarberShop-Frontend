interface LogoProps {
  className?: string
}

// Vintage barber emblem: crossed straight razors under a crown inside a ring.
// Single color via currentColor so it works on light and dark surfaces.
function Logo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <g fill="currentColor">
        <path d="M32 9 26 16l6-3 6 3z" />
        <rect x="29.5" y="16" width="5" height="3" />
      </g>
      <g fill="currentColor" transform="rotate(45 32 32)">
        <path d="M8 29h18l4-3h22l2 4-2 4H30l-4-3H8z" />
        <rect x="6" y="28" width="9" height="8" rx="2" />
        <rect x="26" y="26" width="4" height="12" />
      </g>
      <g fill="currentColor" transform="rotate(-45 32 32)">
        <path d="M8 29h18l4-3h22l2 4-2 4H30l-4-3H8z" />
        <rect x="6" y="28" width="9" height="8" rx="2" />
        <rect x="26" y="26" width="4" height="12" />
      </g>
      <circle cx="32" cy="32" r="2.6" fill="currentColor" />
    </svg>
  )
}

export default Logo
