import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  features: string[];
  turnaround: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  price,
  features,
  turnaround
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-primary font-bold text-xl">{price}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-white">{turnaround}</p>
          </div>
        </div>
        <div className="mb-6">
          <p className="font-medium text-sm mb-2 text-white">Includes:</p>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start">
                <span className="mr-2 text-primary">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/quote">
          <Button className="w-full">
            Request Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;