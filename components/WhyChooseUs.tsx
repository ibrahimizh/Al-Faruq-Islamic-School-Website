'use client';
import { motion } from 'motion/react';
import { BookOpen, Shield, Heart, Lightbulb } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-32 relative z-10 bg-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
            Why Choose <span className="text-emerald-600">Al Faruq?</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Public schools offer academics. We offer a complete ecosystem. At Al Faruq, we believe that true success requires both intellectual brilliance and spiritual grounding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Card 1: Prophetic Character (Dark Slate) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white p-10 lg:col-span-2 shadow-xl group"
          >
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-noise pointer-events-none" />
            
            {/* Decorative Shape: Soft Heart/Blob */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-colors duration-700" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md">
                  <Heart className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Prophetic Character</h3>
              </div>
              <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                We don't just teach Akhlaq; we live it. Our environment fosters empathy, respect, and a deep love for the Sunnah in every interaction.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Uncompromising Safety (Soft Tan/Yellow) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#E8E2D0] text-slate-900 p-10 shadow-xl group"
          >
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise pointer-events-none" />
            
            {/* Decorative Shape: Scalloped Badge */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#D4CDB3] rounded-[40%] rotate-12 group-hover:rotate-45 transition-transform duration-1000 ease-in-out" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-white/40 backdrop-blur-md">
                  <Shield className="w-8 h-8 text-slate-800" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">Uncompromising Safety</h3>
                <p className="text-slate-700 font-medium leading-relaxed">
                  A secure, nurturing campus free from modern societal pressures.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Academic Rigor (Dark Emerald) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#064E3B] text-white p-10 shadow-xl group"
          >
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-noise pointer-events-none" />
            
            {/* Decorative Shape: Wave Pattern */}
            <svg className="absolute bottom-0 left-0 w-full h-auto text-emerald-800/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700" viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md">
                  <Lightbulb className="w-8 h-8 text-yellow-300" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">Academic Rigor</h3>
                <p className="text-emerald-100 font-medium leading-relaxed">
                  Exceeding Alberta Education standards with innovative teaching.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Holistic Deen Integration (White) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-white text-slate-900 p-10 lg:col-span-2 shadow-xl group border border-slate-100"
          >
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-noise pointer-events-none" />
            
            {/* Decorative Shape: Soft Teal Circle */}
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-teal-50 rounded-full group-hover:scale-110 transition-transform duration-700 ease-out" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-teal-100">
                  <BookOpen className="w-8 h-8 text-teal-700" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Holistic Deen Integration</h3>
              </div>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Islamic studies, Quranic memorization, and Arabic are seamlessly woven into the daily schedule, not treated as an afterthought.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
