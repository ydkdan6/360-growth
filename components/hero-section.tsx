'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
// import { Sparkles } from 'lucide-react'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            {/* <motion.div variants={itemVariants} className="mb-8">
              <Badge className="bg-[#5E3BFF]/20 text-[#5E3BFF] border border-[#5E3BFF]/30 px-4 py-2 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3 h-3 inline mr-2" />
                Limited Time Offer
              </Badge>
            </motion.div> */}

            <motion.h1
              variants={itemVariants}
              className="text-6xl lg:text-7xl font-800 text-white mb-8 leading-tight text-balance tracking-tight"
            >
              Workplace
              <br />
              <span className="text-[#5E3BFF]">Leadership</span>
              <br />
              Framework
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg text-balance font-light"
            >
              Become the leader every workplace needs. Join Miracle Daniel for a transformative 3-day leadership development program designed for today 's workplace challenges.
            </motion.p>

            {/* Pricing Section */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300">
                <p className="text-white/50 text-sm mb-3 font-medium">Early Bird</p>
                <p className="text-3xl font-700 text-white">₦7,999</p>
                <p className="text-white/40 text-xs mt-2">26th June - 5th July</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300">
                <p className="text-white/50 text-sm mb-3 font-medium">Regular</p>
                <p className="text-3xl font-700 text-white">₦30,000</p>
                <p className="text-white/40 text-xs mt-2">After Early Bird</p>
              </div>
            </motion.div>

            {/* Course Start Date */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-10 w-fit hover:bg-white/8 transition-all duration-300"
            >
              <p className="text-white/50 text-sm mb-2 font-medium">Class Starts</p>
              <p className="text-2xl font-700 text-white">15th July 2026</p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://paystack.shop/pay/workplaceleadershipfw"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#5E3BFF] text-white font-700 text-base transition-all duration-300 hover:shadow-2xl hover:shadow-[#5E3BFF]/30 hover:bg-[#7C4DFF] inline-block text-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Enroll Now
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-full min-h-[500px] lg:min-h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Soft glow background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5E3BFF]/10 to-[#5E3BFF]/5 blur-3xl" />
            
            {/* Main Image */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0011%20%281%29-LrHYayXUKZZQDBWDpV360Bqg49epNb.jpeg"
                alt="Miracle Daniel - Workplace Leadership Facilitator"
                className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
