import React from "react";
import "././Item.css";

function Item(item) {
  return (
    <>
      <h1 className="productsName">{item && item.name}</h1>
      <img
        src={item && item.image}
        className="products"
        alt="...
      "
      />
      <h2>Id del producto: {item && item.id}</h2>
      <h3>Precio por unidad: {item && item.price}</h3>
      <h4>Acerca del producto :</h4> <p>{item && item.des}</p>
    </>
  );
}

export default Item;
