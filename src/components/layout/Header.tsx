import { Search } from "lucide-react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <header className="p-4 flex justify-between border-2 ">
      <Link to="/">
        <h1>SEWIX</h1>
      </Link>
      <nav >
        <button aria-label="Search" className="px-2">
          <Search />
        </button>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-600" 
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-600"
          }
        >
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
