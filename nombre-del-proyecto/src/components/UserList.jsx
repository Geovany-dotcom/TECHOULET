import React from 'react';
import SidebarAdmin from './SidebarAdmin'; // Importamos el SidebarAdmin
import './UserList.css'; // Importamos el CSS para darle estilo

export default function UserList() {
  const usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com', rol: 'Administrador' },
    { id: 2, nombre: 'María López', email: 'maria.lopez@example.com', rol: 'Cliente' },
    { id: 3, nombre: 'Carlos Sánchez', email: 'carlos.sanchez@example.com', rol: 'Cliente' },
    // Agrega más usuarios aquí si lo necesitas
  ];

  return (
    <div className="admin-page">
      <SidebarAdmin /> {/* Sidebar */}
      
      <div className="admin-content">
        <h2 className="admin-header">Lista de Usuarios</h2>
        
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
