import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import { Col } from "react-bootstrap";

function Item(item) {
  return (
    <>
      <Col className="container h-100 ">
        <Link
          to={`/item/${item.id}`}
          className="btn btn-outline-secondary btn-lg btn-block col-md-12 space-around margin-right"
        >
          <Col style={{ color: "white" }}>{item && item.name}</Col>
          <img
            src={item && item.image}
            className="col-md-10 col-sm-10 col-xs-10 col-lg-10"
            alt="..."
          />

          <Col className="precio">Precio por unidad: ${item && item.price}</Col>
        </Link>
      </Col>
    </>
  );
}

export default Item;
