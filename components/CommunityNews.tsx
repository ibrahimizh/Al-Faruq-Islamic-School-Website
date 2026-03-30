'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CommunityNews() {
  const posts = [
    {
      title: "Building Resilience: The Islamic Approach to Modern Challenges",
      excerpt: "How our curriculum integrates prophetic wisdom to help students navigate the complexities of today's digital world.",
      image: "https://picsum.photos/seed/library/800/600",
      date: "Oct 10, 2026",
      category: "Education"
    },
    {
      title: "Highlights from the Annual Quran Competition",
      excerpt: "Celebrating the incredible achievements of our Hifz students and their dedication to the Book of Allah.",
      image: "https://picsum.photos/seed/quran/800/600",
      date: "Sep 28, 2026",
      category: "Community"
    },
    {
      title: "Why We Chose the Alberta Curriculum as Our Foundation",
      excerpt: "An inside look at how we seamlessly blend provincial academic standards with our comprehensive Islamic studies program.",
      image: "https://picsum.photos/seed/study/800/600",
      date: "Sep 15, 2026",
      category: "Academics"
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
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
              Community <span className="text-gradient-light">News</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Stay updated with the latest stories, academic insights, and events happening at Al Faruq Islamic School.
            </p>
          </div>
          <button className="group px-6 py-3 bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-slate-900 font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
            <span>Read the Blog</span>
            <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-[2rem] p-4 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500"
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">{post.category}</span>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col px-2">
                <span className="text-sm font-medium text-emerald-600 mb-3">{post.date}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
