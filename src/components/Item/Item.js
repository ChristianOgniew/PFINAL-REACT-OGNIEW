import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, img, price, stock }) => {
  console.log(img);
  return (
    <article className="CardItem col-md-4">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg img-fluid" />
      </picture>

      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
