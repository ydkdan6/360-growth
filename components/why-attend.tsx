'use client'

import { motion } from 'framer-motion'
import { Award, Users, BadgeCheck } from 'lucide-react'

export default function WhyAttend() {
  const features = [
    {
      icon: Award,
      title: 'Practical Skills',
      description: 'Learn immediately applicable strategies you can implement in your workplace from day one.',
      color: '#5E3BFF',
    },
    {
      icon: Users,
      title: 'Network Connections',
      description: 'Build valuable relationships with like-minded professionals and expand your leadership circle.',
      color: '#5E3BFF',
    },
    {
      icon: BadgeCheck,
      title: 'Certification',
      description: 'Earn a recognized certificate that validates your leadership development and credentials.',
      color: '#5E3BFF',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section className="relative py-32 sm:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-5xl sm:text-6xl font-800 text-white mb-6 text-balance tracking-tight">
            Why Attend
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
            Gain the competitive edge professionals need in today 's dynamic workplace.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative group h-full">
                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-9 h-full hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 hover:shadow-xl hover:shadow-[#5E3BFF]/10">
                    {/* Icon */}
                    <motion.div
                      className="mb-7 w-16 h-16 rounded-2xl bg-[#5E3BFF] flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#5E3BFF]/40 transition-all duration-300"
                      whileHover={{ scale: 1.08, rotate: 3 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-700 text-white mb-4 leading-tight">
                      {feature.title}
                    </h3>

                    <p className="text-white/60 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
