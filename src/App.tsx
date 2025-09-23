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
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AICustomerSupportPage from './components/AICustomerSupportPage';
import AIAppointmentSettingPage from './components/AIAppointmentSettingPage';
import AICRMIntegrationPage from './components/AICRMIntegrationPage';
import WebsiteBuildDesignPage from './components/WebsiteBuildDesignPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle navigation
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/privacy') {
        setCurrentPage('privacy');
      } else if (path === '/terms') {
        setCurrentPage('terms');
      } else if (path === '/ai-customer-support') {
        setCurrentPage('ai-customer-support');
      } else if (path === '/ai-appointment-setting') {
        setCurrentPage('ai-appointment-setting');
      } else if (path === '/ai-crm-integration') {
        setCurrentPage('ai-crm-integration');
      } else if (path === '/website-build-design') {
        setCurrentPage('website-build-design');
      } else {
        setCurrentPage('home');
      }
    };

    // Handle initial load
    handlePopState();

    // Listen for browser back/forward
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToContact = () => {
    setCurrentPage('contact');
    window.history.pushState({}, '', '/contact');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
  };

  const navigateToPrivacy = () => {
    setCurrentPage('privacy');
    window.history.pushState({}, '', '/privacy');
  };

  const navigateToTerms = () => {
    setCurrentPage('terms');
    window.history.pushState({}, '', '/terms');
  };

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', `/${page}`);
  };

  if (currentPage === 'contact') {
    return <ContactPage onBack={navigateToHome} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={navigateToHome} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={navigateToHome} />;
  }

  if (currentPage === 'ai-customer-support') {
    return <AICustomerSupportPage onBack={navigateToHome} onNavigate={navigateToPage} onContactClick={navigateToContact} />;
  }

  if (currentPage === 'ai-appointment-setting') {
    return <AIAppointmentSettingPage onBack={navigateToHome} onNavigate={navigateToPage} onContactClick={navigateToContact} />;
  }

  if (currentPage === 'ai-crm-integration') {
    return <AICRMIntegrationPage onBack={navigateToHome} onNavigate={navigateToPage} onContactClick={navigateToContact} />;
  }

  if (currentPage === 'website-build-design') {
    return <WebsiteBuildDesignPage onBack={navigateToHome} onNavigate={navigateToPage} onContactClick={navigateToContact} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onContactClick={navigateToContact}
        onTermsClick={navigateToTerms}
      />
      <Hero onContactClick={navigateToContact} />
      <PainPoints />
      <Services onContactClick={navigateToContact} />
      <About />
      <HowItWorks onContactClick={navigateToContact} />
      <Authority />
      <CallToAction onContactClick={navigateToContact} />
      <Footer 
        onContactClick={navigateToContact}
        onPrivacyClick={navigateToPrivacy}
        onTermsClick={navigateToTerms}
        onNavigate={navigateToPage}
      />
      <ScrollToTop />
    </div>
  );
}