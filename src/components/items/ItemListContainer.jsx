import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../contextos/CartContext';

const productos = [
{ id: 1, nombre: 'Buzo Tokio', descripcion: '100% algodon', categoria: 'buzos' },
{ id: 2, nombre: 'Remera Pura', descripcion: '100% algodon', categoria: 'remeras' },
{ id: 3, nombre: 'Gorra S', descripcion: 'Gorras Tuckers', categoria: 'gorros' },
{ id: 4, nombre: 'Buzo Alma', descripcion: '100% algodon', categoria: 'buzos' }
];

const ItemListContainer = () => {
const { categoria } = useParams();
const { addItemToCart } = useCart();
const productosFiltrados = categoria ? productos.filter(producto => producto.categoria === categoria) : productos;

return (
    <div className="item-list">
    <h2>Productos</h2>
    <ul>
        {productosFiltrados.map(producto => (
        <div key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <Link to={`/item/${producto.id}`}>Más Información</Link>
            <button onClick={() => addItemToCart(producto)}>Comprar</button>
        </div>
        ))}
    </ul>
    </div>
);
};

export default ItemListContainer;
