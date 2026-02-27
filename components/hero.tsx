'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/gym/1920/1080?grayscale"
          alt="Gym Background"
          fill
          className="object-cover opacity-20"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Logo Placeholder - Scratched Metal Effect */}
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full bg-scratched-metal flex items-center justify-center shadow-2xl border-4 border-muted/30">
            <span className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500 drop-shadow-lg">
              AH
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase text-primary mb-4">
            Unleash Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700">
              True Potential
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
            Elite Bodybuilding Coaching. Science-based programming, precise nutrition, and relentless accountability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover-scratched-metal transition-all duration-300 w-full sm:w-auto text-center"
          >
            Apply for Coaching
          </Link>
          <Link
            href="#about"
            className="px-8 py-4 border border-muted text-muted-foreground hover:text-primary hover:border-primary font-bold uppercase tracking-widest text-sm transition-all duration-300 w-full sm:w-auto text-center"
          >
            Discover More
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
}
