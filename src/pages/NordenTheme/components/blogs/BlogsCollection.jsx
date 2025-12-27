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
                     <Link to={`/blog/${i.id}`} className="flex p-2 rounded-2xl group bg-[#F9F9F9] hover:ring-1 hover:ring-neutral-300 transition-transform duration-150" key={idx}>
                        <div className="bg-[#F9F9F9] overflow-hidden rounded-xl h-16 w-16">
                           <img src={i.image} alt={i.slug} className="scale-125 aspect-square object-cover group-hover:scale-150 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 pl-3">
                           <div className="items-stret flex flex-col truncate">
                              {i.title}
                              <div className="text-sm">{i.date}</div>
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