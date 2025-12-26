
import { useEffect, useRef, useState } from 'react';
import SlidingBadge from './components/SlidingBadge'
import { NavLink} from "react-router-dom"
import { AnimatePresence , motion} from 'motion/react';

const RoutesNavbar = [
   {  link : "/work", name:'Work'},
   {  link: '/about', name: 'About'},
   {  link: '/blog' , name: 'Blog'},
   {  link: '/contact', name: 'Contact'}
]


// The SVG Corner Component
export const InvertedCorner = ({ className }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`size-6 ${className}`} // Adjust size-6 to change the radius
  >
    <path 
      d="M100 0V100H0C55.2285 100 100 55.2285 100 0Z" 
      fill="currentColor" 
    />
  </svg>
);

const NordenNavbar = () => {
   const [isActive, setIsActive] = useState(false);
   const containerRef = useRef(null);

   useEffect(() => {
      const handleClickOutside = (event) => {
         // This now correctly checks if the click is outside the entire Navbar
         if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsActive(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   const handleToggle = () => {
      setIsActive((prev) => !prev);
   };

   return (
      // 1. Move the ref to the parent so it covers both the button and the menu
      <div ref={containerRef} className="max-w-xl relative w-full bg-[#F9F9F9] flex justify-between items-start">
         
         <AnimatePresence >
            {/* dropdown menu */}
               {isActive && (
                  // 2. REMOVED ref={containerRef} from here to prevent ref-jumping
                  <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  
                  className="absolute rounded-b-2xl inset-0 bg-black z-10 ">
                     <div className="pt-14 rounded-b-2xl relative bg-black overflow-hidden p-2 ">
                        <div className="w-full select-none grid grid-cols-2 gap-2">
                           {RoutesNavbar.map((i, idx) => (
                              <NavLink 
                                 key={idx}
                                 // 3. FIXED: Changed to arrow function to prevent immediate execution
                                 onClick={() => setIsActive(false)} 
                                 to={i.link} 
                                 className="py-2 px-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-center"
                              >
                                 <p className='font-semibold text-white text-center'>{i.name}</p>
                              </NavLink>
                           ))}
                        </div>
                     </div>
                  </motion.div> 
               )}

         </AnimatePresence>
         
         {/* LEFT BLOCK */}
         <div className="relative flex gap-3 z-20 bg-white items-center p-2 rounded-br-2xl shadow-sm">
            {/* ... rest of your left block code ... */}
            <div className="flex gap-1 items-center pl-2">
               <NavLink to={'/'} className="size-4 hover:bg-neutral-300 bg-black shadow-xl rounded-full transition-colors cursor-pointer" ></NavLink>
               <NavLink to={'/'}>
                  <SlidingBadge 
                     heightClass="h-8" 
                     className="rounded-lg border-none select-none"
                     primary={<span className="text-base font-medium">Mansuri</span>}
                     secondary={<span className="text-base font-medium">Arvaz</span>}
                  />
               </NavLink>
            </div>
            <SlidingBadge 
               heightClass="h-7" 
               className="border-none hidden md:block select-none"
               primary={<span className="text-xs text-green-600 font-bold ">Available</span>}
               secondary={<span className="text-xs text-green-600 font-bold">2 Slots</span>}
            />
            <InvertedCorner className="absolute top-0 -right-6 text-white rotate-180" />
            <InvertedCorner className="absolute top-12 left-0 text-white rotate-180" />
         </div>

         {/* RIGHT BLOCK */}
         {/* 4. REMOVED ref={containerRef} from here (it's already on the parent) */}
         <div onClick={handleToggle} className="relative p-2 z-20 bg-white rounded-bl-2xl shadow-sm cursor-pointer">
            <SlidingBadge 
               heightClass="h-8" 
               className="border-none bg-transparent select-none"
               primary={<span className="text-base font-medium">Menu</span>}
               secondary={<span className="text-base font-medium">{isActive ? "Close" : "Open"}</span>}
            />
            <InvertedCorner className="absolute top-0 -left-6 text-white -scale-x-100 rotate-180" />
            <InvertedCorner className="absolute top-12 right-0 text-white rotate-[270deg]" />
         </div>

      </div>
   );
}



export default NordenNavbar;