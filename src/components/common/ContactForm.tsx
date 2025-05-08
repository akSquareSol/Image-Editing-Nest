import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // EmailJS configuration
  const SERVICE_ID = 'service_b2z62u3';
  const TEMPLATE_ID = 'template_gmfzvsv';
  const PUBLIC_KEY = 'q1amBwABYZeozoAxP';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
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

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Check if all required fields are filled
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill out all required fields");
      }
      
      // Create template parameters object that matches your EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone || "Not provided",
        service: formData.service ? getServiceName(formData.service) : 'Not specified',
        message: formData.message
      };
      
      console.log("Sending contact email with params:", templateParams);
      console.log("Using SERVICE_ID:", SERVICE_ID);
      console.log("Using TEMPLATE_ID:", TEMPLATE_ID);
      
      // Send using EmailJS - with more detailed error handling
      try {
        const result = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        );
        console.log("EmailJS contact form result:", result);
        
        if (result.status === 200) {
          toast({
            title: "Message sent!",
            description: "We'll get back to you as soon as possible.",
          });
          
          // Reset form on success
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
        } else {
          throw new Error(`Server responded with status: ${result.status}`);
        }
      } catch (emailjsError) {
        console.error("EmailJS specific error:", emailjsError);
        throw emailjsError; // Re-throw to be caught by outer handler
      }
    } catch (error: any) {
      console.error("Contact form submission failed:", error);
      toast({
        title: "Error sending message",
        description: error.message || "Please try again or contact us directly at imageeditingnest@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to get service name from value
  const getServiceName = (serviceValue: string) => {
    const serviceMap: {[key: string]: string} = {
      'real-estate-editing': 'Real Estate Editing',
      'color-correction': 'Color Correction',
      'background-removal': 'Background Removal',
      'day-to-dusk': 'Day to Dusk Conversion',
      'virtual-staging': 'Virtual Staging',
      'other': 'Other Services'
    };
    return serviceMap[serviceValue] || serviceValue;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Interested In
          </label>
          <Select value={formData.service} onValueChange={handleServiceChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="real-estate-editing">Real Estate Editing</SelectItem>
              <SelectItem value="color-correction">Color Correction</SelectItem>
              <SelectItem value="background-removal">Background Removal</SelectItem>
              <SelectItem value="day-to-dusk">Day to Dusk Conversion</SelectItem>
              <SelectItem value="virtual-staging">Virtual Staging</SelectItem>
              <SelectItem value="other">Other Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Please provide details about your project or request..."
          rows={5}
        />
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;