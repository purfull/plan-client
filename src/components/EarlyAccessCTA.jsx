import { useState } from 'react'
import { Mail, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import styles from '../styles/Landing.module.scss'

export default function EarlyAccessCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      setSubmitted(true)
    }
  }

  return (
    <section className={styles.earlyAccessCta} id="early-access">
      <div className={styles.ctaBox}>
        <Sparkles size={28} style={{ color: '#D97706' }} />
        
        <h2 className={styles.ctaTitle}>
          Ready to bridge the gap between strategy and daily execution?
        </h2>
        
        <p className={styles.ctaSubtitle}>
          Join 500+ traders, founders, and developers who are building better daily systems with AI.
        </p>

        {!submitted ? (
          <form className={styles.ctaForm} onSubmit={handleSubmit} id="cta-signup-form">
            <div className={styles.ctaInputGroup}>
              <div className={styles.ctaInputWrapper}>
                <Mail className={styles.inputIcon} />
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="cta-email-input"
                />
              </div>
              <button type="submit" className={styles.ctaBtn} id="cta-signup-btn">
                Claim Early Access
                <ArrowRight size={16} />
              </button>
            </div>
            <p className={styles.ctaMicrotext}>
              🔒 Free early access. No credit card required.
            </p>
          </form>
        ) : (
          <div className={styles.ctaSuccess} id="cta-signup-success">
            <CheckCircle2 size={18} />
            🎉 You're on the early access list!
          </div>
        )}
      </div>
    </section>
  )
}
