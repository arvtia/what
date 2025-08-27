
const wtd = [
  { name: "React"},
  { name: "Node.js" },
  { name: "Express" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Tailwind CSS"},
  { name: "Bootstrap"},
  { name: "Motion"}, // assuming GSAP for motion
  { name: "PHP"},
  { name: "Go"}
];

export function TechStack () {
   return(
      <>
         <div className="max-w-7xl border border-b border-l border-r border-gray-200 p-6">
            <p className="text-lg text-neutral-700 font-bold">Most Frequently Used Tech Stack</p>
            <p className="sm">I like to experiment with many programming languages which can fit best with projects i do.</p>
            <div className="flex flex-wrap gap-4 py-3">
               {
                  wtd.map((item, idx)=>(
                     <>
                        <div key={idx} className=" border  px-2 bg-neutral-100  border-neutral-200 rounded-md items-center">
                           <p className="text-md text-neutral-700"> {item.name}</p>
                        </div>
                     </>
                  ))
               }
            </div>
         </div>      
      </>
   )
}
