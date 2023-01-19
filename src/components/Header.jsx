import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return <header className="text-[#0D0E43] bg-purple-800 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">TailWind</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to={`/`} className="mr-5 text-white hover:text-purple-300 cursor-pointer">Home</Link>
      <Link to={`/`} className="mr-5 text-white hover:text-purple-300 cursor-pointer">Products</Link>
      <Link to={`/`} className="mr-5 text-white hover:text-purple-300 cursor-pointer">Blog</Link>
      <Link to={`/contact`} className="mr-5 text-white hover:text-purple-300 cursor-pointer">Contact</Link>
    </nav>
    <Link to={`https://github.com/jitencodes`} className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-purple-200 rounded text-base mt-4 md:mt-0">Start
     </Link>
  </div>
</header>;
};

export default Header;
