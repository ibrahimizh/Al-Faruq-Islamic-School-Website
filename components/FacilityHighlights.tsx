'use client';
import { motion } from 'motion/react';
import { Building2, Microscope, Utensils, Lock } from 'lucide-react';

export default function FacilityHighlights() {
  const facilities = [
    {
      icon: <Building2 className="w-10 h-10 text-emerald-600" />,
      title: "Dedicated Prayer Hall",
      desc: "Spacious, serene Musallah for daily congregational prayers."
    },
    {
      icon: <Microscope className="w-10 h-10 text-emerald-600" />,
      title: "Advanced STEM Labs",
      desc: "Equipped for hands-on scientific and technological exploration."
    },
    {
      icon: <Utensils className="w-10 h-10 text-emerald-600" />,
      title: "100% Halal Cafeteria",
      desc: "Nutritious, ethically sourced meals prepared fresh daily."
    },
    {
      icon: <Lock className="w-10 h-10 text-emerald-600" />,
      title: "Secure Access Campus",
      desc: "State-of-the-art security systems ensuring complete peace of mind."
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            World-Class Facilities
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {facilities.map((facility, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring" }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all duration-500 group-hover:scale-110 group-hover:shadow-emerald-500/20">
                {facility.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                {facility.title}
              </h3>
              <p className="text-sm text-slate-600 font-medium max-w-[200px]">
                {facility.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
