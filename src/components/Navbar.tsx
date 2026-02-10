
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-extrabold">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-symposium-purple to-symposium-pink ${isScrolled ? '' : 'drop-shadow-sm'}`}>
              AI' STHETICA 2K26
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className={`text-sm font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-800'} hover:text-symposium-purple transition-colors`}>Home</a>
            <a href="#about" className={`text-sm font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-800'} hover:text-symposium-purple transition-colors`}>About</a>
            <a href="#events" className={`text-sm font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-800'} hover:text-symposium-purple transition-colors`}>Events</a>
            <a href="#contact" className={`text-sm font-medium ${isScrolled ? 'text-gray-900' : 'text-gray-800'} hover:text-symposium-purple transition-colors`}>Contact</a>
          </nav>
          
          {/* CTA */}
          <div className="hidden md:block">
            <Button 
              className="button-gradient text-white"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1itvVP4cBi0zC25Y8dnpyn2jgGyZJsDpcj7KVrYb5lhpdQQ/viewform?usp=header', '_blank')}
            >
              Register
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <a 
              href="#" 
              className="block py-2 text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block py-2 text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#events" 
              className="block py-2 text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <Button 
                className="w-full button-gradient text-white"
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1itvVP4cBi0zC25Y8dnpyn2jgGyZJsDpcj7KVrYb5lhpdQQ/viewform?usp=header', '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
