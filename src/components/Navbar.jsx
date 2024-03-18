import MobileNavBar from "./MobileNavBar";
import NavLink from "./NavLink";
import { flightPrograms, resources, about } from "../consts.ts";
import { useEffect, useState } from "react";

const Navbar = ({ pathname }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState("");
  const [navBar, setNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMobile(() => !openMobile);
  };

  const handleMenuItemClick = (e) => {
    if (openSubmenu === e.target.id) {
      setOpenSubmenu("");
    } else {
      setOpenSubmenu(e.target.id);
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className="w-full h-0">
      <div
        className={`${navBar || openMobile ? "bg-black" : "bg-transparent"} duration-300`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div
            className={`${navBar ? "lg:h-[4.5rem]" : "lg:h-28"} relative flex h-20 items-center justify-between transition-all`}
            id="navbar"
          >
            <div className="flex flex-1 items-center justify-between">
              <a href="/" className="flex flex-shrink-0 items-center">
                <img
                  src="/red-arrow-logo.webp"
                  alt="Red Arrow Logo"
                  className={`${navBar ? "lg:h-14" : "lg:h-20"} h-14 w-auto transition-all`}
                  id="navbar-image"
                />
              </a>
              <div className="hidden lg:ml-6 lg:block">
                <div className="flex gap-5 xl:gap-10 items-center">
                  <NavLink
                    pathname={pathname}
                    menuItem={flightPrograms}
                    toggled={flightPrograms.name === openSubmenu}
                    onShow={handleMenuItemClick}
                  />
                  <NavLink
                    pathname={pathname}
                    menuItem={resources}
                    toggled={resources.name === openSubmenu}
                    onShow={handleMenuItemClick}
                  />
                  <NavLink
                    pathname={pathname}
                    menuItem={about}
                    toggled={about.name === openSubmenu}
                    onShow={handleMenuItemClick}
                  />
                  <div>
                    <a
                      href="/discovery-flight"
                      className={`cursor-pointer text-xl text-white py-5 hover:border-b-2 border-main-red whitespace-nowrap ${
                        pathname === "/discovery-flight" ? "border-b-2" : ""
                      }`}
                    >
                      Discovery Flight
                    </a>
                  </div>
                  <a
                    href="/discovery-flight-form"
                    target="_blank"
                    className="btn-red"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                type="button"
                className="mobile-menu-button relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleHamburgerClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="x-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${openMobile ? "max-h-[36rem]" : "max-h-0"} overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden absolute w-full bg-black -z-10`}
        id="mobile-menu"
      >
        <div className="px-4 pb-3 pt-2 flex flex-col">
          <MobileNavBar pathname={pathname} />
          <a
            href="/discovery-flight"
            className={`cursor-pointer text-xl text-white py-5 hover:border-b-2 border-main-red whitespace-nowrap ${
              pathname === "/discovery-flight" ? "border-b-2" : ""
            }`}
          >
            Discovery Flight
          </a>
          <a
            href="/discovery-flight-form"
            target="_blank"
            className="btn-red place-self-center mt-5"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
