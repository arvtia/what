import ChatSection from "./ChatSection";
import Nav from "./Nav";
import SideBar from "./SideBar";

const LayoutDashboard = () =>{
   return (
      <>
         <div className="w-full bg-neutral-200 min-h-screen  flex">
            
            {/* <Nav /> */}
            <SideBar />
            <ChatSection />
         </div>
      </>
   )
}

export default LayoutDashboard;
