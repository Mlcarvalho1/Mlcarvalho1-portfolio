import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { experience } from '../data'
import SectionHeader from './SectionHeader'

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        background: 'rgba(0,217,255,0.08)',
        border: '1px solid rgba(0,217,255,0.15)',
        borderRadius: 100,
        fontSize: 11,
        color: '#00d9ff',
        fontFamily: 'JetBrains Mono, monospace',
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  )
}

function RoleCard({
  role,
  index,
  totalRoles,
}: {
  role: (typeof experience)[0]['roles'][0]
  index: number
  totalRoles: number
}) {
  const [expanded, setExpanded] = useState(index === 0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        paddingLeft: 28,
        paddingBottom: index < totalRoles - 1 ? 32 : 0,
      }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 6,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: role.current ? '#00d9ff' : '#141a24',
          border: `2px solid ${role.current ? '#00d9ff' : 'rgba(255,255,255,0.15)'}`,
          boxShadow: role.current ? '0 0 12px rgba(0,217,255,0.5)' : 'none',
          zIndex: 1,
        }}
      />

      {/* Role card */}
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <span
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#e2e8f0',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {role.title}
              </span>
              {role.current && (
                <span
                  style={{
                    padding: '2px 8px',
                    background: 'rgba(0,217,255,0.1)',
                    border: '1px solid rgba(0,217,255,0.25)',
                    borderRadius: 100,
                    fontSize: 10,
                    color: '#00d9ff',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                  }}
                >
                  CURRENT
                </span>
              )}
            </div>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                color: '#8892a4',
              }}
            >
              {role.period}
            </div>
          </div>
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            style={{
              color: '#8892a4',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.25s ease',
              flexShrink: 0,
              marginTop: 4,
            }}
          >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingTop: 16 }}>
              <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {role.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: 14,
                      color: '#8892a4',
                      lineHeight: 1.65,
                      paddingLeft: 4,
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>

              {role.tags && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                  {role.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CompanySection({ job, index }: { job: (typeof experience)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Company header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: '#e2e8f0',
              margin: 0,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {job.company}
          </h3>
          <span
            style={{
              fontSize: 13,
              color: '#8892a4',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {job.location}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: 0 }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 4,
            top: 16,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, rgba(0,217,255,0.3), rgba(0,217,255,0.05))',
          }}
        />
        {job.roles.map((role, ri) => (
          <RoleCard key={role.title} role={role} index={ri} totalRoles={job.roles.length} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '100px 24px',
      }}
    >
      <SectionHeader
        label="// experience"
        title="Professional Experience"
        subtitle="Building real production systems, end-to-end, from day one."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
        {experience.map((job, ji) => (
          <CompanySection key={job.company} job={job} index={ji} />
        ))}
      </div>
    </section>
  )
}
