import React from 'react';
import './MostPurchased.css'; // Agrega el archivo CSS para darle estilo
// Importamos las imágenes de los productos
import iphone15 from '../assets/iphone15.png';
import iphone15ProMax from '../assets/iphone-15-pro-max.png';
import motorola from '../assets/motorola a22.png';
import s23 from '../assets/SAMSUNG GALAXY S23.jpg';
import reno7 from '../assets/reno7.png';
import xiaomi from '../assets/xiaomi13.png';

const items = [
  {
    id: 1,
    name: 'iPhone 15',
    image: iphone15,
    sold: 2000,
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    image: iphone15ProMax,
    sold: 1800,
  },
  {
    id: 3,
    name: 'Motorola A22',
    image: motorola,
    sold: 1500,
  },
  {
    id: 4,
    name: 'Samsung Galaxy S23',
    image: s23,
    sold: 1400,
  },
  {
    id: 5,
    name: 'Oppo Reno 7',
    image: reno7,
    sold: 1200,
  },
  {
    id: 6,
    name: 'Xiaomi 13',
    image: xiaomi,
    sold: 1100,
  },
];

export default function MostPurchased() {
  return (
    <div className="most-purchased-container">
      <h2>Artículos más Comprados</h2>

      <table className="most-purchased-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre del Artículo</th>
            <th>Vendidos</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt={item.name} className="item-image" />
              </td>
              <td>{item.name}</td>
              <td>{item.sold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
