import { Outlet } from "react-router-dom";
import ImageAbout from "./NordenTheme/components/ImageAbout";
import NordenRating from "./NordenTheme/components/NordenRating";
import NordenServices from "./NordenTheme/components/NordenServices";
import NordenProjectMarquee from "./NordenTheme/components/ProjectMarquee";
import NordenCleanUI from "./NordenTheme/NordenAbout";
import NordenFooter from "./NordenTheme/NordenFooter";
import NordenNavbar from "./NordenTheme/NordenNavbar";
import NordenSocialMedia from "./NordenTheme/components/SocialMedia";
import NordenProjectView from "./NordenTheme/components/Projects/NordenProjectView";
import NordenProjectPhoto from "./NordenTheme/components/Projects/ProjectPhoto";
import NordenProjectDetails from "./NordenTheme/components/Projects/NorderOneProjectPage";
import NordenLetsTalkPage from "./NordenTheme/components/contact/NordenPage";

const NordenVersion = () => {
  return (
    <>
      <div className="w-full h-full md:p-5 bg-zinc-300">
        <div className="shadow-2xl max-w-lg w-full mx-auto md:mt-20 min-h-screen p-3 md:rounded-xl  bg-white">
          <NordenNavbar />
          <main>
            <Outlet />
            <CV />
          </main>
          <NordenFooter />
        </div>
      </div>
    </>
  );
};

export default NordenVersion;

export const CV = () => {
  return (
    <>
      <div className="sticky bottom-2 left-2 z-50 animate-bounce">
        <a
          href="./CV-ARVAZ-2026.pdf"
          download
          className="group relative inline-block px-4 py-2 bg-black text-white rounded-lg font-bold overflow-hidden"
        >
          <div className="relative h-6 overflow-hidden">
            <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-6">
              <div className="flex items-center justify-center gap-2 h-6">
                <span>CV</span>
              </div>
              <div className="flex items-center justify-center gap-2 h-6 text-yellow-400">
                <span>
                  <i className="bi bi-folder2-open"></i>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export const NordenHomePage = () => {
  return (
    <>
      <NordenCleanUI />
      <NordenRating />
      <NordenProjectMarquee />
      <NordenServices />
      <NordenSocialMedia />
    </>
  );
};

export const NordenAboutMePage = () => {
  return (
    <>
      <NordenCleanUI />
      <ImageAbout />
      <NordenSocialMedia />
    </>
  );
};

export const NordenWorkPage = () => {
  return (
    <>
      <NordenProjectView />
      <NordenProjectPhoto />
    </>
  );
};

export const NordenProjectPage = () => {
  return (
    <>
      <NordenProjectDetails />
    </>
  );
};

export const NorderLetsTalkPage = () => {
  return <NordenLetsTalkPage />;
};
