import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("Is Menu Open?", isMenuOpen);

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/" className="block  font-semibold text-2xl">
              SEWIX
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li>
                  <input
                    type="text"
                    placeholder="  Search"
                    className="border-2 rounded-lg text-black text-lg transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  />
                  {/* <Link
                    to=""
                    className="text-black text-lg transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    About
                  </Link> */}
                </li>
                <li>
                  <Link
                    to=""
                    className="text-black text-lg transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="text-black text-lg transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="text-black text-lg transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  to="https://api.whatsapp.com/send?phone=919354237363"
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-teal-500"
                >
                  WhatsApp
                </Link>
              </div>
              {/* Hamburger (toggle) */}
              {/* <div className="block md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                >
                  <Menu className="w-[90%]" />
                </button>
              </div> */}
              {/* hamburger UI */}
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-7 border-t border-gray-300 my-4" />
    </header>
  );
};

export default Header;
