import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CallToActionProps {
  onContactClick: () => void;
}

export default function CallToAction({ onContactClick }: CallToActionProps) {
  const ctaAnimation = useScrollAnimation();

  const benefits = [
    'Quick 1-2 week setup',
    '24/7 AI automation',
    'No technical expertise needed',
    'Ongoing support included'
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-green-500 to-green-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div 
          ref={ctaAnimation.ref}
          className={`animate-fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using AI automation to save time, reduce costs, and increase revenue.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center sm:justify-start text-green-100">
                <CheckCircle className="w-5 h-5 mr-2 text-green-200" />
                <span className="text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onContactClick}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="text-green-100 text-sm">
              Free consultation • No commitment required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}