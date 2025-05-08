import React, { useEffect } from 'react';
import QuoteForm from '@/components/common/QuoteForm';

const Quote = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page scrolls to top when opened
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Request a Quote</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Fill out the form below for a detailed quote tailored to your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-md p-8">
            <QuoteForm />
          </div>
          
          <div>
            <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-white">Pricing Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-white">Volume Discounts</p>
                  <ul className="space-y-1 mt-2 text-sm text-gray-300">
                    <li>10-50 images: 5% discount</li>
                    <li>51-100 images: 10% discount</li>
                    <li>101+ images: 15% discount</li>
                    <li>Monthly subscriptions available</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-white">Turnaround Options</p>
                  <ul className="space-y-1 mt-2 text-sm text-gray-300">
                    <li>Standard: 24 hours</li>
                    <li>Rush: 12 hours (+25%)</li>
                    <li>Same day: 6 hours (+50%)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-primary bg-opacity-10 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Guarantee</h3>
              <div className="space-y-3">
                <p className="text-white">
                  We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with the results, we'll revise the edits until you are.
                </p>
                <p className="text-white">
                  No risk, no hidden fees, just professional results that help your listings sell faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
