'use client';
import { motion } from 'motion/react';
import { HeartHandshake } from 'lucide-react';

export default function Donation() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl shadow-emerald-500/20"
        >
          {/* Vibrant Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-700 z-0" />
          {/* Animated Mesh Overlay */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-8 border border-white/30 shadow-lg">
              <HeartHandshake className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6">
              Invest in <span className="text-emerald-100">Sadaqah Jariyah</span>
            </h2>
            
            <p className="text-lg md:text-xl text-emerald-50 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
              Every dollar you contribute builds the foundation for the next generation of Muslim leaders. Your support ensures that no child is turned away from a world-class Islamic education due to financial constraints.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-emerald-50 text-emerald-700 font-extrabold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg">
                Donate Now
              </button>
              <button className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-full transition-all duration-300 text-lg backdrop-blur-sm">
                Become a Monthly Sponsor
              </button>
            </div>
            
            <p className="mt-8 text-sm text-emerald-100 font-bold tracking-wide uppercase">
              100% Secure & Tax Deductible
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
