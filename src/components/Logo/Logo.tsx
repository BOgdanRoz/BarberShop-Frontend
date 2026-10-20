interface LogoProps {
  className?: string
}

// Crossed blades with a pivot inside a ring. Inherits color via currentColor.
function Logo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15 13 33 35M33 13 15 35"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  )
}

export default Logo
