import { useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  // Toggle menu visibility
  const MenuStart = () => setIsHidden(!isHidden);

  // Add or remove ".no-scroll" class on the body when the menu is open
  useEffect(() => {
    if (!isHidden) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup to ensure no-scroll is removed on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isHidden]);

  return (
    <header>
      <section className="relative flex justify-between lg:justify-around items-center w-screen h-64H lg:px-0 py-64P bg-white">
        <div className="relative flex gap-8 font-bold text-md ml-16M">
          <img className="w-112W sm:w-128W" src={logo} alt="brand" />
          <ul className="hidden lg:flex items-center gap-8 text-black">
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-gray hover:text-black"
              >
                Features
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-gray hover:text-black"
              >
                Pricing
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-gray hover:text-black"
              >
                Resources
              </button>
            </li>
          </ul>
        </div>

        {/* Accessing the menu - Mobile */}
        <div
          className="relative cursor-pointer w-32W h-32H block lg:hidden mr-16M"
          onClick={MenuStart}
        >
          {/* Hamburger Icon */}
          <FontAwesomeIcon
            icon={faBars}
            alt="burger menu"
            className={`z-10 absolute inset-0 w-full h-full transition-transform transition-opacity duration-300 ${
              isHidden
                ? 'opacity-100 scale-100 rotate-0'
                : 'opacity-0 scale-75 rotate-180 pointer-events-none'
            }`}
          />
          {/* Close (X) Icon */}
          <FontAwesomeIcon
            icon={faTimes}
            alt="close menu"
            className={`absolute z-10 inset-0 w-full h-full transition-transform transition-opacity duration-300 ${
              isHidden
                ? 'opacity-0 scale-75 rotate-180 pointer-events-none'
                : 'opacity-100 scale-100 rotate-0'
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isHidden
              ? 'animate-fadeOut cursor-none -z-10'
              : 'z-50 animate-comeIn'
          } absolute w-[100%] top-2/3 mt-16M mx-auto lg:hidden`}
        >
          <ul
            className={`static rounded-10BR animate-fade translate-x-1/2 flex flex-col justify-start items-center gap-4 font-bold text-white text-lg w-[50dvw] max-w-container-600 max-h-container-600 p-32P bg-very-dark-violet background ${
              isHidden && 'select-none -z-50 absolute left-800I'
            }`}
          >
            <li className="relative cursor-pointer group">
              <button disabled className="cursor-pointer text-white ">
                Features
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button disabled className="cursor-pointer text-white ">
                Pricing
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button disabled className="cursor-pointer text-white ">
                Resources
              </button>
            </li>

            <hr className="w-[40dvw] max-w-container-500 border-solid border-gray border-1 opacity-60" />

            <li className="relative cursor-pointer group">
              <button disabled className="cursor-pointer text-white ">
                Login
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-white bg-cyan rounded-20BR px-16P py-8P hover:opacity-60 w-[40dvw] max-w-container-500"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="relative hidden lg:flex gap-8 font-bold text-md p-16P">
          <ul className="flex items-center gap-8 text-white">
            <li className="relative cursor-pointer group">
              <button className="text-black px-16P py-8P text-gray">
                Login
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button className="text-black text-white bg-cyan rounded-20BR px-16P py-8P hover:opacity-60">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
