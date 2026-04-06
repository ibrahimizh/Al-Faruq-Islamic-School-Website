'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do you follow the Alberta Education curriculum?",
      answer: "Yes, absolutely. We are a fully accredited institution following the Alberta Education curriculum. Our students receive the same high-quality academic foundation as public schools, but taught within an Islamic framework by certified teachers."
    },
    {
      question: "What is the ratio of secular to Islamic studies?",
      answer: "We maintain a balanced approach. Core secular subjects (Math, Science, LA, Social Studies) make up approximately 70% of the instructional day, while 30% is dedicated to intensive Islamic Studies, Quranic memorization (Hifz), and Arabic language."
    },
    {
      question: "Do you offer tuition subsidies or financial aid?",
      answer: "We believe Islamic education should be accessible. We offer a sliding scale for tuition based on household income, and have a dedicated Zakat/Sadaqah fund to support families who qualify for financial assistance."
    },
    {
      question: "Is transportation provided for students in Edmonton?",
      answer: "Yes, we offer comprehensive busing services covering major neighborhoods in Southwest Edmonton and surrounding areas. Routes are optimized annually based on enrolled families to ensure safe and efficient transport."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
            Frequently Asked <span className="text-gradient-light">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Everything you need to know about enrolling your child at Al Faruq.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setOpenIndex(idx)}
              className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors"
                >
                  <ChevronDown className="w-5 h-5 text-emerald-600" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-6 text-slate-600 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
