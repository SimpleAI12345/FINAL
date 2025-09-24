import React from 'react';
import { ArrowLeft, Database, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
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
      "name": "AI CRM Integration Services",
      "description": "Seamlessly connect your existing CRM with AI automation for streamlined lead management and improved conversion rates.",
      "provider": {
        "@type": "Organization",
        "name": "SimpleAI",
        "url": "https://justsimpleai.com"
      },
      "serviceType": "CRM Integration",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "description": "AI-powered CRM automation and integration",
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
    { icon: Database, title: "Smart Data Management", description: "AI organizes and enriches your lead data automatically" },
    { icon: Zap, title: "Automated Workflows", description: "Trigger actions based on lead behavior and engagement" },
    { icon: TrendingUp, title: "Better Conversions", description: "AI insights help you close more deals faster" }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Monday.com", "Airtable", "ActiveCampaign", "Mailchimp", "Custom APIs"
  ];

  const faqs = [
    {
      question: "Which CRM systems do you integrate with?",
      answer: "We integrate with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, and many others. We also work with custom CRM systems through API integrations."
    },
    {
      question: "How does AI improve CRM performance?",
      answer: "AI automatically scores leads, predicts conversion likelihood, suggests next actions, and identifies the best times to contact prospects. This helps your team focus on the highest-value opportunities."
    },
    {
      question: "Will it disrupt our current CRM workflow?",
      answer: "No, our AI integrations enhance your existing workflow without disruption. We work within your current CRM structure and gradually introduce automation features as your team gets comfortable."
    },
    {
      question: "How long does CRM integration take?",
      answer: "Most CRM integrations are completed within 1-2 weeks, including data migration, workflow setup, and team training. We handle the technical implementation while you focus on your business."
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroAnimation.ref}
            className={`text-center animate-fade-in-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="mb-6">
              <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                🔗 AI CRM Integration
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Supercharge Your CRM with AI
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your existing CRM into an AI-powered sales machine. Automate lead management, improve conversion rates, and close more deals with intelligent automation.
            </p>
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Upgrade Your CRM with AI
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
              Your CRM Is Holding You Back
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Manual data entry, missed follow-ups, and poor lead prioritization are costing you sales. Your team spends more time managing the CRM than actually selling.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Without AI insights, you're flying blind. You don't know which leads are most likely to convert, when to contact them, or what actions will move deals forward.
                </p>
                <p className="text-lg text-gray-700">
                  Meanwhile, your competitors with AI-powered CRMs are closing deals faster and more efficiently.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">CRM Problems:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Manual data entry wastes 2+ hours daily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Poor lead prioritization and scoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Missed follow-ups and opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>No predictive insights or automation</span>
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
              AI-Powered CRM Automation
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Lead Management</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI integration transforms your CRM into a smart sales assistant. It automatically scores leads, predicts conversion likelihood, and suggests the best actions to take.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  From data entry to follow-up scheduling, AI handles the busywork so your team can focus on building relationships and closing deals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Automated lead scoring and prioritization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Smart follow-up scheduling and reminders</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Predictive analytics and insights</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">AI CRM Features:</h4>
                <ul className="space-y-3">
                  <li>• Automatic lead scoring and qualification</li>
                  <li>• Smart data enrichment and cleansing</li>
                  <li>• Predictive conversion analytics</li>
                  <li>• Automated follow-up sequences</li>
                  <li>• Intelligent task and reminder creation</li>
                  <li>• Deal progression insights</li>
                  <li>• Performance tracking and optimization</li>
                  <li>• Custom workflow automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={benefitsAnimation.ref}
            className={`animate-fade-in-up ${benefitsAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Transform Your Sales Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-purple-500" size={32} />
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
              Works With Your Existing CRM
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              We integrate seamlessly with all major CRM platforms and custom systems.
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
            Complete Your Sales Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('ai-customer-support')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI Customer Support</h3>
              <p className="text-sm text-gray-600">24/7 automated customer service</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('ai-appointment-setting')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI Appointment Setting</h3>
              <p className="text-sm text-gray-600">Automated scheduling system</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('website-build-design')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">Website Build & Design</h3>
              <p className="text-sm text-gray-600">Professional web presence</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-500 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={ctaAnimation.ref}
            className={`animate-fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Supercharge Your CRM?
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 mb-8">
              Transform your CRM into an AI-powered sales machine that closes more deals.
            </p>
            <button
              onClick={onContactClick}
              className="bg-white text-purple-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Start Your CRM Transformation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}