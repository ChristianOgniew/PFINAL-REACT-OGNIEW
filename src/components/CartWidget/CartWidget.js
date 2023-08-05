import React, { useContext } from "react";
import cart from "../CartWidget/assets/cart.svg";
import "../CartWidget/CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget">
      <img className="CartImg" src={cart} alt="cart-widget" />
      <span className="CartQuantity text-white">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
