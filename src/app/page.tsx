import HeroSection from '@/components/hero/hero-section';
export default function Home() {
  console.log('ENVIRONMENT:', process.env.NODE_ENV);
  return (
    <section className="text-center py-20">
      <HeroSection />
    </section>
  );
}
