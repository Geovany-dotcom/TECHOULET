import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import ProductsPage from './pages/products/products';
import ContactPage from './pages/contatc/contact';
import LoginPage from './pages/login/login';
import Bienvenida from './pages/bienvenida/bien';
import CartPage from './pages/carrito/carrito';
import ProfilePage from './pages/perfil/perfil';
import AdminPage from './pages/admin/AdminPage'; // Página de Admin

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        
        {/* Ruta general para la página de administración */}
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
