import ParticleWave from './ParticleWave';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4 pt-32 overflow-hidden">
      <ParticleWave />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
          <span>Admissions open for 2026-2027</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter max-w-5xl leading-[1.05] mb-6 text-slate-900">
          Excellence in <br className="hidden md:block" /> Deen & Dunya
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10">
          Nurturing the next generation of Muslim leaders through high academic standards and a strong foundation in Islamic morals and character.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors">
            <Calendar className="w-4 h-4" />
            Book a Tour
          </button>
        </div>
      </div>
    </div>
  );
}
