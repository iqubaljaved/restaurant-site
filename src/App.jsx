import React, { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cart, setCart] = useState([]);

  // Mock menu data
  const menuItems = [
    {
      id: 1,
      name: "Kung Pao Chicken",
      description: "Stir-fried chicken with peanuts, vegetables, chili peppers and Chinese spices.",
      price: "$12.99",
      category: "Chinese",
      image: "https://placehold.co/300x200?text=Kung+Pao+Chicken"
    },
    {
      id: 2,
      name: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken pieces, served with naan or rice.",
      price: "$14.99",
      category: "Indian",
      image: " https://placehold.co/300x200?text=Butter+Chicken"
    },
    {
      id: 3,
      name: "Pad Thai",
      description: "Stir-fried rice noodles with shrimp, bean sprouts, egg, and tamarind sauce.",
      price: "$11.99",
      category: "Various",
      image: " https://placehold.co/300x200?text=Pad+Thai"
    },
    {
      id: 4,
      name: "Vegetable Biryani",
      description: "Fragrant basmati rice cooked with mixed vegetables and Indian spices.",
      price: "$10.99",
      category: "Indian",
      image: " https://placehold.co/300x200?text=Vegetable+Biryani"
    }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <svg className="h-8 w-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-800">Global Bites</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button 
                  onClick={() => setActiveSection('home')} 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeSection === 'home' ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => setActiveSection('menu')} 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeSection === 'menu' ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Menu
                </button>
                <button 
                  onClick={() => setActiveSection('order')} 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeSection === 'order' ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Order Online
                </button>
                <button 
                  onClick={() => setActiveSection('contact')} 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeSection === 'contact' ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="flex items-center sm:hidden">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Experience Global Flavors in Every Bite</h1>
              <p className="mt-4 text-lg opacity-90">Discover our fusion of Chinese, Indian, and International cuisine crafted with love and tradition.</p>
              <button 
                onClick={() => setActiveSection('menu')}
                className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded-full shadow hover:bg-gray-100 transition duration-300"
              >
                View Our Menu
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src=" https://placehold.co/600x400?text=Global+Bites" alt="Restaurant food" className="rounded-lg shadow-lg max-w-full h-auto" />
            </div>
          </div>
        </section>
      )}

      {/* Menu Section */}
      {activeSection === 'menu' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                      <span className="text-red-600 font-bold">{item.price}</span>
                    </div>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                    <div className="mt-4 flex items-center">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-red-100 text-red-800">
                        {item.category}
                      </span>
                      <button 
                        onClick={() => addToCart(item)}
                        className="ml-auto px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Order Section */}
      {activeSection === 'order' && (
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Order Online</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Menu List */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Select Your Items</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems.map((item) => (
                    <div key={item.id} className="flex border rounded-lg p-4 hover:shadow-md transition duration-300">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="ml-4 flex-grow">
                        <h4 className="text-lg font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="text-red-600 font-semibold">{item.price}</span>
                          <button 
                            onClick={() => addToCart(item)}
                            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition duration-300"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Summary */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Your Cart ({cart.length})</h3>
                
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  <>
                    <div className="divide-y divide-gray-200">
                      {cart.map((item, index) => (
                        <div key={index} className="py-3 flex justify-between">
                          <span>{item.name}</span>
                          <span className="text-red-600">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span className="text-red-600">
                          ${cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0).toFixed(2)}
                        </span>
                      </div>
                      <button className="mt-4 w-full px-4 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition duration-300">
                        Place Order
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Visit Our Restaurant</h3>
                <p className="text-gray-600 mb-2">123 Flavor Street</p>
                <p className="text-gray-600 mb-2">Foodie Town, FT 10001</p>
                <p className="text-gray-600 mb-6">Open daily from 11:00 AM - 10:00 PM</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
                <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
                <p className="text-gray-600 mb-6">Email: info@globalbites.com</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-red-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12c0 3.26.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24c3.26 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.26-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"></textarea>
                  </div>
                  <button type="submit" className="w-full px-4 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="ml-2 text-lg font-bold">Global Bites</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">Serving global flavors since 2023</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('home')} className="text-gray-400 hover:text-white transition duration-300">Home</button></li>
                <li><button onClick={() => setActiveSection('menu')} className="text-gray-400 hover:text-white transition duration-300">Menu</button></li>
                <li><button onClick={() => setActiveSection('order')} className="text-gray-400 hover:text-white transition duration-300">Order Online</button></li>
                <li><button onClick={() => setActiveSection('contact')} className="text-gray-400 hover:text-white transition duration-300">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Global Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}