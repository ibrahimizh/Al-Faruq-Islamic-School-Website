'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export default function AcademicExcellence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const content = [
    {
      title: "Alberta Curriculum, Perfected.",
      desc: "Our core subjects—Math, Science, Language Arts, and Social Studies—are taught by certified professionals using cutting-edge methodologies, ensuring students consistently exceed provincial benchmarks."
    },
    {
      title: "Comprehensive Islamic Studies.",
      desc: "A structured, age-appropriate curriculum covering Fiqh, Seerah, Aqeedah, and Akhlaq, designed to build a resilient, confident Muslim identity in the modern world."
    },
    {
      title: "Quranic Mastery & Arabic.",
      desc: "Daily, intensive instruction in Tajweed, Hifz, and Arabic language acquisition, empowering students to connect directly with the Book of Allah."
    }
  ];

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Sticky Image Container */}
          <div className="relative h-[60vh] md:h-auto md:sticky md:top-32 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl bg-white">
            <motion.div
              style={{ scale }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="https://picsum.photos/seed/books/1000/1200"
                alt="High-quality study materials"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            </motion.div>
            
            <div className="absolute bottom-10 left-10 right-10 z-10">
              <h3 className="font-display text-3xl font-extrabold text-white mb-3">
                The Best of Both Worlds
              </h3>
              <p className="text-slate-200 font-medium text-lg">
                Premium resources for a premium education.
              </p>
            </div>
          </div>

          {/* Scrolling Text Content */}
          <div className="flex flex-col justify-center space-y-24 py-12 md:py-32">
            <div className="mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
                Academic <span className="text-gradient-light">Excellence</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                We believe that a strong Muslim is a knowledgeable Muslim. Our syllabus is a seamless integration of rigorous secular academics and profound Islamic scholarship.
              </p>
            </div>

            {content.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative pl-8 border-l-4 border-emerald-200 hover:border-emerald-500 transition-colors duration-500"
              >
                <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow-sm" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
