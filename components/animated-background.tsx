'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Particle {
  id: number
  x1: number
  y1: number
  x2: number
  y2: number
  duration: number
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x1: Math.random() * window.innerWidth,
        y1: Math.random() * window.innerHeight,
        x2: Math.random() * window.innerWidth,
        y2: Math.random() * window.innerHeight,
        duration: Math.random() * 20 + 10,
      }))
    )
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#13043D] via-[#1A0B52] to-[#2B1475]" />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 -left-40 w-80 h-80 bg-[#5E3BFF] rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-80 h-80 bg-[#7C4DFF] rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#F6C445] rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particle effect — only rendered after mount */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          initial={{ x: p.x1, y: p.y1 }}
          animate={{ x: p.x2, y: p.y2 }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  )
}