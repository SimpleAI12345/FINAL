import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Authority from './components/Authority';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop';

type Page = 'home' | 'contact' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleContactClick = () => {
    setCurrentPage('contact');
  };

  const handleTermsClick = () => {
    setCurrentPage('terms');
  };

  const handlePrivacyClick = () => {
    setCurrentPage('privacy');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'contact':
        return <ContactPage onBack={() => setCurrentPage('home')} />;
      case 'privacy':
        return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
      case 'terms':
        return <TermsOfService onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <Hero onContactClick={handleContactClick} />
            <Services onContactClick={handleContactClick} />
            <About />
            <Authority />
            <PainPoints />
            <HowItWorks onContactClick={handleContactClick} />
            <CallToAction onContactClick={handleContactClick} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onContactClick={handleContactClick}
        onTermsClick={handleTermsClick}
      />
      <main>
        {renderPage()}
      </main>
      <Footer 
        onTermsClick={handleTermsClick}
        onPrivacyClick={handlePrivacyClick}
      />
      <ScrollToTop />
    </div>
  );
}

export default App;