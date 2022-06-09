import React from "react";
import "././ItemDetail.css";

function ItemDetail({ detail }) {
  const result = detail.map((item) => {
    return (
      <>
        {" "}
        <div className="card" style={{ width: "18rem" }} key="5588">
          <img
            src={item.pictureUrl}
            alt={item.nombreProducto}
            className="card-img-top"
            key="5589"
          />
          <div className="card-body" key="5587">
            <p key="5580">{item.description}</p>
            <h3 key="5548">Valor: ${item.price}</h3>
            <p key="5788">stock: {item.stock}</p>
          </div>
        </div>
      </>
    );
  });
  return <>{result}</>;
}

export default ItemDetail;
