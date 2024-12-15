import { NavLink } from "react-router";
import { NAV_ITEMS } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="bg-primary sticky top-0 px-16 py-4">
      <nav className="flex items-center">
        <p className="text-xl font-bold uppercase">Lipa Estate</p>
        <ul className="ml-auto mr-8 flex gap-6">
          {NAV_ITEMS.map((nav) => (
            <li key={nav.label}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive ? "font-medium text-black" : "text-neutral-600"
                }
                end
              >
                {nav.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="btn-primary">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
