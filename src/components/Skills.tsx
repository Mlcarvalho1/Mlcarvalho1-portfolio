import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data'
import SectionHeader from './SectionHeader'

const categoryColors: Record<string, string> = {
  Languages: '#00d9ff',
  Backend: '#7c3aed',
  Frontend: '#059669',
  'AI & Integrations': '#d97706',
  Mobile: '#db2777',
  'Infrastructure & DevOps': '#2563eb',
  'Leadership & Practices': '#475569',
}

function SkillTag({ label, color }: { label: string; color: string }) {
  const [r, g, b] = color.startsWith('#')
    ? [
        parseInt(color.slice(1, 3), 16),
        parseInt(color.slice(3, 5), 16),
        parseInt(color.slice(5, 7), 16),
      ]
    : [0, 217, 255]

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '5px 12px',
        background: `rgba(${r},${g},${b},0.08)`,
        border: `1px solid rgba(${r},${g},${b},0.2)`,
        borderRadius: 6,
        fontSize: 13,
        color: '#e2e8f0',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        transition: 'background 0.2s, border-color 0.2s',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.background = `rgba(${r},${g},${b},0.15)`
        ;(e.currentTarget as HTMLElement).style.borderColor = `rgba(${r},${g},${b},0.4)`
        ;(e.currentTarget as HTMLElement).style.color = color
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.background = `rgba(${r},${g},${b},0.08)`
        ;(e.currentTarget as HTMLElement).style.borderColor = `rgba(${r},${g},${b},0.2)`
        ;(e.currentTarget as HTMLElement).style.color = '#e2e8f0'
      }}
    >
      {label}
    </span>
  )
}

function SkillGroup({ group, index }: { group: (typeof skills)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const color = categoryColors[group.category] ?? '#00d9ff'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        padding: '24px',
        background: '#0f1117',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 4,
            height: 18,
            borderRadius: 2,
            background: color,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: '#e2e8f0',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.01em',
          }}
        >
          {group.category}
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {group.items.map((item) => (
          <SkillTag key={item} label={item} color={color} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '100px 24px',
      }}
    >
      <SectionHeader
        label="// skills"
        title="Technical Skills"
        subtitle="Tools and technologies I use to build production systems."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 16,
        }}
      >
        {skills.map((group, i) => (
          <SkillGroup key={group.category} group={group} index={i} />
        ))}
      </div>
    </section>
  )
}
