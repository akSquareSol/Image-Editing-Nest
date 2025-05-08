import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';

const images = [
  { url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80', alt: 'Modern interior with professional lighting' },
  { url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1920&q=80', alt: 'Elegant home exterior with perfect lighting' },
  { url: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1920&q=80', alt: 'Spacious living room with professional editing' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme, resolvedTheme } = useTheme(); // Get both raw and resolved theme
  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Alternate solution without theme detection - use CSS variables to control image appearance
  useEffect(() => {
    // This creates a CSS variable that will change based on color scheme media query
    document.documentElement.style.setProperty(
      '--hero-image-brightness', 
      isDarkMode ? '1.7' : '1'
    );
    document.documentElement.style.setProperty(
      '--hero-image-contrast', 
      isDarkMode ? '1.1' : '1'
    );
    document.documentElement.style.setProperty(
      '--hero-overlay-opacity',
      isDarkMode ? '0.2' : '0.4'
    );
  }, [isDarkMode]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background slides */}
      {images.map((image, idx) => (
        <div
          key={idx}
          className={`
            absolute inset-0
            bg-cover bg-center
            transition-opacity duration-1000
            ${idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0'}
          `}
          style={{ 
            backgroundImage: `url(${image.url})`,
            // Apply strong brightness & contrast filters for dark mode
            filter: `brightness(var(--hero-image-brightness, 1)) contrast(var(--hero-image-contrast, 1))`
          }}
          aria-hidden={idx !== currentIndex}
        />
      ))}

      {/* Completely different overlay implementation based on theme */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: 'rgba(0, 0, 0, var(--hero-overlay-opacity, 0.4))'
        }}
      />

      {/* Content (z-20) */}
      <div className="relative z-20 text-center container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Real Estate Photo Editing Service
        </h1>
        <p className="text-xl text-white mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Professional photo editing to make your properties stand out in the market
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Link to="/services">
            <Button size="lg" className="bg-theme-blue hover:bg-blue-600 transition-all">
              Our Services
            </Button>
          </Link>
          <Link to="/quote">
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-theme-darkBlue transition-all">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>

      {/* Indicators (z-20) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;