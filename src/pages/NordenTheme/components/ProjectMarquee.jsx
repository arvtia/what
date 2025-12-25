import { InvertedCorner } from "../NordenNavbar";
import SlidingBadge from "./SlidingBadge";

 export const PROJECTS = [
  { 
    id: 1,
    year: 2025,
    title: "Gift Hampers",
    type: "E-commerce Business",
    image: "https://i.ibb.co/tMxDT5wF/Gift-Hampers.png",
    images: [
      "https://i.ibb.co/tMxDT5wF/Gift-Hampers.png",
      "https://i.ibb.co/hxtrmvGp/Adobe-Express-Photos-23b7ea52fb6b4627b81887b25f53bd3a-Copy-Edited.png", // add URL
      "https://i.ibb.co/5WsGjgFw/Adobe-Express-Photos-104500d48fb44b8e9e8e9cd07fb87f56-Copy-Edited.png", // add URL
      "https://i.ibb.co/DPccQTcL/Adobe-Express-Photos-51e708b46525406b8dc16f763fabcab7-Copy-Edited.png",
      "https://i.ibb.co/7tv7kSM3/Adobe-Express-Photos-894aa920aea7401d9fe7c4ffc6e27caa-Copy-Edited.png"  // add URL
    ],
    link: "https://blog-three-kohl-26.vercel.app/category", // add final URL
    intro:
      "A family-run gifting venture built on Next.js, designed to showcase curated hampers with polished, minimal UI and smooth interactions. The goal was to make selection and checkout feel delightful while keeping operations simple for a small business.",
    problem:
      "Traditional small gifting businesses struggle with online presentation, order accuracy, and scalable catalog management without expensive platforms. Customers also need clarity and trust at checkout.",
    solution:
      "Built a Next.js App Router application with a clean catalog, variant-aware product pages, and an admin panel for managing products, categories, orders, and statuses. Integrated Razorpay for secure payments, Cloudinary for media, and role-based auth for safe operations.",
    outcomes: [
      "Reduced catalog management time via admin CRUD and bulk operations",
      "Higher conversion with clean product detail pages and trust cues",
      "Operational visibility through order codes, statuses, and basic tracking"
    ],
    highlights: [
      "Apple‑style polish with Tailwind and Framer Motion",
      "Secure JWT auth and admin permissions",
      "Razorpay integration with server-verified payment intents"
    ],
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "MongoDB Atlas",
      "Cloudinary",
      "Razorpay",
      "Node.js",
      "Express.js"
    ],
    role: "Product architect, full‑stack developer, and UI/UX designer",
    status: "Ongoing"
  },
  {
    id: 2,
    year: 2025,
    title: "Dropitall.in",
    type: "Cloud Storage",
    image: "https://i.ibb.co/MxgyW6bd/dropitall.png",
    images: [
      "https://i.ibb.co/MxgyW6bd/dropitall.png",
      "https://i.ibb.co/9zP7vm4/Adobe-Express-Photos-6f32f6cf99cf45a190e244babc6d46a7-Copy-Edited.png", // add URL
      "https://i.ibb.co/9m7SV0F6/Adobe-Express-Photos-f7689cf802244205aa7cc7fd3e18cdad-Copy-Edited.png", // add URL
      "https://i.ibb.co/SwDVg7qh/Adobe-Express-Photos-bdbc57276a6f45e3a3e7bbd4feeb3051-Copy-Edited.png",
      "https://i.ibb.co/vxzFjBGv/Adobe-Express-Photos-8bb89b28129340ad8fe413e03a921952-Copy-Edited.png"  // add URL
    ],
    link: "https://www.dropitall.in/", // add final URL
    intro:
      "A cross‑platform, minimal file sharing and storage solution focused on speed, clarity, and friction‑less transfers.",
    problem:
      "Users need a fast, clean way to share files without bloated interfaces, confusing flows, or privacy doubts.",
    solution:
      "Designed a lean, secure flow with JWT auth, clear upload limits, and instant link sharing. Prioritized single-responsibility components, strong typing, and predictable state. Built backend with clean route separation, robust middleware, and analytics‑ready schemas.",
    outcomes: [
      "Consistently fast uploads and reliable sharing with concise UX",
      "Lower support overhead thanks to obvious UI and predictable flows",
      "Maintainable codebase with scalable API design and clear permission separation"
    ],
    highlights: [
      "Type‑safe state management (Zustand/Redux Toolkit)",
      "Polished UI patterns and smooth transitions",
      "Secure API design with reusable middleware"
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Zustand/Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB Atlas"
    ],
    role: "Full‑stack developer and systems designer",
    status: "Active development"
  },
  {
    id:3,
    year: 2025,
    title: "Couple's Connect",
    type: "Calendar & Memory Sharing",
    image: "https://i.ibb.co/RThngqHD/coupleconnect.png",
    images: [
      "https://i.ibb.co/RThngqHD/coupleconnect.png",
      "https://i.ibb.co/4R8gSFcf/Adobe-Express-Photos-19d5e7c85ebb47ffa243efc35ee0b988-Copy-Edited.png",
      "https://i.ibb.co/qM7gF6Hm/Adobe-Express-Photos-39928870dae1495982ebf96051d5562a-Copy-Edited.png", // add URL
      "https://i.ibb.co/yntqYjmw/Adobe-Express-Photos-ac33724bf2f540fe88eb9f0d9f34c1a7-Copy-Edited.png", // add URL
      "https://i.ibb.co/pv0DB7T6/Adobe-Express-Photos-5e8dfea3757c4328a8489a79ed56f8ae-Copy-Edited.png",
      "https://i.ibb.co/fVJtYNQY/Adobe-Express-Photos-e9eaf6a385764431bb23b2e37a326599-Copy-Edited.png" ,
      "https://i.ibb.co/0Vmmf0Nh/Adobe-Express-Photos-c6ab14d46d8b461c86704cd3b831fe67-Copy-Edited.png",
      "https://i.ibb.co/n8wL4h64/Adobe-Express-Photos-a06d9cc740474889a92efc1e81bb7c30-Copy-Edited.png",
      "https://i.ibb.co/GQDsP8w0/Adobe-Express-Photos-29b14bb91f834c74af20a29b33991e85-Copy-Edited.png",
    ],
    link: "https://x-couple-relation.vercel.app/login", // add final URL
    intro:
      "A playful, private space for couples to plan, journal memories, and celebrate moments together.",
    problem:
      "Most shared apps feel noisy or transactional. Couples need a calm, intimate tool that makes planning and remembering easy and delightful.",
    solution:
      "Built a minimalist calendar, shared notes, and memory timelines with subtle animations and privacy‑first architecture. Focused on intuitive interactions, clean typography, and low cognitive load.",
    outcomes: [
      "Higher engagement via simple, joyful interactions",
      "Trust through privacy‑first design and clear boundaries",
      "Foundational feature set ready for incremental growth (reminders, media)"
    ],
    highlights: [
      "Elegant UI micro‑interactions",
      "Clear information hierarchy and compact layouts",
      "Scalable schema for events, notes, and shared media"
    ],
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "MongoDB Atlas"
    ],
    role: "Product designer and front‑end engineer",
    status: "Prototype live"
  },
  {
    id:4,
    year: 2025,
    title: "Gen Blue Ecomm",
    type: "Fast E-commerce",
    image: "https://i.ibb.co/tMHKmT7D/ecomm.png",
    images: [
      "https://i.ibb.co/tMHKmT7D/ecomm.png",
      "https://i.ibb.co/gXD4wCX/Adobe-Express-Photos-1160d68a254a47cfbb965fd7932a30d6-Copy-Edited.png",
      "https://i.ibb.co/GQDc8LfF/Adobe-Express-Photos-9857aa976cbd40808a3dfdf917d18b9e-Copy-Edited.png",
      "https://i.ibb.co/0y7gGyQb/Adobe-Express-Photos-b9fb0c409da44a948ad24f76d2caf7ff-Copy-Edited.png",
      "https://i.ibb.co/rGYBKkFK/Adobe-Express-Photos-0c85ad8a4566446aa6f8c2da02a5bfac-Copy-Edited.png",
       // add URL
    ],
    link: "https://gen-blue.vercel.app/", // add final URL
    intro:
      "A performance‑focused e‑commerce experience with dynamic product presentation and a near‑instant, intuitive admin panel.",
    problem:
      "Small teams need e‑comm speed and polish without enterprise complexity—especially around order handling, API reliability, and UI clarity.",
    solution:
      "Implemented App Router APIs with strict typing and robust error handling. Built hover popovers, animated sliders, and compact order tables. Hardened backend with clean route signatures, ObjectId validation, and predictable responses.",
    outcomes: [
      "Snappy browsing and smoother conversions",
      "Resilient order management with safer updates and bulk operations",
      "Cleaner developer workflow via single‑responsibility components and typed API contracts"
    ],
    highlights: [
      "Admin CRUD with bulk update routes",
      "Strong error handling and validation",
      "Delightful UI interactions (tooltips, sliders, transitions)"
    ],
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS/Bootstrap",
      "Framer Motion",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Razorpay"
    ],
    role: "Full‑stack engineer and UI perfectionist",
    status: "Live and evolving"
  }
];

const NordenProjectMarquee = () => {
  // We double the array to ensure the loop is seamless
  const marqueeItems = [...PROJECTS, ...PROJECTS];

  return (
    <div className="mt-3 bg-[#F9F9F9]  rounded-md overflow-hidden">

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
                className=" relative w-[350px] md:w-[450px] flex-shrink-0 group/card cursor-pointer"
              >
                <div className="aspect-[16/10] bg-stripes-light  relative overflow-hidden  border border-neutral-200 rounded-lg">
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