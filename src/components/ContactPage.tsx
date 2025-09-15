import React, { useState } from 'react';
import { Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { supabase, type Inquiry } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  selectedService: string;
  companyName: string;
  problemToSolve: string;
  additionalInfo: string;
  agreeToTerms: boolean;
}

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    selectedService: '',
    companyName: '',
    problemToSolve: '',
    additionalInfo: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'AI Customer Support Agent', label: 'AI Customer Support Agent' },
    { value: 'AI Appointment Setting Agent', label: 'AI Appointment Setting Agent' },
    { value: 'Website Build & Design', label: 'Website Build & Design' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.selectedService) {
      newErrors.selectedService = 'Please select a service';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.problemToSolve.trim()) {
      newErrors.problemToSolve = 'Please describe the problem you\'re looking to solve';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Please agree to the terms and privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for Supabase
      const inquiryData: Inquiry = {
        name: formData.name,
        email: formData.email,
        selected_service: formData.selectedService,
        company_name: formData.companyName,
        problem_to_solve: formData.problemToSolve,
        additional_info: formData.additionalInfo || ''
      };

      // Insert into Supabase
      const { error } = await supabase
        .from('inquiries')
        .insert([inquiryData]);

      if (error) {
        throw error;
      }
      
      console.log('Inquiry submitted successfully');
      
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Form submission error:', error);
      // You could add error state handling here
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-6 sm:mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Get Started with AI Automation</h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Tell us about your business needs and we'll create a custom AI automation strategy for you.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                We've received your inquiry and will get back to you within 24 hours.
              </p>
              <button
                onClick={onBack}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Selected Service Dropdown */}
                <div>
                  <label htmlFor="selectedService" className="block text-sm font-medium text-gray-700 mb-2">
                    Selected Service *
                  </label>
                  <select
                    id="selectedService"
                    name="selectedService"
                    value={formData.selectedService}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                      errors.selectedService ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.selectedService && <p className="mt-1 text-sm text-red-600">{errors.selectedService}</p>}
                </div>

                {/* Company Name Field */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
                </div>
              </div>

              {/* Problem to Solve Field */}
              <div>
                <label htmlFor="problemToSolve" className="block text-sm font-medium text-gray-700 mb-2">
                  What problem are you looking to solve? *
                </label>
                <textarea
                  id="problemToSolve"
                  name="problemToSolve"
                  value={formData.problemToSolve}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe the specific challenges or inefficiencies you're facing that AI automation could help solve..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical ${
                    errors.problemToSolve ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.problemToSolve && <p className="mt-1 text-sm text-red-600">{errors.problemToSolve}</p>}
              </div>

              {/* Additional Information Field */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any additional details about your business, timeline, budget, or specific requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical"
                />
              </div>

              {/* Terms Agreement Checkbox */}
              <div>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <button 
                      type="button"
                      onClick={() => {/* This could open terms page */}}
                      className="text-green-500 hover:text-green-700 underline"
                    >
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button 
                      type="button"
                      onClick={() => {/* This could open privacy page */}}
                      className="text-green-500 hover:text-green-700 underline"
                    >
                      Privacy Policy
                    </button>
                    . I understand that SimpleAI will contact me regarding my inquiry. *
                  </span>
                </label>
                {errors.agreeToTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 text-white py-3 sm:py-4 px-8 sm:px-12 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg mx-auto w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Contact Information */}
      </div>
    </div>
  );
}