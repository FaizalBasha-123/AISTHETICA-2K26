
import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Schedule = () => {
  const [eventType, setEventType] = useState<'technical' | 'non-technical'>('technical');

  const scheduleData = {
    registration: [
      { time: '9:30 - 10:00', activity: 'Registration & ID Card Issue', venue: 'Registration Desk (Near A Block)' },
      { time: '10:00 - 10:15', activity: 'Inauguration', venue: 'Mini Auditorium' },
    ],
    morningTechnical: [
      { time: '10:15 - 11:15', event: 'Prompt Coding (Batch A)', venue: 'A Block 101' },
      { time: '11:15 - 12:15', event: 'Prompt Coding (Batch B)', venue: 'A Block 101' },
      { time: '10:15 - 11:15', event: 'Code Debugging (Batch A)', venue: 'A Block 103' },
      { time: '11:15 - 12:15', event: 'Code Debugging (Batch B)', venue: 'A Block 103' },
      { time: '10:15 - 11:15', event: 'Technical Quiz - Prelims', venue: 'A Block 102' },
      { time: '11:15 - 12:15', event: 'Care by AI', venue: 'A Block 109' },
      { time: '11:15 - 12:15', event: 'Backtrace', venue: 'B Block 101' },
    ],
    morningNonTechnical: [
      { time: '10:15 - 11:15', event: 'Link-It (Batch A)', venue: 'A Block 108' },
      { time: '11:15 - 12:15', event: 'Link-It (Batch B)', venue: 'A Block 108' },
      { time: '10:15 - 11:15', event: 'Memory Mania (Batch A)', venue: 'B Block 106' },
      { time: '11:15 - 12:15', event: 'Memory Mania (Batch B)', venue: 'B Block 106' },
    ],
    afternoonTechnical: [
      { time: '1:00 - 3:00', event: 'Web/App Build (2 Hours Hackathon)', venue: 'A Block 101' },
      { time: '1:00 - 2:00', event: 'Technical Quiz Finals', venue: 'A Block 102' },
      { time: '2:00 - 3:00', event: 'Care by AI Finals', venue: 'A Block 106' },
      { time: '1:00 - 2:00', event: 'Backtrace (Second Round)', venue: 'A Block 101 (CSE)' },
    ],
    afternoonNonTechnical: [
      { time: '1:00 - 2:00', event: 'Meme Creation', venue: 'A Block 111' },
      { time: '1:00 - 2:00', event: 'AI Short Film Creation', venue: 'A Block 109' },
    ],
    paperPresentation: [
      { time: '10:15 - 2:45', venue: 'Mini Auditorium' },
      { time: '10:15 - 2:45', venue: 'A Block 119' },
    ],
  };

  const toggleEventType = () => {
    setEventType(eventType === 'technical' ? 'non-technical' : 'technical');
  };

  return (
    <section id="schedule" className="py-20 px-4 bg-gradient-to-b from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Event Schedule</h2>
        <p className="section-subtitle text-center">
          Complete timetable with venue allocation for AISTHETICA 2K26
        </p>
        
        {/* Enterprise Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mt-8 mb-12">
          <span className={`font-semibold text-sm transition-colors ${eventType === 'technical' ? 'text-green-700' : 'text-gray-500'}`}>
            Technical Events
          </span>
          <button
            onClick={toggleEventType}
            className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-inner"
            style={{ backgroundColor: eventType === 'technical' ? '#16a34a' : '#d1d5db' }}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${
                eventType === 'technical' ? 'translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`font-semibold text-sm transition-colors ${eventType === 'non-technical' ? 'text-green-700' : 'text-gray-500'}`}>
            Non-Technical Events
          </span>
        </div>
        
        <div className="mt-12 space-y-6">
          {/* Registration & Opening */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
              <div className="flex items-center">
                <Calendar size={20} className="mr-2" />
                <h3 className="font-semibold text-lg">Registration & Opening</h3>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {scheduleData.registration.map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="font-medium text-gray-900">{item.activity}</span>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Clock size={14} className="mr-1" /> {item.time}
                      </span>
                      <span className="text-xs text-green-600 flex items-center font-medium">
                        <MapPin size={12} className="mr-1" /> {item.venue}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Morning Events - Technical/Non-Technical */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
              <h3 className="font-semibold text-lg">
                Morning {eventType === 'technical' ? 'Technical' : 'Non-Technical'} Events (10:15 - 12:15)
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {(eventType === 'technical' ? scheduleData.morningTechnical : scheduleData.morningNonTechnical).map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="font-medium text-gray-900">{item.event}</span>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Clock size={14} className="mr-1" /> {item.time}
                      </span>
                      <span className="text-xs text-green-600 flex items-center font-medium">
                        <MapPin size={12} className="mr-1" /> {item.venue}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Paper Presentation */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
              <h3 className="font-semibold text-lg">Paper Presentation (Continuous)</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {scheduleData.paperPresentation.map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="font-medium text-gray-900">{item.venue}</span>
                    <span className="text-sm text-gray-600 flex items-center">
                      <Clock size={14} className="mr-1" /> {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lunch Break */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-green-600 p-4 text-white">
              <h3 className="font-semibold text-lg">Lunch Break</h3>
            </div>
            <div className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="font-medium text-gray-900">12:15 - 1:00</span>
                <span className="text-sm text-green-600 font-medium">College Cafeteria</span>
              </div>
            </div>
          </div>

          {/* Afternoon Session - Technical/Non-Technical */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
              <h3 className="font-semibold text-lg">
                Afternoon {eventType === 'technical' ? 'Technical' : 'Non-Technical'} Events (1:00 - 3:00)
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {(eventType === 'technical' ? scheduleData.afternoonTechnical : scheduleData.afternoonNonTechnical).map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="font-medium text-gray-900">{item.event}</span>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Clock size={14} className="mr-1" /> {item.time}
                      </span>
                      <span className="text-xs text-green-600 flex items-center font-medium">
                        <MapPin size={12} className="mr-1" /> {item.venue}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Ceremony */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
              <h3 className="font-semibold text-lg">Closing Ceremony</h3>
            </div>
            <div className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="font-medium text-gray-900">Valedictory & Prize Distribution</span>
                <div className="flex flex-col sm:items-end gap-1">
                  <span className="text-sm text-gray-600 flex items-center">
                    <Clock size={14} className="mr-1" /> 2:45 PM
                  </span>
                  <span className="text-xs text-green-600 flex items-center font-medium">
                    <MapPin size={12} className="mr-1" /> Mini Auditorium
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Schedule;
