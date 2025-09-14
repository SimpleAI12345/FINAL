import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Authority() {
  const badgesAnimation = useScrollAnimation();
  const founderAnimation = useScrollAnimation();

  const badges = [
    { icon: Users, text: 'Trusted by SMEs' },
    { icon: Zap, text: 'Fast Setup Guarantee' },
    { icon: Shield, text: 'Proven Results' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div 
          ref={badgesAnimation.ref}
          className={`flex flex-wrap justify-center gap-4 sm:gap-8 mb-16 animate-fade-in-up ${badgesAnimation.isVisible ? 'visible' : ''}`}
        >
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-2 bg-gray-50 px-4 sm:px-6 py-3 rounded-full animate-fade-in-up animate-stagger-${index + 1} ${badgesAnimation.isVisible ? 'visible' : ''}`}
            >
              <badge.icon size={20} className="text-green-500" />
              <span className="font-medium text-gray-700 text-sm sm:text-base">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Founder's Note */}
        <div 
          ref={founderAnimation.ref}
          className={`max-w-4xl mx-auto animate-scale-in ${founderAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-1 text-center">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Founder"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <div className="text-sm text-gray-600">Founder & CEO</div>
                <div className="font-bold text-gray-900">SimpleAI</div>
              </div>
              
              <div className="lg:col-span-2">
                <blockquote className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  "We built SimpleAI to help businesses work smarter, not harder. Every solution we create is designed with one goal in mind: giving you more time to focus on what truly matters for your business growth."
                </blockquote>
                <div className="text-green-500 font-medium">
                  — The SimpleAI Team
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}