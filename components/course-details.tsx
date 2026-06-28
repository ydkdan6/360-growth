'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, DollarSign, Users } from 'lucide-react'

export default function CourseDetails() {
  const details = [
    {
      icon: Calendar,
      label: 'Date',
      value: '15th - 17th July 2026',
    },
    {
      icon: MapPin,
      label: 'Venue',
      value: 'Lagos, Nigeria',
    },
    {
      icon: Clock,
      label: 'Duration',
      value: '3 Days (9am - 5pm)',
    },
    {
      icon: DollarSign,
      label: 'Investment',
      value: '₦30,000 (Early Bird: ₦7,999)',
    },
    {
      icon: Users,
      label: 'Who Should Attend',
      value: 'Managers, Team Leads, Entrepreneurs, Professionals',
    },
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Course Details
          </h2>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="space-y-6">
            {details.map((detail, index) => {
              const Icon = detail.icon
              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 pb-6 border-b border-white/10 last:border-b-0 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#5E3BFF] to-[#7C4DFF]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm font-semibold mb-1">
                      {detail.label}
                    </p>
                    <p className="text-white text-lg font-semibold">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-8 pt-8 border-t border-white/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-white/70 mb-6">Ready to transform your leadership journey?</p>
            <motion.a
              href="https://paystack.shop/pay/workplaceleadershipfw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#5E3BFF] to-[#7C4DFF] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#5E3BFF]/50 transition-all inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Secure Your Spot Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
