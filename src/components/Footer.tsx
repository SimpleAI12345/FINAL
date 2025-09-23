import React from 'react';

interface FooterProps {
  onContactClick: () => void;
  onPrivacyClick: () => void;
  onTermsClick: () => void;
  onNavigate: (page: string) => void;
}

export default function Footer({ onContactClick, onPrivacyClick, onTermsClick, onNavigate }: FooterProps) {
  const services = [
    { name: 'AI Customer Support', page: 'ai-customer-support' },
    { name: 'AI Appointment Setting', page: 'ai-appointment-setting' },
    { name: 'CRM Integration', page: 'ai-crm-integration' },
    { name: 'Website Build & Design', page: 'website-build-design' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Simple<span className="text-green-500">AI</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI-powered agents for customer support, appointment setting, CRM integration, and website automation — helping businesses save time and close more deals.
            </p>
            <button
              onClick={onContactClick}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Get Started
            </button>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.page}>
                  <button
                    onClick={() => onNavigate(service.page)}
                    className="text-gray-300 hover:text-green-500 transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onPrivacyClick}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onTermsClick}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SimpleAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}