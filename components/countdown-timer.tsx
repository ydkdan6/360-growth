'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-07-05').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      key={`${label}-${value}`}
    >
      <motion.div
        className="bg-[#5E3BFF] rounded-2xl p-7 sm:p-9 min-w-24 sm:min-w-28 text-center hover:shadow-2xl hover:shadow-[#5E3BFF]/30 transition-all duration-300"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className="text-4xl sm:text-5xl font-800 text-white"
          key={value}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(value).padStart(2, '0')}
        </motion.p>
      </motion.div>
      <p className="text-white/50 text-xs sm:text-sm mt-4 font-600 tracking-wide uppercase">{label}</p>
    </motion.div>
  )

  return (
    <section className="relative py-20 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 sm:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-center text-white/60 text-base sm:text-lg mb-12 font-semibold tracking-wide uppercase">
            Early Bird Offer Ends In
          </h2>

          <div className="flex justify-center items-center gap-5 sm:gap-8 flex-wrap">
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="text-3xl sm:text-4xl font-300 text-white/30 hidden sm:block">:</div>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="text-3xl sm:text-4xl font-300 text-white/30 hidden sm:block">:</div>
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <div className="text-3xl sm:text-4xl font-300 text-white/30 hidden sm:block">:</div>
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>

          <motion.p
            className="text-center text-white/60 mt-12 text-sm sm:text-base font-light"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Secure your spot with exclusive early bird pricing before it expires
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
