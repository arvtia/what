import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ items, headerName, logo }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      className={`h-screen sticky top-0 flex flex-col border-r border-neutral-100 bg-white transition-all duration-500 ease-in-out ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      {/* 1. Header Section */}
      <div className="p-4 flex items-center justify-between min-h-[70px]">
        {isExpanded && (
          <div className="flex items-center gap-3 animate-in fade-in duration-500">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
              <img src={logo} alt="logo" className="w-5 h-5 invert" />
            </div>
            <span className="font-bold tracking-tight text-neutral-800">
              {headerName}
            </span>
          </div>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-neutral-100 rounded-xl transition-colors text-neutral-500 mx-auto"
        >
          <i
            className={`bi ${isExpanded ? "bi-layout-sidebar-inset" : "bi-layout-sidebar"} text-xl`}
          ></i>
        </button>
      </div>

      {/* 2. Middle Navigation Section (The "Centered" Part) */}
      <div className="flex-1 flex flex-col justify-center px-2 overflow-y-auto overflow-x-hidden">
        <nav className="space-y-2">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.Path}
              className={({ isActive }) =>
                `group flex items-center gap-3 p-1 rounded-xl transition-all duration-300 relative ${
                  isActive
                    ? "bg-neutral-200 text-black"
                    : "text-neutral-900 hover:bg-neutral-50"
                }`
              }
            >
              <div className="flex items-center justify-center w-9 h-9 shrink-0">
                <i className={`${item.Icon} text-lg`}></i>
              </div>

              {isExpanded && (
                <span className="text-sm font-medium whitespace-nowrap animate-in slide-in-from-left-2 duration-300">
                  {item.label}
                </span>
              )}

              {/* Tooltip for collapsed state */}
              {!isExpanded && (
                <div className="absolute left-14 opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-2 group-hover:translate-x-0 bg-neutral-900 text-white text-xs px-2 py-1.5 rounded-md whitespace-nowrap z-50">
                  {item.label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* 3. Optional Bottom Profile/Footer */}
      <div className="p-4 border-t border-neutral-50">
        <div
          className={`flex items-center ${isExpanded ? "gap-3" : "justify-center"}`}
        >
          <div className="w-8 h-8 rounded-full bg-neutral-200 shrink-0" />
          {isExpanded && (
            <div className="flex flex-col overflow-hidden text-xs">
              <span className="font-bold text-neutral-800 truncate">
                Developer Mode
              </span>
              <span className="text-neutral-400 truncate">v1.0.4</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
