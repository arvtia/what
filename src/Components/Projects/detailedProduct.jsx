const portfolioProjects = [
  {
    name: "News Website",
    url: "http://restinuse.ct.ws/",
    image: "news.png", // Add preview image here
    icons: ["bi bi-filetype-php", "bi bi-filetype-js", "bi bi-filetype-css", "bi bi-gear"],
    description: "Fully responsive news platform built with PHP, JavaScript, Bulma CSS, and plain CSS. Integrated asynchronous news data from newsapi.org with smart loading via throttle & debounce. Users can search, translate to multiple languages, and fetch articles from previous days with smooth scroll-triggered updates."
  },
  {
    name: "Himalaya Yoga Website",
    url: "https://mordernrestaurent.great-site.net/index.php",
    image: "himalaya.png", // Add preview image here
    icons: ["bi bi-filetype-php", "bi bi-filetype-css", "bi bi-filetype-js",],
    description: "A performant remake of a slow WordPress-based site. Built with PHP and Bootstrap 5.3, delivering fast loading and dynamic pages. Functions like a CMS, allowing flexible content updates with interactive styling through custom CSS and JavaScript."
  },
  {
    name: "Modern Restaurant",
    url: "https://php-a01b0.wasmer.app/index.php",
    image: "mordernrest.png", // Add preview image here
    icons: [" bi bi-filetype-php", "bi bi-filetype-js", "bi bi-filetype-css", "bi bi-filetype-pdf"],
    description: "Interactive restaurant site with dynamic header/footer using PHP. JavaScript handles cart logic, form submission, admin panel (session/local storage), and even emulates payment receipts through HTML-to-PDF conversion. Styled using Bootstrap 5.3 for full responsiveness and clarity."
  },
  {
    name: "E-commerce (React)",
    url: "https://gen-blue.vercel.app/",
    image: "ecomm.png", // Add preview image here
    icons: ["bi bi-filetype-jsx", "bi bi-digram-2", "bi bi-filetype-js", "bi bi-mongodb",],
    description: "Customizable e-commerce platform using React. Dynamic admin panel allows slider, product, and navbar updates. Features include product API hosted on Render, localStorage for cart persistence, Redux Toolkit for state, React Router for navigation, and Framer Motion for smooth animations."
  }
];


const DetailedProductField =() =>{
   return(
      <>
         <div className="mt-32 py-5 max-w-7xl sm:px-4  mx-auto ">
            <div className=" md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 rounded-md gap-4">
               {
                  portfolioProjects.map((item, i)=>(
                     <div className="col-auto rounded-md shadow-orange-200 drop-shadow-md p-2 shadow-md  backdrop-blur-md" key={i}>
                        <div className="p-1 backdrop-blur-lg hover:ring-1 rounded-md mb-3">
                           <img
                           src={`../assets/pages/${item.image}`}
                           alt={item.name}
                           className="w-full aspect-square object-cover rounded-xl border border-gray-300  transition duration-300 ease-in-out hover:shadow-sm"
                        />
                        </div>
                        <a href={item.url}><p className="text-indigo-600 text-wrap font-mono text-lg transition-all duration-300 hover:font-medium hover:text-gray-700 mb-3 hover:py-2">{item.name} <i className="bi bi-box-arrow-up-right"></i></p></a>
                        <p>{item.description}</p>
                        <div className="py-2 flex flex-wrap">
                           {
                              item.icons.map((iconClass, index) => (
                              <span key={index} className="size-10 flex items-center justify-center">
                                 <i className={iconClass}></i>
                              </span>
                              ))
                           }
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </>
   )
}

export default DetailedProductField;