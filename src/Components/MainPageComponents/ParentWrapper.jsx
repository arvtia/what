import AboutIntro from "./AboutIntro";
import Parah from "./Parah";
import Projects from "./Projects";


const ParentWrapper =() =>{
   return(
      <>
        <div className="mt-20 bg-orange-50 max-w-3xl mx-auto rounded-t-3xl p-5 relative rounded-b-3xl shadow-sm">
            <AboutIntro /> 
            <Parah />
            <Projects />
        </div>
      </>
   )
}

export default ParentWrapper;