import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import Authority from './components/Authority';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop';
import AIAutomationPage from './components/AIAutomationPage';
import AICustomerSupportPage from './components/AICustomerSupportPage';
import AICRMIntegrationPage from './components/AICRMIntegrationPage';
import AIForClinicsPage from './components/AIForClinicsPage';
import AIAppointmentSettingPage from './components/AIAppointmentSettingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleContactClick = () => {
    setCurrentPage('contact');
  };

  const handleBackClick = () => {
    setCurrentPage('home');
  };

  const handlePrivacyClick = () => {
    setCurrentPage('privacy');
  };

  const handleTermsClick = () => {
    setCurrentPage('terms');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  // Handle URL routing
  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/privacy') {
      setCurrentPage('privacy');
    } else if (path === '/terms') {
      setCurrentPage('terms');
    } else if (path === '/ai-automation') {
      setCurrentPage('ai-automation');
    } else if (path === '/ai-customer-support') {
      setCurrentPage('ai-customer-support');
    } else if (path === '/ai-crm-integration') {
      setCurrentPage('ai-crm-integration');
    } else if (path === '/ai-for-clinics') {
      setCurrentPage('ai-for-clinics');
    } else if (path === '/ai-appointment-setting') {
      setCurrentPage('ai-appointment-setting');
    } else {
      setCurrentPage('home');
    }
  }, []);

  // Update URL when page changes
  React.useEffect(() => {
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;
    window.history.pushState({}, '', path);
  }, [currentPage]);

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-gray-50">
        <ContactPage onBack={handleBackClick} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-gray-50">
        <PrivacyPolicy onBack={handleBackClick} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-gray-50">
        <TermsOfService onBack={handleBackClick} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'ai-automation') {
    return (
      <div className="min-h-screen bg-gray-50">
        <AIAutomationPage onBack={handleBackClick} onNavigate={handleNavigate} onContactClick={handleContactClick} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'ai-customer-support') {
    return (
      <div className="min-h-screen bg-gray-50">
        <AICustomerSupportPage onBack={handleBackClick} onNavigate={handleNavigate} onContactClick={handleContactClick} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'ai-crm-integration') {
    return (
      <div className="min-h-screen bg-gray-50">
        <AICRMIntegrationPage onBack={handleBackClick} onNavigate={handleNavigate} onContactClick={handleContactClick} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'ai-for-clinics') {
    return (
      <div className="min-h-screen bg-gray-50">
        <AIForClinicsPage onBack={handleBackClick} onNavigate={handleNavigate} onContactClick={handleContactClick} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'ai-appointment-setting') {
    return (
      <div className="min-h-screen bg-gray-50">
        <AIAppointmentSettingPage onBack={handleBackClick} onNavigate={handleNavigate} onContactClick={handleContactClick} />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onContactClick={handleContactClick} onTermsClick={handleTermsClick} />
      <Hero onContactClick={handleContactClick} />
      <PainPoints />
      <Services onContactClick={handleContactClick} />
      <About />
      <HowItWorks onContactClick={handleContactClick} />
      <Authority />
      <CallToAction onContactClick={handleContactClick} />
      <Footer onPrivacyClick={handlePrivacyClick} onTermsClick={handleTermsClick} />
      <ScrollToTop />
    </div>
  );
}

export default App;