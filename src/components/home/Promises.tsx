import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Image Editing Nest</h2>
            <p className="text-lg text-gray-300 mb-4">
              At Image Editing Nest, we specialize in transforming visuals into captivating masterpieces. 
              Our dedicated team of professional editors, each with years of experience, offers high-quality 
              image editing services, including real estate photo editing, retouching, color correction, 
              background removal, and creative enhancements.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our mission is to provide seamless and professional editing solutions for photographers, 
              real estate professionals, businesses, and individuals, helping your images stand out 
              in today's competitive world. Trust Image Editing Nest for reliable, timely, and expertly 
              crafted editing services.
            </p>
            <div className="space-x-4">
              <Link to="/services">
                <Button>
                  Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 font-medium">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
         
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              {/* Replaced placeholder with a relevant Unsplash image */}
              <img
                src="https://i.ibb.co/N5Fxb4W/Best-Free-Photography-Editing-Apps-in-2021-1536x806.webp"
                alt="Professional image editing example"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-light rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;