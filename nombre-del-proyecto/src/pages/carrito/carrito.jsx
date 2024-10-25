import React, { useState } from 'react';
import { ShoppingCart, User } from 'lucide-react';
import './carrito.css'; // Archivo CSS para darle estilo al carrito
import Iphone15 from '../../assets/iphone15.png';  // Importamos la imagen del iPhone 15


export default function CarritoPage() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="carrito-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <h1 className="logo">TECHOULET</h1>
          <nav className="nav">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </nav>
          <div className="icons">
            <a href="/carrito" className="icon-btn"><ShoppingCart /></a>
            <a href="/perfil" className="icon-btn"><User /></a>
          </div>
        </div>
      </header>

      {/* Product Section */}
      <main className="carrito-main">
        <div className="product-container">
          <div className="product-image-section">
            <img src={Iphone15} alt="iPhone 15" className="main-product-image" />
          </div>

          <div className="product-details-section">
            <h2>iPhone 15 Pro Max</h2>
            <p>6.7-inch, 128GB - Space Black</p>
            <p className="product-price">$1199 <span className="discount-percentage">15% OFF</span></p>

            <div className="product-options">
              <div className="option">
                <label>Color:</label>
                <div className="color-selector">
                  <button className="color-option" style={{ backgroundColor: '#333' }}></button>
                  <button className="color-option" style={{ backgroundColor: '#FFF' }}></button>
                </div>
              </div>

              <div className="option">
                <label>Memory:</label>
                <select>
                  <option>128GB</option>
                  <option>256GB</option>
                </select>
              </div>
            </div>

            <div className="quantity-selector">
              <button className="quantity-btn" onClick={() => handleQuantityChange('decrease')}>-</button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-btn" onClick={() => handleQuantityChange('increase')}>+</button>
            </div>

            <div className="action-buttons">
              <button className="buy-now-btn">Buy Now</button>
            </div>

            <div className="checkout-info">
              <p>100% Guarantee Safe Checkout</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
