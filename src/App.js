import './App.css';
import MenuItem from './components/MenuItem';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

function App() {
  const [cart, setCart] = useState({});

  const updateCart = (id, count) => {
    setCart((prevCart) => ({ ...prevCart, [id]: count }));
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const [id, count] of Object.entries(cart)) {
      const menuItem = menuItems.find((item) => item.id === parseInt(id));
      subtotal += menuItem.price * count;
    }
    return subtotal.toFixed(2);
  };

  const clearAllItems = () => {
    setCart({});
  };

  const handleOrder = () => {
    const orderItems = Object.entries(cart).map(([id, count]) => {
      const menuItem = menuItems.find((item) => item.id === parseInt(id));
      return `${count} x ${menuItem.title}`;
    });

    const orderSummary = orderItems.length > 0 ? orderItems.join('\n') : 'No items in the cart';

    alert(`Order Summary:\n${orderSummary}\n\nSubtotal: $${calculateSubtotal()}`);
  };

return (
    <div>
      <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN54LMtLyky9MT2M8jUSz3UeqmJ1TutQzLEw&usqp=CAU" alt="" />
      <p className='headline'>Experience Exquisite Food and Dining</p>
      <p className='headline'>Possibly the Greatest Japanese Food Ever</p>
      <div className="menu"></div>
      <div className="menu">
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            id={menuItem.id}
            title={menuItem.title}
            description={menuItem.description}
            imageName={menuItem.imageName}
            price={menuItem.price}
            count={cart[menuItem.id] || 0}
            updateCart={updateCart}
          />
        ))}
      </div>
      <div className="subtotal">
        <p>Subtotal: ${calculateSubtotal()}</p>
      </div>
      <div className="cart-actions">
        <button className="clear-all-button" onClick={clearAllItems}>
          Clear All
        </button>
        <button className="order-button" onClick={handleOrder}>
          Order
        </button>
      </div>
      <div className="order-overview">
        <h2>Order Overview</h2>
        {Object.entries(cart).map(([id, count]) => (
          <div key={id}>
            {menuItems.find((item) => item.id === parseInt(id)).title}: {count}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
