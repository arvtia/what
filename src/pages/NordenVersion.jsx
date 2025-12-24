import NordenRating from "./NordenTheme/components/NordenRating"
import NordenCleanUI from "./NordenTheme/NordenAbout"
import NordenNavbar from "./NordenTheme/NordenNavbar"



const NordenVersion = () => {
   return (
      <>
         <div className="w-full h-full md:p-5 bg-zinc-300">
            <div className="shadow-2xl max-w-lg w-full mx-auto md:mt-20 min-h-screen p-3 md:rounded-xl  bg-white">
               <NordenNavbar />
               <NordenCleanUI />
               <NordenRating />
               
            </div>
         </div>
      </>
   )
}

export default NordenVersion



