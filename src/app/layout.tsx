import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';

export const metadata: Metadata = {
  title: 'Brickz – Urban Construction & Building Solutions',
  description:
    'Brickz is a leading construction company delivering exceptional residential, commercial, and industrial building projects. Quality craftsmanship, on time, on budget.',
  keywords: ['construction', 'building', 'residential', 'commercial', 'urban construction'],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
