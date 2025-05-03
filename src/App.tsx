import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PromiseSection from './components/PromiseSection';
import BenefitsSection from './components/BenefitsSection';
import AudienceSection from './components/AudienceSection';
import ResultsSection from './components/ResultsSection';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-green-50 min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PromiseSection />
        <BenefitsSection />
        <AudienceSection />
        <ResultsSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;