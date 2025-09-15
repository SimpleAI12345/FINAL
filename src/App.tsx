import React from 'react';

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">Please refresh the page to try again.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    return (
      <ErrorBoundary>
        <ContactPage onBack={showHomePage} />
      </ErrorBoundary>
    );
  }

  if (currentPage === 'terms') {
    return (
      <ErrorBoundary>
        <TermsOfService onBack={showHomePage} />
      </ErrorBoundary>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <ErrorBoundary>
        <PrivacyPolicy onBack={showHomePage} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;