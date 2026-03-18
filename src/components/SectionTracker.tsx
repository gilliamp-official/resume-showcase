'use client'

import { useEffect } from 'react'

const SECTIONS = [
  { id: 'section-hero',     label: 'Hero' },
  { id: 'section-about',    label: 'About' },
  { id: 'section-impact',   label: 'Impact Numbers' },
  { id: 'section-work',     label: 'Featured Work' },
  { id: 'section-timeline', label: 'Career Timeline' },
  { id: 'section-howwork',  label: 'How I Work' },
  { id: 'section-education',label: 'Education' },
  { id: 'section-contact',  label: 'Contact' },
]

export default function SectionTracker() {
  useEffect(() => {
    const timers: Record<string, ReturnType<typeof setTimeout>> = {}
    const fired:  Record<string, boolean> = {}

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id    = entry.target.id
          const label = SECTIONS.find(s => s.id === id)?.label ?? id

          if (entry.isIntersecting) {
            if (fired[id]) return
            timers[id] = setTimeout(async () => {
              if (!fired[id]) {
                fired[id] = true
                await fetch('/api/analytics', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    page:      window.location.pathname,
                    section:   label,
                    userAgent: navigator.userAgent,
                    referrer:  document.referrer,
                    timestamp: Date.now(),
                    sessionId: sessionStorage.getItem('sessionId') ?? 'unknown',
                    eventType: 'section_view',
                  }),
                })
              }
            }, 3000)
          } else {
            clearTimeout(timers[id])
            delete timers[id]
          }
        })
      },
      { threshold: 0.3 }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
      Object.values(timers).forEach(clearTimeout)
    }
  }, [])

  return null
}