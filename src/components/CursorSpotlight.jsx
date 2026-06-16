import React, { useEffect, useRef } from 'react'

export default function CursorSpotlight() {
  const spotlightRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = e.clientX + 'px'
        spotlightRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={spotlightRef}
      className="fixed pointer-events-none z-0"
      style={{
        width: '600px',
        height: '600px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        transition: 'left 0.1s ease, top 0.1s ease',
      }}
    />
  )
}
