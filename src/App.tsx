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

  // Update page title and meta description based on current page
  React.useEffect(() => {
    const updateCanonicalUrl = (slug: string) => {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `https://justsimpleai.com${slug}`);
    };

    const updateOGTags = (title: string, description: string, url: string) => {
      // Update OG tags
      const updateMetaTag = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      // Update Twitter tags
      const updateTwitterTag = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      updateMetaTag('og:title', title);
      updateMetaTag('og:description', description);
      updateMetaTag('og:url', url);
      updateTwitterTag('twitter:title', title);
      updateTwitterTag('twitter:description', description);
    };

    const updatePageMeta = () => {
      switch (currentPage) {
        case 'contact':
          document.title = 'Contact Us - Get AI Automation Quote | SimpleAI';
          document.querySelector('meta[name="description"]')?.setAttribute('content', 
            'Contact SimpleAI for AI automation solutions. Get quotes for customer support agents, appointment setting, and CRM integration services.');
          updateCanonicalUrl('/contact');
          updateOGTags(
            'Contact Us - Get AI Automation Quote | SimpleAI',
            'Contact SimpleAI for AI automation solutions. Get quotes for customer support agents, appointment setting, and CRM integration services.',
            'https://justsimpleai.com/contact'
          );
          break;
        case 'privacy':
          document.title = 'Privacy Policy | SimpleAI';
          document.querySelector('meta[name="description"]')?.setAttribute('content', 
            'SimpleAI Privacy Policy. Learn how we collect, use, and protect your personal data when using our AI automation services.');
          updateCanonicalUrl('/privacy');
          updateOGTags(
            'Privacy Policy | SimpleAI',
            'SimpleAI Privacy Policy. Learn how we collect, use, and protect your personal data when using our AI automation services.',
            'https://justsimpleai.com/privacy'
          );
          break;
        case 'terms':
          document.title = 'Terms of Service | SimpleAI';
          document.querySelector('meta[name="description"]')?.setAttribute('content', 
            'SimpleAI Terms of Service. Review our terms and conditions for AI automation services, customer support agents, and CRM integration.');
          updateCanonicalUrl('/terms');
          updateOGTags(
            'Terms of Service | SimpleAI',
            'SimpleAI Terms of Service. Review our terms and conditions for AI automation services, customer support agents, and CRM integration.',
            'https://justsimpleai.com/terms'
          );
          break;
        default:
          document.title = 'AI Automation & Customer Support | SimpleAI';
          document.querySelector('meta[name="description"]')?.setAttribute('content', 
            'AI agents for automation, customer support and CRM. Faster responses, lower costs, more conversions. Transform your business today.');
          updateCanonicalUrl('/');
          updateOGTags(
            'AI Automation & Customer Support | SimpleAI',
            'AI agents for automation, customer support and CRM. Faster responses, lower costs, more conversions. Transform your business today.',
            'https://justsimpleai.com/'
          );
      }
    };

    updatePageMeta();
  }, [currentPage]);

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