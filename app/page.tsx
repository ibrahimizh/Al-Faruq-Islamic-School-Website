import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import TrustSignals from '@/components/TrustSignals';
import WhyChooseUs from '@/components/WhyChooseUs';
import AcademicExcellence from '@/components/AcademicExcellence';
import FacilityHighlights from '@/components/FacilityHighlights';
import Leadership from '@/components/Leadership';
import AdmissionsJourney from '@/components/AdmissionsJourney';
import Calendar from '@/components/Calendar';
import CommunityNews from '@/components/CommunityNews';
import FAQ from '@/components/FAQ';
import Donation from '@/components/Donation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <VideoSection />
      <TrustSignals />
      <WhyChooseUs />
      <AcademicExcellence />
      <FacilityHighlights />
      <Leadership />
      <AdmissionsJourney />
      <Calendar />
      <CommunityNews />
      <FAQ />
      <Donation />
      <Footer />
    </main>
  );
}
