import { Link } from "react-router-dom";
import SlidingBadge from "./components/SlidingBadge";

export default function NordenCleanUI() {
  return (
    <div className="min-h-[80vh] bg-[#F9F9F9] rounded-md text-neutral-900 font-sans p-6 md:p-12">
      <div className="max-w-5xl mx-auto select-none">
        {/* --- HEADER SECTION --- */}
        <header className="flex justify-between items-start mb-24">
          <div className="flex items-center gap-4">
            {/* Profile Picture Placeholder */}
            <div className="relative size-14 rounded-full overflow-hidden bg-neutral-200 border border-neutral-100">
               <img 
                src="https://i.ibb.co/JR8TxJbX/IMG20250305095541.jpg" 
                alt="Profile" 
                className="object-cover"
               />
            </div>
            <div>
              <p className="text-[20px] font-bold leading-none">Arvaz Mansuri</p>
              <p className="text-neutral-500 text-sm mt-1">Full Stack developer</p>
            </div>
          </div>

          
        </header>

        {/* --- HERO SECTION --- */}
        <section className="select-none">

          <h1 className="text-4xl md:text-4xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
            Your Digital Vision,<br /> 
            <span className="text-neutral-400">Perfectly Realized.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed">
            I build <span className="text-neutral-900 font-medium hover:bg-orange-100 hover:px-2 hover:font-mono transition-all duration-300 delay-150 rounded-full ">high-performance, scalable web applications</span> where 
            form meets function. From architecting robust backends to crafting 
            <span className="text-neutral-900 font-medium"> pixel-perfect user interfaces</span>, I deliver 
            end-to-end digital solutions.
         </p>

          <div className="flex gap-4 mt-10">
            <a 
                href="tel:+917838315511" 
                className="group relative inline-block px-4 py-2 bg-black text-white rounded-lg font-bold overflow-hidden"
              >
                {/* The Sliding Container */}
                <div className="relative h-6 overflow-hidden">
                  <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-6">
                    
                    {/* State 1: Default */}
                    <div className="flex items-center justify-center gap-2 h-6">
                      <span>Tap to Call</span>
                      <span className="text-lg">→</span>
                    </div>

                    {/* State 2: Hover (The "Action" state) */}
                    <div className="flex items-center justify-center gap-2 h-6 text-yellow-400">
                      <span>Call Now</span>
                      <span className="text-lg translate-x-1 transition-transform duration-300">→</span>
                    </div>
                    
                  </div>
                </div>
              </a>

            <Link to={'/work'} className="px-4 py-2 bg-white border border-neutral-200 text-neutral-900 rounded-lg hover:shadow-lg font-bold hover:bg-neutral-50 transition-all">
              View Work
            </Link>
          </div>
        </section>

        

      </div>
    </div>
  );
}