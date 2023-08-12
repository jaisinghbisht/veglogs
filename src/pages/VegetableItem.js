import React, { useState } from "react";

const VegetableItem = ({ image, name, price, handleAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = (name, price, isAdded) => {
    handleAddToCart(name, price);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      // Add the "Added to Cart" message to the DOM
      const messageElement = document.getElementById("added-to-cart-message");
      messageElement.innerHTML = `Added ${name} to cart`;
    }, 2000); // Display the message for 2 seconds
  };

  return (
    <div className="item">
      <img src={image} alt={name} />
      <div className="item-details">
        <h3>{name}</h3>
        <p className="price">{price}</p>
        <label htmlFor={`quantity_${name}`}>Quantity:</label>
        <select id={`quantity_${name}`}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button
          className="add-to-cart"
          onClick={() => handleAddToCart(name, price)}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default VegetableItem;
