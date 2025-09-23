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
  const integrationsAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  React.useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Appointment Scheduling & Reminders",
      "description": "Automated appointment scheduling system with AI-powered booking, confirmations, reminders, and rescheduling to reduce no-shows and improve efficiency.",
      "provider": {
        "@type": "Organization",
        "name": "SimpleAI",
        "url": "https://justsimpleai.com"
      },
      "serviceType": "Appointment Scheduling Automation",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "description": "AI appointment scheduling implementation",
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
    { icon: Calendar, title: "80% Fewer No-Shows", description: "Smart reminders and confirmations" },
    { icon: Clock, title: "24/7 Booking Available", description: "Never miss appointments outside business hours" },
    { icon: Users, title: "3x More Bookings", description: "Instant scheduling increases conversions" }
  ];

  const integrations = [
    "Calendly", "Acuity", "Google Calendar", "Outlook", "Zoom", "Microsoft Teams", "Salesforce", "HubSpot", "Stripe"
  ];

  const faqs = [
    {
      question: "How does AI appointment scheduling work?",
      answer: "AI analyzes your calendar availability, understands booking preferences, and automatically schedules appointments while sending confirmations and reminders to reduce no-shows."
    },
    {
      question: "Can it handle complex scheduling requirements?",
      answer: "Yes, our AI can manage multiple staff calendars, different service types, buffer times, and custom booking rules specific to your business needs."
    },
    {
      question: "What happens if someone needs to reschedule?",
      answer: "AI automatically handles rescheduling requests, finds alternative times, updates calendars, and sends new confirmations without any manual intervention."
    },
    {
      question: "How are reminders sent to clients?",
      answer: "Automated reminders are sent via SMS, email, or phone calls at customizable intervals (24 hours, 2 hours before, etc.) to minimize no-shows."
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
              AI Appointment Scheduling & Reminders
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Never miss another booking with AI that schedules appointments 24/7, sends smart reminders, and reduces no-shows by 80%.
            </p>
            <button
              onClick={onContactClick}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-lg shadow-lg"
            >
              Automate Your Scheduling
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
              Manual Scheduling Is Costing You Money
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Phone tag with clients, double bookings, and forgotten appointments are killing your revenue. Your team spends hours each day managing calendars instead of serving customers.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  After-hours booking requests go unanswered, potential clients book with competitors, and no-shows leave expensive time slots empty.
                </p>
                <p className="text-lg text-gray-700">
                  Every missed appointment is lost revenue that could have been prevented with intelligent automation.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Real Impact:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>30% no-show rate costs $150+ per missed appointment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Staff spending 25% of time on scheduling calls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>50% of after-hours inquiries never convert</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Double bookings and scheduling errors</span>
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
              Smart Appointment Automation
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Scheduling Assistant</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI scheduling system works around the clock, understanding your availability, service requirements, and booking preferences. Clients can book instantly through multiple channels while AI handles confirmations, reminders, and rescheduling.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Advanced algorithms optimize your schedule, minimize gaps, and send personalized reminders that dramatically reduce no-shows and last-minute cancellations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>24/7 automated booking and confirmations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Smart reminders via SMS, email, and calls</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Automatic rescheduling and waitlist management</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Scheduling Features:</h4>
                <ul className="space-y-3">
                  <li>• Multi-channel booking (web, phone, chat, social)</li>
                  <li>• Real-time calendar synchronization</li>
                  <li>• Automated confirmation and reminder sequences</li>
                  <li>• Intelligent rescheduling and cancellation handling</li>
                  <li>• Waitlist management and automatic rebooking</li>
                  <li>• Payment processing and deposit collection</li>
                  <li>• Custom booking rules and availability settings</li>
                  <li>• Analytics and no-show prediction</li>
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
              Maximize Your Schedule Efficiency
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
              Works With Your Tools
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Seamless integration with popular calendar and business management platforms.
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
              Appointment Scheduling Questions
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
            Complete Your Business Automation
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
              <p className="text-sm text-gray-600">Healthcare scheduling</p>
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
              Ready to Fill Your Calendar?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-8">
              Join thousands of businesses using AI to book more appointments and reduce no-shows.
            </p>
            <button
              onClick={onContactClick}
              className="bg-white text-green-500 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Get AI Scheduling Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}