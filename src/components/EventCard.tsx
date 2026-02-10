
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, Clock, Users, ArrowRight, Code2, Palette, Info } from 'lucide-react';

export interface EventCardProps {
  title: string;
  description: string;
  type: 'technical' | 'non-technical';
  date: string;
  time: string;
  participants: string;
  color: 'purple' | 'blue' | 'pink' | 'orange' | 'green' | 'red' | 'yellow';
  details: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  type,
  date,
  time,
  participants,
  color,
  details
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Define modern color styles with proper color codes
  const colorStyles = {
    purple: {
      gradient: 'from-purple-600 to-purple-500',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      iconBg: 'bg-purple-100',
      iconText: 'text-purple-600',
      hoverBorder: 'hover:border-purple-300'
    },
    blue: {
      gradient: 'from-blue-600 to-blue-500',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      iconBg: 'bg-blue-100',
      iconText: 'text-blue-600',
      hoverBorder: 'hover:border-blue-300'
    },
    pink: {
      gradient: 'from-pink-600 to-pink-500',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      text: 'text-pink-700',
      iconBg: 'bg-pink-100',
      iconText: 'text-pink-600',
      hoverBorder: 'hover:border-pink-300'
    },
    orange: {
      gradient: 'from-green-600 to-green-500',
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-700',
      iconBg: 'bg-green-100',
      iconText: 'text-green-600',
      hoverBorder: 'hover:border-green-300'
    },
    green: {
      gradient: 'from-emerald-600 to-emerald-500',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
      iconBg: 'bg-emerald-100',
      iconText: 'text-emerald-600',
      hoverBorder: 'hover:border-emerald-300'
    }
  };
  
  const styles = colorStyles[color];
  
  return (
    <Card className={`group overflow-hidden border-2 ${styles.border} ${styles.hoverBorder} hover:shadow-xl transition-all duration-300 bg-white`}>
      {/* Top accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${styles.gradient}`}></div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${styles.bg} ${styles.text}`}>
            {type === 'technical' ? (
              <>
                <Code2 size={14} />
                <span>Technical</span>
              </>
            ) : (
              <>
                <Palette size={14} />
                <span>Non-Technical</span>
              </>
            )}
          </span>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </CardDescription>
        
        {/* Event Details */}
        <div className="space-y-2.5 pt-2">
          <div className={`flex items-center gap-3 px-3 py-2 rounded-lg ${styles.bg}`}>
            <div className={`p-1.5 rounded-md ${styles.iconBg}`}>
              <Calendar size={14} className={styles.iconText} />
            </div>
            <span className="text-sm font-medium text-gray-700">{date}</span>
          </div>
          
          <div className={`flex items-center gap-3 px-3 py-2 rounded-lg ${styles.bg}`}>
            <div className={`p-1.5 rounded-md ${styles.iconBg}`}>
              <Clock size={14} className={styles.iconText} />
            </div>
            <span className="text-sm font-medium text-gray-700">{time}</span>
          </div>
          
          <div className={`flex items-center gap-3 px-3 py-2 rounded-lg ${styles.bg}`}>
            <div className={`p-1.5 rounded-md ${styles.iconBg}`}>
              <Users size={14} className={styles.iconText} />
            </div>
            <span className="text-sm font-medium text-gray-700">{participants}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button 
            className={`flex-1 bg-white border-2 ${styles.border} ${styles.text} font-semibold py-3 px-4 rounded-lg hover:${styles.bg} transition-all duration-200 flex items-center justify-center gap-2`}
            onClick={() => setIsDialogOpen(true)}
          >
            <Info size={16} />
            View Details
          </button>
          <button 
            className={`flex-1 bg-gradient-to-r ${styles.gradient} text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn`}
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1itvVP4cBi0zC25Y8dnpyn2jgGyZJsDpcj7KVrYb5lhpdQQ/viewform?usp=header', '_blank')}
          >
            Register
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </CardContent>

      {/* Event Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              <div className={`p-3 rounded-xl ${styles.gradient} shadow-lg`}>
                {type === 'technical' ? (
                  <Code2 size={28} className="text-white" />
                ) : (
                  <Palette size={28} className="text-white" />
                )}
              </div>
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {title}
              </span>
            </DialogTitle>
            <DialogDescription className="text-base pt-3 text-gray-600 leading-relaxed">
              {description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-6 overflow-y-auto flex-1 pr-2 custom-scrollbar">
            {/* Event Info */}
            <div className={`p-5 rounded-xl border-2 ${styles.border} bg-gradient-to-br ${styles.bg} to-white shadow-sm space-y-3`}>
              <div className="flex items-center gap-3 text-sm">
                <div className={`p-2 rounded-lg bg-white shadow-sm`}>
                  <Calendar size={18} className={styles.iconText} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Date</span>
                  <span className="font-semibold text-gray-800">{date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className={`p-2 rounded-lg bg-white shadow-sm`}>
                  <Clock size={18} className={styles.iconText} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Time</span>
                  <span className="font-semibold text-gray-800">{time}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className={`p-2 rounded-lg bg-white shadow-sm`}>
                  <Users size={18} className={styles.iconText} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Participants</span>
                  <span className="font-semibold text-gray-800">{participants}</span>
                </div>
              </div>
            </div>

            {/* Detailed Event Information */}
            <div className="space-y-4">
              {details.split('\n\n').map((section, idx) => {
                // Check if section is a header (ends with :)
                const isHeader = section.trim().endsWith(':') && section.length < 50;
                
                // Check if section contains table-like content
                const hasTable = section.includes('|') || (section.includes('Rank') && section.includes('Points'));
                
                // Check if section is numbered rules
                const isNumberedList = /^\d+\./.test(section.trim());
                
                if (isHeader) {
                  return (
                    <h3 key={idx} className={`text-lg font-bold ${styles.text} flex items-center gap-2 mt-6 first:mt-0`}>
                      <div className={`w-1 h-5 rounded-full ${styles.gradient}`}></div>
                      {section}
                    </h3>
                  );
                }
                
                if (hasTable) {
                  return (
                    <div key={idx} className={`p-4 rounded-lg border-2 ${styles.border} bg-gradient-to-br from-gray-50 to-white`}>
                      <pre className="font-mono text-xs text-gray-700 overflow-x-auto whitespace-pre">
                        {section}
                      </pre>
                    </div>
                  );
                }
                
                if (isNumberedList) {
                  const items = section.split('\n').filter(line => line.trim());
                  return (
                    <ul key={idx} className="space-y-3">
                      {items.map((item, itemIdx) => {
                        const [number, ...rest] = item.split('.');
                        const content = rest.join('.').trim();
                        return (
                          <li key={itemIdx} className="flex gap-3 items-start">
                            <span className={`flex-shrink-0 w-6 h-6 rounded-full ${styles.gradient} text-white text-xs font-bold flex items-center justify-center`}>
                              {number}
                            </span>
                            <span className="text-gray-700 leading-relaxed flex-1 pt-0.5">{content}</span>
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                
                return (
                  <p key={idx} className="text-gray-700 leading-relaxed">
                    {section}
                  </p>
                );
              })}
            </div>

            {/* Action Button */}
            <div className="flex-shrink-0 pt-4 border-t-2 border-gray-100">
              <button 
                className={`w-full bg-gradient-to-r ${styles.gradient} text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group/btn`}
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1itvVP4cBi0zC25Y8dnpyn2jgGyZJsDpcj7KVrYb5lhpdQQ/viewform?usp=header', '_blank');
                  setIsDialogOpen(false);
                }}
              >
                Register for {title}
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default EventCard;
