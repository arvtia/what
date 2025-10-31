
import Sidebar from "./costomComponents/SIdeBar"
import { Outlet } from "react-router-dom";

const menuItems = [
  { label: 'Kanban Board', value: 'dashboard', Path: '/component/kanban', Icon:'bi bi-kanban' },
  { label: 'Profile', value: 'profile', Path: '/component/installation', Icon:'bi bi-menu-app' },
  { label: 'Settings', value: 'settings', Path: '/component/settings', Icon:'bi bi-gear' },
];

const ComponentsPage = () => {
   return (
      <>
         <div className="w-full bg-white flex gap-1">
            <Sidebar  items={menuItems} headerName="Heading" logo="https://symbols.thecommonvein.net/wp-content/uploads/2021/09/web-symbols-020.png" />
            <main className="lg:flex-1 ">
               <Outlet />
            </main>
         </div>
      
      </>
   )
}

export default ComponentsPage
