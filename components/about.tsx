'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import RustyMetal from '@/assets/RustyMetal.png';
import Dumbbell from '@/assets/DumbbellBackground.png';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-muted"
          >
            <Image
              src={Dumbbell}
              alt="Coach Portrait"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            {/* Scratched Metal Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-scratched-metal opacity-20 mix-blend-overlay pointer-events-none" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
              The Coach
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 text-primary">
              Built on Discipline. <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `url(${RustyMetal.src})`,
                  backgroundPosition: '70% 35%',
                  backgroundSize: '150%',
                }}
              >
                Forged by Iron.
              </span>
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                As a competitive bodybuilder and dedicated coach, I understand the relentless pursuit of perfection. True transformation isn&apos;t just about lifting weights; it&apos;s about mastering your mindset, your nutrition, and your recovery.
              </p>
              <p>
                My approach is rooted in evidence-based science and years of in-the-trenches experience. I don&apos;t offer cookie-cutter programs. Every protocol is meticulously crafted to align with your unique physiology, lifestyle, and goals.
              </p>
              <p className="font-medium text-primary border-l-4 border-muted pl-4 italic">
                &quot;We don&apos;t just build muscle; we build resilience. The iron is the ultimate teacher, and I am here to guide you through its lessons.&quot;
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-muted pt-8">
              <div>
                <h4 className="text-4xl font-black text-primary mb-2">10+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-primary mb-2">100+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Transformations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
