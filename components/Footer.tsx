'use client';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const links = [
    { title: "Academics", items: ["Curriculum", "Islamic Studies", "Faculty", "Calendar"] },
    { title: "Admissions", items: ["How to Apply", "Tuition & Fees", "Financial Aid", "Book a Tour"] },
    { title: "Community", items: ["News & Events", "Parent Portal", "Volunteer", "Donate"] }
  ];

  return (
    <footer className="bg-slate-900 pt-32 pb-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-extrabold text-white mb-6">
              Al Faruq <span className="text-emerald-400">Islamic School</span>
            </h3>
            <p className="text-slate-400 font-medium leading-relaxed max-w-sm mb-8">
              Empowering the next generation of Muslim leaders in Southwest Edmonton with uncompromising academics, modern facilities, and a foundation built on prophetic character.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {links.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{section.title}</h4>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500 transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Legal */}
        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Southwest Edmonton, AB T6W</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>(780) 555-0199</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>admissions@alfaruq.ca</span>
            </div>
          </div>
          
          <div className="text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Al Faruq Islamic School. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
