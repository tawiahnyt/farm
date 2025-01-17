/** @format */

import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative py-4 md:py-6 sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="/"
              title=""
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <img
                className="w-auto h-8"
                src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
                alt=""
              />
            </a>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <IoIosClose className="text-2xl text-black" />
            ) : (
              <HiOutlineMenuAlt2 className="text-2xl" />
            )}
          </button>

          <div className="hidden cursor-pointer lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.url}
                class="text-base text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-2 focus:ring-gray-900 focus:ring-offset-8 font-bold uppercase"
              >
                {" "}
                {link.title}{" "}
              </Link>
            ))}
          </div>
        </div>

        {/* <!-- xs to lg --> */}
        <nav
          className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  {link.title}{" "}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
