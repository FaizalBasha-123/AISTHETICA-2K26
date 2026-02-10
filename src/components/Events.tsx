import React, { useState } from 'react';
import EventCard, { EventCardProps } from './EventCard';

// Event data
const technicalEvents: EventCardProps[] = [
  {
    title: 'Prompt Coding',
    description: 'Use AI-powered coding assistants to solve programming challenges efficiently. Test your ability to craft effective prompts and leverage AI tools.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM - 12:15 PM',
    participants: 'Team of 2-4',
    color: 'blue'
  },
  {
    title: 'Code Debugging',
    description: 'Find and fix bugs in provided code snippets across multiple programming languages against the clock.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM - 12:15 PM',
    participants: 'Team of 2-4',
    color: 'green'
  },
  {
    title: 'Technical Quiz',
    description: 'Test your knowledge in a fast-paced quiz competition covering AI, ML, and emerging technologies. Prelims followed by Finals.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM & 1:00 PM',
    participants: 'Team of 2-4',
    color: 'purple'
  },
  {
    title: 'Care by AI',
    description: 'Develop AI-powered healthcare solutions to address real-world medical challenges and improve patient care.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '11:15 AM & 2:00 PM',
    participants: 'Team of 2-4',
    color: 'pink'
  },
  {
    title: 'Backtrace',
    description: 'Reverse engineer code and trace execution paths to understand complex algorithms and system behavior.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '11:15 AM & 1:00 PM',
    participants: 'Team of 2-4',
    color: 'orange'
  },
  {
    title: 'Web/App Build Hackathon',
    description: 'A 2-hour intensive hackathon to build a functional web or mobile application from scratch.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '1:00 PM - 3:00 PM',
    participants: 'Team of 2-4',
    color: 'blue'
  },
  {
    title: 'Paper Presentation',
    description: 'Present your research work on AI and emerging technologies in front of a panel of judges and peers.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM - 2:45 PM',
    participants: 'Team of 2-4',
    color: 'green'
  }
];

const nonTechnicalEvents: EventCardProps[] = [
  {
    title: 'Link-It',
    description: 'Connect clues and solve puzzles in this engaging word association game. Test your lateral thinking and creativity.',
    type: 'non-technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM - 12:15 PM',
    participants: 'Team of 2-4',
    color: 'pink'
  },
  {
    title: 'Memory Mania',
    description: 'A fun memory card game where you flip over cards featuring pictures. Find and match pairs to test your memory skills.',
    type: 'non-technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM - 12:15 PM',
    participants: 'Team of 2-4',
    color: 'blue'
  },
  {
    title: 'Meme Creation',
    description: 'Unleash your creativity and humor by creating the most hilarious and relatable memes on given themes.',
    type: 'non-technical',
    date: 'Feb 18, 2026',
    time: '1:00 PM - 2:00 PM',
    participants: 'Team of 2-4',
    color: 'green'
  },
  {
    title: 'AI Short Film Creation',
    description: 'Create a short film using AI tools and showcase your storytelling abilities with cutting-edge technology.',
    type: 'non-technical',
    date: 'Feb 18, 2026',
    time: '1:00 PM - 2:00 PM',
    participants: 'Team of 2-4',
    color: 'purple'
  }
];

const Events = () => {
  const [eventType, setEventType] = useState<'technical' | 'non-technical'>('technical');

  const toggleEventType = () => {
    setEventType(eventType === 'technical' ? 'non-technical' : 'technical');
  };

  const currentEvents = eventType === 'technical' ? technicalEvents : nonTechnicalEvents;

  return (
    <section id="events" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Event Schedule & Details</h2>
        <p className="section-subtitle text-center">
          Complete event information with timings and venue details for AISTHETICA 2K26
        </p>
        
        {/* Enterprise Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mt-12 mb-12">
          <span className={`font-semibold text-base transition-colors ${eventType === 'technical' ? 'text-green-700' : 'text-gray-500'}`}>
            Technical Events
          </span>
          <button
            onClick={toggleEventType}
            className="relative inline-flex h-9 w-[72px] items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-inner"
            style={{ backgroundColor: eventType === 'technical' ? '#16a34a' : '#d1d5db' }}
          >
            <span
              className={`inline-block h-7 w-7 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${
                eventType === 'technical' ? 'translate-x-10' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`font-semibold text-base transition-colors ${eventType === 'non-technical' ? 'text-green-700' : 'text-gray-500'}`}>
            Non-Technical Events
          </span>
        </div>

        {/* Event Count Badge */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            {currentEvents.length} {eventType === 'technical' ? 'Technical' : 'Non-Technical'} Events
          </span>
        </div>
        
        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentEvents.map((event, index) => (
            <EventCard key={`${eventType}-${index}`} {...event} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            className="button-gradient text-white font-semibold py-4 px-10 rounded-xl text-lg hover:shadow-xl transition-shadow"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1itvVP4cBi0zC25Y8dnpyn2jgGyZJsDpcj7KVrYb5lhpdQQ/viewform?usp=header', '_blank')}
          >
            Register for Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
