import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  onContactClick: () => void;
  scrollToSection: (sectionId: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, onContactClick, scrollToSection, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    onNavigate('home');
  };

  const handleServicesClick = () => {
    if (currentPage === 'home') {
      scrollToSection('services');
    } else {
      onNavigate('home');
      setTimeout(() => scrollToSection('services'), 100);
    }
  };

  const handleAboutClick = () => {
    if (currentPage === 'home') {
      scrollToSection('about');
    } else {
      onNavigate('home');
      setTimeout(() => scrollToSection('about'), 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            Simple<span className="text-green-500">AI</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={handleServicesClick}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={handleAboutClick}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={onContactClick}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  handleServicesClick();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  handleAboutClick();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  onContactClick();
                  setIsMenuOpen(false);
                }}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-left w-fit"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}