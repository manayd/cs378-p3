import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, imageName, price, count, updateCart }) => {
  const handleAdd = () => {
    updateCart(id, count + 1);
  };

  const handleRemove = () => {
    if (count > 0) {
      updateCart(id, count - 1);
    }
  };

  return (
        <div class="row">
        <div class="col-md-4 col-xs-12">
          <img src={`./images/${imageName}`} class = "image" alt = "something"></img>
        </div>
        <div class="col-md-8 col-xs-12">
          <h1>{title}</h1>
          <p class="food-description">{description}</p>
          <div className="row">
        <div className="col">
          <p className="price">${price}</p>
        </div>
        <div className="col add">
          <button className="button" onClick={handleRemove}>
             - 
          </button>
          <span className="count">{count}</span>
          <button className="button" onClick={handleAdd}>
             + 
          </button>
        </div>
      </div>
        </div>
      </div>
    );
  };

export default MenuItem;
