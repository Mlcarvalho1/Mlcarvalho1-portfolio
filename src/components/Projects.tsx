import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data'
import SectionHeader from './SectionHeader'

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 9px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 4,
        fontSize: 11,
        color: '#8892a4',
        fontFamily: 'JetBrains Mono, monospace',
      }}
    >
      {label}
    </span>
  )
}

function MetricBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        background: 'rgba(0,217,255,0.08)',
        border: '1px solid rgba(0,217,255,0.2)',
        borderRadius: 100,
        fontSize: 11,
        color: '#00d9ff',
        fontFamily: 'JetBrains Mono, monospace',
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0f1117',
        border: `1px solid ${hovered ? 'rgba(0,217,255,0.25)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,217,255,0.08)' : '0 2px 8px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Terminal header */}
      <div
        style={{
          padding: '12px 16px',
          background: '#141a24',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
            <div
              key={c}
              style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: hovered ? 1 : 0.5 }}
            />
          ))}
        </div>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 12,
            color: '#8892a4',
            marginLeft: 4,
          }}
        >
          ~/projects/{project.slug}
        </span>
        {project.highlight && (
          <span
            style={{
              marginLeft: 'auto',
              padding: '2px 8px',
              background: 'rgba(0,217,255,0.1)',
              border: '1px solid rgba(0,217,255,0.2)',
              borderRadius: 100,
              fontSize: 10,
              color: '#00d9ff',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 600,
              letterSpacing: '0.06em',
            }}
          >
            FEATURED
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#e2e8f0',
                margin: 0,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {project.name}
            </h3>
            <span
              style={{
                fontSize: 12,
                color: '#8892a4',
                fontFamily: 'JetBrains Mono, monospace',
                whiteSpace: 'nowrap',
              }}
            >
              {project.period}
            </span>
          </div>
          <p
            style={{
              fontSize: 14,
              color: '#8892a4',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {project.longDescription}
          </p>
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {project.metrics.map((m) => (
              <MetricBadge key={m} label={m} />
            ))}
          </div>
        )}

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 'auto' }}>
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: 'rgba(0,217,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader
          label="// projects"
          title="Things I've Built"
          subtitle="Production platforms used by tens of thousands of people daily."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))',
            gap: 20,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
