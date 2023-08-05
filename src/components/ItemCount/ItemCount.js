import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls d-flex justify-content-center">
        <button className="Button" onClick={decrement}>
          -
        </button>
        <h4 className="Number p-2">{quantity}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>

      <div>
        <button
          className="Button m-2"
          onClick={() => onAdd(quantity)}
          disable={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
