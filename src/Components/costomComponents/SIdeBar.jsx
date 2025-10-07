import { NavLink } from 'react-router-dom';

const Sidebar = ({ items, headerName, logo }) => {
  return (
    <aside className="h-screen w-64 bg-white text-black p-2">
      <div className="flex items-center gap-2 mb-6">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <h1 className="text-lg font-semibold">{headerName}</h1>
      </div>
      <nav className="space-y-2">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.Path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded transition ${
                isActive ? 'bg-neutral-200' : 'hover:bg-neutral-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;