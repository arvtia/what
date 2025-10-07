
import Sidebar from "./costomComponents/SIdeBar"
import { Outlet } from "react-router-dom";

const menuItems = [
  { label: 'Kanban Board', value: 'dashboard', Path: '/component/accordian' },
  { label: 'Profile', value: 'profile', Path: '/component/installation' },
  { label: 'Settings', value: 'settings', Path: '/component/settings' },
];

{/* <Sidebar  items={menuItems} headerName="Heading" logo="https://symbols.thecommonvein.net/wp-content/uploads/2021/09/web-symbols-020.png"/> */}

const ComponentsPage = () => {
   return (
      <>
         <div className="w-full bg-white flex gap-1">
            <Sidebar  items={menuItems} headerName="Heading" logo="https://symbols.thecommonvein.net/wp-content/uploads/2021/09/web-symbols-020.png"/>
            <main className="lg:flex-1 ">
               
               <Outlet />
            </main>
         </div>
      
      </>
   )
}

export default ComponentsPage
