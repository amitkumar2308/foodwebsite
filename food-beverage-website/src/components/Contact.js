// src/components/ContactUs.js
import React, { useState } from 'react';
import axios from 'axios'; // For sending form data

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData); // Assuming you have a backend endpoint to handle the form submission
      setStatus('Thank you for your inquiry. We will get back to you soon.');
    } catch (error) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <div 
    
    id="contact" className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="text-center mb-8">
        <p className="text-lg">For inquiries, please fill out the form below or reach us directly at:</p>
        <p className="text-xl font-semibold mt-2">Email: thejuniorengineerss@gmail.com</p> {/* Replace with your email */}
        
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg"
        >
          Send Inquiry
        </button>
        {status && <p className="mt-4 text-center text-lg">{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
