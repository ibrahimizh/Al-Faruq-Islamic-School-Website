import { ChevronDown, BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center gap-2 cursor-pointer">
        <BookOpen className="w-6 h-6 text-emerald-600" />
        <span className="font-medium text-lg tracking-tight text-slate-900">Al Faruq</span>
        <span className="text-slate-500 text-lg">Islamic School</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#" className="hover:text-slate-900 transition-colors">About</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Academics</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Admissions</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Student Life</a>
        <a href="#" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
          Community <ChevronDown className="w-4 h-4" />
        </a>
      </div>

      <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
        Apply Now
      </button>
    </nav>
  );
}
