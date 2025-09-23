import React from 'react';
import { ArrowLeft, Database, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AICRMIntegrationPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  onContactClick: () => void;
}

export default function AICRMIntegrationPage({ onBack, onNavigate, onContactClick }: AICRMIntegrationPageProps) {
  const heroAnimation = useScrollAnimation();
  const problemAnimation = useScrollAnimation();
  const solutionAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation();
  const integrationsAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  React.useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI & CRM Integration",
      "description": "Intelligent CRM automation that streamlines lead management, improves data quality, and increases conversion rates through AI-powered workflows.",
      "provider": {
        "@type": "Organization",
        "name": "SimpleAI",
        "url": "https://justsimpleai.com"
      },
      "serviceType": "CRM Integration and Automation",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "description": "AI-powered CRM integration and automation",
        "availability": "https://schema.org/InStock"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    script.id = 'ai-crm-integration-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('ai-crm-integration-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const benefits = [
    { icon: TrendingUp, title: "50% Higher Conversion", description: "AI-powered lead scoring and nurturing" },
    { icon: Database, title: "Clean, Organized Data", description: "Automated data entry and deduplication" },
    { icon: Users, title: "Better Lead Management", description: "Intelligent routing and follow-up" }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Monday.com", "ActiveCampaign", "Mailchimp", "Zapier", "Microsoft Dynamics"
  ];

  const faqs = [
    {
      question: "Which CRM systems do you integrate with?",
      answer: "We integrate with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, and many others. Custom integrations are also available."
    },
    {
      question: "How does AI improve CRM data quality?",
      answer: "AI automatically cleanses data, removes duplicates, standardizes formats, and enriches records with additional information from various sources."
    },
    {
      question: "Can AI help with lead scoring?",
      answer: "Yes, our AI analyzes lead behavior, demographics, and engagement to provide accurate lead scores and prioritize your sales efforts."
    },
    {
      question: "What about data security and privacy?",
      answer: "We follow enterprise-grade security standards with encryption, access controls, and compliance with GDPR, CCPA, and other privacy regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroAnimation.ref}
            className={`text-center animate-fade-in-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI & CRM Integration
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your CRM into an intelligent sales machine with AI automation that manages leads, nurtures prospects, and closes more deals.
            </p>
            <button
              onClick={onContactClick}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-lg shadow-lg"
            >
              Supercharge Your CRM
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={problemAnimation.ref}
            className={`animate-fade-in-up ${problemAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Your CRM Is Costing You Sales
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Manual data entry errors, missed follow-ups, and poor lead prioritization are killing your conversion rates. Your sales team spends more time managing the CRM than actually selling.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Duplicate records, incomplete information, and inconsistent processes create chaos instead of clarity. Hot leads go cold while your team struggles with administrative tasks.
                </p>
                <p className="text-lg text-gray-700">
                  Without intelligent automation, your CRM becomes a data graveyard instead of a sales accelerator.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Hidden Costs:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>27% of leads never get followed up</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Sales reps spend 65% of time on admin tasks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Poor data quality costs $15M annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Inconsistent processes reduce close rates by 40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={solutionAnimation.ref}
            className={`animate-fade-in-up ${solutionAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Intelligent CRM Automation
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Sales Engine</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI integration transforms your CRM from a passive database into an active sales assistant. Automated lead scoring, intelligent routing, and personalized nurturing campaigns work 24/7 to move prospects through your pipeline.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Advanced machine learning analyzes customer behavior, predicts buying intent, and suggests the best actions for each lead, ensuring no opportunity is missed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Automated lead scoring and prioritization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Intelligent data cleansing and enrichment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Personalized nurturing sequences</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">AI CRM Features:</h4>
                <ul className="space-y-3">
                  <li>• Automatic lead capture and qualification</li>
                  <li>• Smart lead routing to best sales rep</li>
                  <li>• Predictive analytics and forecasting</li>
                  <li>• Automated follow-up sequences</li>
                  <li>• Deal progression tracking and alerts</li>
                  <li>• Customer behavior analysis</li>
                  <li>• Performance reporting and insights</li>
                  <li>• Integration with marketing automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={benefitsAnimation.ref}
            className={`animate-fade-in-up ${benefitsAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Measurable Sales Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={integrationsAnimation.ref}
            className={`text-center animate-fade-in-up ${integrationsAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Works With Your CRM
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Seamless integration with all major CRM platforms and sales tools.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-sm font-medium text-gray-700">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={faqAnimation.ref}
            className={`animate-fade-in-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              CRM Integration Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Complete Your Sales Automation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => onNavigate('ai-automation')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI Automation</h3>
              <p className="text-sm text-gray-600">Complete business automation</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('ai-customer-support')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI Customer Support</h3>
              <p className="text-sm text-gray-600">24/7 automated support</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('ai-appointment-setting')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI Appointment Setting</h3>
              <p className="text-sm text-gray-600">Automated scheduling</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('ai-for-clinics')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI for Clinics</h3>
              <p className="text-sm text-gray-600">Healthcare automation</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-500 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={ctaAnimation.ref}
            className={`animate-fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Close More Deals?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-8">
              Transform your CRM into an intelligent sales machine that works 24/7.
            </p>
            <button
              onClick={onContactClick}
              className="bg-white text-green-500 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Get CRM AI Integration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}