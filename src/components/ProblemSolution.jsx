import { BookOpen, Table, Zap, X, CheckCircle2, Minus } from 'lucide-react'
import styles from '../styles/Landing.module.scss'

const CARDS = [
  {
    type: 'problem',
    icon: <BookOpen size={22} />,
    title: 'Messy Notebooks',
    points: [
      { text: 'Hard to search or find patterns', positive: false },
      { text: 'No structure or consistency', positive: false },
      { text: 'Scattered across devices', positive: false },
    ],
  },
  {
    type: 'problem',
    icon: <Table size={22} />,
    title: 'Tedious Spreadsheets',
    points: [
      { text: 'Boring and ugly to look at', positive: false },
      { text: 'Takes hours to set up properly', positive: false },
      { text: 'No intelligence or insights', positive: false },
    ],
  },
  {
    type: 'solution',
    icon: <Zap size={22} />,
    title: 'Planly',
    badge: '✨ Recommended',
    points: [
      { text: 'Instant AI-created tracker layout', positive: true },
      { text: 'Beautiful, motivating visual design', positive: true },
      { text: 'Portable AI blueprints you own', positive: true },
    ],
  },
]

export default function ProblemSolution() {
  return (
    <section className={styles.problemSolution} id="how-it-works">
      <div className={styles.problemSolutionInner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Why Planly?</span>
          <h2 className={styles.sectionTitle}>
            Your current system is holding you back
          </h2>
          <p className={styles.sectionSubtitle}>
            Notebooks get lost. Spreadsheets feel like work. Planly makes daily tracking feel effortless.
          </p>
        </div>

        <div className={styles.comparisonGrid}>
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`${styles.comparisonCard} ${
                card.type === 'solution' ? styles.solution : styles.problem
              }`}
            >
              {card.badge && (
                <span className={styles.solutionBadge}>{card.badge}</span>
              )}
              <div className={styles.comparisonIcon}>{card.icon}</div>
              <h3 className={styles.comparisonTitle}>{card.title}</h3>
              <div className={styles.comparisonPoints}>
                {card.points.map((pt) => (
                  <div
                    key={pt.text}
                    className={`${styles.comparisonPoint} ${
                      pt.positive ? styles.positive : ''
                    }`}
                  >
                    {pt.positive ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <Minus size={16} />
                    )}
                    <span>{pt.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
