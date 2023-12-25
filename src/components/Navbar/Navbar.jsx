import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavLinks = [
  {
    id: "1",
    name: "Home",
    link: "/#",
  },
  {
    id: "2",
    name: "Cars",
    link: "/#cars",
  },
  {
    id: "3",
    name: "About",
    link: "/#about",
  },
  {
    id: "4",
    name: "Booking",
    link: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="shadow-md py-4 bg-white dark:bg-dark dark:text-white duration-200">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold font-sans">CAR RENTAL</h1>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-5">
              {NavLinks.map((data) => (
                <li key={data.id}>
                  <a
                    className="inline-block py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-200 text-lg font-normal"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* dark mode icon */}
          <div className="flex items-center gap-4">
            <div className="cursor-pointer">
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </div>

            {/* mobile menu  */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all md:hidden"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all md:hidden"
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
