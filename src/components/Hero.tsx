import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Automate Growth.{' '}
              <span className="text-green-600">Simplify Success.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
              AI-powered agents for customer support, appointment setting, and website automation — so you save time and close more deals.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button
                onClick={onContactClick}
                className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-lg"
              >
                Contact Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-base sm:text-lg"
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}