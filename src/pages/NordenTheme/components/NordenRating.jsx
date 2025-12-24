import  { useState, useEffect } from 'react';

const REVIEWS = [
  {
    id: 1,
    text: "Outstanding creativity & professional service from Elias. He transformed our vision into a high-converting product.",
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    text: "The performance optimization Elias implemented slashed our load times by 40%. A true technical expert.",
    name: "Marcus Chen",
    role: "CTO at Nexus SaaS",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    id: 3,
    text: "Elias doesn't just code; he understands product-market fit. His UI decisions are backed by deep UX research.",
    name: "Elena Rodriguez",
    role: "Product Manager at CreativeCo",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  }
];

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
         <div className="mb-3 bg-[#F9F9F9] mt-3 border-neutral-100 p-8 rounded-md min-h-[220px] flex items-center justify-center transition-all duration-500">
            {/* Container with a key for smooth re-mount animations if using Framer Motion, 
               otherwise standard CSS transitions work too */}
            <div key={current.id} className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-700">
            
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