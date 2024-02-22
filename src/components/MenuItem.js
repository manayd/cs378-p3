import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import '/Users/manaydivatia/Downloads/cs378-p2/src/App.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div class="row">
        <div class="col-md-4 col-xs-12">
          <img src={`./images/${imageName}`} class = "image" alt = "something"></img>
        </div>
        <div class="col-md-8 col-xs-12">
          <h1>{title}</h1>
          <p class="food-description">{description}</p>
          <div class="row">
            <div class="col">
              <p class="price">${price}</p>
            </div>
            <div class="col add">
              <button class ='button'>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default MenuItem;
