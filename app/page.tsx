'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Preloader from '@/components/preloader'    
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import CountdownTimer from '@/components/countdown-timer'
import WhatYouLearn from '@/components/what-you-learn'
import WhyAttend from '@/components/why-attend'
import AboutFacilitator from '@/components/about-facilitator'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import AnimatedBackground from '@/components/animated-background'

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setScrollProgress(scrolled / scrollHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <Preloader />
    <main className="relative overflow-hidden bg-[#13043D]">
      <AnimatedBackground />
      <Navbar />

      {/* Scroll progress indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-[#5E3BFF] z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <HeroSection />
      <CountdownTimer />
      <WhatYouLearn />
      <WhyAttend />
      <AboutFacilitator />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
    </>
  )
}
