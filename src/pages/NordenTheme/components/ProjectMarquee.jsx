import { InvertedCorner } from "../NordenNavbar";
import SlidingBadge from "./SlidingBadge";

const PROJECTS = [
  {
    title: "Gift Hampers",
    type: "E-commerce Business",
    image: "https://i.ibb.co/tMxDT5wF/Gift-Hampers.png",
    link: "https://blog-three-kohl-26.vercel.app/category"
  },
  {
    title: "Dropitall.in",
    type: "Cloud Storage",
    image: "https://i.ibb.co/MxgyW6bd/dropitall.png",
    link: "https://dropitall.in"
  },
  {
    title: "Couple's Connect",
    type: "Calendar & Memory Sharing",
    image: "https://i.ibb.co/RThngqHD/coupleconnect.png",
    link: "https://landing-page-theta-ten-17.vercel.app/"
  },
  {
    title: "Gen Blue Ecomm",
    type: "Fast E-commerce",
    image: "https://i.ibb.co/tMHKmT7D/ecomm.png",
    link: "https://gen-blue.vercel.app/"
  }
];

const NordenProjectMarquee = () => {
  // We double the array to ensure the loop is seamless
  const marqueeItems = [...PROJECTS, ...PROJECTS];

  return (
    <div className="mt-3 bg-[#F9F9F9] rounded-md overflow-hidden">

      <div className="relative bg-white w-fit mb-5 rounded-br-2xl shadow-sm">
         <h2 className=" text-xl px-2 pr-3 py-2 text-neutral-800">Featured work</h2>
         <InvertedCorner className="absolute rotate-180 text-white" />
         <InvertedCorner className="absolute rotate-180 text-white top-0 -right-6" />
      </div>


      {/* Container that pauses all children on hover */}
      <div className="group flex overflow-hidden space-x-8 pb-3">
        
        {/* 1. Keep 'group' on the main container to pause the animation */}
      <div className="flex space-x-2 p-1 rounded animate-marquee group-hover:[animation-play-state:paused]">
         {marqueeItems.map((project, index) => (
            <a 
               key={index}
               href={project.link}
               target="_blank"
               rel="noopener noreferrer"
               /* 2. This is the individual card. We use group/card */
               className="relative w-[350px] md:w-[450px] flex-shrink-0 group/card cursor-pointer"
            >
               <div className="aspect-[16/10] relative overflow-hidden bg-neutral-100 border border-neutral-200 rounded-lg">
               <img 
                  src={project.image} 
                  alt={project.title}
                  /* 3. Change group-hover to group-hover/card */
                  className="w-full absolute top-16 left-16 h-full object-cover grayscale 
                              transition-all duration-500 rounded-md ring-1 ring-neutral-300 shadow-2xl
                              group-hover/card:top-8 group-hover/card:ease-in-out group-hover/card:left-8 group-hover/card:grayscale-0"
               />
               </div>
               
               {/* 4. You can also make text appear only for the hovered card */}
               <div className="group absolute top-1/2 left-1/3 opacity-0 group-hover/card:opacity-100 group-hover:bg-white transition-opacity">
                  <h3 className="text-white font-bold bg-black/50 px-2 py-1 rounded">View Project</h3>
               </div>
            </a>
         ))}
      </div>
      </div>

      {/* Tailwind CSS injection for the animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NordenProjectMarquee;