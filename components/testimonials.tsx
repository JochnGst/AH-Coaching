'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marcus T.",
      role: "Men's Physique Competitor",
      quote: "Working with AH Coaching completely changed my approach to prep. The attention to detail in my nutrition and training protocols was unmatched. I stepped on stage in the best condition of my life.",
      image: "https://picsum.photos/seed/marcus/150/150?grayscale",
    },
    {
      name: "Sarah J.",
      role: "Lifestyle Client",
      quote: "I thought I knew how to train hard until I started this program. The accountability and the structured progression helped me pack on lean mass while dropping body fat. Truly elite coaching.",
      image: "https://picsum.photos/seed/sarah/150/150?grayscale",
    },
    {
      name: "David K.",
      role: "Classic Physique",
      quote: "The communication is what sets AH apart. Every check-in was thorough, every adjustment was explained. It's not just a plan; it's an education in bodybuilding.",
      image: "https://picsum.photos/seed/david/150/150?grayscale",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative border-t border-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4"
          >
            The Results
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-primary"
          >
            Proven Transformations
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative p-8 rounded-2xl border border-muted bg-zinc-950/50 backdrop-blur-sm flex flex-col"
            >
              <Quote className="w-10 h-10 text-muted mb-6 opacity-50" />
              <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-grow italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center mt-auto border-t border-muted pt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-primary uppercase tracking-wider text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
