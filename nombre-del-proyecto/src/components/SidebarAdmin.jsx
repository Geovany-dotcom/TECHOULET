import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarAdmin.css';  // Importamos el CSS para el Sidebar

const SidebarAdmin = () => {
  return (
    <aside className="sidebar-admin">
      <div className="sidebar-header">
        <h2>Admin Panel</h2> {/* Encabezado del sidebar */}
      </div>
      <nav>
        <ul>
          <li>
            {/* Enlace al Dashboard principal */}
            <Link to="/admin" className="sidebar-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="sidebar-link">
              Lista de Usuarios
            </Link>
          </li>
          <li>
            <Link to="/admin/most-purchased" className="sidebar-link">
              Artículos más Comprados
            </Link>
          </li>
          <li>
            <Link to="/admin/phones" className="sidebar-link">
              CRUD de Teléfonos
            </Link>
          </li>
          <li>
            <Link to="/admin/logs" className="sidebar-link">
              Lista de productos
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
