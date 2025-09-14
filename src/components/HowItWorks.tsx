import React from 'react';
import { Mail, Target, Settings, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HowItWorksProps {
  onContactClick: () => void;
}

export default function HowItWorks({ onContactClick }: HowItWorksProps) {
  const titleAnimation = useScrollAnimation();
  const stepsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const steps = [
    {
      icon: Mail,
      title: 'Send Inquiry',
      description: 'Tell us about your business needs and current challenges'
    },
    {
      icon: Target,
      title: 'Custom Strategy',
      description: 'Tailored AI automation plan designed for your business'
    },
    {
      icon: Settings,
      title: 'Implementation',
      description: 'Quick setup with seamless integration into your systems'
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'Continuous optimization and updates to maximize results'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The SimpleAI Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            From discovery to deployment, we make AI automation simple and effective.
          </p>
        </div>

        <div 
          ref={stepsAnimation.ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 animate-fade-in-up ${stepsAnimation.isVisible ? 'visible' : ''}`}
        >
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center relative p-4 animate-fade-in-up animate-stagger-${index + 1} ${stepsAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <step.icon size={32} className="text-green-500" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 text-green-200">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div 
          ref={ctaAnimation.ref}
          className={`text-center animate-fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
        >
          <button
            onClick={onContactClick}
            className="bg-green-500 text-white px-6 sm:px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}