'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Globe,
      label: 'Instagram',
      href: 'https://instagram.com/the360growthstrategyfactory',
      color: 'hover:text-pink-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/2340706378716',
      color: 'hover:text-green-500',
    },
    {
      icon: Phone,
      label: 'Call',
      href: 'tel:0706378716',
      color: 'hover:text-blue-500',
    },
  ]

  return (
    <footer className="relative bg-white/5 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="360 Growth" className="h-10 w-auto" />
              <span className="text-white font-700 text-lg tracking-tight">360 Growth</span>
            </Link>
            <p className="text-white/50 max-w-md leading-relaxed font-light">
              Transforming workplace leaders through practical, evidence-based training and development programs.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h4 className="text-white font-700 mb-6 uppercase tracking-wide text-sm">Quick Links</h4>
            <div className="flex flex-col gap-3 text-white/50 text-sm font-light">
              <button
                onClick={() =>
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="hover:text-white transition-colors duration-200 text-left md:text-right"
              >
                Home
              </button>
              <button
                onClick={() =>
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="hover:text-white transition-colors duration-200 text-left md:text-right"
              >
                About
              </button>
              <button
                onClick={() =>
                  document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="hover:text-white transition-colors duration-200 text-left md:text-right"
              >
                Curriculum
              </button>
              <button
                onClick={() =>
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="hover:text-white transition-colors duration-200 text-left md:text-right"
              >
                FAQ
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <motion.p
            className="text-white/40 text-xs font-light tracking-wide uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © {currentYear} 360 Growth. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
