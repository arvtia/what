import { useState } from "react";
import {
  ArchiveIcon,
  DeleteICon,
  DownArrowSvg,
  EditICon,
  HorizontalDots,
  ShareIcon1,
} from "./svgs/Svg";

const History = [
  { text: "Newton Hilarious Culprits", time: "2 hr ago" },
  { text: "AI helps me write a novel outline", time: "5 hr ago" },
  { text: "Frontend project setup with React & Tailwind", time: "Yesterday" },
  { text: "Fixing API route errors in Node.js", time: "2 days ago" },
  { text: "Understanding closures in JavaScript", time: "3 days ago" },
  { text: "How to host MongoDB on Render?", time: "1 week ago" },
  { text: "Brainstorming fantasy story ideas", time: "2 weeks ago" },
  { text: "Learning CSS Grid the easy way", time: "3 weeks ago" },
];

const DataMenu = [
  { listname: "Share", icon: <ShareIcon1 height={10} width={10} /> },
  { listname: "Edit", icon: <EditICon height={10} width={10} /> },
  { listname: "Archive", icon: <ArchiveIcon height={10} width={10} /> },
  { listname: "Delete", icon: <DeleteICon height={10} width={10} /> },
];

const SideBar = () => {
  const [isActive, setIsActive] = useState(false);
  // const [activeMenuIndex, setActiveMenuIndex] = useState(null); // 👈 Track index
  const [isActiveChat, setIsActiveChat] = useState(true);

  // const handleMenuToggle = (idx) => {
  //    setActiveMenuIndex(activeMenuIndex === idx ? null : idx);
  // };

  return (
    <aside
      className={`${
        isActive ? `w-52 bg-neutral-100` : `w-8 bg-transparent`
      } h-screen border-r border-neutral-300 transition-all duration-300`}
    >
      <div className="px-2 pt-1 flex justify-between">
        <span></span>
        <i
          className="bi bi-layout-sidebar-inset text-sm cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        ></i>
      </div>

      <div className="mt-3 w-full flex justify-between items-center p-2">
        {isActive && (
          <>
            <p className="text-md">Chats</p>
            <div
              className="px-2 py-1 rounded-md hover:bg-neutral-200"
              onClick={() => setIsActiveChat(!isActiveChat)}
            >
              <DownArrowSvg height={16} width={16} />
            </div>
          </>
        )}
      </div>
      {isActiveChat && (
        <>
          <div className="p-1 md:p-2 mt-2 w-50">
            <ul>
              <li className="space-y-2">
                {isActive &&
                  History.slice()
                    .reverse()
                    .map((item, idx) => (
                      <div className="w-full group" key={idx}>
                        <div className="group-hover:bg-neutral-300 rounded-md px-2 py-1 flex gap-3 items-center justify-between relative">
                          <p className="text-sm truncate w-[80%]">
                            {item.text}
                          </p>

                          <div className="relative opacity-0 group-hover:opacity-100 p-2 cursor-pointer ">
                            <HorizontalDots height={15} width={15} />

                            {/* Dropdown appears on hover */}
                            <div
                              className="w-28 absolute left-1/2 top-5 p-1 rounded-lg bg-neutral-300 shadow-md z-10 opacity-0 scale-95 pointer-events-none 
                                                group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-out"
                            >
                              <ul className="space-y-1 w-full">
                                {DataMenu.map((menu, mIdx) => (
                                  <li
                                    key={mIdx}
                                    className="py-1 rounded-md px-2 hover:bg-neutral-200 flex gap-3 items-center cursor-pointer"
                                  >
                                    {menu.icon}
                                    <p className="text-sm">{menu.listname}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
              </li>
            </ul>
          </div>
        </>
      )}
    </aside>
  );
};

export default SideBar;
