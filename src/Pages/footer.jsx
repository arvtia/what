

const Footer =() =>{

   const socialLinks = [
      {name: "LinkedIn", href:"https://www.linkedin.com/in/arvaz-mansuri-7a9835272/", icon:"bi bi-linkedin"},
      {name: "Github", href:"https://github.com/arvtia", icon:"bi bi-github"},
   ]
   return(
      <>
         <div className="w-full md:px-20  ">
            <div className=" ring-1 ring-gray-500 shadow-md  md:py-10 md:rounded-lg">
               <div className="flex flex-row md:flex-col justify-center md:justify-between backdrop-blur-lg">
                  <div className="w-full md:w-1/2 ">
                     <div className="py-3 px-3">
                        <ul className="list-none md:flex ">
                           {socialLinks.map((item, index) => (
                              <li key={index} className="list-item">
                                 <a
                                 href={item.href}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="px-3 py-3 text-gray-700 hover:text-emerald-500 transition"
                                 >
                                 <span className={item.icon}></span> {item.name}
                                 </a>
                              </li>
                           ))}
                        </ul>

                     </div>
                  </div>
                  {/* another div  */}
                  <div className="w-full md:w-1/2">
                     <div className="py-3 px-3 flex"></div>
                  </div>
               </div>
               <p className="text-center text-gray-700 text-sm font-thin ">Arvaz mansuri -2025</p>
            </div>
         </div>
      </>
   )
}

export default Footer;