import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, projects } from '../data'

interface Props {
  open: boolean
  onClose: () => void
}

type Item = {
  id: string
  label: string
  description: string
  action: () => void
}

export default function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const allItems: Item[] = [
    ...navLinks.map((l) => ({
      id: l.href,
      label: l.label,
      description: `Navigate to ${l.label}`,
      action: () => {
        document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    })),
    ...projects.map((p) => ({
      id: p.slug,
      label: p.name,
      description: p.description,
      action: () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    })),
  ]

  const filtered = allItems.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()),
  )

  useEffect(() => {
    setSelected(0)
  }, [query])

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelected(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') setSelected((s) => Math.min(s + 1, filtered.length - 1))
      if (e.key === 'ArrowUp') setSelected((s) => Math.max(s - 1, 0))
      if (e.key === 'Enter' && filtered[selected]) {
        filtered[selected].action()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, filtered, selected, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.65)',
              backdropFilter: 'blur(4px)',
              zIndex: 1000,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '18%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              maxWidth: 560,
              zIndex: 1001,
              padding: '0 16px',
            }}
          >
            <div
              style={{
                background: '#0f1117',
                border: '1px solid rgba(0,217,255,0.2)',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,217,255,0.1)',
              }}
            >
              {/* Search input */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 16px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{ color: '#00d9ff', flexShrink: 0 }}>
                  <path
                    d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search sections or projects..."
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#e2e8f0',
                    fontSize: 15,
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
                <kbd
                  style={{
                    padding: '2px 6px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    fontSize: 11,
                    color: '#8892a4',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div style={{ maxHeight: 320, overflowY: 'auto' }}>
                {filtered.length === 0 ? (
                  <div
                    style={{
                      padding: '32px 16px',
                      textAlign: 'center',
                      color: '#8892a4',
                      fontSize: 14,
                    }}
                  >
                    No results for "{query}"
                  </div>
                ) : (
                  filtered.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelected(i)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: '10px 16px',
                        background: i === selected ? 'rgba(0,217,255,0.08)' : 'transparent',
                        border: 'none',
                        borderLeft: `2px solid ${i === selected ? '#00d9ff' : 'transparent'}`,
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'background 0.1s',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: i === selected ? '#00d9ff' : '#e2e8f0',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: '#8892a4',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {item.description}
                      </span>
                    </button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: '8px 16px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'center',
                }}
              >
                {[
                  ['↑↓', 'navigate'],
                  ['↵', 'select'],
                  ['esc', 'close'],
                ].map(([key, label]) => (
                  <span
                    key={key}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#8892a4', fontSize: 11 }}
                  >
                    <kbd
                      style={{
                        padding: '1px 5px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 3,
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {key}
                    </kbd>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
