import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile, meta } from '../data'
import SectionHeader from './SectionHeader'

type Highlight = { icon: React.ReactNode; title: string; desc: string }

function HighlightCard({ item, index }: { item: Highlight; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: '18px 16px',
        background: '#0f1117',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,217,255,0.2)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'
      }}
    >
      {item.icon}
      <div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: '#e2e8f0',
            marginBottom: 4,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {item.title}
        </div>
        <div style={{ fontSize: 12, color: '#8892a4', lineHeight: 1.5 }}>{item.desc}</div>
      </div>
    </motion.div>
  )
}

const highlights = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00d9ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Backend-First',
    desc: 'Node.js, NestJS, PostgreSQL, microservices — I build the systems that run at scale.',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="#00d9ff" strokeWidth="2" />
        <path d="M12 18h.01" stroke="#00d9ff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Full Platform',
    desc: 'React + Next.js web, React Native iOS & Android — shipped on both major app stores.',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#00d9ff" strokeWidth="2" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="#00d9ff" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 17h.01" stroke="#00d9ff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Technical Lead',
    desc: 'Mentoring engineers, defining architecture, shipping roadmaps — across fintech & healthcare.',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00d9ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'AI & Integrations',
    desc: 'Google Gemini, Dock BaaS, BACEN compliance — complex third-party systems, done right.',
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="about"
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '100px 24px',
      }}
    >
      <SectionHeader
        label="// about"
        title="About Me"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 56,
          alignItems: 'start',
        }}
      >
        {/* Bio */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontSize: 16,
              color: '#8892a4',
              lineHeight: 1.75,
              margin: '0 0 24px',
            }}
          >
            {profile}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              ['Location', meta.location],
              ['Email', meta.email],
              ['GitHub', meta.githubLabel],
              ['LinkedIn', meta.linkedinLabel],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{ display: 'flex', gap: 12, fontSize: 14, alignItems: 'baseline' }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 11,
                    color: '#00d9ff',
                    minWidth: 72,
                    letterSpacing: '0.04em',
                  }}
                >
                  {label}
                </span>
                <span style={{ color: '#8892a4' }}>{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {highlights.map((h, i) => (
            <HighlightCard key={h.title} item={h} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
