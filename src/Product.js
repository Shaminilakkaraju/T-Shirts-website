import React, { useState } from 'react';
import '../src/Product.css';
import tshirt1 from '../src/images/tshirt1.jpg';
import tshirt2 from '../src/images/tshirt2.jpg';
import tshirt3 from '../src/images/tshirt3.jpg';

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState(tshirt1);
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };


  return (
    <div className="product-container">
      <div className="product-image">
        <img src={selectedColor} alt="Casual T-Shirt" />
      </div>
      <div className="product-details">
        <h2>Casual T-Shirt</h2>
        <p className="price">$15.00</p>
        <p className="discount">30% OFF</p>
        <p className="description">
          Wrangler is an American manufacturer of jeans and other clothing items, particularly workwear.
        </p>
        <div className="size-options">
          <label htmlFor="size">Size:</label>
          <select id="size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div className="color-options">
          <label htmlFor="color">Color:</label>
          <div className="color-buttons">
            <button
              className={`color-btn1 ${selectedColor === tshirt1 ? 'active' : ''}`}
              onClick={() => handleColorChange(tshirt1)}
              style={{ backgroundColor: 'beige', backgroundSize: 'cover' }}
            ></button>
            <button
              className={`color-btn2 ${selectedColor === tshirt2 ? 'active' : ''}`}
              onClick={() => handleColorChange(tshirt2)}
              style={{ backgroundColor: 'skyblue', backgroundSize: 'cover' }}
            ></button>
            <button
              className={`color-btn3 ${selectedColor === tshirt3 ? 'active' : ''}`}
              onClick={() => handleColorChange(tshirt3)}
              style={{ backgroundColor: 'purple', backgroundSize: 'cover' }}
            ></button>
          </div>
        </div>
        <div className="quantity-options">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductPage;