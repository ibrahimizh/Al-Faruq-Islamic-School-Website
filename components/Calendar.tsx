'use client';
import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';

export default function Calendar() {
  const events = [
    {
      date: "Oct 15",
      title: "Parent-Teacher Interviews",
      time: "4:00 PM - 8:00 PM",
      location: "Main Campus",
      desc: "Discuss your child's progress and goals for the term."
    },
    {
      date: "Oct 22",
      title: "Islamic Knowledge Bee",
      time: "10:00 AM - 1:00 PM",
      location: "Auditorium",
      desc: "Annual competition testing students on Seerah and Fiqh."
    },
    {
      date: "Nov 05",
      title: "STEM Fair & Exhibition",
      time: "9:00 AM - 3:00 PM",
      location: "Science Wing",
      desc: "Explore innovative projects created by our middle school students."
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
              Upcoming <span className="text-gradient-light">Events</span>
            </h2>
            <p className="text-slate-600 font-medium">Mark your calendars for these important dates.</p>
          </div>
          <button className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors flex items-center gap-2 group bg-emerald-50 px-6 py-3 rounded-full">
            View Full Calendar
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </motion.div>

        <div className="space-y-4">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white hover:bg-emerald-50/50 transition-colors duration-300 border border-slate-200 hover:border-emerald-200 shadow-sm hover:shadow-md"
            >
              {/* Date Badge */}
              <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors duration-300">
                <span className="text-emerald-600 group-hover:text-emerald-50 font-bold text-sm uppercase tracking-wider transition-colors">{event.date.split(' ')[0]}</span>
                <span className="text-3xl font-extrabold text-slate-900 group-hover:text-white transition-colors">{event.date.split(' ')[1]}</span>
              </div>

              {/* Event Details */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{event.title}</h3>
                <p className="text-slate-600 font-medium mb-4">{event.desc}</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
