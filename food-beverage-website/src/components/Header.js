import React, { useState } from 'react';
import OrderFormModal from './OrderFormModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Food & Beverage</h1>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#hero" className="text-gray-700 hover:text-gray-900">Home</a></li>
            <li><a href="#menu" className="text-gray-700 hover:text-gray-900">Menu</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-gray-900">About Us</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>

        <button
          onClick={openModal}
          className="hidden md:block bg-red-500 text-white px-4 py-2 rounded"
        >
          Order Now
        </button>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={toggleNav}
        >
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isNavOpen && (
        <nav className="md:hidden bg-white shadow">
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="#hero" className="text-gray-700 hover:text-gray-900">Home</a></li>
            <li><a href="#menu" className="text-gray-700 hover:text-gray-900">Menu</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-gray-900">About Us</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
            <li>
              <button
                onClick={() => {
                  openModal();
                  toggleNav();
                }}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Order Now
              </button>
            </li>
          </ul>
        </nav>
      )}

      <OrderFormModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;
