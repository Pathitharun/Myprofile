import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => {
              el.classList.add('visible')
            })
            // Also handle the container itself if it has the class
            if (entry.target.classList.contains('reveal')) {
              entry.target.classList.add('visible')
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return ref
}
