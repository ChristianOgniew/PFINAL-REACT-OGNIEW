import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1> No hay items en el carrito </h1>
        <Link to="/" className="Option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="CartContainer">
      <div className="CartItemsContainer">
        {cart.map((p) => (
          <CartItem key={p.id} item={p} />
        ))}
      </div>

      <div className="CartSummary">
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="Button">
          Limpiar Carrito
        </button>
        <Link to="/checkout" className="Option">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
