'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CinematicCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 28, stiffness: 250, mass: 0.5 }
  const dotConfig = { damping: 40, stiffness: 600, mass: 0.2 }

  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)
  const dotX = useSpring(mouseX, dotConfig)
  const dotY = useSpring(mouseY, dotConfig)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement
      if (el) {
        const style = window.getComputedStyle(el)
        const isLink = el.tagName === 'A' || el.tagName === 'BUTTON' || style.cursor === 'pointer'
        setIsPointer(isLink)
        const isHover = el.closest('[data-hover]') !== null || isLink
        setIsHovering(!!isHover)
      }
    }

    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [mouseX, mouseY, isVisible])

  if (typeof window === 'undefined') return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div
          className="rounded-full border transition-all duration-300"
          style={{
            width: isPointer ? 44 : 36,
            height: isPointer ? 44 : 36,
            borderColor: isHovering ? '#E8C97A' : 'rgba(201,168,76,0.7)',
            borderWidth: '1px',
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <div
          className="rounded-full"
          style={{
            width: isPointer ? 6 : 5,
            height: isPointer ? 6 : 5,
            backgroundColor: '#C9A84C',
            boxShadow: isHovering ? '0 0 12px rgba(201,168,76,0.8)' : '0 0 6px rgba(201,168,76,0.5)',
          }}
        />
      </motion.div>
    </>
  )
}
