'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Chioma Okafor',
      role: 'Operations Manager',
      company: 'Tech Solutions Ltd',
      content:
        'This program completely transformed how I lead my team. The practical frameworks are immediately applicable, and I \'ve seen measurable improvements in team morale and productivity within weeks.',
      rating: 5,
    },
    {
      name: 'Tunde Adeyemi',
      role: 'Team Lead',
      company: 'Financial Services Inc',
      content:
        'Miracle\'s approach to emotional intelligence was eye-opening. I now understand my team on a deeper level and can communicate more effectively. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Amara Nwosu',
      role: 'Director',
      company: 'Creative Agency',
      content:
        "The 3-day intensive was worth every naira. I gained skills that I\'ve already applied to resolve conflicts that had been lingering for months. Excellent facilitator!",
      rating: 5,
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
    <section className="relative py-32 sm:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-5xl sm:text-6xl font-800 text-white mb-6 text-balance tracking-tight">
            What Our Participants Say
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
            Hear from leaders who transformed their teams and careers.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-9 h-full hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 hover:shadow-xl hover:shadow-[#5E3BFF]/10">
                {/* Stars */}
                <div className="flex gap-2 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#5E3BFF] text-[#5E3BFF]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/70 mb-8 leading-relaxed font-light text-sm">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="pt-8 border-t border-white/10">
                  <p className="font-700 text-white mb-2">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                  <p className="text-white/50 text-xs mt-1 font-light">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
