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

      <div className="relative bg-white w-fit mb-5 rounded-br-2xl">
         <h2 className=" text-xl px-2 pr-3 py-1 text-neutral-800">Featured work</h2>
         <InvertedCorner className="absolute rotate-180 text-white" />
         <InvertedCorner className="absolute rotate-180 text-white top-0 -right-6" />
      </div>


      {/* Container that pauses all children on hover */}
      <div className="group flex overflow-hidden space-x-8 pb-3">
        
        {/* The Animated Wrapper */}
        <div className="flex space-x-6 p-1 rounded animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeItems.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[350px] md:w-[450px] flex-shrink-0 group/card"
            >
              <div className="aspect-[16/10] overflow-hidden  bg-neutral-100 border border-neutral-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="absolute top-1/3 left-1/3">
                <h3 className="text-xl font-bold text-neutral-900">{project.title}</h3>
                <p className="text-neutral-500 text-sm">{project.type}</p>
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