import type { Metadata } from 'next';
import { Space_Grotesk, Golos_Text } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import CustomCursor from '@/components/common/CustomCursor';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const golosText = Golos_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-golos-text',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Urban Construction Onepage – Brickz',
  description:
    'Brickz is a leading construction company delivering exceptional residential, commercial, and industrial building projects. Quality craftsmanship, on time, on budget.',
  keywords: ['construction', 'building', 'residential', 'commercial', 'urban construction'],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${golosText.variable} antialiased`}>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
