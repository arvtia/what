
const ProjectFeed = () => {
  return (
        <div className="space-y-12">
           <h3 className="text-2xl font-bold">Featured Projects</h3>
           
           {/* Simple Project Card Placeholder */}
           <div className="group cursor-pointer">
              <div className="aspect-[16/9] w-full bg-neutral-200 rounded-[2rem] overflow-hidden mb-4">
                 <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-200 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-center px-2">
                 <h4 className="text-xl font-bold">Hanssen Agency</h4>
                 <span className="text-neutral-400 font-medium italic">2024</span>
              </div>
           </div>
        </div>
  )
}

export default ProjectFeed
