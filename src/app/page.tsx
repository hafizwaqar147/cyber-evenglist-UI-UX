import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DigitalTransformation from '@/components/DigitalTransformation';
import SecuringInformation from '@/components/SecuringInformation';
import FeaturedWork from '@/components/FeaturedWork';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Partnerships from '@/components/Partnerships';
import InsightsSection from '@/components/InsightsSection';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <DigitalTransformation />
      <SecuringInformation />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <Partnerships />
      <InsightsSection />
      <ContactFooter />
    </div>
  );
}
