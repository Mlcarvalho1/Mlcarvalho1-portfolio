import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { meta, education, languages } from '../data'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 64,
            alignItems: 'start',
          }}
        >
          {/* Left: Contact CTA */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 11,
                color: '#00d9ff',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 500,
              }}
            >
              // contact
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#e2e8f0',
                margin: '0 0 16px',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.1,
              }}
            >
              Let's Build
              <br />
              Something.
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#8892a4',
                lineHeight: 1.65,
                margin: '0 0 36px',
                maxWidth: 400,
              }}
            >
              Open to senior engineering roles, technical lead positions, and high-impact projects. Based in Recife —
              comfortable with async, remote-first environments.
            </p>

            <a
              href={`mailto:${meta.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 28px',
                background: '#00d9ff',
                color: '#0a0a0f',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 0 32px rgba(0,217,255,0.3)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.opacity = '0.88'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 48px rgba(0,217,255,0.45)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.opacity = '1'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(0,217,255,0.3)'
              }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {meta.email}
            </a>

            <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '10px 18px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  color: '#8892a4',
                  fontSize: 13,
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = '#e2e8f0'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = '#8892a4'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
                }}
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '10px 18px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  color: '#8892a4',
                  fontSize: 13,
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = '#e2e8f0'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = '#8892a4'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
                }}
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Education + Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            {/* Education */}
            <div
              id="education"
              style={{
                padding: '24px',
                background: '#0f1117',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 11,
                  color: '#00d9ff',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                Education
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#e2e8f0',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: 4,
                }}
              >
                {education.institution}
              </div>
              <div style={{ fontSize: 14, color: '#8892a4', marginBottom: 4 }}>{education.degree}</div>
              <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#8892a4', fontFamily: 'JetBrains Mono, monospace' }}>
                <span>{education.location}</span>
                <span>·</span>
                <span>{education.period}</span>
              </div>
            </div>

            {/* Languages */}
            <div
              style={{
                padding: '24px',
                background: '#0f1117',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 11,
                  color: '#00d9ff',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                Languages
              </div>
              {languages.map((l) => (
                <div
                  key={l.lang}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 14,
                    marginBottom: 8,
                    alignItems: 'baseline',
                    gap: 12,
                  }}
                >
                  <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{l.lang}</span>
                  <span style={{ color: '#8892a4', fontSize: 13, textAlign: 'right' }}>{l.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 80,
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 13,
              color: '#8892a4',
            }}
          >
            © 2026 Manoel L. Carvalho
          </span>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 12,
              color: '#8892a4',
            }}
          >
            Built with React + TypeScript + Vite
          </span>
        </div>
      </div>
    </section>
  )
}
