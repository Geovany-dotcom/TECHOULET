import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';  // Eliminado el icono de búsqueda
import './home.css';
import iphone15 from '../../assets/iphone15.png';
import iphone15ProMax from '../../assets/iphone-15-pro-max.png';
import motorola from '../../assets/motorola a22.png';
import s23 from '../../assets/SAMSUNG GALAXY S23.jpg';
import playstation from '../../assets/playstation 5.png';
import xbox from '../../assets/xbox.png';

const products = [
  { id: 1, name: 'iPhone Series 13', price: 'RM 3,899', image: iphone15 },
  { id: 2, name: 'iPhone 15 Pro Max', price: 'RM 5,199', image: iphone15ProMax },
  { id: 3, name: 'SAMSUNG GALAXY S23', price: 'RM 3,899', image: s23 },
  { id: 4, name: 'MOTOROLA A22', price: 'RM 599', image: motorola },
];

const HomePage = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['Black', 'Blue', 'White'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-body">
      {/* Header */}
      <header className="home-header">
        <div className="home-container">
          <h1 className="home-logo">TECHOULET</h1>
          <nav className="home-nav">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li> {/* Contact Us permanece */}
            </ul>
          </nav>
          <div className="home-icons">
            <Link to="/cart" className="icon-btn"><ShoppingCart /></Link> {/* Redirige al carrito */}
            <Link to="/profile" className="icon-btn"><User /></Link> {/* Redirige al perfil */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-container home-hero-content">
          <div className="home-hero-text">
            <h2>IPHONE 15</h2>
            <p>Experience the future with our latest iPhone model. Featuring advanced technology and sleek design.</p>
            <div className="home-colors">
              {colors.map((color, index) => (
                <button
                  key={color}
                  className={`home-color-button ${index === currentColorIndex ? 'active' : ''}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setCurrentColorIndex(index)}
                />
              ))}
            </div>
            <button className="home-buy-button">Buy Now</button>
          </div>
          <div className="home-hero-image">
            <img src={iphone15} alt="iPhone 15" />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="home-featured-products">
        <div className="home-container">
          <h2>Featured Products</h2>
          <div className="home-product-grid">
            <div className="home-product-card">
              <img src={playstation} alt="PlayStation 5" />
              <h3>PLAYSTATION 5</h3>
              <p>Experience next-gen gaming</p>
            </div>
            <div className="home-product-card">
              <img src={xbox} alt="Xbox Series X" />
              <h3>XBOX SERIES X</h3>
              <p>Power your dreams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Deals */}
      <section className="home-monthly-deals">
        <div className="home-container">
          <h2>Monthly Deals</h2>
          <div className="home-product-grid">
            {products.map((product) => (
              <div key={product.id} className="home-product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button className="home-add-to-cart-button">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-container">
          <p>TECHOULET - Your one-stop shop for all things tech</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
