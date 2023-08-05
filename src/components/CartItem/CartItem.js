import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { img, name, price, quantity } = item;

  return (
    <div className="CartItem row mb-4 p-3 border rounded shadow-sm">
      <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img src={img} alt={name} className="CartItemImg img-fluid" />
      </div>
      <div className="col-md-8 d-flex flex-column justify-content-center">
        <h3>{name}</h3>
        <p className="mb-2">Precio Unitario: ${price}</p>
        <p className="mb-2">Cantidad: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
