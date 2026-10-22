import { useState } from 'react'
import { CheckCircle2, Sparkles } from 'lucide-react'
import styles from '../styles/Landing.module.scss'

const TABS = [
  {
    key: 'trader',
    label: '📈 Trader',
    cardTitle: 'Day Trader Tracker',
    cardSubtitle: 'Track P&L, discipline, and daily execution',
    badge: 'Trading',
    metrics: [
      { label: "Today's P&L", value: '+$1,240', positive: true },
      { label: 'Win Rate', value: '68%', positive: false },
      { label: 'Trades', value: '7', positive: false },
    ],
    checklist: [
      'Pre-market analysis completed',
      'Risk limits set before open',
      'Followed entry rules on all trades',
      'Journaled losing trades',
    ],
    prompt: 'Why did I overtrade on Wednesdays?',
  },
  {
    key: 'developer',
    label: '💻 Developer',
    cardTitle: 'Developer Daily Log',
    cardSubtitle: 'Track focus time, PRs, and learning goals',
    badge: 'Engineering',
    metrics: [
      { label: 'Focus Hours', value: '5.2h', positive: true },
      { label: 'PRs Merged', value: '3', positive: false },
      { label: 'Bugs Fixed', value: '4', positive: false },
    ],
    checklist: [
      'Morning standup prepared',
      'Deep work block completed',
      'Code review for 2 PRs',
      'Learned one new pattern',
    ],
    prompt: 'What correlates with my most productive days?',
  },
  {
    key: 'founder',
    label: '🚀 Founder',
    cardTitle: 'Founder Execution Log',
    cardSubtitle: 'Track growth, decisions, and momentum',
    badge: 'Startup',
    metrics: [
      { label: 'Revenue', value: '$12.4k', positive: true },
      { label: 'New Users', value: '142', positive: false },
      { label: 'NPS Score', value: '72', positive: false },
    ],
    checklist: [
      'Top 3 priorities set for the day',
      'Customer call completed',
      'Reviewed key metrics dashboard',
      'Delegated low-leverage tasks',
    ],
    prompt: 'What decisions led to our best growth weeks?',
  },
]

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState('trader')
  const tab = TABS.find((t) => t.key === activeTab)

  return (
    <section className={styles.interactiveDemo} id="interactive-demo">
      <div className={styles.interactiveDemoInner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>See It in Action</span>
          <h2 className={styles.sectionTitle}>
            One prompt. Infinite possibilities.
          </h2>
          <p className={styles.sectionSubtitle}>
            Click a role below to see how Planly instantly creates a custom tracker tailored to your world.
          </p>
        </div>

        <div className={styles.demoTabs}>
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`${styles.demoTab} ${
                activeTab === t.key ? styles.active : ''
              }`}
              onClick={() => setActiveTab(t.key)}
              id={`demo-tab-${t.key}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.demoPreview} key={activeTab}>
          <div className={styles.demoCard}>
            <div className={styles.demoCardHeader}>
              <div className={styles.demoCardTitle}>
                <span className={styles.title}>{tab.cardTitle}</span>
                <span className={styles.subtitle}>{tab.cardSubtitle}</span>
              </div>
              <span className={styles.demoCardBadge}>{tab.badge}</span>
            </div>

            <div className={styles.demoCardBody}>
              <div className={styles.demoMetricsRow}>
                {tab.metrics.map((m) => (
                  <div className={styles.demoMetric} key={m.label}>
                    <span className={styles.metricLabel}>{m.label}</span>
                    <span
                      className={`${styles.metricValue} ${
                        m.positive ? styles.positive : ''
                      }`}
                    >
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className={styles.demoChecklist}>
                {tab.checklist.map((item) => (
                  <div className={styles.demoCheckItem} key={item}>
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.demoPrompt}>
                <Sparkles size={16} />
                <span>Ask AI: "{tab.prompt}"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
