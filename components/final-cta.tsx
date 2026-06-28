'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative py-32 sm:py-40 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-800 text-white mb-8 text-balance tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            Ready to Transform Your Leadership?
          </motion.h2>

          <motion.p
            className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            Join hundreds of professionals transforming their leadership journey. Limited seats available at early bird pricing.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.a
              href="https://paystack.shop/pay/workplaceleadershipfw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 rounded-xl bg-[#5E3BFF] text-white font-700 text-base transition-all duration-300 hover:shadow-2xl hover:shadow-[#5E3BFF]/30 hover:bg-[#7C4DFF]"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Reserve My Seat
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 pt-14 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-white/50 text-sm mb-8 font-medium uppercase tracking-wide">Trusted by Leaders Worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              <div className="flex flex-col items-center gap-2">
                <p className="text-3xl font-800 text-white">500+</p>
                <p className="text-white/50 text-sm">Professionals Trained</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-3xl font-800 text-white">98%</p>
                <p className="text-white/50 text-sm">Satisfaction Rate</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-3xl font-800 text-white">24hrs</p>
                <p className="text-white/50 text-sm">Intensive Program</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
