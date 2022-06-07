import React from "react";
import "././ItemDetail.css";

function ItemDetail({ detail }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={detail.pictureUrl}
          alt={detail.nombreProducto}
          className="card-img-top"
        />
        <div className="card-body">
          <p>{detail.description}</p>
          <h3>Valor: ${detail.price}</h3>
          <p>stock: {detail.stock}</p>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
