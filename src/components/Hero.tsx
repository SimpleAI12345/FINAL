import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const heroAnimation = useScrollAnimation();

  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-br from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={heroAnimation.ref}
          className={`text-center animate-fade-in-up ${heroAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="mb-8">
            <span className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold shadow-sm">
              🤖 AI-Powered Business Automation
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              AI Automation
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            24/7 customer support, automated appointment setting, CRM integration, and professional websites. 
            Let AI handle the busywork while you focus on growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            >
              Get Your AI Solution
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors font-medium text-lg">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <Play className="w-5 h-5 text-green-500 ml-1" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Faster Response Times</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
              <div className="text-gray-600">More Appointments Booked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}