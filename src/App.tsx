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
import AICustomerSupportPage from './components/AICustomerSupportPage';
import AIAppointmentSettingPage from './components/AIAppointmentSettingPage';
import AICRMIntegrationPage from './components/AICRMIntegrationPage';
import WebsiteBuildDesignPage from './components/WebsiteBuildDesignPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPolicy onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsOfService onNavigate={handleNavigate} />;
      case 'ai-customer-support':
        return <AICustomerSupportPage onNavigate={handleNavigate} onContactClick={handleContactClick} />;
      case 'ai-appointment-setting':
        return <AIAppointmentSettingPage onNavigate={handleNavigate} onContactClick={handleContactClick} />;
      case 'ai-crm-integration':
        return <AICRMIntegrationPage onNavigate={handleNavigate} onContactClick={handleContactClick} />;
      case 'website-build-design':
        return <WebsiteBuildDesignPage onNavigate={handleNavigate} onContactClick={handleContactClick} />;
      default:
        return (
          <>
            <Hero onContactClick={handleContactClick} />
            <PainPoints />
            <Services onContactClick={handleContactClick} onNavigate={handleNavigate} />
            <Services onContactClick={handleContactClick} onNavigate={handleNavigate} />
            <About />
            <HowItWorks />
            <Authority />
            <CallToAction onContactClick={handleContactClick} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header 
        onNavigate={handleNavigate} 
        onContactClick={handleContactClick}
        scrollToSection={scrollToSection}
        currentPage={currentPage}
      />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}