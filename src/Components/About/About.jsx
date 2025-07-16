function About() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center  text-black px-6 py-10">
        <div className="flex flex-col items-center gap-4">
          <div className="relative rounded-full overflow-hidden shadow-lg ring-4 ring-slate-700 hover:ring-indigo-500 transition duration-300 ease-in-out">
            <img
              src="../assets/images/download.png"
              alt="profile-img"
              className="w-28 h-28 object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center">
            Welcome to My Portfolio
          </h1>
          <p className="text-center max-w-xl text-gray-500 text-sm md:text-base mt-2">
            I'm a passionate full-stack developer diving deep into web technologies and backend magic. Check out what I'm building and dreaming up!
          </p>
          <a
            href="https://drive.google.com/file/d/1uTKRXx9foJZusWgpTg8s5yjmBqyZrubO/view?usp=sharing" // replace with your actual link
            download="Arvaz_Resume.pdf" // optional
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            📥 Download Resume
          </a>
        </div>
      </section>
    </>
  );
}

export default About;