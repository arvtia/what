import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ items, headerName, logo }) => {
  const [isActive, setIsActive] = useState(true); // start expanded

  return (
    <aside
      className={`h-screen ${
        isActive ? 'w-64' : 'w-20'
      } bg-white text-black p-2 transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          
          {isActive && <h1 className="text-lg font-semibold">{headerName}</h1>}
        </div>
        <i
          className="bi bi-layout-sidebar-inset px-2 py-1 bg-neutral-50 cursor-pointer rounded"
          onClick={() => setIsActive(!isActive)}
        ></i>
      </div>

      {/* Nav */}
      <nav className="space-y-2">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.Path}
            className={({ isActive: active }) =>
              `flex items-center gap-2 px-3 py-2 rounded transition ${
                active
                  ? 'bg-neutral-200'
                  : 'hover:bg-neutral-100 hover:shadow-inner'
              }`
            }
          >
            <i
              className={`${item.Icon} text-lg px-2 py-1 hover:bg-neutral-100 rounded-md `}
            ></i>
            {isActive && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;