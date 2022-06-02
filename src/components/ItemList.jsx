import React from "react";
import Item from "./Item";

function ItemList({ items }) {
  return items.map((item) => (
    <Item
      id={item.id}
      name={item.nombreProducto}
      price={item.price}
      image={item.pictureUrl}
      key={item.id}
      des={item.description}
    />
  ));
}

export default ItemList;
