import React, { useState } from 'react';
import BeforeAfter, { BeforeAfterProps } from '@/components/portfolio/BeforeAfter';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const portfolioItems: BeforeAfterProps[] = [
    {
      beforeImage: "https://i.ibb.co/gLdJznRy/Before.jpg",
      afterImage: "https://i.ibb.co/0yHvkzcd/After.jpg",
      title: "Modern Living Room Enhancement",
      description: "Complete transformation with improved lighting, refined color palette, and strategic decluttering for a contemporary aesthetic.",
      service: "Modern Living Room"
    },
    {
      beforeImage: "https://i.ibb.co/8DKVYGt0/CC-before.jpg",
      afterImage: "https://i.ibb.co/rGYx0vch/CC-after.jpg",
      title: "Professional Color Balance",
      description: "Precise color grading and white balance correction to create natural, vibrant, and consistent tones throughout the image.",
      service: "Color Correction"
    },
    {
      beforeImage: "https://i.ibb.co/whhqJr5v/object-Re-Before.jpg",
      afterImage: "https://i.ibb.co/vx2YR3zj/Object-Re-After.jpg",
      title: "Seamless Object Removal",
      description: "Professional elimination of unwanted elements while maintaining the natural look and integrity of the image.",
      service: "Object Removal"
    },
    {
      beforeImage: "https://i.ibb.co/C3MNt05c/Sky-replacement-Before.jpg",
      afterImage: "https://i.ibb.co/7drVkN6J/Sky-replacement-After.jpg",
      title: "Dramatic Sky Replacement",
      description: "Replacement of dull skies with stunning alternatives to create more appealing and dramatic property images.",
      service: "Sky Replacement"
    },
    {
      beforeImage: "https://i.ibb.co/5x45BGB9/DSC09753.jpg",
      afterImage: "https://i.ibb.co/P3brnJn/DSC097532-edit.jpg",
      title: "Empty Room Staging",
      description: "Virtual furniture added to help buyers visualize the space's potential and increase property appeal.",
      service: "Empty Room Staging"
    },
    {
      beforeImage: "https://i.ibb.co/8DKVYGt0/CC-before.jpg",
      afterImage: "https://i.ibb.co/rGYx0vch/CC-after.jpg",
      title: "Complete Enhancement Package",
      description: "Comprehensive editing including color correction, object removal and lighting improvements for maximum visual impact.",
      service: "Modern Living Room"
    }
  ];
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'Modern Living Room', name: 'Modern Living Room' },
    { id: 'Color Correction', name: 'Color Correction' },
    { id: 'Object Removal', name: 'Object Removal' },
    { id: 'Sky Replacement', name: 'Sky Replacement' },
    { id: 'Empty Room Staging', name: 'Empty Room Staging' }
  ];
  
  const filteredItems = selectedFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.service === selectedFilter);

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold">Our Portfolio</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Browse our before and after transformations to see the quality of our work
          </p>
        </header>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="relative bg-gray-800 rounded-lg shadow-md overflow-hidden p-4">
              {/* Service badge for clarity */}
              <span className="absolute top-4 right-4 inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary text-white">
                {item.service}
              </span>
              <BeforeAfter {...item} />
            </div>
          ))}
        </div>
        
        {/* Testimonials
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The quality of editing is outstanding. My listings look more professional and attract more interest from potential buyers.",
                author: "Sarah Johnson",
                role: "Real Estate Agent, Century 21"
              },
              {
                quote: "Fast turnaround, excellent quality, and the team is always responsive. They've been a game-changer for my business.",
                author: "Michael Roberts",
                role: "Independent Photographer"
              },
              {
                quote: "The virtual staging service has helped me sell vacant properties much faster. The furniture looks incredibly realistic!",
                author: "Jennifer Williams",
                role: "Luxury Real Estate Specialist"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg shadow-md p-6">
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;