import React, { useEffect, useState } from 'react';
import { Rocket, Calendar, Users, Trophy, Zap, Code } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8">
          <div 
            className="transform transition-transform duration-300"
            style={{ 
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` 
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Launch Your
              <br />
              Next
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Digital Mission
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg">
            Explore the infinite possibilities of web development with SpaceHack 2024. 
            Build, deploy, and scale your projects to new heights with our cutting-edge platform 
            designed for the next generation of developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center justify-center space-x-2">
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                <span>Start Your Journey</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
            
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 md:pt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">500+</div>
              <div className="text-sm sm:text-base text-gray-400">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">48</div>
              <div className="text-sm sm:text-base text-gray-400">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-pink-400">$50K</div>
              <div className="text-sm sm:text-base text-gray-400">Prizes</div>
            </div>
          </div>
        </div>

        {/* Right Content - Animated Astronaut */}
        <div className="relative flex items-center justify-center mt-8 lg:mt-0">
          <div 
            className="relative transform transition-transform duration-300 w-full max-w-sm sm:max-w-md lg:max-w-lg"
            style={{ 
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` 
            }}
          >
            {/* Cosmic Circle Background */}
            <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Animated Astronaut */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl mx-auto">
              <img
                src="https://res.cloudinary.com/dlyctssmy/image/upload/v1752246401/5fe88aa5-b1af-432e-9f95-91ac88da5a03-ezgif.com-resize_sonjev.gif"
                alt="Animated Astronaut"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 bg-purple-600 p-2 sm:p-3 rounded-full animate-bounce delay-100">
              <Code className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="absolute -top-2 -right-6 sm:-top-4 sm:-right-12 bg-blue-600 p-2 sm:p-3 rounded-full animate-bounce delay-300">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-6 sm:-bottom-8 sm:-left-12 bg-pink-600 p-2 sm:p-3 rounded-full animate-bounce delay-500">
              <Trophy className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-4 sm:-bottom-4 sm:-right-8 bg-cyan-600 p-2 sm:p-3 rounded-full animate-bounce delay-700">
              <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;