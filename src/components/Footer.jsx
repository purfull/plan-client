import styles from '../styles/Landing.module.scss'
import brandLogo from '../assets/brand-logo.svg'

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <img src={brandLogo} alt="Planly" />
          <span>Planly</span>
        </div>

        <p className={styles.footerSlogan}>Plan it. Log it. Improve.</p>

        <div className={styles.footerLinks}>
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} className={styles.footerLink}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.footerDivider} />

        <p className={styles.footerCopyright}>
          © {new Date().getFullYear()} Planly. All rights reserved. Built with ✨ and AI.
        </p>
      </div>
    </footer>
  )
}
