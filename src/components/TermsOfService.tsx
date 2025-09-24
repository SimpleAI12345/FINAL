import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onNavigate: (page: string) => void;
}

export default function TermsOfService({ onNavigate }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Effective Date: 14/09/2025
            </p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to JustSimpleAI.com. These Terms of Service ("Terms") govern your use of our website and services ("Service"). By purchasing, accessing, or using our Service, you agree to these Terms. If you do not agree, do not proceed with purchase or use of the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Definitions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>User / You / Your:</strong> Any individual who purchases or uses our AI agent(s) via the Service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>AI Agent:</strong> A one-time automation agent we sell, which performs certain AI-driven tasks as described at the time of purchase.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Purchase:</strong> A one-time payment made by you to acquire an AI Agent.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>User Content:</strong> Any content, data, materials you provide for the purpose of creating or configuring your AI Agent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. No Subscriptions</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Service does not include subscription plans. Once you purchase an AI Agent, there are no recurring fees, unless explicitly agreed in writing for additional work beyond the scope of the original purchase.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. No Refunds Policy / Final Sale</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All purchases of AI Agents are final. We do not provide refunds or returns once the purchase is completed and you have received access to or delivery of the AI Agent.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By completing the purchase, you acknowledge that you understand the nature of the product and agree that you will not request refund based solely on change of mind.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Consumer Rights under EU/Croatian Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notwithstanding our No Refunds policy:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You maintain any statutory rights you have under applicable laws (EU directives, Croatian Consumer Protection Act) in case the AI Agent is defective, materially does not match the description, or fails to perform essential functions as advertised. For example, if the product is found faulty or misrepresented, you may have the right to a repair, replacement, or refund.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you believe the product is defective or not as described, you must notify us in writing within 3 days from date of purchase. We will evaluate your claim and, where warranted by law and evidence, offer remedy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Account and Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to provide accurate, current, and complete information when making a purchase or using the Service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for keeping any credentials (if applicable) safe.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              You must not misuse the Service, upload infringing content, or violate laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All intellectual property rights in the AI Agents, website, software, designs, trade names and other content remain with JustSimpleAI or relevant licensors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You own any User Content you upload, but grant us a non-exclusive, worldwide, royalty-free license to use that content to deliver, operate, improve, and maintain your AI Agent and the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability & Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide the Service as advertised, but do not guarantee that every function will be error-free, or that the performance will always meet expectations in all environments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the extent permitted by law, we limit our liability for issues to the repair or replacement of the Agent or, if required by law, a refund where legally mandated.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are not liable for indirect, special, incidental, or consequential damages arising from use or inability to use the AI Agent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you violate these Terms, we may suspend or terminate your access to the AI Agent.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              After termination, your rights to use the Agent cease.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Modifications to the Product or Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify the Terms, update or improve the AI Agent or our Service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Major changes to Terms will be posted on the Website; continued use after notice constitutes your acceptance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by the laws of the Republic of Croatia and relevant EU law.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any dispute shall be resolved in the courts of Zagreb, Croatia (or another agreed jurisdiction), unless otherwise required by applicable law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Severability & Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any part of these Terms is held invalid or unenforceable, the remainder shall continue in full force.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms, together with any other policies (Privacy Policy, etc.), constitute the entire agreement between you and JustSimpleAI regarding the Service.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms, please contact us at:{' '}
                <a 
                  href="mailto:info@justsimpleai.com" 
                  className="text-green-500 hover:text-green-700 underline"
                >
                  info@justsimpleai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}