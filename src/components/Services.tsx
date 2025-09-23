import React from 'react';
import { MessageCircle, Calendar, Globe, Database, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServicesProps {
  onContactClick: () => void;
}

export default function Services({ onContactClick }: ServicesProps) {
  const titleAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  // Add Service and FAQ schema to head
  React.useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Automation Services",
      "description": "Comprehensive AI automation solutions including customer support agents, appointment setting, CRM integration, and website development.",
      "provider": {
        "@type": "Organization",
        "name": "SimpleAI",
        "url": "https://justsimpleai.com"
      },
      "serviceType": "AI Automation",
      "areaServed": "Worldwide",
      "hasOfferingCatalog": {
        "@type": "OfferingCatalog",
        "name": "AI Automation Services",
        "itemListElement": [
        {
          "@type": "Service",
          "@id": "https://justsimpleai.com/services/ai-customer-support",
          "name": "AI Customer Support Agents",
          "description": "Available 24/7, instantly resolving customer queries, freeing your team for high-value work.",
          "provider": {
            "@type": "Organization",
            "name": "SimpleAI",
            "url": "https://justsimpleai.com"
          },
          "serviceType": "AI Customer Support",
          "category": "Customer Service Automation",
          "areaServed": "Worldwide",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://justsimpleai.com/contact",
            "serviceName": "Online Consultation"
          }
        },
        {
          "@type": "Service",
          "@id": "https://justsimpleai.com/services/ai-appointment-setting",
          "name": "AI Appointment Setting Agents",
          "description": "Never miss a lead with AI agents that schedule, confirm, and manage appointments automatically.",
          "provider": {
            "@type": "Organization",
            "name": "SimpleAI",
            "url": "https://justsimpleai.com"
          },
          "serviceType": "AI Appointment Scheduling",
          "category": "Sales Automation",
          "areaServed": "Worldwide",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://justsimpleai.com/contact",
            "serviceName": "Online Consultation"
          }
        },
        {
          "@type": "Service",
          "@id": "https://justsimpleai.com/services/crm-integration",
          "name": "CRM Integration Services",
          "description": "Seamlessly connect your existing CRM with AI automation for streamlined lead management and improved conversion rates.",
          "provider": {
            "@type": "Organization",
            "name": "SimpleAI",
            "url": "https://justsimpleai.com"
          },
          "serviceType": "CRM Integration",
          "category": "Business Process Automation",
          "areaServed": "Worldwide",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://justsimpleai.com/contact",
            "serviceName": "Online Consultation"
          }
        },
        {
          "@type": "Service",
          "@id": "https://justsimpleai.com/services/website-development",
          "name": "AI-Assisted Website Development",
          "description": "Professional, AI-assisted websites designed to convert visitors into paying customers with modern design and optimization.",
          "provider": {
            "@type": "Organization",
            "name": "SimpleAI",
            "url": "https://justsimpleai.com"
          },
          "serviceType": "Website Development",
          "category": "Web Design & Development",
          "areaServed": "Worldwide",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://justsimpleai.com/contact",
            "serviceName": "Online Consultation"
          }
        }
      ]
      }
    };

    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(serviceSchema);
    script.id = 'services-schema';
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('services-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const services = [
    {
      icon: MessageCircle,
      title: 'AI Customer Support Agents',
      description: 'Available 24/7, instantly resolving customer queries, freeing your team for high-value work.',
      cta: 'See Customer Support in Action'
    },
    {
      icon: Calendar,
      title: 'AI Appointment Setting Agents',
      description: 'Never miss a lead — our AI agents schedule, confirm, and manage appointments automatically.',
      cta: 'Book More Calls with AI'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamlessly connect your existing CRM with AI automation for streamlined lead management.',
      cta: 'Optimize Your CRM'
    },
    {
      icon: Globe,
      title: 'Website Build & Design',
      description: 'Professional, AI-assisted websites designed to convert visitors into paying customers.',
      cta: 'See Our Website Solutions'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive AI automation solutions to streamline your business operations
          </p>
        </div>

        <div 
          ref={gridAnimation.ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 animate-fade-in-up items-stretch ${gridAnimation.isVisible ? 'visible' : ''}`}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up animate-stagger-${index + 1} ${gridAnimation.isVisible ? 'visible' : ''} flex flex-col justify-between h-full min-h-[350px]`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex-shrink-0 mt-auto">
                  <button 
                    onClick={onContactClick}
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center gap-2 group text-base sm:text-lg"
                  >
                    {service.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div 
          ref={ctaAnimation.ref}
          className={`text-center animate-fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
        >
          <p className="text-base sm:text-lg text-gray-600 mb-6 px-4">
            Looking for a custom AI solution? Let's talk.
          </p>
          <button 
            onClick={onContactClick}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 sm:px-10 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}