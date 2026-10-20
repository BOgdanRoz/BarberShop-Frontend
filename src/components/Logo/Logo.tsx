interface LogoProps {
  className?: string
}

// Moustache over a beard inside a ring. Inherits color via currentColor.
function Logo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 30Q22 21 32 30Q42 21 52 30Q44 31 38 34Q32 31 26 34Q20 31 12 30Z"
        fill="currentColor"
      />
      <path d="M20 35Q20 56 32 56Q44 56 44 35Q40 41 32 41Q24 41 20 35Z" fill="currentColor" />
    </svg>
  )
}

export default Logo
