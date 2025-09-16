import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedService: '',
    companyName: '',
    problemToSolve: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Test connection first
    console.log('=== SUPABASE CONNECTION TEST ===');
    console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
    console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Present' : 'Missing');
    console.log('Supabase client:', supabase);

    try {
      console.log('Starting form submission...');
      console.log('Form data:', formData);
      
      // Check if Supabase is properly configured
      if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
        throw new Error('Supabase configuration is missing. Please set up your environment variables.');
      }
      
      const { error } = await supabase
        .from('inquiries')
        .insert([{
          name: formData.name,
          email: formData.email,
          selected_service: formData.selectedService,
          company_name: formData.companyName,
          problem_to_solve: formData.problemToSolve,
          additional_info: formData.additionalInfo
        }]);

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw error;
      }

      console.log('Form submitted successfully');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        selectedService: '',
        companyName: '',
        problemToSolve: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Complete error details:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Ready to transform your business with AI? Let's discuss your project.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              Thank you for your inquiry! We'll get back to you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              There was an error submitting your form. Please try again or contact us directly at info@justsimpleai.com
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="selectedService" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest *
                </label>
                <select
                  id="selectedService"
                  name="selectedService"
                  value={formData.selectedService}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-customer-support">AI Customer Support Agents</option>
                  <option value="ai-appointment-setting">AI Appointment Setting Agents</option>
                  <option value="website-build-design">Website Build & Design</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="problemToSolve" className="block text-sm font-medium text-gray-700 mb-2">
                What problem are you looking to solve? *
              </label>
              <textarea
                id="problemToSolve"
                name="problemToSolve"
                value={formData.problemToSolve}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Describe the challenge you're facing and how AI might help..."
              />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Any additional details about your project, timeline, or budget..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 text-white font-medium py-4 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}