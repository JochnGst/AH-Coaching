'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '@/assets/Logo.png';
import RustyMetal from '@/assets/RustyMetal.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Coaching', href: '#coaching' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src={Logo}
                alt="AH Online Coaching"
                height={128}
                width={128}
                className="object-contain drop-shadow-md"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              style={{
                backgroundImage: `url(${RustyMetal.src})`,
                backgroundPosition: '20% 80%',
                backgroundSize: '150%',
              }}
              className="px-6 py-2 text-white font-medium uppercase tracking-wider text-sm bg-black/20 bg-blend-multiply hover:brightness-125 transition-all duration-300 border border-gray-800 shadow-md"
            >
              Start Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-muted-foreground hover:text-primary uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                style={{
                  backgroundImage: `url(${RustyMetal.src})`,
                  backgroundPosition: '75% 20%',
                  backgroundSize: '400%',
                }}
                className="block w-full text-center px-6 py-3 text-white font-medium uppercase tracking-wider text-sm bg-black/35 bg-blend-multiply hover:brightness-125 transition-all duration-300 border border-gray-500 mt-4"
              >
                Start Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
