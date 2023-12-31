import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contextos/CartContext';

const productos = [
{ id: 1, nombre: 'Buzo Tokio', descripcion: '100% algodon' },
{ id: 2, nombre: 'Remera Pura', descripcion: '100% algodon' },
{ id: 3, nombre: 'Gorra S', descripcion: 'Ajustable' },
{ id: 4, nombre: 'Buzo Alma', descripcion: '100% algodon' }
];

const ItemDetailContainer = () => {
const { itemId } = useParams();
const { addItemToCart } = useCart();
const [producto, setProducto] = useState(null);

useEffect(() => {
    const productoEncontrado = productos.find(producto => producto.id === parseInt(itemId));

    if (productoEncontrado) {
    setProducto(productoEncontrado);
    } else {
    setProducto(null);
    }
}, [itemId]);

if (!producto) {
    return <div>Cargando...</div>;
}

return (
    <div className="detalle">
    <h2>{producto.nombre}</h2>
    <p>{producto.descripcion}</p>
    <button onClick={() => addItemToCart(producto)}>Agregar al Carrito</button>
    </div>
);
};

export default ItemDetailContainer;