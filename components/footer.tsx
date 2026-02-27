import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-muted py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-muted pb-12 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-3xl font-black tracking-tighter uppercase mb-4">
              <span className="text-primary">AH</span>
              <span className="text-muted-foreground ml-2 text-sm tracking-widest">Coaching</span>
            </Link>
            <p className="text-muted-foreground text-sm font-light text-center md:text-left max-w-xs">
              Elite online bodybuilding coaching. Science-based programming, precise nutrition, and relentless accountability.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-center md:text-left">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                  About
                </Link>
              </li>
              <li>
                <Link href="#coaching" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                  Coaching
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-center md:text-left">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} AH Online Coaching. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built for Greatness</p>
        </div>
      </div>
    </footer>
  );
}
