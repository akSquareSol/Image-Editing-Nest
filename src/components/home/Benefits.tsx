import React from 'react';
import { Check, Clock, Palette, Award, Sparkles, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Benefits = ({ theme = 'dark' }) => {
  // Configure theme-based styling
  const bgColor = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100';
  const cardBgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  
  // Expanded benefits with icons
  const benefits = [
    {
      title: "24-Hour Turnaround",
      description: "Receive your professionally edited images within 24 hours of submission, with expedited options available for urgent listings.",
      icon: <Clock className="h-6 w-6 text-white" />
    },
    {
      title: "Professional Color Grading",
      description: "Our experts perform advanced color correction, white balance adjustment, and tone optimization to make every property look its absolute best.",
      icon: <Palette className="h-6 w-6 text-white" />
    },
    {
      title: "Trusted by 500+ Professionals",
      description: "Join the hundreds of real estate agents, brokerages, and photographers who trust us with their property imagery nationwide.",
      icon: <Award className="h-6 w-6 text-white" />
    },
    {
      title: "Virtual Staging Excellence",
      description: "Transform empty spaces into beautifully staged rooms with our photorealistic virtual staging that helps buyers envision the potential.",
      icon: <Sparkles className="h-6 w-6 text-white" />
    },
    {
      title: "Dedicated Account Manager",
      description: "Every client receives a dedicated account manager who understands your style preferences and ensures consistency across all your projects.",
      icon: <Briefcase className="h-6 w-6 text-white" />
    },
    {
      title: "Money-Back Guarantee",
      description: "We're confident in our quality. If you're not completely satisfied with our work, we offer a 100% money-back guarantee.",
      icon: <Check className="h-6 w-6 text-white" />
    }
  ];

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${textColor} mb-4`}>Why Choose Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className={`text-xl ${subTextColor} max-w-3xl mx-auto`}>
            We deliver unmatched quality, consistency, and reliability for all your real estate photography needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`${cardBgColor} rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${textColor} border-t-4 border-primary`}
            >
              <div className="flex items-center mb-5">
                <div className="bg-primary p-3 rounded-lg mr-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              <p className={subTextColor}>{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className={`text-lg ${subTextColor} mb-8 max-w-2xl mx-auto`}>
            Join hundreds of satisfied clients who have transformed their real estate listings with our professional editing services
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-blue-600 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
