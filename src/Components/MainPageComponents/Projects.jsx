const projects = [
  {
    name: "Drop It All",
    description: "Cloud storage app supporting file upload/download, nested folders, multi-device access, and profile customization. Includes login, signup, and password reset features.",
    techStack: ["React.js", "MongoDB", "Tailwind CSS", "Node.js", "JWT", "Express.js"],
    duration: "24 July 2025 – 8 Aug 2025",
    link: "https://Dropitall.in"
  },
  {
    name: "Couples Connect",
    description: "Relationship-focused app with shared journaling, mood tracking, and personalized prompts. Features private couple spaces, note exchange, reminders, and secure login.",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT", "Express.js"],
    duration: "12 Aug 2025 – 28 Aug 2025",
    link: "https://landing-page-theta-ten-17.vercel.app"
  },
  {
    name: "Ecomm Website",
    description: "Dynamic e-commerce site with admin panel for CRUD operations. Built with React, Redux Toolkit, and animations. Backend hosted on Render with MongoDB Atlas and API integration.",
    techStack: ["React.js", "Bootstrap 5.3", "Swiper.js", "Framer Motion", "Redux Toolkit", "MongoDB Atlas", "Node.js", "Express.js"],
    duration: "Ongoing",
    link: "https://gen-blue.vercel.app/",
    adminPanel: "/admin"
  }
];

const Projects =()=>{
   return(
      <>
         <div className="max-w-3xl mx-auto py-5">

            <div className="Px-2">
               <p className="text-lg text-neutral-700 font-mono">
                  Projects
               </p>
            </div>

            {/* projects */}
            {
               projects.map((items, idx)=>(
                  <div className="space-y-1 rounded-md px-2 py-2 mb-1 bg-orange-200" key={idx}>
                     <div className="flex gap-2 justify-between">
                        <div className="flex flex-wrap gap-2 items-center">
                           <p className="text-lg">{items.name}</p> |
                           <p className="text-orange-600 text-md">{items.duration}</p>
                        </div>
                        <a href={items.link} className=" px-2 bg-orange-300 rounded-md">
                           <i className="bi bi-link hover:text-indigo-300"></i>
                        </a>
                     </div>
                     <p className="text-sm ">
                        {items.description}
                     </p>
                  </div>
               ))
            }

         </div>
      </>
   )
}

export default Projects;