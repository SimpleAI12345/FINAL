import React from 'react';
import { Target, Users, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const titleAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your bottom line.'
    },
    {
      icon: Users,
      title: 'Customer-First',
      description: 'Your success is our success. We build solutions that work for your business.'
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Get up and running quickly with our streamlined setup process.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose SimpleAI?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another AI company. We're your partners in business transformation.
          </p>
        </div>

        <div 
          ref={contentAnimation.ref}
          className={`animate-fade-in-up ${contentAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Built for Small and Medium Businesses
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We understand the unique challenges SMEs face. That's why we've created AI solutions that are 
                affordable, easy to implement, and designed to scale with your business.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                No complex setups, no technical expertise required. Just powerful AI automation that works 
                from day one.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Quick 1-2 week implementation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">No technical knowledge required</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Ongoing support and optimization</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Businesses Automated</div>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">2 weeks</div>
                  <div className="text-sm text-gray-600">Average Setup</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">AI Availability</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">60%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-green-500" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}