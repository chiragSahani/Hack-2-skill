import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, Users, Award, Code, Lightbulb, Presentation, Trophy } from 'lucide-react';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  icon: React.ReactNode;
  color: string;
  phase: string;
}

const TimelineSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const events: TimelineEvent[] = [
    {
      id: 1,
      title: 'Project Kickoff',
      description: 'Initial project planning and team formation. Register your team and submit your innovative ideas.',
      date: 'Thu, Jul 6th, 2024',
      time: '9:00 AM - 11:00 AM',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-700',
      phase: 'Planning'
    },
    {
      id: 2,
      title: 'Research Phase',
      description: 'Market research and competitor analysis. Deep dive into problem statements and user needs.',
      date: 'Thu, Jul 13th, 2024',
      time: '2:00 PM - 6:00 PM',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-700',
      phase: 'Research'
    },
    {
      id: 3,
      title: 'Development Sprint',
      description: 'Intensive coding session with mentor support. Build your MVP and core features.',
      date: 'Fri, Jul 14th, 2024',
      time: '9:00 AM - 11:59 PM',
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-green-700',
      phase: 'Development'
    },
    {
      id: 4,
      title: 'Final Presentations',
      description: 'Showcase your projects to judges and win amazing prizes. Demo day with industry experts.',
      date: 'Sat, Jul 15th, 2024',
      time: '10:00 AM - 4:00 PM',
      icon: <Presentation className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-700',
      phase: 'Demo'
    },
    {
      id: 5,
      title: 'Awards Ceremony',
      description: 'Recognition of outstanding projects and networking with industry professionals.',
      date: 'Sat, Jul 15th, 2024',
      time: '5:00 PM - 7:00 PM',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-700',
      phase: 'Awards'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hackathon <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Deliverables</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Track our progress through the development journey
          </p>
        </div>

        {/* Timeline Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={event.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className={`relative bg-gradient-to-br ${event.color} p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-white rounded-full transform translate-x-16 sm:translate-x-32 -translate-y-16 sm:-translate-y-32"></div>
                      <div className="absolute bottom-0 left-0 w-24 sm:w-48 h-24 sm:h-48 bg-white rounded-full transform -translate-x-12 sm:-translate-x-24 translate-y-12 sm:translate-y-24"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white/20 p-3 sm:p-4 rounded-full backdrop-blur-sm flex-shrink-0">
                            {event.icon}
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-white/80 font-medium mb-1">{event.phase}</div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">{event.title}</h3>
                          </div>
                        </div>
                        <div className="text-right sm:text-right self-start sm:self-auto">
                          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/20">0{index + 1}</div>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex items-center space-x-6 text-white/80">
                          <div className="flex items-center space-x-2 text-sm sm:text-base">
                            <Calendar className="w-5 h-5" />
                            <span className="font-medium break-words">{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm sm:text-base">
                            <Clock className="w-5 h-5" />
                            <span className="font-medium break-words">{event.time}</span>
                          </div>
                        </div>
                        
                        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-purple-400 rounded-full' 
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 bg-gray-800 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 transition-all duration-700 relative"
            style={{ width: `${((currentSlide + 1) / events.length) * 100}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSlider;