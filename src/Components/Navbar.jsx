import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">{/* hidden lg: causes this to be seen only on large screen sizes */}
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-orange-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Sign In & Create Account Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md hover:bg-neutral-200">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white hover:opacity-90"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex">{/*lg:hidden Causes this to show for small screen size */}
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0  bg-neutral-900 w-full p-12 z-20 flex flex-col justify-center items-center lg:hidden">
            <ul >
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="block text-white hover:text-orange-500 py-4">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
                <a
                  href="#"
                  className="py-2 px-3 border rounded-md hover:bg-neutral-200"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white hover:opacity-90"
                >
                  Create an account
                </a>
              <div className="flex justify-end mt-4"/>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
