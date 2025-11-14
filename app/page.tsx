import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQs from '@/components/FAQs';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
