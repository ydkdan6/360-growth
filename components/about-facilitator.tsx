'use client'

import { motion } from 'framer-motion'

export default function AboutFacilitator() {
  return (
    <section id="about" className="relative py-32 sm:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#5E3BFF]/10 rounded-3xl blur-3xl" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0011%20%281%29-LrHYayXUKZZQDBWDpV360Bqg49epNb.jpeg"
              alt="Miracle Daniel"
              className="relative rounded-3xl shadow-2xl w-full border border-white/10"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-5xl sm:text-6xl font-800 text-white mb-8 text-balance tracking-tight">
              Meet <span className="text-[#5E3BFF]">Miracle Daniel</span>
            </h2>

            <p className="text-lg text-white/70 mb-6 leading-relaxed font-light">
              Miracle Daniel is an accomplished workplace leadership specialist with over a decade of experience transforming organizational cultures and developing high-performance teams.
            </p>

            <p className="text-lg text-white/70 mb-6 leading-relaxed font-light">
              As the founder of 360 Growth, he has worked with hundreds of professionals across various industries, helping them unlock their leadership potential and create meaningful impact.
            </p>

            <p className="text-lg text-white/70 mb-10 leading-relaxed font-light">
              His evidence-based approach combines cutting-edge leadership theory with real-world workplace challenges, ensuring participants gain practical, immediately applicable skills.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/8 transition-all"
              >
                <p className="text-4xl font-800 text-white">500+</p>
                <p className="text-white/50 text-xs mt-3 font-medium uppercase tracking-wide">Trained</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/8 transition-all"
              >
                <p className="text-4xl font-800 text-white">10+</p>
                <p className="text-white/50 text-xs mt-3 font-medium uppercase tracking-wide">Years</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/8 transition-all"
              >
                <p className="text-4xl font-800 text-white">98%</p>
                <p className="text-white/50 text-xs mt-3 font-medium uppercase tracking-wide">Satisfied</p>
              </motion.div>
            </div>

            <motion.a
              href="https://paystack.shop/pay/workplaceleadershipfw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#5E3BFF] text-white font-700 text-base transition-all duration-300 hover:shadow-2xl hover:shadow-[#5E3BFF]/30 hover:bg-[#7C4DFF] inline-block"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Enroll Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
