'use client';

import { motion } from 'motion/react';
import { Dumbbell, Utensils, Activity, MessageCircle } from 'lucide-react';
import RustyMetal from '@/assets/RustyMetal.png';
import Metal from '@/assets/Metal.png';

export default function Services() {
  const services = [
    {
      title: "Custom Training Programs",
      description: "Periodized hypertrophy blocks designed specifically for your biomechanics and goals. We focus on progressive overload and optimal execution.",
      icon: Dumbbell,
    },
    {
      title: "Precision Nutrition",
      description: "Macronutrient and micronutrient protocols tailored to your metabolism. Whether you're cutting for the stage or in an off-season growing phase.",
      icon: Utensils,
    },
    {
      title: "Weekly Check-ins",
      description: "Detailed video or written feedback analyzing your progress, biofeedback, and training footage to make necessary adjustments.",
      icon: Activity,
    },
    {
      title: "24/7 Support",
      description: "Direct access to me via WhatsApp for form checks, questions, and the mental support needed during tough prep phases.",
      icon: MessageCircle,
    },
  ];

  return (
    <section id="coaching" className="py-24 bg-zinc-950 relative border-t border-muted">
      <div className="absolute inset-0 bg-scratched-metal opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4"
          >
            The System
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-primary"
          >
            Elite Online Coaching
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-light"
          >
            A comprehensive, no-nonsense approach to building your ultimate physique.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-2xl border border-muted bg-background/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-2xl font-bold uppercase tracking-tight text-primary mb-4">
                  {service.title}
                </h4>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 p-1 bg-gradient-to-r from-muted via-gray-600 to-muted rounded-2xl"
        >
          <div className="bg-background rounded-xl p-8 md:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-scratched-metal opacity-10" />
            <h4 className="text-3xl md:text-4xl font-black uppercase text-primary mb-6 relative z-10">
              Ready to Commit?
            </h4>
            <p className="text-muted-foreground mb-8 max-w-xl relative z-10">
              Spots are strictly limited to ensure the highest quality of service. Apply now to see if we&apos;re a good fit.
            </p>
            <a
              href="#contact"
              style={{
                backgroundImage: `url(${Metal.src})`,
                backgroundPosition: '25% 75%',
                backgroundSize: '300%',
              }}
              className="px-10 py-4 text-white font-bold uppercase tracking-widest text-sm hover:brightness-125 transition-all duration-300 relative z-10 border border-gray-800 shadow-lg"
            >
              Apply Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
