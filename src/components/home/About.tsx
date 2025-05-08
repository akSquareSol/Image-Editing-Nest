// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { Link } from 'react-router-dom';
// import { Camera, Clock, Star, Users, Brush, ChevronRight } from 'lucide-react';

// const About = ({ theme = 'dark' }) => {
//   // Determine styling based on theme
//   const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
//   const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
//   const subTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
//   const outlineButtonClasses = theme === 'dark' 
//     ? 'border-white text-white hover:bg-white hover:text-gray-900' 
//     : 'border-primary text-primary hover:bg-primary hover:text-white';

//   // Features list
//   const features = [
//     {
//       icon: <Users className="h-6 w-6" />,
//       text: "A team of seasoned editors with extensive expertise."
//     },
//     {
//       icon: <Camera className="h-6 w-6" />,
//       text: "Real estate photo editing to showcase properties at their best."
//     },
//     {
//       icon: <Brush className="h-6 w-6" />,
//       text: "State-of-the-art tools and techniques for professional results."
//     },
//     {
//       icon: <Clock className="h-6 w-6" />,
//       text: "Fast turnaround times without compromising quality."
//     },
//     {
//       icon: <Star className="h-6 w-6" />,
//       text: "Personalized services to meet diverse client needs."
//     }
//   ];

//   return (
//     <section className={`py-20 ${bgColor}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
//               <Star className="w-4 h-4 mr-2" />
//               <span>About Image Editing Nest</span>
//             </div>
//             <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>Transforming Visuals Into Captivating Masterpieces</h2>
            
//             <div className="w-20 h-1 bg-primary mb-6"></div>
            
//             <p className={`text-lg ${subTextColor} mb-4`}>
//               At Image Editing Nest, we specialize in transforming visuals into captivating masterpieces. Our dedicated team of professional editors, each with years of experience, offers high-quality image editing services, including real estate photo editing, retouching, color correction, background removal, and creative enhancements.
//             </p>
//             <p className={`text-lg ${subTextColor} mb-6`}>
//               Our mission is to provide seamless and professional editing solutions for photographers, real estate professionals, businesses, and individuals, helping your images stand out in today's competitive world. Trust Image Editing Nest for reliable, timely, and expertly crafted editing services.
//             </p>
            
//             <h3 className={`text-xl font-bold mb-4 ${textColor}`}>Why Choose Us?</h3>
            
//             <ul className="space-y-3 mb-8">
//               {features.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                   <div className="bg-primary rounded-full p-1 mr-3 mt-1 flex-shrink-0">
//                     {feature.icon}
//                   </div>
//                   <span className={subTextColor}>{feature.text}</span>
//                 </li>
//               ))}
//             </ul>
            
//             <p className={`text-lg font-medium ${textColor} italic mb-6`}>
//               At Image Editing Nest, your vision becomes our mission. Let us bring your images to life!
//             </p>
            
//             <div className="space-x-4">
//               <Link to="/services">
//                 <Button className="group">
//                   Our Services
//                   <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </Link>
//               <Link to="/contact">
//                 <Button variant="outline" className={outlineButtonClasses}>
//                   Contact Us
//                 </Button>
//               </Link>
//             </div>
//           </div>
          
//           <div className="relative">
//             <div className="rounded-lg overflow-hidden shadow-xl">
//               <img 
//                 src="/api/placeholder/800/600" 
//                 alt="Our team at work" 
//                 className="w-full h-auto"
//               />
//             </div>
//             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg z-10"></div>
//             <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-light rounded-lg z-0"></div>
            
//             {/* Added testimonial card */}
//             <div className={`absolute bottom-6 right-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg z-20 max-w-xs`}>
//               <div className="flex items-center mb-2">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <p className={`text-sm ${subTextColor} italic`}>
//                 "The team at Image Editing Nest transformed our property photos beyond our expectations. Highly recommended!"
//               </p>
//               <p className={`text-sm font-bold mt-2 ${textColor}`}>
//                 — Sarah Johnson, Real Estate Agent
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;