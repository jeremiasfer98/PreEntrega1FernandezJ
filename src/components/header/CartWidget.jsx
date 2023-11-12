// En CartWidget.jsx
import { useCart } from '../contextos/CartContext';

const CartWidget = () => {
  const { cartItems } = useCart();

  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="badge badge-danger">{cartItems.length}</span>
    </div>
  );
};

export default CartWidget;
