import { Link } from "react-router-dom";
import { InvertedCorner } from "../../NordenNavbar";
import { PROJECTS } from "../ProjectMarquee";

const NordenProjectPhoto = () => {
  return (
    <>
      {PROJECTS.map((project) => (
         <Link to={`/work/${project.id}`}
            key={project.id}
            className="w-full relative max-w-xl mb-3  p-20 bg-stripes h-72 items-center flex rounded-md"
         >
            <div className="absolute top-0 left-0 flex items-start">
               {/* The Title Div (Your design) */}
               <div className="relative pl-2 pr-4 py-2 rounded-br-xl text-sm bg-white z-10">
                  {project.title}
                  {/* Bottom Corner: Stays fixed to the bottom of the title */}
                  <InvertedCorner className="absolute top-full left-0 rotate-180 text-white" />
               </div>
               {/* The Right Corner: This now "listens" to the title width because of 'flex' */}
               <InvertedCorner className="text-white -scale-x-100 rotate-90" />
            </div>

            <img src={project.image} className="h-52 p-1 mt-4 ring-1 ring-neutral-300 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]" alt={project.title || 'Project image'} />
         </Link>
      ))}
    </>
  );
};

export default NordenProjectPhoto;
