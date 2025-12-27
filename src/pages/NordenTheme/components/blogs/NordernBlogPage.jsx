import { useParams } from "react-router-dom"
import { BLOGS } from "./BlogData";


const NordernBlogPage = () => {
   const { blogId} = useParams();

   const blog = BLOGS.find(p => p.id === parseInt(blogId));
   if (!blog) return <div>Project not found</div>;
   
   return (
      <>

      </>
   )
}

export default NordernBlogPage
