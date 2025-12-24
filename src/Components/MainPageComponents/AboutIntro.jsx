
const AboutIntro = () => {
   return (
      <>
         <div className="max-w-3xl mx-auto bg-orange-50">
            <div className="py-2 w-full flex-wrap space-y-2 flex md:px-5 px-4 items-center justify-between">
               <div className="p-2 flex  items-end w-full md:w-fit">
                  <img src="https://i.pinimg.com/280x280_RS/29/3b/56/293b5628d303a68e6b2a6815a900a7e4.jpg" alt="profile iamge" 
                     className="shadow-sm  sm:w-10 h-14 md:w-20 md:h-20 aspect-square object-cover rounded-lg md:rounded-xl bg-white p-1 md:p-2"
                  />
                  <div className="pl-3 py-1">
                     <h1 className="md:text-3xl">Arvaz Mansuri</h1>
                     <p className="md:text-neutral-600 text-xs font-thin">Full Stack Developer</p>
                  </div>
               </div>

               <div className="px-2 flex gap-3 items-center">
                  <a href="https://arvazanakuzhy@gmail.com"><i className="bi bi-envelope px-2 py-1 text-orange-500 rounded-md hover:bg-orange-100"></i></a>
                  <a href="https://github.com/arvtia">
                     <i className="bi bi-github px-2 py-1 text-orange-500 rounded-md hover:bg-orange-100"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/arvaz-mansuri-7a9835272/">
                     <i className="bi bi-linkedin px-2 py-1 text-orange-400 rounded-md hover:bg-orange-100"></i>
                  </a>
               </div>
            </div>
         </div>
      </>
   )
}

export default AboutIntro
