import React, { useState } from 'react';
import { ExternalLink, Maximize2 } from 'lucide-react';

const ImageGallery: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/7672153/pexels-photo-7672153.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coding Session',
      description: 'Intensive development work'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/8636883/pexels-photo-8636883.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'VR Innovation',
      description: 'Exploring virtual reality'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Team Collaboration',
      description: 'Working together on solutions'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Design Workshop',
      description: 'Creative brainstorming session'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tech Discussion',
      description: 'Deep technical conversations'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Project Presentation',
      description: 'Showcasing final results'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rewards and <span className="text-purple-400">Benefits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the amazing opportunities and experiences waiting for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl"
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Effects */}
                <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>

              {/* Content Overlay */}
              <div className={`absolute inset-0 flex items-end p-6 transition-all duration-300 ${
                hoveredImage === image.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-300 mb-4">{image.description}</p>
                  <div className="flex space-x-3">
                    <button className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Icon */}
              <div className={`absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full transition-all duration-300 ${
                hoveredImage === image.id ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
              }`}>
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;