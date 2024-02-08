// Header.tsx

import React, { useState } from 'react';
import Link from 'next/link';

interface Page {
  _id: string;
  slug: string;
  title: string;
}

interface HeaderProps {
  title: string;
  pages: Page[];
}

const Header: React.FC<HeaderProps> = ({ title, pages }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 mx-auto my-auto" >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <span className="bg-gradient-to-r from-gray-400 via-teal-300 to-indigo-600 bg-clip-text text-transparent">
            {title}
          </span>
        </Link>

        {/* Always show links on large devices */}
        <nav className="hidden lg:flex items-center space-x-6">
          {pages.map((page) => (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className="text-gray-600 hover:text-gray-800 transition duration-300"
              onClick={closeMenu} // Close menu when link is clicked
            >
              {page.title}
            </Link>
          ))}
        </nav>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-gray-100 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto py-3">
          {isMenuOpen &&
            pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="block py-2 px-4 text-gray-600 hover:text-gray-800 transition duration-300"
                onClick={closeMenu} // Close menu when link is clicked
              >
                {page.title}
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
