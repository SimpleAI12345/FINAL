import React from 'react';
import { ArrowLeft, Zap, Clock, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AIAutomationPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  onContactClick: () => void;
}

export default function AIAutomationPage({ onBack, onNavigate, onContactClick }: AIAutomationPageProps) {
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
      "name": "AI Automation for Businesses",
      "description": "Comprehensive AI automation solutions to streamline business operations, reduce costs, and improve efficiency across all departments.",
      "provider": {
        "@type": "Organization",
        "name": "SimpleAI",
        "url": "https://justsimpleai.com"
      },
      "serviceType": "Business Process Automation",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "description": "Custom AI automation implementation",
        "availability": "https://schema.org/InStock"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    script.id = 'ai-automation-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('ai-automation-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const benefits = [
    { icon: Clock, title: "Save 40+ Hours Weekly", description: "Automate repetitive tasks and focus on growth" },
    { icon: TrendingUp, title: "Increase Revenue by 30%", description: "Never miss leads with 24/7 AI assistance" },
    { icon: Zap, title: "Reduce Operational Costs", description: "Cut staffing costs while improving service quality" }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Monday.com", "Slack", "Microsoft Teams", "Gmail", "Outlook"
  ];

  const faqs = [
    {
      question: "How quickly can AI automation be implemented?",
      answer: "Most AI automation solutions can be implemented within 2-4 weeks, depending on complexity and integrations required."
    },
    {
      question: "Will AI automation work with our existing systems?",
      answer: "Yes, our AI solutions are designed to integrate seamlessly with popular CRMs, communication tools, and business software."
    },
    {
      question: "What kind of ROI can we expect?",
      answer: "Most businesses see 3-5x ROI within the first year through reduced labor costs, increased efficiency, and improved customer satisfaction."
    },
    {
      question: "Do we need technical expertise to manage AI automation?",
      answer: "No technical expertise required. We provide full setup, training, and ongoing support to ensure smooth operation."
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
              AI Automation for Businesses
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business operations with intelligent AI automation that works 24/7, reduces costs, and scales with your growth.
            </p>
            <button
              onClick={onContactClick}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-lg shadow-lg"
            >
              Get Your AI Automation Quote
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
              The Hidden Cost of Manual Processes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Your team spends countless hours on repetitive tasks that could be automated. Customer inquiries pile up, leads slip through cracks, and valuable employees burn out doing work that AI could handle instantly.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Meanwhile, competitors using AI automation are responding faster, capturing more leads, and scaling without proportional increases in overhead costs.
                </p>
                <p className="text-lg text-gray-700">
                  Every day without automation is money left on the table and opportunities missed.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Business Pain Points:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Delayed customer responses leading to lost sales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Manual data entry consuming valuable time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Inconsistent follow-up processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>High operational costs with limited scalability</span>
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
              Our AI Automation Solution
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Process Automation</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI automation platform identifies repetitive tasks in your workflow and creates intelligent agents that handle them automatically. From customer inquiries to appointment scheduling, data entry to follow-up sequences.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Each AI agent is trained specifically for your business, understanding your processes, tone, and requirements to deliver consistent, professional results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Custom AI agents for your specific workflows</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Seamless integration with existing systems</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>24/7 operation with human oversight</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">What Gets Automated:</h4>
                <ul className="space-y-3">
                  <li>• Customer support and FAQ responses</li>
                  <li>• Lead qualification and routing</li>
                  <li>• Appointment scheduling and reminders</li>
                  <li>• Data entry and CRM updates</li>
                  <li>• Follow-up email sequences</li>
                  <li>• Report generation and analysis</li>
                  <li>• Social media monitoring and responses</li>
                  <li>• Invoice processing and tracking</li>
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
              Measurable Business Benefits
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
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Our AI automation works with the tools you already use, ensuring smooth implementation without disrupting your current workflows.
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
              Frequently Asked Questions
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
            Explore Our AI Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <p className="text-sm text-gray-600">Automated scheduling and reminders</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('ai-crm-integration')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI CRM Integration</h3>
              <p className="text-sm text-gray-600">Streamlined lead management</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('ai-for-clinics')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI for Clinics</h3>
              <p className="text-sm text-gray-600">Healthcare practice automation</p>
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-8">
              Join hundreds of businesses saving time and money with AI automation.
            </p>
            <button
              onClick={onContactClick}
              className="bg-white text-green-500 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}