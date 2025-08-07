const MoreAbout = () => {



  return (
    <>
      <div className="max-w-7xl mx-auto  px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 ">
          {/* Text Section: col-span-3 */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="p-2 mb-3 backdrop-blur-md mt-20  shadow-lg rounded-md py-7">
              <h3 className="font-bold mb-3 text-6xl">Front-End Developer</h3>
              <p className="text-gray-600 mb-6  text-[20px] leading-7">
                I'm a frontend developer who blends precision with creativity. With a strong foundation in React and Tailwind CSS, I craft responsive, modern interfaces that feel intuitive and expressive. Beyond the pixels and components, I value clear communication, clean architecture, and purposeful design. Whether I'm building dynamic APIs or designing seamless user flows, I approach each challenge with curiosity and care — because good code should feel like good conversation.
              </p>
              <div className="flex">
                {/* Action section or additional content */}
                <a href="https://www.linkedin.com/in/arvaz-mansuri-7a9835272/" className="px-3 ml-2">
                  <p className="font-mono text-white bg-indigo-700 hover:bg-indigo-600 shadow-sm p-2 rounded-sm shadow-gray-500 hover:shadow-md">Linkedin <i className="bi bi-linkedin"></i></p>
                </a>
                <a href="mailto:your.email@example.com">
                  <p className="font-mono text-black bg-white shadow-sm p-2 rounded-sm shadow-gray-500 hover:shadow-md">Email <i className="bi bi-envelope-fill text-orange-800"></i></p>
                </a>
              </div>
            </div>
          </div>

          {/* Image + Info Section: col-span-1 */}
          <div className=" md:col-span-2 lg-col-span-2">
            <div className="p-2 mb-3 backdrop-blur-md mt-20 md:max-w-[300px] justify-center">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-3xl font-semibold">Arvaz Mansuri</h3>
                  <p className="text-sm">Front-end developer</p>
                </div>
                <div className="pr-3 pt-2">
                  <span>
                    <i className="bi bi-braces text-2xl shadow-md rounded-md p-2 backdrop-blur-sm ring-2"></i>
                  </span>
                </div>
              </div>
              <div className="p-2 backdrop-blur-md rounded-md ring-2 ring-white shadow-lg ">
                <img
                  src="../assets/images/download.png"
                  alt="Arvaz"
                  className="w-full object-cover rounded-md bg-gray-300 aspect-square"
                />
              </div>
              <div className="flex gap-2 mt-3">
                <span><i className=""></i></span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreAbout;