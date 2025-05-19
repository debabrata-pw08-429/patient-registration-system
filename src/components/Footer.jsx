import React from 'react';
import NavLinks from './NavLinks';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700 w-full">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-4 sm:space-x-6 md:order-2">
          <NavLinks className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors" />
        </div>
        <div className="mt-6 md:mt-0 md:order-1">
          <p className="text-center text-sm sm:text-base text-gray-300">&copy; {currentYear} MediSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 