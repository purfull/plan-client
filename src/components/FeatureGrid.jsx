import {
  MessageSquare,
  Sliders,
  Paintbrush,
  Mic,
  BarChart3,
  Share2,
} from 'lucide-react'
import styles from '../styles/Landing.module.scss'

const FEATURES = [
  {
    step: 1,
    icon: <MessageSquare size={20} />,
    title: 'Speak Your Plan',
    desc: 'Describe your goals in natural language. "I\'m a day trader tracking P&L, risk management, and daily discipline." That\'s it.',
  },
  {
    step: 2,
    icon: <Sliders size={20} />,
    title: 'Instant Custom Layout',
    desc: 'AI generates a tailored tracker with the exact metrics, rules, and input fields you need — no templates, no setup.',
  },
  {
    step: 3,
    icon: <Paintbrush size={20} />,
    title: 'Natural Language Tweaks',
    desc: '"Make P&L bigger and use gold accents." Redesign your tracker with plain English. No drag-and-drop needed.',
  },
  {
    step: 4,
    icon: <Mic size={20} />,
    title: 'Frictionless Logging',
    desc: 'Log your day in 10 seconds via voice, text, or images. No more friction means you actually stick with it.',
  },
  {
    step: 5,
    icon: <BarChart3 size={20} />,
    title: 'Pattern Recognition',
    desc: 'AI analyzes your logs to surface insights: "You win more on days you skip afternoon trades." Data-driven clarity.',
  },
  {
    step: 6,
    icon: <Share2 size={20} />,
    title: 'Portable AI Blueprints',
    desc: 'Export your plan as a structured AI skill. Use it in ChatGPT, Claude, or any LLM. Your system, everywhere.',
  },
]

export default function FeatureGrid() {
  return (
    <section className={styles.featureGrid} id="features">
      <div className={styles.featureGridInner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>6 Core Pillars</span>
          <h2 className={styles.sectionTitle}>
            From idea to daily system in minutes
          </h2>
          <p className={styles.sectionSubtitle}>
            Every feature is designed to eliminate friction between your strategy and daily execution.
          </p>
        </div>

        <div className={styles.features}>
          {FEATURES.map((f) => (
            <div className={styles.featureCard} key={f.step}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className={styles.featureStep}>{f.step}</span>
                <div className={styles.featureIcon}>{f.icon}</div>
              </div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
