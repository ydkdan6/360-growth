'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-[#13043D]/80 border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="360 Growth"
                className="h-12 w-auto transition-transform duration-300"
              />
              <span className="text-white font-semibold text-lg hidden sm:inline tracking-tight">360 Growth</span>
            </Link>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-500 tracking-wide transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-[#5E3BFF]'
                    : 'text-white/60 hover:text-white/100'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://paystack.shop/pay/workplaceleadershipfw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl bg-[#5E3BFF] text-white font-600 text-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#5E3BFF]/30 hover:bg-[#7C4DFF]"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Enroll Now
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
