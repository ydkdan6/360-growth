'use client'

import { motion } from 'framer-motion'
import { Brain, Users, MessageCircle, Heart, Zap, Users2 } from 'lucide-react'

export default function WhatYouLearn() {
  const curricula = [
    {
      icon: Brain,
      title: 'Leadership Mindset',
      description: 'Develop the mental framework to lead with confidence and clarity.',
    },
    {
      icon: MessageCircle,
      title: 'Communication Skills',
      description: 'Master the art of clear, compelling communication with your team.',
    },
    {
      icon: Zap,
      title: 'Conflict Resolution',
      description: 'Learn proven techniques to resolve workplace conflicts effectively.',
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Build deeper connections through emotional awareness and empathy.',
    },
    {
      icon: Users,
      title: 'Decision Making',
      description: 'Make strategic decisions that drive results and build trust.',
    },
    {
      icon: Users2,
      title: 'Team Leadership',
      description: 'Inspire and motivate teams to achieve excellence together.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section id="curriculum" className="relative py-32 sm:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-5xl sm:text-6xl font-800 text-white mb-6 text-balance tracking-tight">
            What You 'll Learn
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A comprehensive framework covering everything you need to become an effective workplace leader.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {curricula.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group h-full"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 hover:shadow-xl hover:shadow-[#5E3BFF]/10">
                  {/* Icon Background */}
                  <div className="mb-6 w-14 h-14 rounded-xl bg-[#5E3BFF] flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-[#5E3BFF]/40 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-700 text-white mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light text-sm">
                    {item.description}
                  </p>

                  {/* Accent line */}
                  <div className="mt-6 h-1 w-8 bg-[#5E3BFF] rounded-full group-hover:w-12 transition-all duration-300" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
