'use client';
import { motion } from 'motion/react';
import { Calendar, FileText, Users, CheckCircle } from 'lucide-react';

export default function AdmissionsJourney() {
  const steps = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "1. Book a Tour",
      desc: "Experience our campus, meet the faculty, and see the Al Faruq difference firsthand."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "2. Submit Application",
      desc: "Complete our streamlined online application with your child's previous academic records."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "3. Family Interview",
      desc: "A brief, welcoming conversation to ensure our values align and we can support your child's goals."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "4. Welcome to Al Faruq",
      desc: "Receive your acceptance letter, complete enrollment, and join our vibrant community."
    }
  ];

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
            Your Journey <span className="text-gradient-light">Starts Here</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            We&apos;ve designed our admissions process to be as transparent, welcoming, and frictionless as possible.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1.5 bg-emerald-100 hidden md:block rounded-full" />
          
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2, type: "spring" }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex-1 text-center ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                </div>

                {/* Icon Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-emerald-500 flex items-center justify-center text-emerald-600 shadow-xl shadow-emerald-500/20">
                    {step.icon}
                  </div>
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <button className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 text-lg">
            Start Application
          </button>
        </motion.div>
      </div>
    </section>
  );
}
