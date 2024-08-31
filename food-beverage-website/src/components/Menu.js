// src/components/Menu.js
import React from 'react';

const Menu = () => {
  const menuItems = [
    { name: 'Spaghetti Carbonara', description: 'Creamy spaghetti with pancetta and parmesan cheese', price: '$12.99', image: '/menu/spaghetti-carbonara.jpg' },
    { name: 'Caesar Salad', description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan', price: '$8.99', image: '/menu/cesar.jpg' },
    { name: 'Margarita Pizza', description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil', price: '$14.99', image: '/menu/margarita-pizza.jpg' },
    { name: 'Grilled Salmon', description: 'Perfectly grilled salmon with lemon and dill sauce', price: '$16.99', image: '/menu/grilled salmon.jpg' },
    { name: 'Penne Arrabbiata', description: 'Penne pasta in a spicy tomato sauce with garlic and chili flakes', price: '$11.99', image: '/menu/Penne Arrabbiata.jpg' },
    { name: 'Vegetable Stir-Fry', description: 'Mixed vegetables stir-fried with soy sauce and garlic', price: '$11.99', image: '/menu/Vegetable Stir-Fry.jpg' },
    { name: 'Chicken Alfredo', description: 'Creamy Alfredo sauce with grilled chicken over fettuccine pasta', price: '$13.99', image: '/menu/chicken.jpg' },
    { name: 'Shrimp Scampi', description: 'Succulent shrimp sautéed in garlic butter and white wine, served over linguine', price: '$15.99', image: '/menu/shrimp.jpg' },
    { name: 'Chocolate Lava Cake', description: 'Rich chocolate cake with a gooey molten center', price: '$6.99', image: '/menu/shake.jpg' },
  ];

  return (
    <section id="menu" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-8">Our Menu</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-red-500 font-bold text-lg">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
