import React, { useState } from 'react';
import './PhoneCRUD.css';

const initialPhones = [
  { id: 1, name: 'iPhone 15', price: 999, quantity: 10 },
  { id: 2, name: 'Samsung Galaxy S23', price: 799, quantity: 15 },
  { id: 3, name: 'Motorola A22', price: 499, quantity: 20 },
];

export default function PhoneCRUD() {
  const [phones, setPhones] = useState(initialPhones);
  const [phoneData, setPhoneData] = useState({ id: null, name: '', price: '', quantity: '' });
  const [isEditing, setIsEditing] = useState(false);

  // Maneja el cambio de los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPhoneData({ ...phoneData, [name]: value });
  };

  // Maneja la adición de un nuevo teléfono
  const handleAddPhone = () => {
    const newPhone = {
      id: phones.length + 1,
      name: phoneData.name,
      price: parseFloat(phoneData.price),
      quantity: parseInt(phoneData.quantity, 10),
    };
    setPhones([...phones, newPhone]);
    clearForm();
  };

  // Maneja la selección de un teléfono para editar
  const handleEditPhone = (phone) => {
    setPhoneData(phone);
    setIsEditing(true);
  };

  // Maneja la actualización de un teléfono existente
  const handleUpdatePhone = () => {
    const updatedPhones = phones.map((phone) =>
      phone.id === phoneData.id ? phoneData : phone
    );
    setPhones(updatedPhones);
    clearForm();
  };

  // Maneja la eliminación de un teléfono
  const handleDeletePhone = (id) => {
    const updatedPhones = phones.filter((phone) => phone.id !== id);
    setPhones(updatedPhones);
  };

  // Limpia el formulario y reinicia el estado de edición
  const clearForm = () => {
    setPhoneData({ id: null, name: '', price: '', quantity: '' });
    setIsEditing(false);
  };

  return (
    <div className="phone-crud-container">
      <h2>CRUD de Teléfonos</h2>
      <form className="phone-form">
        <div>
          <label htmlFor="name">Nombre del Teléfono</label>
          <input
            type="text"
            id="name"
            name="name"
            value={phoneData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            id="price"
            name="price"
            value={phoneData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Cantidad</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={phoneData.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-buttons">
          {isEditing ? (
            <button type="button" className="update-btn" onClick={handleUpdatePhone}>
              Actualizar Teléfono
            </button>
          ) : (
            <button type="button" onClick={handleAddPhone}>
              Agregar Teléfono
            </button>
          )}
          <button type="button" onClick={clearForm}>
            Limpiar
          </button>
        </div>
      </form>

      <table className="phone-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {phones.map((phone) => (
            <tr key={phone.id}>
              <td>{phone.id}</td>
              <td>{phone.name}</td>
              <td>${phone.price}</td>
              <td>{phone.quantity}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEditPhone(phone)}>
                  Editar
                </button>
                <button className="delete-btn" onClick={() => handleDeletePhone(phone.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
