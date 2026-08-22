import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CountriesSection from '@/components/CountriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Header (Navbar) — rendered by Layout */}
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Countries Section */}
      <CountriesSection />

      {/* 6. Testimonials / Why Choose Us Section */}
      <TestimonialsSection />

      {/* 7. Footer — rendered by Layout */}
    </>
  );
}
