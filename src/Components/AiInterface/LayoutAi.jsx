import Nav from "./Nav";
import SideBar from "./SideBar";

const LayoutDashboard = () =>{
   return (
      <>
         <div className="w-full bg-neutral-200 min-h-screen p-1 md:p-1">
            
            {/* <Nav /> */}
            <SideBar />
            
         </div>
      </>
   )
}

export default LayoutDashboard;
