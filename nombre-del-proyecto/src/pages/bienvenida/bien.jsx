import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bien.css';
import pixel from '../../assets/image-removebg-preview.png';
import xiaomi from '../../assets/xiaomi.png';
import samsung from '../../assets/samsung.png';
import oppo from '../../assets/oppo.png';
import huawei from '../../assets/huawei.png';

export default function Bienvenida() {
  const navigate = useNavigate(); // Hook para redirigir

  return (
    <div className="techoulet-container">
      <header className="header">
        <div className="logo">
          <h1>TECHOULET</h1>
        </div>
        <button 
          className="btn login-btn"
          onClick={() => navigate('/login')}  // Redirige a la página de Login
        >
          LOG IN
        </button>
      </header>

      <div className="hero-section">
        <div className="hero-content">
          <h2>REFURBISHED PHONES OF SUPERIOR QUALITY</h2>
          <p>Discover our exclusive selection of refurbished phones, backed by an extended warranty and ready for their new owner.</p>
          <div className="hero-buttons">
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/products')}  // Redirige a la página del catálogo de productos
            >
              VIEW CATALOG
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => navigate('/admin')}  // Redirige a la página de administración
            >
              MORE INFORMATION
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={pixel} alt="Premium refurbished phones" />
        </div>
      </div>

      <section className="clients-section">
        <h3>PRESTIGIOUS BRANDS</h3>
        <div className="clients-logos">
          <img src={huawei} alt="Brand 1" />
          <img src={samsung} alt="Brand 2" />
          <img src={xiaomi} alt="Brand 3" />
          <img src={oppo} alt="Brand 4" />
        </div>
      </section>

      <section className="services-section">
        <h2>EXCLUSIVE SERVICES</h2>
        <div className="services-grid">
          <div className="service">
            <h3>PREMIUM EXTENDED WARRANTY</h3>
            <p>Enjoy an extended warranty on all our refurbished devices for complete peace of mind.</p>
          </div>
          <div className="service">
            <h3>CUSTOM TECHNICAL SUPPORT</h3>
            <p>Our expert team is at your disposal to resolve any technical issue or query you may have.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 TECHOULET. All rights reserved.</p> 
      </footer>
    </div>
  );
}
