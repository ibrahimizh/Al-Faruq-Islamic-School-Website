'use client';
import { motion } from 'motion/react';
import { Building2, Microscope, Utensils, Lock } from 'lucide-react';

export default function FacilityHighlights() {
  return (
    <section className="py-32 relative z-10 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            World-Class <span className="text-emerald-600">Facilities</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            A campus designed to inspire both spiritual reflection and academic discovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          
          {/* Card 1: Prayer Hall (Tall) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#E6F4EA] text-emerald-900 p-8 md:row-span-2 shadow-lg group"
          >
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise pointer-events-none" />
            
            {/* Decorative Arch */}
            <div className="absolute -top-20 -right-20 w-64 h-96 bg-emerald-200/50 rounded-full blur-2xl group-hover:bg-emerald-300/50 transition-colors duration-700" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6 shadow-sm">
                <Building2 className="w-8 h-8 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-4">Dedicated Prayer Hall</h3>
                <p className="text-emerald-800 font-medium text-lg leading-relaxed">
                  Spacious, serene Musallah for daily congregational prayers and spiritual reflection.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: STEM Labs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white p-8 shadow-lg group"
          >
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-noise pointer-events-none" />
            
            {/* Decorative Circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-[20px] border-slate-800 rounded-full group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold tracking-tight max-w-[150px]">Advanced STEM Labs</h3>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <Microscope className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <p className="text-slate-400 font-medium mt-4">
                Equipped for hands-on scientific and technological exploration.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Halal Cafeteria */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#FDF6E3] text-amber-900 p-8 shadow-lg group"
          >
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise pointer-events-none" />
            
            {/* Decorative Blob */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-200/50 rounded-[40%] group-hover:rotate-90 transition-transform duration-1000" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold tracking-tight max-w-[150px]">100% Halal Cafeteria</h3>
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-amber-700" />
                </div>
              </div>
              <p className="text-amber-800/80 font-medium mt-4">
                Nutritious, ethically sourced meals prepared fresh daily.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Secure Access (Wide) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#064E3B] text-white p-8 md:col-span-2 shadow-lg group"
          >
            <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-noise pointer-events-none" />
            
            {/* Decorative Shield Shape */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-800/50 rounded-tl-full group-hover:scale-110 origin-bottom-right transition-transform duration-700" />
            
            <div className="relative z-10 h-full flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md mb-6">
                  <Lock className="w-7 h-7 text-emerald-300" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-2">Secure Access Campus</h3>
                <p className="text-emerald-100 font-medium text-lg max-w-md">
                  State-of-the-art security systems ensuring complete peace of mind for parents and students.
                </p>
              </div>
              
              {/* Abstract Data Visualization (Pixel Weather Style) */}
              <div className="hidden md:flex flex-col items-end justify-center pr-8">
                <div className="text-6xl font-black tracking-tighter text-emerald-300 mb-1">24/7</div>
                <div className="text-emerald-100/70 font-medium uppercase tracking-widest text-sm">Monitoring</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
