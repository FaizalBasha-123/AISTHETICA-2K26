
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, ArrowRight, Code2, Palette } from 'lucide-react';

export interface EventCardProps {
  title: string;
  description: string;
  type: 'technical' | 'non-technical';
  date: string;
  time: string;
  participants: string;
  color: 'purple' | 'blue' | 'pink' | 'orange' | 'green' | 'red' | 'yellow';
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  type,
  date,
  time,
  participants,
  color
}) => {
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

        {/* Register Button */}
        <button 
          className={`w-full mt-4 bg-gradient-to-r ${styles.gradient} text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn`}
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1itvVP4cBi0zC25Y8dnpyn2jgGyZJsDpcj7KVrYb5lhpdQQ/viewform?usp=header', '_blank')}
        >
          Register Now
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
