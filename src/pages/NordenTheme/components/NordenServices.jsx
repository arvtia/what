
import { InvertedCorner } from '../NordenNavbar';



const SERVICES = [
  {
    id: 1,
    title: "Web Design",
    description: "I specialize in transforming outdated interfaces into modern, unique digital experiences. I focus on high-end aesthetics and intuitive user flows to make your brand stand out.",
    details: "Redesigning legacy sites • Modern UI/UX • Brand Identity"
  },
  {
    id: 2,
    title: "Full Stack Dev",
    description: "Building your idea from Zero to One. I handle the entire lifecycle of a product, from architecting robust databases to deploying high-performance applications.",
    details: "Zero to One builds • Database Design • Scalable APIs"
  },
  {
    id: 3,
    title: "Perfomance",
    description: "Ensuring your website runs at peak speed. I optimize Core Web Vitals to improve SEO rankings and keep users engaged with instant load times.",
    details: "SEO Audit • Speed Optimization • Code Refactoring"
  },
  {
    id: 4,
    title: "Clouds Ops",
    description: "Getting your application running smoothly in the cloud. I manage hosting, custom domains, and SSL setups so you can focus on your business.",
    details: "AWS/Vercel Setup • Domain Management • CI/CD Pipelines"
  }
];




const NordenServices = () => {
  return (
    <div className="p-3 bg-white min-h-screen">
      <div className="max-w-xl w-full">
        
        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group select-none relative bg-[#F9F9F9] p-3 rounded-xl rounded-tl-none  transition-shadow duration-300"
            >
              {/* THE INVERTED TAB TITLE */}
              <div className="absolute -top-[0px] left-0 bg-white w-fit pr-6 py-2 rounded-br-2xl flex items-center shadow-sm">
                <h2 className="text-xl font-bold text-neutral-800 px-2">
                  {service.title}
                </h2>
                
                {/* Right side curve (Transition to the card top) */}
                <InvertedCorner className="absolute top-0 -right-6 text-white rotate-180" />
                
                {/* Bottom side curve (Transition to the card left) */}
                <InvertedCorner className="absolute -bottom-6 left-0 text-white rotate-180" />
              </div>

              {/* SERVICE CONTENT */}
              <div className="mt-12">
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="pt-6 border-t border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    Capabilities
                  </span>
                  <p className="text-sm font-medium text-neutral-800 mt-2">
                    {service.details}
                  </p>
                </div>
              </div>
              
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default NordenServices;