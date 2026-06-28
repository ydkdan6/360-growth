'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/2340706378716"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* Pulsing background circles */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full opacity-20"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Main button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all flex items-center justify-center w-16 h-16">
          <MessageCircle className="w-7 h-7" />
        </div>
      </div>
    </motion.a>
  )
}
