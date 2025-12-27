import { useParams, Link } from "react-router-dom";
import { BLOGS } from "./BlogData";
import { motion } from "motion/react";

const NordernBlogPage = () => {
  const { blogId } = useParams();
  const blog = BLOGS.find((p) => p.id === parseInt(blogId));

  if (!blog) return <div className="p-20 text-center">Blog post not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto pb-20 px-3"
    >
      {/* Header Section */}
      <header className="pt-20">
        <div className="p-2 bg-stripes rounded-2xl mb-6">
           <div className="bg-white p-6 rounded-xl ring-1 ring-neutral-200 shadow-sm">
              <div className="text-xs font-mono text-neutral-400 mb-2 uppercase tracking-widest">
                {blog.date}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 leading-tight">
                {blog.title}
              </h1>
           </div>
        </div>
      </header>

      {/* Main Image */}
      <div className="mb-10 overflow-hidden rounded-2xl border border-neutral-200 shadow-lg">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content Body */}
      <article className="prose prose-neutral">
        <div className="text-neutral-700 leading-relaxed text-lg whitespace-pre-line font-serif">
          {blog.content}
        </div>

        {/* Dynamic Image Gallery - Only shows if images exist and have content */}
        {blog.images && blog.images.length > 0 && (
          <div className="mt-12 space-y-10">
            {blog.images.map((img, index) => (
              img.url && (
                <figure key={index} className="group">
                  <div className="overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200">
                    <img 
                      src={img.url} 
                      alt={img.caption} 
                      className="w-full hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="mt-3 text-sm text-neutral-400 italic text-center">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              )
            ))}
          </div>
        )}

        {/* Conclusion Section - Conditional */}
        {blog.conclusion && (
          <div className="mt-16 p-8 bg-[#F9F9F9] rounded-2xl border-l-4 border-black">
             <h4 className="text-sm font-bold uppercase tracking-tighter mb-2">Final Thoughts</h4>
             <p className="text-neutral-600 italic leading-relaxed">
               {blog.conclusion}
             </p>
          </div>
        )}
      </article>

      {/* Footer / Back Button */}
      <footer className="mt-20 pt-10 border-t border-neutral-100 flex justify-between items-center">
        <Link to="/blog" className="text-sm font-medium hover:underline text-neutral-500">
          ← Back to all posts
        </Link>
        <div className="flex gap-2">
          <div className="size-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-neutral-400 font-mono uppercase">Arvaz Mansuri • 2025</span>
        </div>
      </footer>
    </motion.div>
  );
};

export default NordernBlogPage;