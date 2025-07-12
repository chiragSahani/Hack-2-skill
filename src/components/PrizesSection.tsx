import React, { useState } from 'react';
import { Trophy, Award, Star, Gift, Zap, Crown } from 'lucide-react';

const PrizesSection: React.FC = () => {
  const [hoveredPrize, setHoveredPrize] = useState<number | null>(null);

  const prizes = [
    {
      id: 1,
      rank: '1st Place',
      title: 'Grand Champion',
      amount: '$25,000',
      description: 'Ultimate winner with the most innovative solution',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-400/50',
      extras: ['Mentorship Program', 'Startup Incubation', 'Industry Connections']
    },
    {
      id: 2,
      rank: '2nd Place',
      title: 'Innovation Leader',
      amount: '$15,000',
      description: 'Outstanding technical implementation and creativity',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-gray-300 to-gray-500',
      bgColor: 'bg-gradient-to-br from-gray-400/20 to-gray-600/20',
      borderColor: 'border-gray-400/50',
      extras: ['Tech Workshop Access', 'Professional Networking', 'Certificate']
    },
    {
      id: 3,
      rank: '3rd Place',
      title: 'Rising Star',
      amount: '$10,000',
      description: 'Exceptional potential and promising solution',
      icon: <Award className="w-8 h-8" />,
      color: 'from-amber-600 to-amber-800',
      bgColor: 'bg-gradient-to-br from-amber-600/20 to-amber-800/20',
      borderColor: 'border-amber-600/50',
      extras: ['Online Course Access', 'Community Membership', 'Swag Package']
    },
    {
      id: 4,
      rank: 'Best Design',
      title: 'Design Excellence',
      amount: '$5,000',
      description: 'Most visually appealing and user-friendly interface',
      icon: <Star className="w-8 h-8" />,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-400/20 to-purple-600/20',
      borderColor: 'border-purple-400/50',
      extras: ['Design Tools License', 'Portfolio Review', 'Design Community']
    },
    {
      id: 5,
      rank: 'Best Tech',
      title: 'Technical Innovation',
      amount: '$5,000',
      description: 'Most impressive technical architecture and implementation',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-400/20 to-blue-600/20',
      borderColor: 'border-blue-400/50',
      extras: ['Cloud Credits', 'API Access', 'Tech Mentorship']
    },
    {
      id: 6,
      rank: "People's Choice",
      title: 'Community Favorite',
      amount: '$3,000',
      description: 'Most popular project voted by participants',
      icon: <Gift className="w-8 h-8" />,
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-gradient-to-br from-pink-400/20 to-pink-600/20',
      borderColor: 'border-pink-400/50',
      extras: ['Social Media Feature', 'Community Badge', 'Exclusive Merch']
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Epic <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Rewards</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Compete for amazing prizes and recognition in the developer community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={prize.id}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredPrize(prize.id)}
              onMouseLeave={() => setHoveredPrize(null)}
            >
              <div className={`relative ${prize.bgColor} backdrop-blur-sm border-2 ${prize.borderColor} rounded-3xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-500 ${
                hoveredPrize === prize.id ? 'shadow-2xl shadow-purple-500/25' : 'shadow-xl'
              }`}>
                {/* Decorative Blurred Circles */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>

                {/* Rank Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-r ${prize.color} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                    {prize.rank}
                  </div>
                </div>

                {/* Icon */}
                <div className={`mb-4 transition-transform duration-300 ${
                  hoveredPrize === prize.id ? 'scale-110 rotate-12' : ''
                }`}>
                  {prize.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{prize.title}</h3>
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                    {prize.amount}
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{prize.description}</p>
                  
                  {/* Extras */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-purple-400 mb-2">Additional Benefits:</div>
                    {prize.extras.map((extra, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm">{extra}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${prize.color} opacity-0 transition-opacity duration-300 rounded-3xl ${
                  hoveredPrize === prize.id ? 'opacity-5' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Prize Pool */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-8 py-6">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <div>
              <div className="text-sm text-gray-400 mb-1">Total Prize Pool</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                $63,000+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
