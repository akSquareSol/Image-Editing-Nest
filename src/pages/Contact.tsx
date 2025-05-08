import React from 'react';
import ContactForm from '@/components/common/ContactForm';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Have questions or ready to get started? Reach out to our team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          
          <div>
            <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-1 text-white">Email</p>
                  <p className="text-gray-300">imageeditingnest@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium mb-1 text-white">Phone</p>
                  <p className="text-gray-300">+91 9877733911</p>
                </div>
                <div>
                  <p className="font-medium mb-1 text-white">Business Hours</p>
                  <p className="text-gray-300">Monday - Sunday : 24/7 </p>
                  <p className="text-gray-300">Quick support available via email</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Response Time</h3>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="font-medium">Email inquiries:</span> Within 2 hours during business hours
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Quote requests:</span> Same day for standard requests
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Support tickets:</span> 1-hour response for active clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
