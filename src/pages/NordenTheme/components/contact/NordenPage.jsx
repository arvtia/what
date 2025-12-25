import NordenSocialMedia, { LinkedinIcon, XIconSvg } from '../SocialMedia';
import './style.css'

const NordenLetsTalkPage = () => {
   return (
      <>
         <div className="p-3 w-full max-w-7xl rounded-md pt-16 bg-[#F9F9F9]">
            <div className="p-2 md:p-2 flex flex-col">
               <p className="text-5xl">Lets Talk</p>
               <p>Lets Collaborate ! Reach out to discuss <br />
                  your next project today
               </p>

               <a href="mailto:arvazanakuzhy@gmail.com?subject=Project Inquiry&body=Hi Arvaz, I would like to talk about..." className="group mt-10 px-4 py-2 bg-black w-fit text-white text-lg rounded-md flex items-center gap-4 transition-all active:scale-95">
                  Let's have talk! 
                  <span className="animate-handshake text-xl">🖐️</span>
               </a>
            </div>
         </div>

         <NordenSocialMedia />
      
      </>
   )
}

export default NordenLetsTalkPage;
