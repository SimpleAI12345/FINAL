import React from 'react';
import { ArrowLeft, MessageCircle, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AICustomerSupportPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  onContactClick: () => void;
}

export default function AICustomerSupportPage({ onBack, onNavigate, onContactClick }: AICustomerSupportPageProps) {
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
      "name": "AI Customer Support",
      "description": "24/7 AI-powered customer support agents that provide instant responses, resolve queries, and improve customer satisfaction.",
      "provider": {
        "@type": "Organization",
        "name": "SimpleAI",
        "url": "https://justsimpleai.com"
      },
      "serviceType": "Customer Support Automation",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "description": "AI customer support implementation",
        "availability": "https://schema.org/InStock"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    script.id = 'ai-customer-support-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('ai-customer-support-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const benefits = [
    { icon: Clock, title: "Instant Response Time", description: "Respond to customers in seconds, not hours" },
    { icon: Users, title: "Handle 10x More Queries", description: "Scale support without hiring more staff" },
    { icon: MessageCircle, title: "24/7 Availability", description: "Never miss a customer inquiry again" }
  ];

  const integrations = [
    "Zendesk", "Intercom", "Freshdesk", "Help Scout", "LiveChat", "Slack", "Microsoft Teams", "WhatsApp", "Facebook Messenger"
  ];

  const faqs = [
    {
      question: "How accurate are AI customer support responses?",
      answer: "Our AI agents achieve 95%+ accuracy by training on your specific knowledge base, FAQs, and past customer interactions."
    },
    {
      question: "Can AI handle complex customer issues?",
      answer: "AI handles routine queries instantly and escalates complex issues to human agents with full context and conversation history."
    },
    {
      question: "How long does implementation take?",
      answer: "Most AI customer support systems are live within 1-2 weeks, including training, testing, and integration with your existing tools."
    },
    {
      question: "Will customers know they're talking to AI?",
      answer: "We can configure the system to identify as AI or blend seamlessly. Most customers prefer fast, accurate AI responses over waiting for humans."
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
              AI for Customer Support
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Deliver instant, accurate customer support 24/7 with AI agents that understand your business and delight your customers.
            </p>
            <button
              onClick={onContactClick}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-lg shadow-lg"
            >
              Get AI Customer Support
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
              Customer Support Challenges Killing Your Business
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Long wait times frustrate customers and drive them to competitors. Your support team is overwhelmed with repetitive questions, leaving complex issues unresolved and customers unsatisfied.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  After-hours inquiries pile up, weekend emergencies go unanswered, and your team burns out trying to keep up with demand.
                </p>
                <p className="text-lg text-gray-700">
                  Poor customer support directly impacts your bottom line through lost sales, negative reviews, and customer churn.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Real Cost:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>67% of customers abandon purchases due to poor support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Average response time: 12+ hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Support staff costs: $50,000+ per agent annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Lost revenue from after-hours inquiries</span>
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
              AI Customer Support That Actually Works
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Support Agents</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI customer support agents are trained on your specific products, services, policies, and past customer interactions. They provide accurate, helpful responses that match your brand voice and tone.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Advanced natural language processing ensures customers feel heard and understood, while seamless escalation to human agents handles complex issues.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Instant responses to common questions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Smart escalation to human agents</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Multi-channel support (chat, email, social)</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">What Our AI Handles:</h4>
                <ul className="space-y-3">
                  <li>• Product information and specifications</li>
                  <li>• Order status and tracking inquiries</li>
                  <li>• Account management and password resets</li>
                  <li>• Billing questions and payment issues</li>
                  <li>• Return and refund policy explanations</li>
                  <li>• Appointment scheduling and changes</li>
                  <li>• Technical troubleshooting guides</li>
                  <li>• Lead qualification and routing</li>
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
              Transform Your Customer Experience
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
              Works With Your Existing Tools
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Seamlessly integrate with popular customer support platforms and communication channels.
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
              Common Questions About AI Customer Support
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
            Complete Your AI Automation
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
              onClick={() => onNavigate('ai-appointment-setting')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI Appointment Setting</h3>
              <p className="text-sm text-gray-600">Automated scheduling system</p>
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
              Ready for 24/7 Customer Support?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-8">
              Join businesses providing instant, accurate support that customers love.
            </p>
            <button
              onClick={onContactClick}
              className="bg-white text-green-500 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Start Your AI Support Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}