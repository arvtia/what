
const techStack = [
  {
    name: "React",
    image: "react.png",
    description: "Built dynamic e-commerce sites with Redux, Axios, and animations using Framer Motion & GSAP."
  },
  {
    name: "Tailwind CSS",
    image: "Tailwind CSS.png",
    description: "Utility-first styling for custom layouts across portfolio and product sites."
  },
  {
    name: "WordPress",
    image: "wordpress.png",
    description: "Created a feature-rich news site, leveraging custom post types and styling."
  },
  {
    name: "PHP",
    image: "php.png",
    description: "Used for dynamic headers, footers, and search functionalities on multiple projects."
  },
  {
    name: "Redux Toolkit",
    image: "Redux.png",
    description: "Managed complex state logic in your e-commerce React app with ease."
  },
  {
    name: "Express.js",
    image: "Express.png",
    description: "Crafted REST APIs for secure backend communication and data handling."
  },
  {
    name: "Mongoose",
    image: "MongoDB.png",
    description: "Handled MongoDB integration with schema-based data modeling."
  },
  {
    name: "Bootstrap & Bulma",
    image: "Bootstrap.png",
    description: "Styled initial projects and legacy designs with responsive grid systems."
  },
  {
    name: "Framer Motion / GSAP",
    image: "gsap.png",
    description: "Enhanced user experience through buttery smooth animations."
  },
];

const TechStacks = () => {
  return (
    <div className="w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="group relative bg-white shadow-md p-4 rounded-lg flex flex-col items-center transition hover:shadow-xl hover:scale-[1.03] "
          >
            <img
              src={`/assets/icons/${tech.image}`} 
              alt={tech.name}
              className="w-16 h-16 object-contain"
            />
            <p className="mt-2 font-semibold text-center">{tech.name}</p>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-sm text-center">
              {tech.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;