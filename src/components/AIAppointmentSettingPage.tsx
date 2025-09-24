import React from 'react';
import { ArrowLeft, Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AIAppointmentSettingPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  onContactClick: () => void;
}

export default function AIAppointmentSettingPage({ onBack, onNavigate, onContactClick }: AIAppointmentSettingPageProps) {
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
      "name": "AI Appointment Setting Agents",
      "description": "Never miss a lead with AI agents that schedule, confirm, and manage appointments automatically 24/7.",
      "provider": {
        "@type": "Organization",
        "name": "SimpleAI",
        "url": "https://justsimpleai.com"
      },
      "serviceType": "AI Appointment Scheduling",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "description": "Automated appointment scheduling and management",
        "availability": "https://schema.org/InStock"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    script.id = 'ai-appointment-setting-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('ai-appointment-setting-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const benefits = [
    { icon: Calendar, title: "Smart Scheduling", description: "AI finds the perfect time for everyone" },
    { icon: Clock, title: "24/7 Availability", description: "Book appointments anytime, anywhere" },
    { icon: Users, title: "Reduced No-Shows", description: "Automated reminders and confirmations" }
  ];

  const faqs = [
    {
      question: "How does AI appointment setting work?",
      answer: "Our AI agent integrates with your calendar and communicates with leads via email, SMS, or chat to find mutually convenient appointment times. It handles scheduling, rescheduling, and confirmations automatically."
    },
    {
      question: "Can it handle complex scheduling requirements?",
      answer: "Yes, the AI can manage buffer times, location preferences, meeting types, team member availability, and even coordinate group meetings with multiple participants."
    },
    {
      question: "What calendar systems does it integrate with?",
      answer: "We integrate with Google Calendar, Outlook, Calendly, Acuity Scheduling, and most popular calendar platforms. Custom integrations are also available."
    },
    {
      question: "How much does it reduce no-shows?",
      answer: "Our clients typically see 40-60% reduction in no-shows thanks to automated confirmations, reminders, and easy rescheduling options that keep appointments on track."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroAnimation.ref}
            className={`text-center animate-fade-in-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                📅 AI Appointment Setting
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Never Miss Another Lead
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our AI agents schedule, confirm, and manage appointments automatically. Turn more leads into booked meetings while you focus on closing deals.
            </p>
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get Your AI Scheduler
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
              Scheduling Chaos Costs You Sales
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Manual appointment scheduling is a nightmare. Back-and-forth emails, missed calls, double bookings, and no-shows are killing your conversion rates and wasting precious time.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Every lead that doesn't get scheduled quickly loses interest. Your team spends hours on scheduling instead of selling, and potential customers slip through the cracks.
                </p>
                <p className="text-lg text-gray-700">
                  Meanwhile, your competitors with automated scheduling are booking more meetings and closing more deals.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scheduling Problems:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>50% of leads never get scheduled</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Average 3-day delay to book meetings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>30% no-show rate on appointments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Hours wasted on scheduling admin</span>
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
              AI-Powered Appointment Automation
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart, Seamless Scheduling</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI appointment agents work 24/7 to schedule meetings the moment leads show interest. They handle time zones, availability conflicts, and follow-ups automatically.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  From initial contact to confirmed appointment, the entire process is automated. Your leads get instant responses and convenient booking options, while you get more qualified meetings.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Instant scheduling responses</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Automated confirmations and reminders</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Calendar integration and sync</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">AI Scheduler Features:</h4>
                <ul className="space-y-3">
                  <li>• 24/7 appointment booking availability</li>
                  <li>• Smart calendar conflict resolution</li>
                  <li>• Automated confirmation emails/SMS</li>
                  <li>• Reminder sequences to reduce no-shows</li>
                  <li>• Easy rescheduling and cancellation</li>
                  <li>• Time zone handling and coordination</li>
                  <li>• Integration with popular calendar apps</li>
                  <li>• Meeting preparation and follow-up</li>
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
              Book More Meetings, Close More Deals
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

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={faqAnimation.ref}
            className={`animate-fade-in-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              AI Appointment Setting Questions
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
            Complete Your Sales Automation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('ai-customer-support')}
              className="bg-white p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group shadow-lg"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI Customer Support</h3>
              <p className="text-sm text-gray-600">24/7 automated customer service</p>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-500 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={ctaAnimation.ref}
            className={`animate-fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Book More Meetings?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-8">
              Stop losing leads to scheduling delays. Start booking meetings automatically.
            </p>
            <button
              onClick={onContactClick}
              className="bg-white text-green-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Start Your AI Scheduler Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}