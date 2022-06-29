import React from "react";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

function ItemList({ items }) {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Item
            id={item.id}
            name={item.nombreProducto}
            price={item.price}
            image={item.pictureUrl}
            key={item.id}
            des={item.description}
          />
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
