import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  label: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ label, title, subtitle }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: 56 }}
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
        {label}
      </div>
      <h2
        style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          color: '#e2e8f0',
          margin: '0 0 14px',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 16,
            color: '#8892a4',
            margin: 0,
            maxWidth: 540,
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
