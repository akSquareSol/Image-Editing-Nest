import React, { useState } from 'react';

export interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  service: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
  title,
  description,
  service
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percent)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
      <div 
        className="relative h-64 sm:h-80 md:h-96 bg-gray-100 cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {/* After image (full size) */}
        <div className="absolute inset-0">
          <img 
            src={afterImage} 
            alt="After" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Before image (clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before"
            className="absolute h-full object-cover"
            style={{ 
              width: `${100 / (sliderPosition / 100)}%`,
              maxWidth: `${100 / (sliderPosition / 100)}%`,
              right: 0
            }}
          />
          
          {/* Labels */}
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 text-sm rounded">
            Before
          </div>
        </div>
        
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-sm rounded">
          After
        </div>
        
        {/* Slider control */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-4 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <span className="bg-primary-light text-primary-dark text-xs px-2 py-1 rounded">
            {service}
          </span>
        </div>
        <p className="text-gray-700 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BeforeAfter;