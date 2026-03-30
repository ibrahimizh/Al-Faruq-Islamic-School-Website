'use client';
import { motion } from 'motion/react';
import { Star, ShieldCheck } from 'lucide-react';

export default function TrustSignals() {
  const testimonials = [
    {
      quote: "Finally, a school where my children don't have to compromise their Deen for world-class academics. The focus on Akhlaq is truly transformative.",
      author: "Aisha M.",
      role: "Parent of Grade 3 Student"
    },
    {
      quote: "The state-of-the-art facilities combined with a rigorous Alberta curriculum and deep Islamic studies make Al Faruq the clear choice for our family.",
      author: "Omar K.",
      role: "Parent of Grade 1 & 5 Students"
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
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 text-emerald-600 mb-4 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-bold tracking-widest uppercase">Accredited Excellence</span>
          </div>
          <p className="text-slate-600 text-center max-w-2xl text-lg font-medium">
            Fully accredited by <strong className="text-slate-900">Alberta Education</strong>, delivering a curriculum that meets the highest provincial standards while nurturing Islamic values.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="glass-card-light p-8 relative group hover:-translate-y-1 transition-all duration-500 bg-white/80"
            >
              <div className="flex gap-1 mb-6 text-emerald-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-slate-700 mb-8 font-medium leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
