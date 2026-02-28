import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { metrics } from '../data'

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    const start = performance.now()
    let raf: number

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}

function MetricCard({ value, label, suffix, delay }: { value: number; label: string; suffix: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useCountUp(value, inView)

  const formatted = count >= 1000 ? count.toLocaleString() : count.toString()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        flex: '1 1 200px',
        padding: '32px 24px',
        textAlign: 'center',
        borderRight: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 700,
          color: '#00d9ff',
          lineHeight: 1,
          marginBottom: 10,
          letterSpacing: '-0.03em',
        }}
      >
        {formatted}
        {suffix}
      </div>
      <div
        style={{
          fontSize: 12,
          color: '#8892a4',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {label}
      </div>
    </motion.div>
  )
}

export default function Metrics() {
  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(0,217,255,0.02)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {metrics.map((m, i) => (
          <MetricCard
            key={m.label}
            value={m.value}
            label={m.label}
            suffix={m.suffix}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  )
}
