// app/about/page.tsx
import AboutHero from '@/app/about/components/AboutHero';
import QualitySection from '@/app/about/components/QualitySection';
import SkillsSection from '@/app/about/components/SkillsSection';
import StatsSection from '@/app/about/components/StatsSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ConsultationSection from '@/app/components/ConsultationSection';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <QualitySection />
      <SkillsSection />
      <StatsSection />
      {/* Optionally reuse sections from homepage */}
      <TestimonialsSection />
      <ConsultationSection />
    </main>
  );
}
