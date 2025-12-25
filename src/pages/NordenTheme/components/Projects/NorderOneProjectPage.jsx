import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../ProjectMarquee';
import SlidingBadge from '../SlidingBadge';
import { useState } from 'react';
import { InvertedCorner } from '../../NordenNavbar';

export const BackArrowIcon = () =>{
   return(
      <>
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
      </>
   )
}
export const HeaderPageProject = ({project}) =>{
   return(
      <>
         <div className="max-w-xl w-full bg-[#F9F9F9] pt-20 pb-5 rounded-b-xl mb-3 flex justify-start pl-3 items-center ">
            
            <div className="p-3 space-y-3">
               <p className='text-3xl font-light'>{project.title}</p>
               <p className='px-3 text-sm rounded-full bg-green-200 pb-1 w-fit text-green-700'>{project.status}</p>
               <p className='text-neutral-700'>{project.intro}</p>
               <div className="relative pt-5 w-fit">
                  <div className="p-2 rounded-md bg-stripes">
                     <a className='px-3 py-2 text-lg flex gap-3 items-center rounded-md bg-black text-white ' href={project.link}>
                        Preview Website 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 256 256"><path d="M198.63,57.37a32,32,0,0,0-45.19-.06L141.79,69.52a8,8,0,0,1-11.58-11l11.72-12.29a1.59,1.59,0,0,1,.13-.13,48,48,0,0,1,67.88,67.88,1.59,1.59,0,0,1-.13.13l-12.29,11.72a8,8,0,0,1-11-11.58l12.21-11.65A32,32,0,0,0,198.63,57.37ZM114.21,186.48l-11.65,12.21a32,32,0,0,1-45.25-45.25l12.21-11.65a8,8,0,0,0-11-11.58L46.19,141.93a1.59,1.59,0,0,0-.13.13,48,48,0,0,0,67.88,67.88,1.59,1.59,0,0,0,.13-.13l11.72-12.29a8,8,0,1,0-11.58-11ZM216,152H192a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM40,104H64a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm120,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V192A8,8,0,0,0,160,184ZM96,72a8,8,0,0,0,8-8V40a8,8,0,0,0-16,0V64A8,8,0,0,0,96,72Z"></path></svg>
                     </a>
                  </div>
               </div>
            </div>
         </div>    
      </>
   )
}
const ProductImageBio =({project})=>{
   return(
      <>
         <div className="max-w-xl w-full bg-[#F9F9F9] rounded-md mb-3 overflow-hidden">
            <div className="h-fit md:h-72 w-full bg-stripes-light p-4 md:p-10">
               <img src={project.image} alt={project.id} className='shadow-xl rounded-md p-1 bg-white ring-1 ring-neutral-300'/>
            </div>
         </div>
      </>
   )
}
const ProductImagesGallery = ({ project }) => {
   const [isActive, setIsActive] = useState(false);

   if (!project?.images || !Array.isArray(project.images)) return null;
   const validImages = project.images.filter(url => url.trim() !== "");
   if (validImages.length === 0) return null;

   return (
      <div className="mt-12">
         <h3 className="text-xl font-bold px-2 mb-3">Project Gallery</h3>
         
         <div className={`relative transition-all duration-700 ease-in-out overflow-hidden ${!isActive ? "max-h-[50vh] md:max-h-[70vh]" : "max-h-full"}`}>
            
            <div className="grid grid-cols-1">
               {validImages.map((src, idx) => (
                  <div 
                     key={idx} 
                     className="w-full bg-[#F9F9F9] rounded-2xl mb-3"
                  >
                     <div className="relative h-fit md:h-72 w-full rounded-xl p-2 md:p-10 bg-stripes overflow-hidden">
                        <img 
                           src={src} 
                           alt={`${project.title} interface ${idx + 1}`} 
                           className="w-full h-auto object-contain rounded-lg shadow-2xl ring-1 ring-black/5"
                           loading="lazy"
                        />
                     </div>
                  </div>
               ))}
            </div>

            {/* Gradient Overlay: Only visible when collapsed to hint at more content */}
            {!isActive && (
               <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            )}
         </div>

         {/* Action Button Container */}
         <div className={`flex mt-2 mb-4 ${isActive ? 'justify-end' : 'justify-center'}`}>
            <button 
               onClick={() => setIsActive(!isActive)}
               className="bg-black text-white text-base px-4 py-2 rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
               {isActive ? (
                  <div className="flex gap-2 items-center">
                     Hide images 
                     <div className="rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                     </div>
                  </div>
               ) : (
                  <div className="flex gap-2 items-center">
                     View all images
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                  </div>
               )}
            </button>
         </div>
      </div>
   );
};
const ProductDescription =({project})=>{
   return(
      <>
         <div className="max-w-xl relative w-full bg-[#F9F9F9] rounded-md h-fit mb-3 p-3">
            {/* loop */}
            <div className="absolute left-0 top-0">
               <div className="relative flex bg-white px-3 py-1 rounded-br-2xl shadow-sm">
                  <p className='text-green-500 font-semibold uppercase '>Highlights</p>
                  <InvertedCorner className="absolute -right-6 rotate-180 top-0 text-white" />
               </div>
               <InvertedCorner className="rotate-180 text-white"/>
            </div>
            <div className="p-2 mt-5">
               <ul className='list-outside space-y-1 '>
                  {
                     project.highlights.map((i, idx)=>(
                        <>
                           <li key={idx} className='cursor-pointer text-base text-neutral-600 hover:underline hover:underline-offset-2'>
                              {i}
                           </li>
                        </>
                     ))
                  }
               </ul>
            </div>
         </div>
      </>
   )
};
const OutComes =({project})=>{
   return(

      <div className="w-full max-w-xl mx-auto p-3 relative rounded-md bg-[#F9F9F9] mb-3">
         {/* loop */}
         <div className="absolute left-0 top-0">
            <div className="relative flex bg-white px-3 py-1 rounded-br-2xl shadow-sm">
               <p className='text-red-500 font-semibold uppercase '>Problem</p>
               <InvertedCorner className="absolute -right-6 rotate-180 top-0 text-white" />
            </div>
            <InvertedCorner className="rotate-180 text-white"/>
         </div>
         <div className="pt-8">
            {
               project ? (
                  <p>{project.problem}</p>
               ) : (
                  <>No Questions</>
               )
            }
         </div>
      </div>
   )
}
const SolutionComes =({project})=>{
   return(

      <div className="w-full max-w-xl mx-auto p-3 relative rounded-md bg-[#F9F9F9] mb-3">
         {/* loop */}
         <div className="absolute left-0 top-0">
            <div className="relative flex bg-white px-3 py-1 rounded-br-2xl shadow-sm">
               <p className='text-green-500 font-semibold uppercase '>How i Solved it</p>
               <InvertedCorner className="absolute -right-6 rotate-180 top-0 text-white" />
            </div>
            <InvertedCorner className="rotate-180 text-white"/>
         </div>
         <div className="pt-8">
            {
               project ? (
                  <p>{project.problem}</p>
               ) : (
                  <>No Questions</>
               )
            }
         </div>
      </div>
   )
}
const TechStacks =({project})=>{
   return(

      <div className="w-full max-w-xl mx-auto p-3 relative rounded-b-md bg-[#F9F9F9] mb-3 mt-5">
         {/* loop */}
         <div className="absolute left-0 top-0">
            <div className="relative flex bg-white px-3 py-1 rounded-br-2xl shadow-sm">
               <p className='text-green-500 font-semibold uppercase'>Tech Stacks </p>
               <InvertedCorner className="absolute -right-6 rotate-180 top-0 text-white" />
            </div>
            <InvertedCorner className="rotate-180 text-white"/>
         </div>
         <div className="pt-8">
            <ul className='flex flex-wrap gap-3'>
               {
                  project.stack.map((i, idx)=>(
                     <li className='text-base px-2 py-1 rounded-md hover:bg-neutral-200 bg-neutral-100' key={idx}>{i}</li>
                  ))
               }
            </ul>
         </div>
      </div>
   )
}
const Role =({project}) =>{
   return(
      <div className="max-w-7xl w-full p-3 relative h-fit mb-3 bg-[#F9F9F9] rounded-b-md">
         <div className="absolute left-0 top-0">
            <div className="relative flex bg-white px-3 py-1 rounded-br-2xl shadow-sm">
               <p className='text-green-500 font-semibold uppercase '>Role</p>
               <InvertedCorner className="absolute -right-6 rotate-180 top-0 text-white" />
            </div>
            <InvertedCorner className="rotate-180 text-white"/>
         </div>
         <div className="w-full pt-8">
            {
               project ? (
                  <p>{project.role}</p>
               ):(
                  <p>Not specific</p>
               )
            }
         </div>
      </div>
   )
}
const NordenProjectDetails = () => {
  const { projectId } = useParams(); // Grabs '1', '2', etc. from the URL
  const navigate = useNavigate();

  // Find the project in your array based on the URL ID
  const project = PROJECTS.find(p => p.id === parseInt(projectId));
  if (!project) return <div>Project not found</div>;

  return (
   <>
      <HeaderPageProject project = {project}/>
      <Role project={project}/>
      <ProductImageBio project={project}/>
      <OutComes project={project} />

      <SolutionComes project={project}/>
      <ProductDescription project={project} />
      <ProductImagesGallery project={project} />
      <TechStacks project={project} />
   </>
  );
};

export default NordenProjectDetails;







