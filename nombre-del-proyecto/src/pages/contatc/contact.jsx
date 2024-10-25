import React from 'react';
import { ShoppingCart, User } from 'lucide-react';  // Eliminado el icono del corazón
import { Link } from 'react-router-dom';  // Importamos Link para las rutas
import './contact.css';

export default function ContactUs() {
    return (
      <div className="contact-page">
        {/* Navbar */}
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
  
        {/* Contact Page Content */}
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Say something to start a live chat!</p>
            <ul className="contact-details">
              <li><span>📞</span> +1012 3456 789</li>
              <li><span>📧</span> demo@gmail.com</li>
              <li><span>📍</span> 132 Dartmouth Street Boston, Massachusetts 02156 United States</li>
            </ul>
            <div className="social-icons">
              <span>🐦</span> {/* Twitter Icon */}
              <span>📸</span> {/* Instagram Icon */}
              <span>🎥</span> {/* Video/Camera Icon */}
            </div>
          </div>
  
          <div className="contact-form">
            <div className="form-group">
              <div className="form-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone Number" />
              </div>
            </div>
  
            <div className="form-group">
              <label>Select Subject?</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="subject" checked /> General Inquiry
                </label>
                <label>
                  <input type="radio" name="subject" /> General Inquiry
                </label>
                <label>
                  <input type="radio" name="subject" /> General Inquiry
                </label>
              </div>
            </div>
  
            <div className="form-group">
              <textarea placeholder="Write your message..." />
            </div>
  
            <button className="send-message-btn">Send Message</button>
          </div>
        </div>
      </div>
    );
}
