import AboutSection from "@/app/components/AboutSection";
import ConsultationSection from "@/app/components/ConsultationSection";
import HeroSection from "@/app/components/HeroSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ConsultationSection />
      <TestimonialsSection />
    </div>
  );
}
