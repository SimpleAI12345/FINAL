import React from 'react';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();

  const stats = [
    { icon: Zap, value: '40+', label: 'Hours Saved Weekly' },
    { icon: Users, value: '50+', label: 'Businesses Automated' },
    { icon: TrendingUp, value: '3x', label: 'Faster Response Times' }
  ];

  return (
    <section className="pt-16 pb-12 sm:pt-8 sm:pb-16 lg:py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={heroAnimation.ref}
          className={`text-center mb-12 animate-fade-in-up ${heroAnimation.isVisible ? 'visible' : ''}`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Powered Agents for Your Business
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
            AI-powered agents for customer support, appointment setting, CRM integration, and website automation — helping businesses save time and close more deals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onContactClick}
              className="bg-green-500 text-white px-6 sm:px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center text-base sm:text-lg"
            >
              Get Your AI Quote
              <ArrowRight size={20} className="ml-2" />
            </button>
            
            <div className="flex items-center text-gray-600 px-4">
              <div className="flex -space-x-2 mr-4">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Client"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Client"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Client"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-sm">Trusted by 50+ businesses</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsAnimation.ref}
          className={`grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-up ${statsAnimation.isVisible ? 'visible' : ''}`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animate-stagger-${index + 1} ${statsAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}