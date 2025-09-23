import React from 'react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export default function Footer({ onPrivacyClick, onTermsClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
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
            <div className="text-gray-400 text-sm">
              <p>© 2025 SimpleAI. All rights reserved.</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/ai-customer-support" className="hover:text-green-500 transition-colors">AI Customer Support</a></li>
              <li><a href="/ai-appointment-setting" className="hover:text-green-500 transition-colors">AI Appointment Setting</a></li>
              <li><a href="/ai-crm-integration" className="hover:text-green-500 transition-colors">CRM Integration</a></li>
              <li><a href="/ai-automation" className="hover:text-green-500 transition-colors">AI Automation</a></li>
              <li><a href="/ai-for-clinics" className="hover:text-green-500 transition-colors">AI for Clinics</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={onPrivacyClick}
                  className="hover:text-green-500 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={onTermsClick}
                  className="hover:text-green-500 transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-gray-300 text-sm">info@justsimpleai.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}