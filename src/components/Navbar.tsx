import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data'

interface Props {
  onOpenPalette: () => void
}

export default function Navbar({ onOpenPalette }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 24px',
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 700,
            fontSize: 18,
            color: '#00d9ff',
            letterSpacing: '-0.02em',
            textDecoration: 'none',
          }}
        >
          MLC
        </a>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                padding: '6px 12px',
                fontSize: 13,
                color: '#8892a4',
                fontWeight: 500,
                borderRadius: 6,
                transition: 'color 0.2s, background 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.color = '#e2e8f0'
                ;(e.target as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.color = '#8892a4'
                ;(e.target as HTMLElement).style.background = 'transparent'
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Cmd+K button */}
          <button
            onClick={onOpenPalette}
            style={{
              marginLeft: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 12px',
              background: 'rgba(0,217,255,0.08)',
              border: '1px solid rgba(0,217,255,0.2)',
              borderRadius: 6,
              color: '#00d9ff',
              cursor: 'pointer',
              fontSize: 12,
              fontFamily: 'JetBrains Mono, monospace',
              transition: 'background 0.2s, border-color 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,217,255,0.14)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,217,255,0.4)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,217,255,0.08)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,217,255,0.2)'
            }}
          >
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
              <path
                d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>⌘K</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: '#e2e8f0',
            cursor: 'pointer',
            padding: 4,
          }}
          className="mobile-hamburger"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: 'rgba(10,10,15,0.97)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '12px 0 16px',
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                setMobileOpen(false)
              }}
              style={{
                display: 'block',
                padding: '10px 24px',
                fontSize: 15,
                color: '#8892a4',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { onOpenPalette(); setMobileOpen(false) }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 24px',
              background: 'transparent',
              border: 'none',
              color: '#00d9ff',
              cursor: 'pointer',
              fontSize: 13,
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Search (⌘K)
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
