import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  title: string
  lead?: string
  tone?: 'light' | 'dark'
}

function SectionHeading({ title, lead, tone = 'light' }: SectionHeadingProps) {
  return (
    <header className={`${styles.heading} ${styles[tone]}`}>
      <h2 className={styles.title}>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </header>
  )
}

export default SectionHeading
