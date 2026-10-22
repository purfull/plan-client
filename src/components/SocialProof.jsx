import styles from '../styles/Landing.module.scss'

const AUDIENCES = [
  { label: 'Day Traders', emoji: '📈' },
  { label: 'Software Engineers', emoji: '💻' },
  { label: 'Startup Founders', emoji: '🚀' },
  { label: 'Athletes & Coaches', emoji: '🏋️' },
]

export default function SocialProof() {
  return (
    <section className={styles.socialProof} id="use-cases">
      <div className={styles.socialProofInner}>
        <span className={styles.socialProofLabel}>Built for high performers</span>
        <div className={styles.badgeRow}>
          {AUDIENCES.map((a) => (
            <span className={styles.badge} key={a.label}>
              {a.emoji} {a.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
