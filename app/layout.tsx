import type {Metadata, Viewport} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Logo from '@/assets/Logo.png';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'AH Online Coaching | Elite Bodybuilding',
  description: 'Elite Bodybuilding Coaching. Science-based programming, precise nutrition, and relentless accountability.',
  icons: {
    icon: Logo.src,
    shortcut: Logo.src,
    apple: Logo.src,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
