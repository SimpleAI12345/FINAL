import React from 'react';
import { MessageCircle, Calendar, Globe, Database, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServicesProps {
  onContactClick: () => void;
}

export default function Services({ onContactClick }: ServicesProps) {
  const titleAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const services = [
    {
      icon: MessageCircle,
      title: 'AI Customer Support Agents',
      description: 'Available 24/7, instantly resolving customer queries, freeing your team for high-value work.',
      cta: 'See Customer Support in Action'
    },
    {
      icon: Calendar,
      title: 'AI Appointment Setting Agents',
      description: 'Never miss a lead — our AI agents schedule, confirm, and manage appointments automatically.',
      cta: 'Book More Calls with AI'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamlessly connect your existing CRM with AI automation for streamlined lead management.',
      cta: 'Optimize Your CRM'
    },
    {
      icon: Globe,
      title: 'Website Build & Design',
      description: 'Professional, AI-assisted websites designed to convert visitors into paying customers.',
      cta: 'See Our Website Solutions'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive AI automation solutions to streamline your business operations
          </p>
        </div>

        <div 
          ref={gridAnimation.ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 animate-fade-in-up ${gridAnimation.isVisible ? 'visible' : ''}`}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group animate-fade-in-up animate-stagger-${index + 1} ${gridAnimation.isVisible ? 'visible' : ''}`}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <IconComponent className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={onContactClick}
                  className="text-green-500 font-medium hover:text-green-700 transition-colors flex items-center gap-2 group text-sm sm:text-base"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        <div 
          ref={ctaAnimation.ref}
          className={`text-center animate-fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
        >
          <p className="text-base sm:text-lg text-gray-600 mb-6 px-4">
            Looking for a custom AI solution? Let's talk.
          </p>
          <button 
            onClick={onContactClick}
            className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}