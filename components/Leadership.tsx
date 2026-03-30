'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Leadership() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Image Side */}
            <div className="relative h-[400px] md:h-auto">
              <Image
                src="https://picsum.photos/seed/principal/800/1000"
                alt="Principal Portrait"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-900/40" />
            </div>

            {/* Content Side */}
            <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-2 text-slate-900">
                  A Vision for <span className="text-gradient-light">Tomorrow</span>
                </h2>
                <div className="text-emerald-600 font-bold mb-8 uppercase tracking-wider text-sm">
                  Message from the Principal
                </div>
                
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  &quot;Our goal is not simply to graduate students who can pass exams, but to cultivate leaders who will navigate the complexities of the modern world with the unshakeable moral compass of the Prophet (ﷺ). At Al Faruq, we are building a sanctuary of learning where faith and intellect thrive together.&quot;
                </p>

                <div className="flex items-center gap-4 mb-10">
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-lg">Dr. Tariq Rahman</h4>
                    <p className="text-emerald-600 font-medium text-sm">Ph.D. in Education Leadership</p>
                  </div>
                </div>

                <button className="group px-6 py-3 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-slate-900 font-bold rounded-full transition-all duration-300 flex items-center gap-2 w-fit shadow-sm">
                  <span>Meet Our Faculty</span>
                  <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
