'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQ() {
  const faqs = [
    {
      id: 'who-can-attend',
      question: 'Who can attend this program?',
      answer:
        'This program is designed for anyone in a leadership position or aspiring to be a leader. This includes managers, team leads, entrepreneurs, business owners, and professionals looking to improve their leadership skills and impact.',
    },
    {
      id: 'certificate',
      question: 'Will I receive a certificate?',
      answer:
        'Yes! Upon successful completion of the 3-day program, you will receive a Certificate of Completion from 360 Growth, which you can add to your professional portfolio and LinkedIn profile.',
    },
    {
      id: 'how-register',
      question: 'How do I register?',
      answer:
        'Simply click the "Enroll Now" button on this page, and you will be redirected to our secure payment portal. Complete your payment using Paystack, and you will receive a confirmation email with all course details.',
    },
    {
      id: 'physical-online',
      question: 'Is this physical or online?',
      answer:
        'The Workplace Leadership Framework is primarily delivered as an in-person intensive workshop in Lagos, Nigeria. This allows for interactive discussions, networking, and hands-on activities. Online options may be available upon request.',
    },
    {
      id: 'duration',
      question: 'What is the duration of the course?',
      answer:
        'The program runs for 3 consecutive days (15th - 17th July 2026), with sessions from 9 AM to 5 PM each day, totaling 24 hours of intensive leadership development.',
    },
    {
      id: 'refund',
      question: 'What is your refund policy?',
      answer:
        'We want you to be completely satisfied. Refunds are available up to 7 days before the course starts. After that date, registrations are non-refundable but can be transferred to a future session.',
    },
  ]

  return (
    <section id="faq" className="relative py-32 sm:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-5xl sm:text-6xl font-800 text-white mb-6 text-balance tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-white/50 text-lg font-light">
            Everything you need to know about the program.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Accordion type="single" collapsible="true" className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <AccordionItem
                  value={faq.id}
                  className="border-b border-white/10 last:border-b-0 py-1"
                >
                  <AccordionTrigger className="text-left text-white font-700 hover:no-underline py-5 hover:text-[#5E3BFF] transition-colors duration-200">
                    <span className="text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-5 font-light leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          className="mt-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center hover:bg-white/8 transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-white/70 mb-3 font-light">Still have questions?</p>
          <p className="text-white/60 mb-8 font-light">
            Contact us: <span className="text-white font-600">0706378716</span>
          </p>
          <motion.a
            href="https://wa.me/2340706378716"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-700 text-sm transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
