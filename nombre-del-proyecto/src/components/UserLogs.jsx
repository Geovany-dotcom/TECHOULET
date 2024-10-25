import React from 'react';
import './UserLogs.css'; // Asegúrate de tener el archivo CSS

const UserLogs = () => {
  // Datos falsos para mostrar productos y su registro de actividad
  const productLogs = [
    { id: 1, productName: 'iPhone 15', action: 'Creado', date: '2024-10-20' },
    { id: 2, productName: 'Samsung Galaxy S23', action: 'Actualizado', date: '2024-10-22' },
    { id: 3, productName: 'Motorola A22', action: 'Eliminado', date: '2024-10-23' },
    { id: 4, productName: 'Xiaomi 13', action: 'Creado', date: '2024-10-21' },
    { id: 5, productName: 'Pixel 9', action: 'Actualizado', date: '2024-10-24' }
  ];

  return (
    <div className="logs-container">
      <h2>Registro de Actividad de Productos</h2>
      <table className="logs-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Producto</th>
            <th>Acción</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {productLogs.map((log) => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.productName}</td>
              <td>{log.action}</td>
              <td>{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserLogs;
