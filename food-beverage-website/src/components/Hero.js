import React from 'react';
import photo from '../assets/herobg.jpg';

const Hero = ({ openModal }) => {
  return (
    <section
      id='hero'
      className="relative h-screen text-white flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Savor the Flavors of Quality
        </h2>
        <p className="mt-4 text-xl md:text-3xl font-light">
          Fresh, Delicious, and Delivered Right to Your Doorstep
        </p>
        <button
          onClick={openModal}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full transition-transform transform hover:scale-105"
        >
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
