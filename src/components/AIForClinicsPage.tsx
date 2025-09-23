import React from 'react';
import { ArrowLeft, Heart, Calendar, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AIForClinicsPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  onContactClick: () => void;
}

export default function AIForClinicsPage({ onBack, onNavigate, onContactClick }: AIForClinicsPageProps) {
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
      "name": "AI Automation for Clinics and Practices",
      "description": "Specialized AI automation for healthcare practices including appointment scheduling, patient communication, and administrative task automation.",
      "provider": {
        "@type": "Organization",
        "name": "SimpleAI",
        "url": "https://justsimpleai.com"
      },
      "serviceType": "Healthcare Practice Automation",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "description": "AI automation for medical practices",
        "availability": "https://schema.org/InStock"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    script.id = 'ai-for-clinics-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('ai-for-clinics-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const benefits = [
    { icon: Calendar, title: "Reduce No-Shows by 60%", description: "Automated reminders and confirmations" },
    { icon: Heart, title: "Improve Patient Satisfaction", description: "24/7 support and instant responses" },
    { icon: FileText, title: "Save 20+ Hours Weekly", description: "Automated admin and documentation" }
  ];

  const integrations = [
    "Epic", "Cerner", "Allscripts", "athenahealth", "NextGen", "eClinicalWorks", "Practice Fusion", "SimplePractice", "TherapyNotes"
  ];

  const faqs = [
    {
      question: "Is AI automation HIPAA compliant?",
      answer: "Yes, all our healthcare AI solutions are designed with HIPAA compliance in mind, including proper data encryption, access controls, and audit trails."
    },
    {
      question: "How does AI help with appointment scheduling?",
      answer: "AI handles appointment requests 24/7, checks availability, sends confirmations and reminders, and can reschedule appointments automatically based on your policies."
    },
    {
      question: "Can AI help with patient intake forms?",
      answer: "Absolutely. AI can guide patients through digital intake forms, validate information, and automatically populate your practice management system."
    },
    {
      question: "What about integration with existing EMR systems?",
      answer: "We integrate with all major EMR and practice management systems, ensuring seamless data flow without disrupting your current workflows."
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
              AI Automation for Clinics and Practices
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your healthcare practice with HIPAA-compliant AI that handles scheduling, patient communication, and administrative tasks.
            </p>
            <button
              onClick={onContactClick}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-lg shadow-lg"
            >
              Automate Your Practice
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
              Healthcare Admin Is Overwhelming Your Practice
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Your staff spends more time on phones and paperwork than patient care. No-shows cost your practice thousands monthly, while after-hours calls go unanswered and patients grow frustrated.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Manual appointment scheduling, insurance verification, and patient follow-up consume valuable resources that could be focused on providing excellent healthcare.
                </p>
                <p className="text-lg text-gray-700">
                  Administrative burden is burning out your team and limiting your practice's growth potential.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Pain Points:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>30% no-show rate costing $200+ per missed appointment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Staff spending 60% of time on administrative tasks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>After-hours calls going to voicemail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Manual insurance verification delays</span>
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
              HIPAA-Compliant Practice Automation
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Healthcare Assistant</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our healthcare-specific AI handles appointment scheduling, patient inquiries, insurance verification, and follow-up care coordination. All while maintaining strict HIPAA compliance and security standards.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Patients receive immediate responses to common questions, appointment confirmations, and personalized care reminders, improving satisfaction and reducing no-shows.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>HIPAA-compliant patient communication</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Automated appointment scheduling and reminders</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Insurance verification and pre-authorization</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Healthcare AI Features:</h4>
                <ul className="space-y-3">
                  <li>• 24/7 appointment scheduling and rescheduling</li>
                  <li>• Automated appointment reminders and confirmations</li>
                  <li>• Patient intake form completion assistance</li>
                  <li>• Insurance verification and eligibility checks</li>
                  <li>• Prescription refill request handling</li>
                  <li>• Post-visit follow-up and care coordination</li>
                  <li>• Billing inquiry responses</li>
                  <li>• Emergency triage and routing</li>
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
              Better Patient Care, Lower Costs
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
              Integrates With Your EMR
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Seamless integration with all major EMR and practice management systems.
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
              Healthcare AI Questions
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
            Complete Healthcare Automation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => onNavigate('ai-appointment-setting')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI Appointment Setting</h3>
              <p className="text-sm text-gray-600">Automated patient scheduling</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('ai-customer-support')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">AI Patient Support</h3>
              <p className="text-sm text-gray-600">24/7 patient communication</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('ai-crm-integration')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">Practice Management</h3>
              <p className="text-sm text-gray-600">EMR integration and automation</p>
              <ArrowRight className="text-green-500 mt-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => onNavigate('ai-automation')}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-left group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">Complete Automation</h3>
              <p className="text-sm text-gray-600">Full practice automation</p>
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
              Ready to Focus on Patient Care?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-8">
              Let AI handle the admin work while you focus on what matters most.
            </p>
            <button
              onClick={onContactClick}
              className="bg-white text-green-500 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Get Healthcare AI Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}