import React from 'react';
import { Clock, PhoneOff, Globe, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PainPoints() {
  const titleAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const painPoints = [
    {
      icon: Clock,
      title: 'Long wait times in customer support',
      description: 'Unhappy customers waiting for responses'
    },
    {
      icon: PhoneOff,
      title: 'Missed appointments',
      description: 'Lost revenue from no-shows and scheduling issues'
    },
    {
      icon: Globe,
      title: 'Outdated websites',
      description: 'Lost credibility and missed opportunities'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div 
            ref={titleAnimation.ref}
            className={`animate-fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 px-4">
            Is your business spending too much time on repetitive tasks?
            </h2>
          </div>
          
          <div 
            ref={gridAnimation.ref}
            className={`grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 animate-fade-in-up ${gridAnimation.isVisible ? 'visible' : ''}`}
          >
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className={`text-center p-4 animate-fade-in-up animate-stagger-${index + 1} ${gridAnimation.isVisible ? 'visible' : ''}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4">
                  <point.icon size={32} className="text-red-500" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          
          <div 
            ref={ctaAnimation.ref}
            className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-2xl mx-auto animate-scale-in ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-lg sm:text-xl text-gray-900 font-semibold mb-4">
              SimpleAI automates the busywork so you can focus on growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}