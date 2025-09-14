import React from 'react';
import { Zap, Shield, TrendingUp, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const titleAnimation = useScrollAnimation();
  const missionAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();

  const values = [
    {
      icon: Zap,
      title: 'Simplicity',
      description: 'AI should be easy to use, not complicated.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'We prioritize transparency and long-term relationships.'
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'Every solution is designed to directly improve your bottom line.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead so you don\'t have to.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About SimpleAI
          </h2>
          
          {/* Mission Statement */}
          <div 
            ref={missionAnimation.ref}
            className={`max-w-4xl mx-auto mb-12 animate-fade-in-up ${missionAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 px-4">
              At SimpleAI, our mission is to make powerful AI automation simple, accessible, and effective for businesses of all sizes. We help teams save time, cut costs, and focus on what truly matters — growth.
            </p>
          </div>

          {/* Your Story */}
          <div 
            ref={storyAnimation.ref}
            className={`max-w-4xl mx-auto mb-16 animate-fade-in-up ${storyAnimation.isVisible ? 'visible' : ''}`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Why We Exist</h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
              We started SimpleAI after seeing countless businesses drown in repetitive tasks and missed opportunities. Our team knew AI could solve these problems, but only if it was delivered in a way that was easy to use and tailored to real business needs.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div 
          ref={valuesAnimation.ref}
          className={`mb-16 animate-fade-in-up ${valuesAnimation.isVisible ? 'visible' : ''}`}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 hover:shadow-lg transition-all duration-300 group animate-fade-in-up animate-stagger-${index + 1} ${valuesAnimation.isVisible ? 'visible' : ''}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <value.icon size={32} className="text-green-500" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}