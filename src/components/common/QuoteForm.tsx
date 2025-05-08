import React, { useState, useEffect, useRef } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Define service options interface
interface ServiceOption {
  id: string;
  name: string;
}

const QuoteForm = () => {
  // CORRECTED EmailJS credentials based on the error information you provided
  const SERVICE_ID = 'service_b2z62u3';  // Updated to match your actual service ID
  const TEMPLATE_ID = 'template_rbc6sfl'; // Updated to match your actual template ID
  const PUBLIC_KEY = 'q1amBwABYZeozoAxP'; // Assuming this is still correct
  
  const services: ServiceOption[] = [
    { id: "real-estate-editing", name: "Real Estate Editing" },
    { id: "color-correction", name: "Color Correction" },
    { id: "background-removal", name: "Background Removal" },
    { id: "day-to-dusk", name: "Day to Dusk Conversion" },
    { id: "virtual-staging", name: "Virtual Staging" },
    { id: "image-enhancement", name: "Image Enhancement" },
  ];

  // Create a form reference for EmailJS
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    numImages: '',
    turnaround: 'standard',
    details: '',
    imageLinks: ''
  });
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(PUBLIC_KEY);
    console.log("EmailJS initialized with key:", PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  const handleTurnaroundChange = (value: string) => {
    setFormData(prev => ({ ...prev, turnaround: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    
    // Validate form
    if (selectedServices.length === 0) {
      toast({
        title: "Please select at least one service",
        description: "You must select at least one service to request a quote",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create template parameters object
      // MAKE SURE THESE PARAMETER NAMES MATCH YOUR TEMPLATE VARIABLES EXACTLY
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        company: formData.companyName,
        services: selectedServices.map(id => 
          services.find(s => s.id === id)?.name).join(", "),
        num_images: formData.numImages,
        turnaround: formData.turnaround,
        details: formData.details,
        image_links: formData.imageLinks,
        to_email: "imageeditingnest@gmail.com" // Make sure this matches your template variable
      };
      
      console.log("Sending email with params:", templateParams);
      console.log("Using service ID:", SERVICE_ID);
      console.log("Using template ID:", TEMPLATE_ID);
      
      // Send using EmailJS send method directly
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      console.log("EmailJS result:", result);
      
      toast({
        title: "Quote request submitted!",
        description: "We'll prepare a detailed quote and contact you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        numImages: '',
        turnaround: 'standard',
        details: '',
        imageLinks: ''
      });
      setSelectedServices([]);
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error submitting request",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common input class with text color
  const inputClass = "text-black";
  
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
      {/* Hidden fields for EmailJS template matching */}
      <input type="hidden" name="from_name" value={formData.name} />
      <input type="hidden" name="reply_to" value={formData.email} />
      <input type="hidden" name="phone" value={formData.phone} />
      <input type="hidden" name="company" value={formData.companyName} />
      <input type="hidden" name="services" value={selectedServices.map(id => services.find(s => s.id === id)?.name).join(", ")} />
      <input type="hidden" name="num_images" value={formData.numImages} />
      <input type="hidden" name="turnaround" value={formData.turnaround} />
      <input type="hidden" name="details" value={formData.details} />
      <input type="hidden" name="image_links" value={formData.imageLinks} />
      <input type="hidden" name="to_email" value="imageeditingnest@gmail.com" />
      
      <div>
        <h3 className="text-lg font-medium mb-4 text-white">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className={inputClass}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-200 mb-1">
              Company Name (if applicable)
            </label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your Real Estate Company"
              className={inputClass}
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4 text-white">Project Details</h3>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-200 mb-2">
            Services Required * (select all that apply)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {services.map((service) => (
              <div key={service.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={service.id} 
                  checked={selectedServices.includes(service.id)}
                  onCheckedChange={() => handleServiceToggle(service.id)}
                />
                <Label htmlFor={service.id} className="text-gray-200">{service.name}</Label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="numImages" className="block text-sm font-medium text-gray-200 mb-1">
              Estimated Number of Images *
            </label>
            <Input
              id="numImages"
              name="numImages"
              type="number"
              value={formData.numImages}
              onChange={handleChange}
              required
              placeholder="e.g., 25"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="turnaround" className="block text-sm font-medium text-gray-200 mb-1">
              Turnaround Time
            </label>
            <Select value={formData.turnaround} onValueChange={handleTurnaroundChange}>
              <SelectTrigger className="text-black">
                <SelectValue placeholder="Select turnaround time" />
              </SelectTrigger>
              <SelectContent className="text-black">
                <SelectItem value="standard">Standard (24 hours)</SelectItem>
                <SelectItem value="rush">Rush (12 hours, +25%)</SelectItem>
                <SelectItem value="same-day">Same Day (6 hours, +50%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-4">
          <label htmlFor="details" className="block text-sm font-medium text-gray-200 mb-1">
            Additional Project Details
          </label>
          <Textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Please provide any specific requirements or details about your project..."
            rows={4}
            className={inputClass}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4 text-white">Sample Images (Optional)</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
          <Link className="mb-2 text-gray-300 h-8 w-8" />
          <p className="text-sm text-gray-300 mb-1">
            Provide links to your sample images
          </p>
          <p className="text-xs text-gray-400">
            Share links from Google Drive, Dropbox, Mega, or any other cloud storage
          </p>
          <div className="w-full mt-4">
            <Textarea
              id="imageLinks"
              name="imageLinks"
              value={formData.imageLinks}
              onChange={handleChange}
              placeholder="Paste your image links here, one per line..."
              rows={3}
              className="bg-gray-700 text-white placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-600">
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Submitting..." : "Request Quote"}
        </Button>
      </div>
    </form>
  );
};

export default QuoteForm;