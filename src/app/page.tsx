// src/app/page.tsx — Orchestrates all sections
import Hero        from '@/components/sections/Hero';
import Marquee     from '@/components/sections/Marquee';
import Services    from '@/components/sections/Services';
import WorkProcess from '@/components/sections/WorkProcess';
import About       from '@/components/sections/About';
import Stats       from '@/components/sections/Stats';
import Projects    from '@/components/sections/Projects';
import Partners    from '@/components/sections/Partners';
import Team        from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import CTA           from '@/components/sections/CTA';
import Blogs         from '@/components/sections/Blogs';
import Contact       from '@/components/sections/Contact';
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee direction="right" />
      <Services />
      <WorkProcess />
      <About />
      <Marquee outline items={['Construction . Company . since 1999 .', 'Construction . Company . since 1999 .']} speed="40s" />
      <Projects />
      <Partners />
      <Team />
      <CTA />
      <Testimonials />
      <Blogs />
      <Contact />
    </>
  );
}
