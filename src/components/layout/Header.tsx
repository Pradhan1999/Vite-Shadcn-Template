import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Your Logo</div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "text-fuchsia-500" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "text-fuchsia-500" : "text-white"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "text-fuchsia-500" : "text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
