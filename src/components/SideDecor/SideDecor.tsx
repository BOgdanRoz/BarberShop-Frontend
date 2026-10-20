import styles from './SideDecor.module.css'

type OrnamentKind = 'razor' | 'comb' | 'scissors' | 'pole' | 'brush' | 'moustache' | 'clipper'

interface Ornament {
  kind: OrnamentKind
  side: 'left' | 'right'
  top: string
  rotate: number
  scale: number
}

// Positions are percentages of the page height. Ornaments sit in the side margins only.
const ornaments: Ornament[] = [
  { kind: 'razor', side: 'left', top: '7%', rotate: -18, scale: 1 },
  { kind: 'comb', side: 'right', top: '15%', rotate: 12, scale: 0.9 },
  { kind: 'pole', side: 'left', top: '26%', rotate: 0, scale: 0.8 },
  { kind: 'scissors', side: 'right', top: '36%', rotate: 24, scale: 1 },
  { kind: 'moustache', side: 'left', top: '48%', rotate: -6, scale: 0.9 },
  { kind: 'brush', side: 'right', top: '58%', rotate: -8, scale: 0.85 },
  { kind: 'clipper', side: 'left', top: '68%', rotate: -10, scale: 1 },
  { kind: 'razor', side: 'right', top: '78%', rotate: 30, scale: 0.8 },
  { kind: 'comb', side: 'left', top: '90%', rotate: 8, scale: 0.9 },
]

function OrnamentShape({ kind }: { kind: OrnamentKind }) {
  switch (kind) {
    case 'razor':
      return (
        <svg viewBox="0 0 48 48">
          <path d="M4 24 36 13l8 3-2 4-6 2L6 30z" fill="currentColor" />
          <rect x="6" y="26" width="10" height="5" rx="2" fill="currentColor" />
        </svg>
      )
    case 'comb':
      return (
        <svg viewBox="0 0 48 48">
          <rect x="12" y="3" width="24" height="10" rx="2" fill="currentColor" />
          <path d="M12 13h24v32H12z" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M15 13v28M18 13v28M21 13v28M24 13v28M27 13v28M30 13v28M33 13v28" stroke="currentColor" strokeWidth="0.9" />
        </svg>
      )
    case 'scissors':
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="14" cy="34" r="6" />
          <circle cx="34" cy="34" r="6" />
          <path d="M18 29 38 4M30 29 10 4" />
        </svg>
      )
    case 'pole':
      return (
        <svg viewBox="0 0 48 48">
          <rect x="14" y="2" width="20" height="44" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 10h20M14 38h20" stroke="currentColor" strokeWidth="2.5" />
          <path d="M18 40 30 8M24 40 36 8" stroke="currentColor" strokeWidth="3" />
        </svg>
      )
    case 'brush':
      return (
        <svg viewBox="0 0 48 48">
          <path d="M12 22c0-10 6-17 12-17s12 7 12 17z" fill="currentColor" />
          <rect x="18" y="22" width="12" height="22" rx="4" fill="currentColor" />
        </svg>
      )
    case 'moustache':
      return (
        <svg viewBox="0 0 48 48">
          <path d="M4 22c6-8 12-8 18 0 6-8 12-8 18 0-6 4-12 4-18 0-6 4-12 4-18 0z" fill="currentColor" />
        </svg>
      )
    case 'clipper':
      return (
        <svg viewBox="0 0 48 48">
          <rect x="16" y="4" width="16" height="6" fill="currentColor" />
          <rect x="11" y="10" width="26" height="34" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="18" y="18" width="12" height="14" rx="3" fill="currentColor" />
        </svg>
      )
  }
}

// Decorative only: hidden from assistive technology and never receives pointer events.
function SideDecor() {
  return (
    <div className={styles['side-decor']} aria-hidden="true">
      {ornaments.map((ornament, index) => (
        <span
          key={`${ornament.kind}-${index}`}
          className={styles['side-decor__item']}
          data-side={ornament.side}
          style={{
            top: ornament.top,
            transform: `rotate(${ornament.rotate}deg) scale(${ornament.scale})`,
          }}
        >
          <OrnamentShape kind={ornament.kind} />
        </span>
      ))}
    </div>
  )
}

export default SideDecor
