// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import OrderFormModal from './components/OrderFormModal';
import Footer from './components/Footer';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header openModal={openModal} />
      <Hero openModal={openModal} />
      <About />
      <Menu />
      <Contact />
      <OrderFormModal isOpen={isModalOpen} onClose={closeModal} />
      <Footer/>
    </div>
  );
};

export default App;
