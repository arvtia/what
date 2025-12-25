import { Outlet } from "react-router-dom"
import ImageAbout from "./NordenTheme/components/ImageAbout"
import NordenRating from "./NordenTheme/components/NordenRating"
import NordenServices from "./NordenTheme/components/NordenServices"
import NordenProjectMarquee from "./NordenTheme/components/ProjectMarquee"
import NordenCleanUI from "./NordenTheme/NordenAbout"
import NordenFooter from "./NordenTheme/NordenFooter"
import NordenNavbar from "./NordenTheme/NordenNavbar"
import NordenSocialMedia from "./NordenTheme/components/SocialMedia"
import NordenProjectView from "./NordenTheme/components/Projects/NordenProjectView"
import NordenProjectPhoto from "./NordenTheme/components/Projects/ProjectPhoto"
import NordenProjectDetails from "./NordenTheme/components/Projects/NorderOneProjectPage"




const NordenVersion = () => {
   return (
      <>
         <div className="w-full h-full md:p-5 bg-zinc-300">
            <div className="shadow-2xl max-w-lg w-full mx-auto md:mt-20 min-h-screen p-3 md:rounded-xl  bg-white">
               <NordenNavbar />
                  <main>
                     <Outlet />
                  </main>
               <NordenFooter />
            </div>
         </div>
      </>
   )
}

export default NordenVersion


export const NordenHomePage =() =>{
   return(
      <>
         <NordenCleanUI />
         <NordenRating />
         <NordenProjectMarquee />
         <NordenServices />
         <NordenSocialMedia />
      </>
   )
}

export const NordenAboutMePage =() =>{
   return(
      <>
         <NordenCleanUI />
         <ImageAbout />
         <NordenSocialMedia />
      </>
   )
}


export const NordenWorkPage =() =>{
   return(
      <>
         <NordenProjectView />
         <NordenProjectPhoto />
      </>
   )
}


export const NordenProjectPage = () =>{
   return(
      <>
         <NordenProjectDetails />
      </>
   )
}