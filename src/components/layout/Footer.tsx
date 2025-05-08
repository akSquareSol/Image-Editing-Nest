
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">ImageEditingNest</h3>
            <p className="text-gray-400">
              Professional real estate photo editing services with fast turnaround and exceptional quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Real Estate Editing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Color Correction</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Background Removal</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Day to Dusk</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Virtual Staging</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="text-gray-400 hover:text-primary transition-colors">Get a Quote</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p>Email: imageeditingnest@gmail.com</p>
              <p>Phone:+91 9877733911</p>
              <p>Hours: Mon-Sun 24/7</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ImageEditingNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
