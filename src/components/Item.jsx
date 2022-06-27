import React from "react";
import { Link } from "react-router-dom";
import "././Item.css";

function Item(item) {
  return (
    <div className="productcard">
      <div>
        <Link to={`/item/${item.id}`}>
          <h1 className="productsName">{item && item.name}</h1>
          <img src={item && item.image} className="products" alt="..." />
        </Link>
        <h2>Id del producto: {item && item.id}</h2>
        <h3>Precio por unidad: {item && item.price}</h3>
      </div>
    </div>
  );
}

export default Item;
