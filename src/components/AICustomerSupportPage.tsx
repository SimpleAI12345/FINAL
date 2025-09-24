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
  const faqAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  React.useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Customer Support Agents",
      "description": "24/7 AI-powered customer support agents that instantly resolve customer queries, freeing your team for high-value work.",
      "provider": {
        "@type": "Organization",
        "name": "SimpleAI",
        "url": "https://justsimpleai.com"
      },
      "serviceType": "AI Customer Support",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "description": "24/7 automated customer support",
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
    { icon: Clock, title: "24/7 Availability", description: "Never miss a customer inquiry again" },
    { icon: Users, title: "Instant Responses", description: "Resolve queries in seconds, not hours" },
    { icon: MessageCircle, title: "Human-like Conversations", description: "Natural, helpful interactions every time" }
  ];

  const faqs = [
    {
      question: "How quickly can AI support be set up?",
      answer: "Most AI customer support systems can be deployed within 1-2 weeks, including training on your specific business knowledge and integration with existing systems."
    },
    {
      question: "Can the AI handle complex customer issues?",
      answer: "Yes, our AI agents are trained on your business processes and can handle 80-90% of common inquiries. Complex issues are seamlessly escalated to human agents."
    },
    {
      question: "Will customers know they're talking to AI?",
      answer: "The AI provides natural, helpful responses. You can choose to disclose it's AI or let the quality of service speak for itself - many customers prefer the instant, accurate responses."
    },
    {
      question: "How does it integrate with our existing systems?",
      answer: "Our AI integrates with popular platforms like Zendesk, Intercom, Salesforce, and custom systems through APIs. We handle the technical setup for you."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroAnimation.ref}
            className={`text-center animate-fade-in-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                💬 AI Customer Support
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              24/7 AI Customer Support
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Never miss a customer inquiry again. Our AI agents provide instant, accurate support around the clock, freeing your team to focus on growing your business.
            </p>
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get Your AI Support Agent
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
              Customer Support Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Long response times frustrate customers and hurt your reputation. Manual support is expensive, inconsistent, and can't scale with your business growth.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Every delayed response is a potential lost customer. Your team spends hours on repetitive questions instead of focusing on complex issues that truly need human attention.
                </p>
                <p className="text-lg text-gray-700">
                  Meanwhile, your competitors with AI support are providing instant, 24/7 service that customers love.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Support Problems:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Average 24-hour response time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>High support costs per ticket</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Inconsistent service quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>No after-hours support</span>
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
              AI-Powered Customer Support
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Instant, Intelligent Support</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI customer support agents understand your business, products, and policies. They provide accurate, helpful responses instantly, escalating complex issues to your human team when needed.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Available 24/7 across all channels - chat, email, social media. Your customers get the help they need, when they need it, leading to higher satisfaction and loyalty.
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
                    <span>Multi-channel support integration</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">AI Support Features:</h4>
                <ul className="space-y-3">
                  <li>• 24/7 availability across all channels</li>
                  <li>• Instant response to 90% of inquiries</li>
                  <li>• Natural language understanding</li>
                  <li>• Integration with your knowledge base</li>
                  <li>• Seamless handoff to human agents</li>
                  <li>• Multi-language support</li>
                  <li>• Analytics and performance tracking</li>
                  <li>• Continuous learning and improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-50">
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={faqAnimation.ref}
            className={`animate-fade-in-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              AI Customer Support Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Complete Your AI Automation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('ai-appointment-setting')}
              className="bg-white p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group shadow-lg"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI Appointment Setting</h3>
              <p className="text-sm text-gray-600">Automated scheduling system</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('ai-crm-integration')}
              className="bg-white p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group shadow-lg"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI CRM Integration</h3>
              <p className="text-sm text-gray-600">Streamlined lead management</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('website-build-design')}
              className="bg-white p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group shadow-lg"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">Website Build & Design</h3>
              <p className="text-sm text-gray-600">Professional web presence</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={ctaAnimation.ref}
            className={`animate-fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for 24/7 Customer Support?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Join businesses providing instant, accurate support that customers love.
            </p>
            <button
              onClick={onContactClick}
              className="bg-white text-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Start Your AI Support Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}