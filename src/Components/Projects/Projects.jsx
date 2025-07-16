function Projects() {
  const projects = [
    {
      name: "Secure File Vault",
      image: "https://cdn.dribbble.com/userupload/13606668/file/original-828e65a135620231018173b2b69c38ae.png?resize=1504x1128&vertical=center",
      description: "Biometric-authenticated file storage system.",
      link: "/projects/file-vault",
    },
    {
      name: "Modern Navbar UI",
      image: "https://cdn.dribbble.com/userupload/14328842/file/original-92af7716f6e729836ae960d290a814a4.jpg?resize=1504x1128&vertical=center",
      description: "Responsive navbar with blur and dropdowns.",
      link: "/projects/navbar-ui",
    },
    {
      name: "Auth System",
      image: "https://cdn.dribbble.com/userupload/12149190/file/original-8b498a708771334ddfe235a6058fd2cc.png?resize=1504x1128&vertical=center",
      description: "Role-based login system with Node.js and Express.",
      link: "/projects/auth-system",
    },
    {
      name: "Secure File Vault",
      image: "https://cdn.dribbble.com/userupload/13606668/file/original-828e65a135620231018173b2b69c38ae.png?resize=1504x1128&vertical=center",
      description: "Biometric-authenticated file storage system.",
      link: "/projects/file-vault",
    },
  ];

  return (
    <section className="min-h-screen text-black px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="relative group rounded-md ring-1 hover:ring-4 ring-gray-400 hover:ring-white/30 shadow-md transition-transform transform hover:scale-105 overflow-hidden md:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-60 object-cover "
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 py-3 text-white">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-xs text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;