import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CallToActionProps {
  onContactClick: () => void;
}

export default function CallToAction({ onContactClick }: CallToActionProps) {
  const animation = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-green-500 to-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={animation.ref}
          className={`text-center animate-fade-in-up ${animation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 px-4">
            Ready to simplify your business with AI?
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-3xl mx-auto px-4">
            Let's build your automation strategy today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onContactClick}
              className="bg-white text-green-500 px-6 sm:px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center text-base sm:text-lg"
            >
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="flex items-center text-green-100 px-4">
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
      </div>
    </section>
  );
}