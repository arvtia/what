import ChatSection from "./ChatSection";
import SideBar from "./SideBar";

const LayoutDashboard = () =>{
   return (
      <>
         <div className="w-full bg-neutral-200 min-h-screen  flex">
            
           
            <SideBar />
            <ChatSection />
         </div>
      </>
   )
}

export default LayoutDashboard;
