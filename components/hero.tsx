'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import DumbbellBackground from '@/assets/DumbbellBackground.png';
import Logo from '@/assets/Logo.png';
import Metal from '@/assets/Metal.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image - Blurred, scaled to hide blur edges */}
      <div
        className="absolute inset-0 z-0"
        style={{ filter: 'blur(5px)', transform: 'scale(1.08)' }}
      >
        <Image
          src={DumbbellBackground}
          alt="Gym Background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/75 to-background/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Logo */}
          <div className="w-96 h-96 md:w-[512px] md:h-[312px] mx-auto mb-8">
            <Image
              src={Logo}
              alt="AH Online Coaching"
              width={512}
              height={512}
              className="w-full h-full object-contain drop-shadow-2xl"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase text-primary mb-4">
            Unleash Your <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `url(${Metal.src})`,
                backgroundPosition: '50% 35%',
                backgroundSize: '150%',
              }}
            >
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
            style={{
              backgroundImage: `url(${Metal.src})`,
              backgroundPosition: '10% 10%',
              backgroundSize: '400%',
            }}
            className="px-8 py-4 text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 w-full sm:w-auto text-center hover:brightness-125 shadow-lg border border-gray-800"
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
