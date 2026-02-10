
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="section-subtitle text-center">
          Have questions about AI' STHETICA 2K26? We're here to help!
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="shadow-sm hover:shadow-md transition-shadow animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-symposium-blue" />
              </div>
              <h3 className="font-medium text-lg mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4">For any queries related to events and registration</p>
              <a href="mailto:@gmail.com" className="text-symposium-blue hover:underline">
                aidsaisthetica@gmail.com 
              </a>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow-md transition-shadow animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-symposium-purple" />
              </div>
              <h3 className="font-medium text-lg mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4">Reach out to our organizing committee directly</p>
              <a href="tel:+" className="text-symposium-purple hover:underline">
                
              </a>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow-md transition-shadow animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-symposium-pink" />
              </div>
              <h3 className="font-medium text-lg mb-2">Visit Us</h3>
              <p className="text-gray-500 mb-4">Find us at our campus location</p>
              <address className="not-italic text-symposium-pink">
                <p>AI & DS And Cyber Security Department,</p>
                <p>Dhanalakshmi Srinivasan College of Engineering,</p>
                <p>Tamil Nadu, India</p>
              </address>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-xl font-semibold mb-4">Organizing Committee</h3>
          <p className="mb-6 text-gray-600">
          AI' STHETICA 2K26 is organized by the Student Technical Association with support from the Department of AI & DS, Cyber Security and MCA.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
              <h4 className="font-medium">Nishar Ahamed N</h4>
              <p className="text-sm text-gray-500">Student Coordinator</p>
              <p className="text-sm text-gray-900">Contact: <a href="tel:9043425721" className="text-green-600 hover:text-green-700">9043425721</a></p>
              </div>
              <div>
              <h4 className="font-medium">Yogeshwari S</h4>
              <p className="text-sm text-gray-500">Student Coordinator</p>
              <p className="text-sm text-gray-900">Contact: <a href="tel:6379491307" className="text-green-600 hover:text-green-700">6379491307</a></p>
              </div>
              <div>
              <h4 className="font-medium">Gokul M</h4>
              <p className="text-sm text-gray-500">Student Coordinator</p>
              <p className="text-sm text-gray-900">Contact: <a href="tel:9361043730" className="text-green-600 hover:text-green-700">9361043730</a></p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
