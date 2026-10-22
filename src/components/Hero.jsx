import { useState } from 'react'
import {
  Sparkles,
  Mail,
  ArrowRight,
  CheckCircle2,
  Circle,
  MessageSquare,
  TrendingUp,
  ShieldCheck,
  Zap,
  Mic,
  Sliders,
  ChevronRight,
  Play
} from 'lucide-react'
import styles from '../styles/Landing.module.scss'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [checklistState, setChecklistState] = useState([true, true, true, false])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      setSubmitted(true)
    }
  }

  const toggleCheck = (index) => {
    setChecklistState((prev) => {
      const updated = [...prev]
      updated[index] = !updated[index]
      return updated
    })
  }

  return (
    <section className={styles.heroCentered} id="hero">
      {/* Ambient background glow & atmospheric clouds */}
      <div className={styles.heroSkyGlow} />
      <div className={styles.heroAtmosphere} />

      <div className={styles.heroCenteredInner}>
        {/* Top Header Section */}
        <div className={styles.heroCenteredHeader}>
          <div className={styles.heroBadge}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>AI-Powered Daily Execution Framework</span>
          </div>

          <h1 className={styles.heroTitleCentered}>
            With a <span className={styles.serifAccent}>strong</span> focus on <br />
            daily execution through <span className={styles.serifAccent}>AI</span>
          </h1>

          <p className={styles.heroSubtitleCentered}>
            Planly helps founders, traders, developers, and athletes turn strategy into a custom daily tracker in seconds. 
            Log with zero friction, uncover why you win, and take your AI blueprint anywhere.
          </p>

          {/* Centered Email Signup Form */}
          {!submitted ? (
            <form className={styles.signupFormCentered} onSubmit={handleSubmit} id="hero-signup-form">
              <div className={styles.signupInputGroupCentered}>
                <div className={styles.signupInputWrapperCentered}>
                  <Mail className={styles.inputIcon} />
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    id="hero-email-input"
                  />
                </div>
                <button type="submit" className={styles.signupBtnCentered} id="hero-signup-btn">
                  Claim Early Access
                  <ArrowRight size={16} />
                </button>
              </div>
              <p className={styles.signupMicrotextCentered}>
                🔒 Free early access • No credit card required • Join 500+ high performers
              </p>
            </form>
          ) : (
            <div className={styles.signupSuccessCentered} id="hero-signup-success">
              <CheckCircle2 size={18} />
              <span>🎉 You're on the early access list! We'll reach out shortly.</span>
            </div>
          )}
        </div>

        {/* 3-Part Showcase Grid: Left Flank + Center Main Dashboard + Right Flank */}
        <div className={styles.heroShowcaseGrid}>
          {/* Left Flanking Card (Testimonial & Social Proof) */}
          <div className={styles.showcaseFlankLeft}>
            <div className={styles.flankBadgeCircle}>
              <span className={styles.flankEmoji}>🏆</span>
            </div>

            <p className={styles.flankQuote}>
              “ THIS IS AN EXCEPTIONAL SYSTEM FOR HIGH PERFORMERS TO SYSTEMIZE THEIR DAILY HABITS. ”
            </p>

            <div className={styles.flankAuthor}>
              <div className={styles.authorName}>Austin Miller</div>
              <div className={styles.authorRole}>Funded Prop Trader & Founder</div>
            </div>

            <a href="#how-it-works" className={styles.flankActionBtn}>
              Explore System
              <ChevronRight size={14} />
            </a>
          </div>

          {/* Center Main Showcase Dashboard */}
          <div className={styles.showcaseCenter}>
            <div className={styles.dashboardFrame}>
              {/* Dashboard Top HUD */}
              <div className={styles.dashboardTopHud}>
                <div className={styles.hudAvatars}>
                  <span className={styles.hudAvatarPill}>
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Trader" />
                  </span>
                  <span className={styles.hudAvatarPill}>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Founder" />
                  </span>
                  <span className={styles.hudAvatarPill}>
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" alt="Athlete" />
                  </span>
                  <span className={styles.hudLiveBadge}>
                    <span className={styles.liveDot} />
                    LIVE SESSION
                  </span>
                </div>

                <div className={styles.hudTimePill}>
                  <span className={styles.recDot} />
                  <span>09:41 AM • NYC</span>
                </div>
              </div>

              {/* Dashboard Body Content */}
              <div className={styles.dashboardMainView}>
                {/* Highlight Stats Row */}
                <div className={styles.viewHeaderStats}>
                  <div className={styles.mainStatCard}>
                    <div className={styles.statLabel}>Today's Execution P&L</div>
                    <div className={styles.statValue}>+$1,480.00</div>
                    <div className={styles.statMeta}>
                      <TrendingUp size={14} />
                      <span>+14.2% vs baseline</span>
                    </div>
                  </div>

                  <div className={styles.disciplineScoreCard}>
                    <div className={styles.scoreTop}>
                      <ShieldCheck size={16} className={styles.scoreIcon} />
                      <span className={styles.scoreLabel}>Discipline Score</span>
                    </div>
                    <div className={styles.scoreValue}>96%</div>
                    <div className={styles.scoreBarTrack}>
                      <div className={styles.scoreBarFill} style={{ width: '96%' }} />
                    </div>
                  </div>
                </div>

                {/* Interactive Checklist Block */}
                <div className={styles.dashboardChecklist}>
                  <div className={styles.checklistHeader}>
                    <span>Today's Execution Protocol</span>
                    <span className={styles.checklistCount}>3 of 4 completed</span>
                  </div>

                  <div className={styles.checklistItems}>
                    <div
                      className={`${styles.checkRow} ${checklistState[0] ? styles.checkedRow : ''}`}
                      onClick={() => toggleCheck(0)}
                    >
                      {checklistState[0] ? (
                        <CheckCircle2 size={16} className={styles.checkIconActive} />
                      ) : (
                        <Circle size={16} className={styles.checkIconInactive} />
                      )}
                      <span>Pre-market catalyst review & macro levels verified</span>
                    </div>

                    <div
                      className={`${styles.checkRow} ${checklistState[1] ? styles.checkedRow : ''}`}
                      onClick={() => toggleCheck(1)}
                    >
                      {checklistState[1] ? (
                        <CheckCircle2 size={16} className={styles.checkIconActive} />
                      ) : (
                        <Circle size={16} className={styles.checkIconInactive} />
                      )}
                      <span>Hard 1.5% max risk stop-loss locked before open</span>
                    </div>

                    <div
                      className={`${styles.checkRow} ${checklistState[2] ? styles.checkedRow : ''}`}
                      onClick={() => toggleCheck(2)}
                    >
                      {checklistState[2] ? (
                        <CheckCircle2 size={16} className={styles.checkIconActive} />
                      ) : (
                        <Circle size={16} className={styles.checkIconInactive} />
                      )}
                      <span>Followed A+ playbook setup criteria</span>
                    </div>

                    <div
                      className={`${styles.checkRow} ${checklistState[3] ? styles.checkedRow : ''}`}
                      onClick={() => toggleCheck(3)}
                    >
                      {checklistState[3] ? (
                        <CheckCircle2 size={16} className={styles.checkIconActive} />
                      ) : (
                        <Circle size={16} className={styles.checkIconInactive} />
                      )}
                      <span>Post-market voice reflection logged to AI</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Bottom Controls / AI Interaction Bar */}
                <div className={styles.dashboardBottomBar}>
                  <div className={styles.controlPills}>
                    <button className={styles.controlBtn} title="Audio Log">
                      <Mic size={15} />
                    </button>
                    <button className={styles.controlBtn} title="Tracker Settings">
                      <Sliders size={15} />
                    </button>
                    <button className={styles.controlBtnPrimary} title="Trigger AI Audit">
                      <Sparkles size={15} />
                    </button>
                  </div>

                  <div className={styles.aiPromptChip}>
                    <MessageSquare size={14} className={styles.promptIcon} />
                    <span className={styles.promptText}>
                      Ask AI: <em>"Why do my highest win-rates occur before 11:30 AM?"</em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Flanking Card (Metric & High Performers) */}
          <div className={styles.showcaseFlankRight}>
            <div className={styles.flankAvatarRow}>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                alt="User"
                className={styles.flankAvatar}
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="User"
                className={styles.flankAvatar}
              />
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80"
                alt="User"
                className={styles.flankAvatar}
              />
            </div>

            <div className={styles.flankMetricBox}>
              <div className={styles.metricNumber}>25K+</div>
              <div className={styles.metricLabel}>DAILY LOGS TRACKED</div>
            </div>

            <div className={styles.flankFooterNote}>
              <span>We are chosen for</span>
              <strong>discipline & clarity</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
