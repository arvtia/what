
import { useEffect, useRef, useState } from 'react';
import SlidingBadge from './components/SlidingBadge'
import {Link, Links, NavLink} from "react-router-dom"

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

   const [isActive, setIsActive] = useState(false)

const containerRef = useRef(null);

   useEffect(() => {
    const handleClickOutside = (event) => {
      // If clicking outside, force close
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // This function handles the "toggle" when clicking the div itself
  const handleToggle = (e) => {
    // Optional: stopPropagation prevents the event from bubbling up to parents
    // though our logic above handles outside clicks specifically.
    setIsActive((prev) => !prev);
  };


   return (
      <div className="max-w-xl relative w-full bg-[#F9F9F9] flex justify-between items-start">
         {/* dropdown menu */}
         {
            isActive && (
               
               <div ref={containerRef} className="absolute rounded-b-2xl inset-0 bg-black z-10 ">
                  <div className="pt-14 rounded-b-2xl relative bg-black overflow-hidden p-2 ">
                     <div className="w-full select-none grid grid-cols-2 gap-2">
                        {
                           RoutesNavbar.map((i, idx)=>(
                              <>
                                 <div className=" py-2 px-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-center" key={idx}>
                                    <Link to={i.link} className='font-semibold text-white text-center'>{i.name}</Link>
                                 </div>
                              </>
                           ))
                        }
                     </div>
                  </div>
               </div>
               
            )
         }
         
         {/* LEFT BLOCK */}
         <div className="relative flex gap-3 z-20 bg-white items-center p-2 rounded-br-2xl shadow-sm">
            <div className="flex gap-1 items-center pl-2">
               <NavLink to={'/'}  className=" size-4 hover:bg-neutral-300 bg-black shadow-xl rounded-full transition-colors cursor-pointer" ></NavLink>
               <SlidingBadge 
                  heightClass="h-8" 
                  className="rounded-lg border-none select-none"
                  primary={<span className="text-base font-medium">Mansuri</span>}
                  secondary={<span className="text-base font-medium">Arvaz</span>}
               />
            </div>
            <SlidingBadge 
               heightClass="h-7" 
               className="border-none hidden md:block select-none"
               primary={<span className="text-xs text-green-600 font-bold ">Available</span>}
               secondary={<span className="text-xs text-green-600 font-bold">2 Slots</span>}
            />

            {/* The Inverted SVG - Top Right Corner */}
            <InvertedCorner className="absolute top-0 -right-6 text-white rotate-180" />
            <InvertedCorner className="absolute top-12 left-0 text-white rotate-180" />
         </div>

         {/* RIGHT BLOCK */}
         <div ref={containerRef} onClick={handleToggle} className="relative p-2 z-20 bg-white rounded-bl-2xl shadow-sm">
            <SlidingBadge 
               heightClass="h-8" 
               className="border-none bg-transparent select-none"
               primary={<span className="text-base font-medium">Menu</span>}
               secondary={<span className="text-base font-medium">Open</span>}
            />

            {/* The Inverted SVG - Top Left Corner (Mirrored) */}
            <InvertedCorner className="absolute top-0 -left-6 text-white -scale-x-100 rotate-180" />
            <InvertedCorner className="absolute top-12 right-0 text-white rotate-[270deg]" />
         </div>

      </div>
   )
}

export default NordenNavbar