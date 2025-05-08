import React from 'react';

const Team = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="text-lg text-gray-300 mt-4">
            Led by experts with years of experience in real estate image editing
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-64 h-64 rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Team Lead" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-lg text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Michael Robertson</h3>
            <p className="text-primary font-medium mb-4">Founder & Lead Editor</p>
            <p className="text-gray-300">
              With over 15 years of experience in architectural and real estate photography editing,
              Michael founded ImageEditingNest to provide premium editing services to real estate
              professionals nationwide. His expertise in image enhancement techniques has helped
              countless properties showcase their best features and sell faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;