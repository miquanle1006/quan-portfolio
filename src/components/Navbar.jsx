import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">ML</p>
      </NavLink>
      <nav className="flex text-lg gap-8 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 hover:text-blue-600"
              : "text-gray-800 hover:text-gray-900"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 hover:text-blue-600"
              : "text-gray-800 hover:text-gray-900"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 hover:text-blue-600"
              : "text-gray-800 hover:text-gray-900"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
