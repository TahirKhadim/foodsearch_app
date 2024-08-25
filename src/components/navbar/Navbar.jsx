import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Globalvar } from '../../context/Index';

const NavBar = () => {
  const { searchparam, setsearchparam, handlesearch } = useContext(Globalvar);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 py-5 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center z-10">
          <button className="text-white focus:outline-none lg:hidden" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
          <a href="/" className="text-white text-lg font-semibold ml-4">
            Logo
          </a>
        </div>
        <div className="hidden lg:flex items-center py-3 lg:mt-0 z-10">
          <NavLink to="/" className="text-white hover:text-gray-300 duration-300 ml-4">Home</NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-300 duration-300 ml-4">About</NavLink>
          <NavLink to="/favorites" className="text-white hover:text-gray-300 duration-300 ml-4">Wishlist</NavLink>
        </div>
        <div className="flex items-center py-3 lg:mt-0 z-10">
          <form onSubmit={handlesearch}>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white rounded-full py-1 px-3 focus:outline-none lg:w-96 shadow-lg focus:shadow-red-200"
              value={searchparam}
              onChange={(e) => setsearchparam(e.target.value)}
            />
          </form>
        </div>
        <div className="hidden sm:flex gap-5 z-10">
          <NavLink to="/sign-in">
            <button className="text-white">
              <FontAwesomeIcon icon={faUser} /> Login
            </button>
          </NavLink>
          <button className="text-white">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed top-20 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-20 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex flex-col space-y-3 mt-20 ml-6">
          <NavLink to="/" className="text-white text-xl hover:text-gray-300 duration-300">Home</NavLink>
          <NavLink to="/about" className="text-white text-xl hover:text-gray-300 duration-300">About</NavLink>
          <NavLink to="/favorites" className="text-white text-xl hover:text-gray-300 duration-300">Wishlist</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
