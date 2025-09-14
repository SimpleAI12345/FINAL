import React from 'react';
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
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'contact' | 'terms' | 'privacy'>('home');

  const showContactPage = () => setCurrentPage('contact');
  const showTermsPage = () => setCurrentPage('terms');
  const showPrivacyPage = () => setCurrentPage('privacy');
  const showHomePage = () => setCurrentPage('home');

  if (currentPage === 'contact') {
    return <ContactPage onBack={showHomePage} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={showHomePage} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={showHomePage} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={showContactPage} onTermsClick={showTermsPage} />
      <Hero onContactClick={showContactPage} />
      <PainPoints />
      <Services onContactClick={showContactPage} />
      <About />
      <HowItWorks onContactClick={showContactPage} />
      <Authority />
      <CallToAction onContactClick={showContactPage} />
      <Footer onTermsClick={showTermsPage} onPrivacyClick={showPrivacyPage} />
      <ScrollToTop />
    </div>
  );
}

export default App;