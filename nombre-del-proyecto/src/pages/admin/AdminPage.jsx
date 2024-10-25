import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SidebarAdmin from '../../components/SidebarAdmin';  // Mantén solo el Sidebar importado
import UserList from '../../components/UserList';          // Importamos la lista de usuarios
import MostPurchased from '../../components/MostPurchased'; // Importamos los artículos más comprados
import PhoneCRUD from '../../components/PhoneCRUD';        // Importamos el CRUD de teléfonos
import UserLogs from '../../components/UserLogs';          // Importamos el registro de usuarios
import './AdminPage.css';  // Ruta correcta para el archivo CSS

const AdminPage = () => {
  const location = useLocation(); // Hook para obtener la ruta actual

  const isDashboard = location.pathname === '/admin'; // Verifica si estás en el dashboard principal

  return (
    <div className="admin-page">
      <SidebarAdmin />  {/* Sidebar importada correctamente */}

      <div className="admin-content">
        {/* Solo muestra el encabezado y las estadísticas si estás en el dashboard */}
        {isDashboard && (
          <>
            <h1 className="admin-header">Panel de Administración</h1>
            {/* Sección de estadísticas rápidas */}
            <div className="quick-stats">
              <div className="stat-card">
                <h3>Usuarios Registrados</h3>
                <p>2,340</p>
              </div>
              <div className="stat-card">
                <h3>Productos Vendidos</h3>
                <p>1,254</p>
              </div>
              <div className="stat-card">
                <h3>Ingresos Totales</h3>
                <p>$53,450</p>
              </div>
              <div className="stat-card">
                <h3>Comentarios Recibidos</h3>
                <p>234</p>
              </div>
            </div>
          </>
        )}

        {/* Rutas para las diferentes secciones */}
        <Routes>
          <Route path="users" element={<UserList />} />
          <Route path="most-purchased" element={<MostPurchased />} />
          <Route path="phones" element={<PhoneCRUD />} />
          <Route path="logs" element={<UserLogs />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
