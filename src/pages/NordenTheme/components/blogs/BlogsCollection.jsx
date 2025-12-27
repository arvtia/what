import { Link } from "react-router-dom";
import { BLOGS } from "./BlogData"

export const BlogsCollection= () =>{

   const blog = BLOGS;
   return(
      <>
         <div className="max-w-xl w-full grid grid-cols-1 gap-3 py-5">
            {
               blog.map((i, idx)=>(
                  <>
                     <Link to={`/blog/${i.id}`} className="flex p-2 rounded-2xl group bg-stripes transition-transform duration-150 relative overflow-hidden" key={idx}>
                        <div className="w-full bg-[#F9F9F9] overflow-hidden rounded-xl">
                           <img 
                              src={i.image} 
                              alt={i.slug} 
                              className="scale-125 aspect-square object-cover group-hover:scale-110 transition-transform duration-500" 
                           />
                        </div>
                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                           <div className="relative z-10 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className="font-semibold text-lg leading-tight truncate">
                              {i.title}
                              </h3>
                              <div className="text-xs text-neutral-300 mt-1">
                              {i.date}
                              </div>
                           </div>
                        </div>
                     </Link>
                  </>
               ))
            }
         </div>
      </>
   )
}