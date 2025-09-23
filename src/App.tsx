import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Authority from './components/Authority';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop';
import AICustomerSupportPage from './components/AICustomerSupportPage';
import AIAppointmentSettingPage from './components/AIAppointmentSettingPage';
import AICRMIntegrationPage from './components/AICRMIntegrationPage';
import WebsiteBuildDesignPage from './components/WebsiteBuildDesignPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleContactClick = () => {
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        <ContactPage onNavigate={handleNavigate} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        <PrivacyPolicy onNavigate={handleNavigate} />
        <Footer onNavigate={handleNavigate} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        <TermsOfService onNavigate={handleNavigate} />
        <Footer onNavigate={handleNavigate} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'ai-customer-support') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        <AICustomerSupportPage onNavigate={handleNavigate} onContactClick={handleContactClick} />
        <Footer onNavigate={handleNavigate} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'ai-appointment-setting') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        <AIAppointmentSettingPage onNavigate={handleNavigate} onContactClick={handleContactClick} />
        <Footer onNavigate={handleNavigate} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'crm-integration') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        <AICRMIntegrationPage onNavigate={handleNavigate} onContactClick={handleContactClick} />
        <Footer onNavigate={handleNavigate} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'website-build-design') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        <WebsiteBuildDesignPage onNavigate={handleNavigate} onContactClick={handleContactClick} />
        <Footer onNavigate={handleNavigate} />
        <ScrollToTop />
      </div>
    );
  }

  // Home page
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <Hero onContactClick={handleContactClick} />
      <PainPoints />
      <Services onContactClick={handleContactClick} />
      <About />
      <HowItWorks />
      <Authority />
      <CallToAction onContactClick={handleContactClick} />
      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
    </div>
  );
}