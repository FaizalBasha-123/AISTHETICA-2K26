
import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">About AI' STHETICA 2K26</h2>
        <p className="section-subtitle text-center">
          A flagship event bringing together the brightest minds from across colleges
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-symposium-purple/10 text-symposium-purple">
              <span className="text-2xl font-bold">01</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation Showcase</h3>
            <p className="text-gray-600">
              Witness cutting-edge projects and innovations developed by students from various engineering and arts disciplines.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-symposium-pink/10 text-symposium-pink">
              <span className="text-2xl font-bold">02</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Skill Development</h3>
            <p className="text-gray-600">
              Participate in workshops and competitions designed to enhance both technical and non-technical skills.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-symposium-blue/10 text-symposium-blue">
              <span className="text-2xl font-bold">03</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Networking</h3>
            <p className="text-gray-600">
              Connect with industry professionals, alumni, and fellow students to build relationships that last beyond the symposium.
            </p>
          </div>
        </div>
        
        <div className="mt-20 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            AI' STHETICA 2K26 aims to ignite the passion for learning and innovation among students by providing a platform to showcase their talents, exchange ideas, and gain exposure to the latest trends in technology and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
