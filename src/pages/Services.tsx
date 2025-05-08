import React from 'react';
import ServiceCard, { ServiceCardProps } from '@/components/services/ServiceCard';

const Services = () => {
  const services: Omit<ServiceCardProps, 'price' | 'turnaround'>[] = [
    {
      title: "Real Estate Photo Editing",
      description: "Professional editing to enhance real estate photos and make properties stand out in listings.",
      imageUrl: "https://i.ibb.co/8Ldk7yMY/Real-Estate.jpg",
      features: [
        "Blue sky enhancement",
        "Lawn greening",
        "Brightness & contrast adjustment",
        "Color correction",
        "Perspective correction"
      ]
    },
    {
      title: "Color Correction",
      description: "Expert color correction for accurate, appealing property imagery.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      features: [
        "White balance adjustment",
        "Exposure correction",
        "Color temperature fixing",
        "Saturation enhancement",
        "Interior lighting balance"
      ]
    },
    {
      title: "Background Removal",
      description: "Clean background removal for product & real estate photos.",
      imageUrl: "https://i.ibb.co/whj3QBpj/Bg-removal.jpg",
      features: [
        "Precise edge detection",
        "Transparent background option",
        "Custom background placement",
        "Shadow addition",
        "Multiple revisions"
      ]
    },
    {
      title: "Day-to-Dusk Conversion",
      description: "Transform daylight shots into dramatic twilight/dusk scenes.",
      imageUrl: "https://i.ibb.co/d4Wbw1cQ/day-to-dusk.jpg",
      features: [
        "Sky replacement",
        "Window glow effects",
        "Lighting enhancements",
        "Color grading",
        "Mood setting"
      ]
    },
    {
      title: "Virtual Staging",
      description: "Add virtual furniture & décor to help buyers visualize potential.",
      imageUrl: "https://i.ibb.co/3YMmsyqY/virtual-staging.jpg",
      features: [
        "High-quality 3D furniture",
        "Multiple style options",
        "Room-specific staging",
        "Scale-perfect placement",
        "Lighting integration"
      ]
    },
    {
      title: "Image Enhancement",
      description: "Complete enhancement package to perfect every aspect of your photos.",
      imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      features: [
        "HDR blending",
        "Detail enhancement",
        "Flash removal",
        "Object removal",
        "Full retouching"
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Professional real estate photo editing to make your listings stand out.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              className="bg-gray-800 text-white"
              titleClassName="text-xl font-semibold mb-2"
              descriptionClassName="text-gray-300 mb-4"
              featuresListClassName="space-y-1"
              {...(service as ServiceCardProps)}
            />
          ))}
        </section>

        <section className="mt-16 bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Upload', 'Edit', 'Review', 'Deliver'].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-2 font-semibold">{step}</h3>
                <p className="text-gray-300 text-sm">
                  {step === 'Upload' && 'Upload your photos through our secure portal.'}
                  {step === 'Edit' && 'Our team edits your images with precision.'}
                  {step === 'Review' && 'Internal quality checks for perfection.'}
                  {step === 'Deliver' && 'Download edited images within 24 hours.'}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
