import { useState, useEffect } from 'react'
import { Sparkles, Menu, X } from 'lucide-react'
import styles from '../styles/Landing.module.scss'
import brandLogo from '../assets/brand-logo.svg'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'AI Portability', href: '#ai-portability' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    setMobileOpen(false)
    if (href === '#features') {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
    } else if (href === '#how-it-works') {
      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
    } else if (href === '#use-cases') {
      document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' })
    } else if (href === '#ai-portability') {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToSignup = () => {
    setMobileOpen(false)
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.navInner}>
        <a href="#" className={styles.navBrand}>
          <img src={brandLogo} alt="Planly Logo" />
          <span className={styles.navBrandName}>Planly</span>
        </a>

        <div className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <span
              key={link.label}
              className={styles.navLink}
              onClick={() => scrollToSection(link.href)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToSection(link.href)}
            >
              {link.label}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button className={styles.navCta} onClick={scrollToSignup} id="nav-cta-btn">
            <Sparkles size={14} />
            Join Waitlist
          </button>
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <span
              key={link.label}
              className={styles.mobileNavLink}
              onClick={() => scrollToSection(link.href)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToSection(link.href)}
            >
              {link.label}
            </span>
          ))}
        </div>
      )}
    </nav>
  )
}
