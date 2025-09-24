import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (page: string) => void;
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last Updated: 14/09/2025
            </p>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              SimpleAI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you use our Service at justsimpleai.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Data Controller</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Controller:</strong> SimpleAI
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Address:</strong> Poljana Dragutina Kalea 12
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Contact Email:</strong> info@justsimpleai.com
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. What Personal Data We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect various types of personal data, including:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Account Information:</strong> name, email address, hashed password or login credentials.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Usage Data:</strong> details about how you use the Service (pages visited, features used, time/duration).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Device & Technical Data:</strong> IP address, browser type/version, operating system, device identifiers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Communications Data:</strong> correspondence between you and us (e.g. support requests).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Payment & Billing Data:</strong> if you use paid subscriptions; payment method, transaction history.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Cookies & Tracking Data:</strong> cookies, web beacons, local storage for analytics, performance, preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Legal Basis for Processing (for Users in the EU)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process personal data under the following legal bases:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Consent:</strong> where required (e.g. for non-essential cookies, marketing communications).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Performance of a contract:</strong> to provide services, manage your account, fulfill subscriptions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Legitimate interests:</strong> for improving our Service, security, fraud prevention.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Legal obligations:</strong> compliance with laws/regulations (e.g. tax, GDPR reporting).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How We Use Your Personal Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your data to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6 space-y-1">
              <li>Provide, maintain, and improve the Service.</li>
              <li>Authenticate and manage your account.</li>
              <li>Process payments and manage subscriptions.</li>
              <li>Send necessary communications (e.g. account updates, support).</li>
              <li>Provide marketing or promotional materials, if you have opted in.</li>
              <li>Analyze usage, trends, and performance (analytics).</li>
              <li>Ensure security, prevent fraud or abuse.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Sharing of Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your data with:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Service Providers / Processors:</strong> hosting, email, analytics, payment processors (only under contract, with confidentiality).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Legal or Regulatory Authorities:</strong> when required by law or to protect rights.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Business Transfers:</strong> in case of merger, acquisition, or sale of assets, your data may be transferred (with privacy obligations).
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell your personal data to third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies and Similar Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and related technologies to store preferences, understand usage, provide functionalities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some cookies are essential for the site to function; others are for analytics, advertising, or preferences.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can manage or disable non-essential cookies via your browser settings or cookie consent tools. Note: disabling certain cookies may reduce functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain personal data only as long as necessary for the purposes for which it was collected or as required by law.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When no longer needed, we securely delete or anonymize the data.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Example: account data may be retained for 1 year after account deletion to handle disputes, legal obligations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement reasonable technical and organizational measures to protect personal data (e.g. encryption, access controls, regular security reviews).
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              However, no method of electronic storage or transmission over the Internet is completely secure. We cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your data is transferred outside the European Economic Area (EEA), we will ensure appropriate safeguards are in place (e.g. Standard Contractual Clauses).
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We comply with the GDPR's rules on international data transfer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Your Rights (for EU / Croatian Users)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a data subject, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6 space-y-1">
              <li>Right of access to your personal data.</li>
              <li>Right to correct or update inaccurate or incomplete data.</li>
              <li>Right to erasure ("right to be forgotten") under certain conditions.</li>
              <li>Right to restrict or object to processing.</li>
              <li>Right to data portability.</li>
              <li>Right to withdraw consent at any time (for processing based on consent).</li>
              <li>Right to lodge a complaint with the Croatian supervisory authority (AZOP).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Children's Data</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Service is not intended for children under 16. We do not knowingly collect personal data from children under 16. If we become aware that a child under 16 provided data, we will take steps to delete it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Data Breach Notification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In case of a personal data breach, we will notify the relevant supervisory authority (AZOP) without undue delay, and, if required, the affected individuals. Croatian law requires notification within 72 hours if the breach is likely to result in risk to rights and freedoms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We will document the breach and our response.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to this Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may update this Policy from time to time. When making significant changes, we will notify you via email or by posting a prominent notice on the Service. Your continued use after such changes means you accept the updated Policy.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
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