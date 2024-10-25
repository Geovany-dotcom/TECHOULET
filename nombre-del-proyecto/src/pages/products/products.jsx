import React, { useState } from 'react';
import { ShoppingCart, User, ChevronDown } from 'lucide-react';  // Eliminado el icono del corazón
import { Link } from 'react-router-dom';  // Importamos Link para las rutas
import './products.css';
import iphone15 from '../../assets/iphone15.png';
import iphone15ProMax from '../../assets/iphone-15-pro-max.png';
import motorola from '../../assets/motorola a22.png';
import s23 from '../../assets/SAMSUNG GALAXY S23.jpg';
import reno7 from '../../assets/reno7.png';
import xiaomi from '../../assets/xiaomi13.png';
import pixel from '../../assets/pixel 9.png';
import apple from '../../assets/13pro.png';
import samsung from '../../assets/A54.png';

const products = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro 512GB Gold (MQ233)',
    price: '$1437',
    image: iphone15,
  },
  {
    id: 2,
    name: 'Google Pixel 9 128GB (MQ233)',
    price: '$510',
    image: pixel,
  },
  {
    id: 3,
    name: 'Motorola A22 (MQ233)',
    price: '$550',
    image: motorola,
  },
  {
    id: 4,
    name: 'Oppo Reno 7 128GB',
    price: '$1499',
    image: reno7,
  },
  {
    id: 5,
    name: 'Samsung A54 5G 128GB',
    price: '$1399',
    image: samsung,
  },
  {
    id: 6,
    name: 'iPhone 13 Pro Max 128GB Black',
    price: '$1600',
    image: apple,
  },
  {
    id: 7,
    name: 'Xiaomi Redmi Note 13',
    price: '$850',
    image: xiaomi,
  },
  {
    id: 8,
    name: 'Samsung Galaxy S23 5G',
    price: '$1399',
    image: s23,
  },
  {
    id: 9,
    name: 'Apple iPhone 14 Pro 256GB Silver (MQ103)',
    price: '$1399',
    image: iphone15ProMax,
  },
];

const brands = [
  { name: 'Apple', count: 110 },
  { name: 'Samsung', count: 35 },
  { name: 'Xiaomi', count: 68 },
  { name: 'OPPO', count: 44 },
  { name: 'Honor', count: 23 },
  { name: 'Motorola', count: 34 },
];

export default function ProductsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="products-page">
      <header className="navbar">
        <div className="container">
          <h1 className="logo">TECHOULET</h1>
          <nav className="nav">
            <ul>
              <li><Link to="/home" className="active">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>
          <div className="icons">
            <Link to="/cart" className="icon-btn"><ShoppingCart /></Link> {/* Redirige al carrito */}
            <Link to="/profile" className="icon-btn"><User /></Link> {/* Redirige al perfil */}
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Smartphones</h1>
          </div>

          <div className="content-wrapper">
            <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              Filters <ChevronDown />
            </button>
            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
              <div className="filter-brand">
                <h3>Brand</h3>
                <ul>
                  {brands.map((brand) => (
                    <li key={brand.name}>
                      <label className="checkbox-label">
                        <input type="checkbox" />
                        <span className="checkbox-custom"></span>
                        {brand.name} <span className="brand-count">({brand.count})</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="products-section">
              <div className="products-options">
                <p className="products-count">Selected Products: <span>{products.length}</span></p>
                <select className="sort-select">
                  <option value="rating">By rating</option>
                  <option value="price">By price</option>
                </select>
              </div>

              <div className="products-grid">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p className="price">{product.price}</p>
                    <button className="buy-now-btn">Buy Now</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
