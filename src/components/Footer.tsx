import React from 'react';

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

export default function Footer({ onTermsClick, onPrivacyClick }: FooterProps) {
  const navigationLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Simple<span className="text-green-600">AI</span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              AI-powered agents for customer support, appointment setting, and website automation — helping businesses save time and close more deals.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold mb-4">Contact Information</h3>
            <div className="text-gray-300">
              <p className="mb-2">Email:</p>
              <a
                href="mailto:info@justsimpleai.com"
                className="text-green-600 hover:text-green-500 transition-colors duration-200"
              >
                info@justsimpleai.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
              © 2025 SimpleAI. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <button 
                onClick={onTermsClick}
                className="text-gray-400 hover:text-green-600 transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={onPrivacyClick}
                className="text-gray-400 hover:text-green-600 transition-colors duration-200"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}