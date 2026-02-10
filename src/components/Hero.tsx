
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-emerald-50 to-green-100 overflow-hidden">
      {/* Animated circles in background */}
      <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-symposium-orange/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-[10%] w-72 h-72 rounded-full bg-symposium-pink/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
        <span className="inline-block py-1 px-3 rounded-full bg-white/30 backdrop-blur-sm border border-white/10 text-sm font-medium mb-4">
          FEB 18, 2026
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-symposium-orange via-symposium-pink to-symposium-blue">
          AI' STHETICA 2K26
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-2">Dhanalakshmi  Srinivasan Engineering College</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-emerald-800">
          Join us for a day of innovation, learning, and inspiration with exciting technical and non-technical events
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="button-gradient text-white px-8 py-6 text-lg shadow-green-500/30"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1itvVP4cBi0zC25Y8dnpyn2jgGyZJsDpcj7KVrYb5lhpdQQ/viewform?usp=header', '_blank')}
          >
            Register Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 px-8 py-6 text-lg hover:bg-green-50 transition-all border-green-600 text-green-700 hover:border-green-700"
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Events
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-10 w-10 rounded-full border border-emerald-300/50 text-emerald-700"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
