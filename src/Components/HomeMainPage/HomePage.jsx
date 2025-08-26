import { AboutME } from "./AboutME";
import { Experience } from "./Expirence";
import { ProjectsMe } from "./ProjectsMe";


const aboutMeData = {
  image: "/assets/images/download.png",
  Name: "Arvaz Mansuri",
  description:
    "Web developer, creative thinker, and digital artist. Passionate about building clean, responsive designs with Tailwind CSS.",
  links: [
    {
      icon: "bi bi-instagram", // Font Awesome class
      url: "https://www.instagram.com/cbrobo.info/",
    },
    {
      icon: "bi bi-github",
      url: "https://github.com/arvtia",
    },
    {
      icon: "bi bi-linkedin",
      url: "https://www.linkedin.com/in/arvaz-mansuri-7a9835272/",
    },
    {
      icon: "bi bi-twitter-x",
      url: "https://x.com/ArvazMansuri",
    }
  ],
};

const projects = [
  {
    image: "./assets/pages/drpoitall.jpg", // DropItAll image path here
    title: "DropItAll – Secure Cloud Storage",
    description:
      "A cloud storage web application integrated with a data warehouse provider, enabling users to upload, share, and download files on any device with web-browsing capabilities. Features include user profiles, folder creation, and account reports.",
    tags: [
      { techstack: "React" },
      { techstack: "Tailwind CSS" },
      { techstack: "Node.js" },
      { techstack: "Express" },
      { techstack: "MongoDB" },
      { techstack: "PWA" },
    ],
    dateFrom: "2024",
    dateTo: "Present",
    LiveLinks: "https://dropitall.in",
    iconLiveLink: "bi bi-box-arrow-up-right",
  },
  {
    image: "./assets/pages/himalaya.PNG", // Himalaya Yoga image path here
    title: "Himalaya Yoga Website",
    description:
      "A performant remake of a slow WordPress-based site. Built with PHP and Bootstrap 5.3, delivering fast-loading, dynamic pages. Functions like a CMS, allowing flexible content updates with interactive styling through custom CSS and JavaScript.",
    tags: [
      { techstack: "PHP" },
      { techstack: "Bootstrap 5.3" },
      { techstack: "JavaScript" },
      { techstack: "Custom CSS" },
    ],
    dateFrom: "2023",
    dateTo: "2023",
    LiveLinks: "https://mordernrestaurent.great-site.net/index.php?i=1",
    iconLiveLink: "bi bi-box-arrow-up-right",
  },
  {
    image: "./assets/pages/mordernrest.PNG", // Modern Restaurant image path here
    title: "Modern Restaurant",
    description:
      "Interactive restaurant site with dynamic header/footer using PHP. JavaScript handles cart logic, form submission, admin panel (session/local storage), and emulates payment receipts via HTML-to-PDF conversion. Styled with Bootstrap 5.3 for full responsiveness.",
    tags: [
      { techstack: "PHP" },
      { techstack: "Bootstrap 5.3" },
      { techstack: "JavaScript" },
      { techstack: "HTML-to-PDF" },
    ],
    dateFrom: "2023",
    dateTo: "2023",
    LiveLinks: "https://php-a01b0.wasmer.app/index.php",
    iconLiveLink: "bi bi-box-arrow-up-right",
  },
  {
    image: "./assets/pages/ecomm.PNG", // E-commerce React image path here
    title: "E-commerce (React)",
    description:
      "Customizable e-commerce platform using React. Dynamic admin panel allows slider, product, and navbar updates. Features include product API hosted on Render, localStorage for cart persistence, Redux Toolkit for state, React Router for navigation, and Framer Motion for animations.",
    tags: [
      { techstack: "React" },
      { techstack: "Redux Toolkit" },
      { techstack: "React Router" },
      { techstack: "Framer Motion" },
      { techstack: "Bootstrap 5.3" },
    ],
    dateFrom: "2024",
    dateTo: "2024",
    LiveLinks: "https://gen-blue.vercel.app/",
    iconLiveLink: "bi bi-box-arrow-up-right",
  },
];

const experienceData = [
  {
    position: "Full Stack Developer (Internship)",
    companyName: "IZS Technocrates Pvt Ltd",
    duration: "Jan 2024 – Jun 2024", // 6 months
    description:
      "Worked on both frontend and backend development, contributing to web application features, bug fixes, and performance improvements.",
  },
  {
    position: "Freelance Web / Full Stack Developer",
    companyName: "Self-Employed",
    duration: "Jul 2024 – Present",
    description:
      "Building responsive, user-friendly websites and applications for clients. Handling end-to-end development from design to deployment.",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="bg-white text-gray-900 w-full">
        <div className="max-w-6xl mx-auto mt-8 border border-gray-200 p-6 ">
          {/* intro */}
          <AboutME 
            image={aboutMeData.image}
            Name={aboutMeData.Name}
            description={aboutMeData.description}
            links={aboutMeData.links}
          />
          <ProjectsMe Projects={projects} />
          <Experience experienceData = {experienceData} />
        </div>
      </div>
    </>
  );
};

export default HomePage;