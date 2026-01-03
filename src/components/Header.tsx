import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/icons/footerlogo.png";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "HOST", path: "/host" },
    { name: "ARTIST", path: "/artist" },
    { name: "USER", path: "/user" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/20">
      <div className="container mx-auto px-5 py-5 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img
            src={logo}
            alt="SceneZone Logo"
            className="h-10 w-auto"
            loading="lazy"
          />
        </Link>

        <nav className="md:flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive ? "" : "text-white hover:text-[#B20D5D]"
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? "#B20D5D" : undefined,
                })}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className="md:hidden fixed top-0 left-10 w-screen h-screen bg-black/90 shadow-lg transition-all duration-300 ease-in-out transform origin-top"
              style={{
                transform: isOpen ? "translateY(0)" : "translateY(-100%)",
              }}
            >
              <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-6 bg-black">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white focus:outline-none self-start mb-4"
                  aria-label="Close menu"
                >
                  <IoMdClose size={30} />
                </button>

                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex justify-center items-center py-2 text-xl transition-colors w-full  rounded-md ${
                        isActive
                          ? "text-purple-400"
                          : "text-white hover:text-purple-400"
                      }`
                    }
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}

                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 w-full mt-6 rounded-md">
                  <a href="https://admin.scenezone.in/">Admin Login</a>
                </Button>
              </div>
            </div>
          )}
        </nav>

        {/* Login button for desktop */}
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 hidden md:block">
          <a href="https://admin.scenezone.in/" className="">
            Admin Login
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
