
import { InvertedCorner } from './NordenNavbar';



const NordenFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 relative bg-neutral-900 text-white pt-4 pb-10 px-6 md:px-12  rounded-b-xl">
      
      {/* THE TOP "CARVED" TAB (Recruiter's Focus) */}
      <div className="absolute -top-10 left-0 bg-neutral-900 px-8 py-3 rounded-tr-3xl hidden md:flex items-center">
        <span className="text-sm font-bold tracking-widest uppercase text-neutral-400">
          Get in touch
        </span>
        <InvertedCorner className="absolute -top-6 -left-0 text-neutral-900 rotate-90" />
        <InvertedCorner className="absolute top-5 -right-6 text-neutral-900 rotate-90" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          
          {/* Main Call to Action */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-none">
              Let's build <br /> 
              <span className="text-neutral-500 italic">together.</span>
            </h2>
            <a 
              href="mailto:yourname@example.com" 
              className="inline-block text-xl md:text-2xl border-b-2 border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all"
            >
              arvazanakuzhy@gmail.com
            </a>
          </div>

          {/* Social Links & Info */}
          <div className="flex flex-col items-end gap-4 text-right">
            <div className="flex gap-6 text-lg font-medium">
              <a href="#" className="hover:text-neutral-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-neutral-400 transition-colors">GitHub</a>
              <a href="#" className="hover:text-neutral-400 transition-colors">X (Twitter)</a>
            </div>
            <p className="text-neutral-500 text-sm max-w-[200px]">
              Based in India. <br /> Available for worldwide freelance.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
          <p>© {currentYear} Arvaz Mansuri. All rights reserved.</p>
          <div className="flex gap-4">
            <p>Designed with ❤️</p>
            <p>Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NordenFooter;