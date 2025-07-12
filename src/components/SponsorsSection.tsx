import React from 'react';
import { Building2, Zap, Code, Rocket, Globe, Shield } from 'lucide-react';

const SponsorsSection: React.FC = () => {
  const sponsors = [
    {
      id: 1,
      name: 'TechCorp',
      tier: 'Platinum',
      icon: <Building2 className="w-12 h-12" />,
      color: 'from-gray-300 to-gray-500',
      description: 'Leading technology solutions provider'
    },
    {
      id: 2,
      name: 'InnovateLab',
      tier: 'Gold',
      icon: <Zap className="w-12 h-12" />,
      color: 'from-yellow-400 to-yellow-600',
      description: 'Innovation and startup accelerator'
    },
    {
      id: 3,
      name: 'CodeMasters',
      tier: 'Gold',
      icon: <Code className="w-12 h-12" />,
      color: 'from-yellow-400 to-yellow-600',
      description: 'Developer tools and platforms'
    },
    {
      id: 4,
      name: 'SpaceVentures',
      tier: 'Silver',
      icon: <Rocket className="w-12 h-12" />,
      color: 'from-gray-400 to-gray-600',
      description: 'Space technology investments'
    },
    {
      id: 5,
      name: 'GlobalTech',
      tier: 'Silver',
      icon: <Globe className="w-12 h-12" />,
      color: 'from-gray-400 to-gray-600',
      description: 'International tech consulting'
    },
    {
      id: 6,
      name: 'SecureNet',
      tier: 'Bronze',
      icon: <Shield className="w-12 h-12" />,
      color: 'from-amber-600 to-amber-800',
      description: 'Cybersecurity solutions'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powered by industry leaders who believe in innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 bg-gradient-to-r ${sponsor.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {sponsor.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{sponsor.name}</h3>
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${sponsor.color} text-white text-sm font-semibold rounded-full mb-3`}>
                    {sponsor.tier} Sponsor
                  </div>
                  <p className="text-gray-400">{sponsor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;