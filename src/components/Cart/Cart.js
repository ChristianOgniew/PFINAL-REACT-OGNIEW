// import React, { useContext } from "react";
// import "./Cart.css";
// import { CartContext } from "../../context/CartContext";
// import CartItem from "../CartItem/CartItem";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cart, clearCart, totalQuantity } = useContext(CartContext);

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   if (totalQuantity === 0) {
//     return (
//       <div>
//         <h1> No hay items en el carrito </h1>
//         <Link to="/" className="Option">
//           Productos
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="CartContainer">
//       <div className="CartItemsContainer">
//         {cart.map((p) => (
//           <CartItem key={p.id} item={p} />
//         ))}
//       </div>

//       <div className="CartSummary">
//         <h3>Total: ${total}</h3>
//         <button onClick={() => clearCart()} className="Button">
//           Limpiar Carrito
//         </button>
//         <Link to="/checkout" className="Option">
//           Checkout
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Cart;
////////////////// con form /////////////////
import React, { useContext, useState } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    mail: "",
  });

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // aca podemos hacer lo que querramos con la info de los datos

    console.log(formData);
  };

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
      <button onClick={() => clearCart()} className="btn-limpiar">
        Limpiar Carrito
      </button>
      <div className="CartForm">
        <h3>Completa tus datos</h3>
        <form onSubmit={handleSubmit}>
          <div className="FormInput">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="FormInput">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="FormInput">
            <label htmlFor="mail">E-Mail</label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleInputChange}
              required
            />
          </div>
        </form>
      </div>

      <div className="CartSummary">
        <h3>Total: ${total}</h3>

        <Link to="/checkout" className="Option">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
