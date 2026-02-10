
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-full md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-symposium-purple to-symposium-pink">
              AI' STHETICA 2K26
            </h2>
            <p className="text-gray-400 mb-4">
              Engineering College Symposium bringing innovation and creativity together.
            </p>
            <Button
              className="button-gradient text-white"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1itvVP4cBi0zC25Y8dnpyn2jgGyZJsDpcj7KVrYb5lhpdQQ/viewform?usp=header', '_blank')}
            >
              Register Now
            </Button>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Events</h3>
            <ul className="space-y-2">
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">Technical Events</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">Non-Technical Events</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p> Dhanalakshmi Srinivasan Engineering College</p>
              <p> tamilnadu, india</p>
              <p>Email: mailtoaisthetica@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2026 AI' STHETICA Symposium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

