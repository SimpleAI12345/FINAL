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

  const navigateToAICustomerSupport = () => {
    setCurrentPage('ai-customer-support');
    window.history.pushState({}, '', '/ai-customer-support');
  };

  const navigateToAIAppointmentSetting = () => {
    setCurrentPage('ai-appointment-setting');
    window.history.pushState({}, '', '/ai-appointment-setting');
  };

  const navigateToAICRMIntegration = () => {
    setCurrentPage('ai-crm-integration');
    window.history.pushState({}, '', '/ai-crm-integration');
  };

  const navigateToWebsiteBuildDesign = () => {
    setCurrentPage('website-build-design');
    window.history.pushState({}, '', '/website-build-design');
  };

  if (currentPage === 'contact') {
    return <ContactPage onBackToHome={navigateToHome} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBackToHome={navigateToHome} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBackToHome={navigateToHome} />;
  }

  if (currentPage === 'ai-customer-support') {
    return <AICustomerSupportPage onBackToHome={navigateToHome} onContactClick={navigateToContact} />;
  }

  if (currentPage === 'ai-appointment-setting') {
    return <AIAppointmentSettingPage onBackToHome={navigateToHome} onContactClick={navigateToContact} />;
  }

  if (currentPage === 'ai-crm-integration') {
    return <AICRMIntegrationPage onBackToHome={navigateToHome} onContactClick={navigateToContact} />;
  }

  if (currentPage === 'website-build-design') {
    return <WebsiteBuildDesignPage onBackToHome={navigateToHome} onContactClick={navigateToContact} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onContactClick={navigateToContact}
        onPrivacyClick={navigateToPrivacy}
        onTermsClick={navigateToTerms}
        onAICustomerSupportClick={navigateToAICustomerSupport}
        onAIAppointmentSettingClick={navigateToAIAppointmentSetting}
        onAICRMIntegrationClick={navigateToAICRMIntegration}
        onWebsiteBuildDesignClick={navigateToWebsiteBuildDesign}
      />
      <Hero onContactClick={navigateToContact} />
      <PainPoints />
      <Services onContactClick={navigateToContact} />
      <About />
      <HowItWorks />
      <Authority />
      <CallToAction onContactClick={navigateToContact} />
      <Footer 
        onContactClick={navigateToContact}
        onPrivacyClick={navigateToPrivacy}
        onTermsClick={navigateToTerms}
        onAICustomerSupportClick={navigateToAICustomerSupport}
        onAIAppointmentSettingClick={navigateToAIAppointmentSetting}
        onAICRMIntegrationClick={navigateToAICRMIntegration}
        onWebsiteBuildDesignClick={navigateToWebsiteBuildDesign}
      />
      <ScrollToTop />
    </div>
  );
}