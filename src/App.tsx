import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TimelineSlider from './components/TimelineSlider';
import PrizesSection from './components/PrizesSection';
import SponsorsSection from './components/SponsorsSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="timeline">
          <TimelineSlider />
        </section>
        
        <section id="prizes">
          <PrizesSection />
        </section>
        
        <section id="sponsors">
          <SponsorsSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-sm py-12 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg"></div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  SpaceHack 2024
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Join the ultimate space-themed hackathon and launch your ideas into orbit. 
                Build the future of technology with fellow innovators.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">L</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">I</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Rules</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Starter Kits</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Mentors</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SpaceHack. Ready to launch your ideas into orbit? 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;