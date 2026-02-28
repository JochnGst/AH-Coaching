'use client';

import { motion } from 'motion/react';
import { Mail, Instagram, MapPin } from 'lucide-react';
import RustyMetal from '@/assets/RustyMetal.png';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-muted">
      <div className="absolute inset-0 bg-scratched-metal opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
              Get Started
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-primary mb-8">
              Take the First Step.
            </h3>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
              Fill out the application form to see if we&apos;re a good fit for coaching. I only take on clients who are serious about their goals and ready to put in the work.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Email</p>
                  <a href="mailto:coaching@ah-online.com" className="text-primary hover:text-white transition-colors">
                    coaching@ah-online.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Social</p>
                  <a href="#" className="text-primary hover:text-white transition-colors">
                    @ah_coaching
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Location</p>
                  <p className="text-primary">Worldwide Online Coaching</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-muted shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs font-bold text-muted-foreground uppercase tracking-widest">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-zinc-900 border border-muted rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-zinc-900 border border-muted rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-900 border border-muted rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="goal" className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Primary Goal</label>
                <select
                  id="goal"
                  className="w-full bg-zinc-900 border border-muted rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors appearance-none"
                >
                  <option value="">Select a goal...</option>
                  <option value="hypertrophy">Hypertrophy / Muscle Gain</option>
                  <option value="fatloss">Fat Loss / Cutting</option>
                  <option value="prep">Contest Prep</option>
                  <option value="lifestyle">Lifestyle Transformation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Tell me about yourself</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-zinc-900 border border-muted rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors resize-none"
                  placeholder="Current stats, training history, injuries..."
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundImage: `url(${RustyMetal.src})`,
                  backgroundPosition: '15% 75%',
                  backgroundSize: '150%',
                }}
                className="w-full py-4 text-white font-bold uppercase tracking-widest text-sm hover:brightness-125 transition-all duration-300 mt-4 border border-gray-500 shadow-lg"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
