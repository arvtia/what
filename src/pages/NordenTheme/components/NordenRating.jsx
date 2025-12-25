import  { useState, useEffect } from 'react';
import { InvertedCorner } from '../NordenNavbar';

const REVIEWS = [
  {
    id: 1,
    text: "Outstanding creativity & professional service from Arvaz. He transformed our vision into a high-converting product.",
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    avatar: "https://i.ibb.co/wVkwJsg/cf6ec445df41899479978aa16f05c996.jpg"
  },
  {
    id: 2,
    text: "The performance optimization Arvaz implemented slashed our load times by 40%. A true technical expert.",
    name: "Marcus Chen",
    role: "CTO at Nexus SaaS",
    avatar: "https://i.ibb.co/dw8J088M/e63a1274d16ece550d0886e481cad659.jpg"
  },
  {
    id: 3,
    text: "Arvaz doesn't just code; he understands product-market fit. His UI decisions are backed by deep UX research.",
    name: "Elena Rodriguez",
    role: "Product Manager at CreativeCo",
    avatar: "https://i.ibb.co/WN3WfjSr/d6bc8d404b8a79fbb3f6c2ad53fbc2dd.jpg"
  }
];

export const StarsIconSvg = ({ className = "text-yellow-400" }) => {
   return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        fill="currentColor" // Using currentColor lets Tailwind 'text-' classes work
        viewBox="0 0 256 256"
        className={className}
      >
        <path d="M229.5,113,166.06,89.94,143,26.5a16,16,0,0,0-30,0L89.94,89.94,26.5,113a16,16,0,0,0,0,30l63.44,23.07L113,229.5a16,16,0,0,0,30,0l23.07-63.44L229.5,143a16,16,0,0,0,0-30ZM157.08,152.3a8,8,0,0,0-4.78,4.78L128,223.9l-24.3-66.82a8,8,0,0,0-4.78-4.78L32.1,128l66.82-24.3a8,8,0,0,0,4.78-4.78L128,32.1l24.3,66.82a8,8,0,0,0,4.78,4.78L223.9,128Z"></path>
      </svg>
   );
};

const NordenRating = () => {
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
      }, 5000); // Change review every 5 seconds
      return () => clearInterval(timer);
   }, []);

   const current = REVIEWS[index];

   return (
         <div className="mb-3  bg-stripes-light mt-3 border-neutral-100 p-8 rounded-md min-h-[220px] flex items-center justify-center transition-all duration-500 relative">
            <div className="absolute top-0 left-0">
               <div className="relative bg-white shadow-sm px-4 py-2  rounded-br-2xl">
                  <div className="text-lg">
                     Testimonies
                  </div>
                  <InvertedCorner className="absolute left-0 rotate-180 top-11 text-white"/>
                  <InvertedCorner className="absolute -right-6  rotate-180 -top-0 text-white"/>
               </div>
            </div>
            
            {/* Container with a key for smooth re-mount animations if using Framer Motion,
               otherwise standard CSS transitions work too */}
            <div key={current.id} className="w-full pt-8 max-w-2xl animate-in  fade-in slide-in-from-bottom-2 duration-700">
            
            <p className="text-md md:text-lg  text-neutral-800 leading-snug">
               "{current.text}"
            </p>

            <div className="flex gap-4 items-center mt-6">
               <div className="size-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-neutral-100">
                  <img src={current.avatar} alt={current.name} className="w-full h-full object-cover" />
               </div>
               
               <div className="flex flex-col">
                  <span className="font-bold text-neutral-900 leading-none">{current.name}</span>
                  <p className="text-neutral-500 text-sm mt-1">{current.role}</p>
               </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-1.5 mt-4">
               {REVIEWS.map((_, i) => (
                  <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                     index === i ? "w-4 bg-black" : "w-2 bg-neutral-200"
                  }`} 
                  />
               ))}
            </div>
         </div>
      </div>
  );
}

export default NordenRating;