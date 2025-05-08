import React from 'react';
import { Camera, Home, Clock, Award, PenTool, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Introduction = ({ theme = 'dark' }) => {
  // Theme configuration
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const iconBg = theme === 'dark' ? 'bg-primary text-white' : 'bg-primary/10 text-primary';

  // Service highlights
  const highlights = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photo Enhancement",
      description: "Color correction, contrast adjustment, and image sharpening to make every detail pop"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Virtual Staging",
      description: "Transform empty spaces into beautifully furnished rooms that showcase potential"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Sky Replacement",
      description: "Replace dull skies with vibrant blue alternatives for perfect outdoor property shots"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "24-hour standard delivery with expedited options for urgent listings"
    }
  ];

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            <span>Trusted by Real Estate Professionals</span>
          </div>
          
          <h2 className={`text-4xl font-bold ${textColor} mb-6`}>Transform Your Real Estate Photography</h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          
          <p className={`text-xl ${subTextColor} mb-6`}>
            We specialize in transforming ordinary real estate photographs into stunning, professional images
            that grab attention and help properties sell faster.
          </p>
          
          <p className={`text-lg ${subTextColor} mb-8`}>
            With over a decade of experience in real estate image editing and enhancement,
            our team of expert editors delivers exceptional results with 24-hour turnaround times.
            We understand the competitive real estate market and provide the visual edge
            you need to stand out from the competition.
          </p>
          
          <Link to="/services">
            <Button size="lg" className="group">
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        {/* Service highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className={`${cardBg} p-6 rounded-lg shadow-md border-l-4 border-primary transition-all duration-300 hover:shadow-lg`}
            >
              <div className={`${iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{item.title}</h3>
              <p className={subTextColor}>{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "15,000+", label: "Photos Edited" },
            { value: "100+", label: "Active Clients" },
            { value: "24h", label: "Turnaround Time" }
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className={`text-4xl font-bold text-primary mb-2`}>{stat.value}</div>
              <div className={subTextColor}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;