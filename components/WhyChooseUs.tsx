'use client';
import { motion } from 'motion/react';
import { BookOpen, Shield, Heart, Lightbulb } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: "Prophetic Character",
      description: "We don't just teach Akhlaq; we live it. Our environment fosters empathy, respect, and a deep love for the Sunnah in every interaction."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Uncompromising Safety",
      description: "A secure, nurturing campus where your child's physical and spiritual well-being is our highest priority, free from modern societal pressures."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-emerald-600" />,
      title: "Academic Rigor",
      description: "Exceeding Alberta Education standards with innovative teaching methods, ensuring our students are prepared for the universities of tomorrow."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
      title: "Holistic Deen Integration",
      description: "Islamic studies, Quranic memorization, and Arabic are seamlessly woven into the daily schedule, not treated as an afterthought."
    }
  ];

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
            Why Choose <span className="text-gradient-light">Al Faruq?</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Public schools offer academics. We offer a complete ecosystem. At Al Faruq, we believe that true success requires both intellectual brilliance and spiritual grounding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group glass-card-light p-8 transition-all duration-500 ease-out cursor-default relative overflow-hidden bg-white/80"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 inline-block group-hover:bg-emerald-100 transition-colors duration-500">
                {pillar.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                {pillar.title}
              </h3>
              
              <p className="text-slate-600 font-medium leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
