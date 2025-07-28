import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProfessionalsSection from '@/components/ProfessionalsSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import HistorySection from '@/components/HistorySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProfessionalsSection />
        <ServicesSection />
        <GallerySection />
        <HistorySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
