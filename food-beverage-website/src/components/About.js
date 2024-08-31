// src/components/About.js
import React from 'react';
import { FaRegClock, FaStar, FaPeopleCarry } from 'react-icons/fa';
import aboutpic from '../assets/about.jpg';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-8">About Us</h3>
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-gray-700 text-lg text-center md:text-left">
              We are passionate about delivering an exceptional dining experience with a commitment to quality. Our culinary team meticulously crafts every dish using only the finest ingredients, ensuring each meal is a taste of excellence.
            </p>
            <p className="text-gray-700 text-lg text-center md:text-left mt-6">
              With years of experience in the food industry, we strive to exceed your expectations. Our goal is to provide a warm and inviting atmosphere where you can enjoy delicious food with family and friends.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src={aboutpic}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-semibold mb-6">Our Values</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaStar className="text-red-500 text-4xl mb-4 mx-auto" />
              <h5 className="text-xl font-semibold mb-2">Quality Ingredients</h5>
              <p className="text-gray-600">
                We use only the best ingredients to ensure every bite is packed with flavor and freshness.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaRegClock className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h5 className="text-xl font-semibold mb-2">Exceptional Service</h5>
              <p className="text-gray-600">
                Our team is dedicated to providing you with prompt and friendly service to make your visit enjoyable.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaPeopleCarry className="text-green-500 text-4xl mb-4 mx-auto" />
              <h5 className="text-xl font-semibold mb-2">Welcoming Atmosphere</h5>
              <p className="text-gray-600">
                Experience a warm and inviting environment that makes you feel right at home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
